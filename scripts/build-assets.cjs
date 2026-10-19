/**
 * OralMaxx — pipeline de assets
 * -------------------------------------------------------------
 * Gera as imagens otimizadas do site a partir dos arquivos em /assets-src.
 *
 * Fachada (hero):
 *  - A foto ultrawide original (1024x341) tem enquadramento vertical muito justo.
 *  - A composição aprovada (referência) precisa de mais céu e rua ao redor do prédio.
 *  - Por isso: uma "placa" de extensão (céu/rua/árvores) é usada SOMENTE como fundo,
 *    e os pixels ORIGINAIS da fachada são recolocados por cima em escala uniforme
 *    (sem distorção), com borda suavizada. A arquitetura, a placa de madeira e os
 *    logotipos visíveis vêm 100% da foto original.
 *
 *  Executar:  node scripts/build-assets.cjs
 *  (requer `sharp`, disponível em node_modules da raiz do repositório)
 */
const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch {
  sharp = require(path.join(__dirname, '..', '..', 'node_modules', 'sharp'));
}

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'assets-src');
const OUT_IMG = path.join(ROOT, 'public', 'images');
const OUT_BRAND = path.join(ROOT, 'public', 'brand');
fs.mkdirSync(OUT_IMG, { recursive: true });
fs.mkdirSync(OUT_BRAND, { recursive: true });

const ORIGINAL = path.join(SRC, 'fachada-ultrawide-original.png'); // 1024x341
const PLATE = path.join(SRC, 'fachada-extensao-ceu-rua.jpg'); // 1376x768 (somente céu/rua)

// Pontos de referência do prédio (medidos manualmente em cada imagem)
// original: borda esq. parede branca, borda dir. torre "Radiologia", topo da caixa cinza, base na calçada
const O = { left: 207, right: 748, top: 13, base: 308, w: 1024, h: 341 };
const P = { left: 283, right: 1015, top: 192, base: 622, w: 1376, h: 768 };

const CANVAS = { w: 1920, h: 1080 };
// Composição desejada (igual à referência): prédio entre ~32% e ~88% da largura, topo a ~25.5% da altura
const TARGET_LEFT = Math.round(CANVAS.w * 0.32);
const TARGET_RIGHT = Math.round(CANVAS.w * 0.88);
const TARGET_TOP = Math.round(CANVAS.h * 0.255);

async function buildHeroComposite() {
  const s = (TARGET_RIGHT - TARGET_LEFT) / (O.right - O.left); // escala uniforme da foto original
  const ox = Math.round(TARGET_LEFT - O.left * s);
  const oy = Math.round(TARGET_TOP - O.top * s);
  const ow = Math.round(O.w * s);
  const oh = Math.round(O.h * s);

  // Placa de extensão: escala não-uniforme (apenas céu/rua/vegetação) para alinhar ao prédio original
  const bLeft = O.left * s + ox;
  const bRight = O.right * s + ox;
  const bTop = O.top * s + oy;
  const bBase = O.base * s + oy;
  const kx = (bRight - bLeft) / (P.right - P.left);
  const ky = (bBase - bTop) / (P.base - P.top);
  const px = Math.round(bLeft - P.left * kx);
  const py = Math.round(bTop - P.top * ky);
  const pw = Math.round(P.w * kx);
  const ph = Math.round(P.h * ky);

  const extLeft = Math.max(0, px);
  const extTop = Math.max(0, py);
  const extRight = Math.max(0, CANVAS.w - (px + pw));
  const extBottom = Math.max(0, CANVAS.h - (py + ph));

  const plateResized = await sharp(PLATE).resize(pw, ph, { fit: 'fill', kernel: 'lanczos3' }).toBuffer();
  const plateExtended = await sharp(plateResized)
    .extend({ left: extLeft, top: extTop, right: extRight, bottom: extBottom, extendWith: 'mirror' })
    .toBuffer({ resolveWithObject: true });
  const base = await sharp(plateExtended.data)
    .extract({
      left: Math.max(0, -px),
      top: Math.max(0, -py),
      width: CANVAS.w,
      height: CANVAS.h,
    })
    .removeAlpha()
    .toBuffer();

  // Foto original escalada uniformemente
  const origScaled = await sharp(ORIGINAL)
    .resize(ow, oh, { kernel: 'lanczos3' })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Recorte da parte que cai dentro do canvas
  const cropLeft = Math.max(0, -ox);
  const cropTop = Math.max(0, -oy);
  const cw = Math.min(ow - cropLeft, CANVAS.w - Math.max(0, ox));
  const ch = Math.min(oh - cropTop, CANVAS.h - Math.max(0, oy));

  const FEATHER_LEFT = 90;
  const FEATHER_TOP = Math.max(8, Math.round(O.top * s * 0.9)); // dentro da faixa de céu acima do prédio
  const FEATHER_BOTTOM = 70;
  const { data, info } = origScaled;
  const out = Buffer.alloc(cw * ch * 4);
  for (let y = 0; y < ch; y++) {
    const sy = y + cropTop;
    for (let x = 0; x < cw; x++) {
      const sx = x + cropLeft;
      const si = (sy * info.width + sx) * 4;
      const di = (y * cw + x) * 4;
      const aLeft = Math.min(1, sx / FEATHER_LEFT);
      const aTop = Math.min(1, sy / FEATHER_TOP);
      const aBottom = Math.min(1, (oh - 1 - sy) / FEATHER_BOTTOM);
      const smooth = (t) => t * t * (3 - 2 * t);
      const a = smooth(Math.max(0, Math.min(aLeft, aTop, aBottom)));
      out[di] = data[si];
      out[di + 1] = data[si + 1];
      out[di + 2] = data[si + 2];
      out[di + 3] = Math.round(data[si + 3] * a);
    }
  }

  const overlay = await sharp(out, { raw: { width: cw, height: ch, channels: 4 } }).png().toBuffer();
  const composite = await sharp(base)
    .composite([{ input: overlay, left: Math.max(0, ox), top: Math.max(0, oy) }])
    .toBuffer();

  // Leve tratamento: nitidez suave para compensar o upscale da foto original
  const master = await sharp(composite).sharpen({ sigma: 0.8, m1: 0.6, m2: 1.2 }).png().toBuffer();
  await sharp(master).toFile(path.join(SRC, 'fachada-hero-master.png'));

  console.log('Hero composite', { s: s.toFixed(3), ox, oy, ow, oh, kx: kx.toFixed(3), ky: ky.toFixed(3), px, py });
  return master;
}

async function exportHero(master) {
  const widths = [1920, 1440, 1024];
  for (const w of widths) {
    const h = Math.round((w / CANVAS.w) * CANVAS.h);
    await sharp(master).resize(w, h).webp({ quality: 80, effort: 6 }).toFile(path.join(OUT_IMG, `fachada-hero-${w}.webp`));
    await sharp(master).resize(w, h).avif({ quality: 55, effort: 5 }).toFile(path.join(OUT_IMG, `fachada-hero-${w}.avif`));
  }

  // Versão mobile: recorte centrado no prédio (sem alterar arquitetura)
  const mobileCrop = { left: 520, top: 170, width: 1260, height: 860 };
  for (const w of [900, 640]) {
    const h = Math.round((w / mobileCrop.width) * mobileCrop.height);
    const pipeline = () => sharp(master).extract(mobileCrop).resize(w, h);
    await pipeline().webp({ quality: 80, effort: 6 }).toFile(path.join(OUT_IMG, `fachada-hero-mobile-${w}.webp`));
    await pipeline().avif({ quality: 55, effort: 5 }).toFile(path.join(OUT_IMG, `fachada-hero-mobile-${w}.avif`));
  }

  // Detalhes da fachada (recortes da foto ORIGINAL, sem extensão)
  const detail = (name, box, w) =>
    sharp(ORIGINAL)
      .extract(box)
      .resize(w)
      .sharpen({ sigma: 0.6 })
      .webp({ quality: 82 })
      .toFile(path.join(OUT_IMG, name));
  await detail('fachada-placa.webp', { left: 330, top: 70, width: 330, height: 240 }, 900); // placa de madeira
  await detail('fachada-radiologia.webp', { left: 600, top: 40, width: 190, height: 270 }, 700); // torre de vidro / Radiologia
  await detail('fachada-entrada.webp', { left: 455, top: 150, width: 240, height: 165 }, 900); // entrada
  await sharp(ORIGINAL).webp({ quality: 82 }).toFile(path.join(OUT_IMG, 'fachada-ultrawide.webp'));

  // Open Graph 1200x630
  await sharp(master)
    .extract({ left: 260, top: 120, width: 1660, height: 872 })
    .resize(1200, 630)
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OUT_IMG, 'og-oralmaxx.jpg'));
}

async function exportBrand() {
  const svg = fs.readFileSync(path.join(SRC, 'logo-oralmaxx-original.svg'), 'utf8');

  // Logo principal: remove dimensões fixas (mm) para escalar via CSS. Cores e formas preservadas.
  const clean = svg
    .replace(/<\?xml[^>]*>\s*/, '')
    .replace(/<!DOCTYPE[^>]*>\s*/, '')
    .replace(/<!--[^>]*-->\s*/, '')
    .replace(/ width="280mm" height="51mm"/, '')
    .replace(/<metadata[^>]*\/>/, '');
  fs.writeFileSync(path.join(OUT_BRAND, 'oralmaxx-logo.svg'), clean);

  // Versão para fundos escuros (aplicação negativa): azul-marinho -> branco, cinza -> cinza-claro
  const negative = clean
    .replace('.fil4 {fill:#848688}', '.fil4 {fill:#C9D2DB}')
    .replace('.fil2 {fill:#848688;fill-rule:nonzero}', '.fil2 {fill:#C9D2DB;fill-rule:nonzero}')
    .replace('.fil0 {fill:#2B4A68;fill-rule:nonzero}', '.fil0 {fill:#FFFFFF;fill-rule:nonzero}')
    .replace('.fil1 {fill:#6FABDD;fill-rule:nonzero}', '.fil1 {fill:#7DBDF0;fill-rule:nonzero}')
    .replace('.fil5 {fill:#6FABDD;fill-rule:nonzero}', '.fil5 {fill:#7DBDF0;fill-rule:nonzero}');
  fs.writeFileSync(path.join(OUT_BRAND, 'oralmaxx-logo-negativo.svg'), negative);

  // Símbolo isolado (para favicon e grafismos): mantém apenas os paths do símbolo
  const symbolPaths = [...clean.matchAll(/<path class="fil(4|5)"[^>]*\/>/g)].map((m) => m[0]).join('\n');
  const style = clean.match(/<style[\s\S]*?<\/style>/)[0];
  const rawSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6000 5100"><defs>${style}</defs>${symbolPaths}</svg>`;
  const { info } = await sharp(Buffer.from(rawSymbol), { density: 72 }).trim().toBuffer({ resolveWithObject: true });
  const vx = -info.trimOffsetLeft;
  const vy = -info.trimOffsetTop;
  const pad = 120;
  const size = Math.max(info.width, info.height) + pad * 2;
  const cx = vx + info.width / 2;
  const cy = vy + info.height / 2;
  const viewBox = `${Math.round(cx - size / 2)} ${Math.round(cy - size / 2)} ${size} ${size}`;
  const symbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"><defs>${style}</defs>${symbolPaths}</svg>`;
  fs.writeFileSync(path.join(OUT_BRAND, 'oralmaxx-simbolo.svg'), symbol);

  // Favicons
  const favSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="${viewBox}"><rect x="${Math.round(cx - size / 2)}" y="${Math.round(cy - size / 2)}" width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="#FFFFFF"/><defs>${style}</defs>${symbolPaths}</svg>`;
  fs.writeFileSync(path.join(ROOT, 'public', 'favicon.svg'), favSvg);
  await sharp(Buffer.from(favSvg)).resize(180, 180).png().toFile(path.join(ROOT, 'public', 'apple-touch-icon.png'));
  await sharp(Buffer.from(favSvg)).resize(32, 32).png().toFile(path.join(ROOT, 'public', 'favicon-32.png'));
  console.log('Brand assets ok', { viewBox });
}

(async () => {
  const master = await buildHeroComposite();
  await exportHero(master);
  await exportBrand();
  console.log('Assets gerados em public/images e public/brand');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
