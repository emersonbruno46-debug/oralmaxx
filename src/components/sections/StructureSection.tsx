import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { STRUCTURE_RENDER, STRUCTURE_TOUR } from '../../data/oralmaxxData';
import { EASE, Reveal, SplitWords } from '../../lib/motion';

const RATIO = 3 / 2; // proporção da foto real (5184 x 3456)
const DWELL = 0.07; // "pausa" de cada parada, em fração do progresso

/** Tamanho do palco: sempre cobre a tela, mantendo a proporção da foto */
function useStageSize() {
  const [size, setSize] = useState({ w: 1440, h: 960 });
  useEffect(() => {
    const measure = () => {
      const w = Math.max(window.innerWidth, window.innerHeight * RATIO);
      setSize({ w, h: w / RATIO });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);
  return size;
}

const Tour: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { w, h } = useStageSize();
  const n = STRUCTURE_TOUR.length;

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.5 });

  // keyframes com pausa em cada parada
  const input: number[] = [];
  const xs: number[] = [];
  const ys: number[] = [];
  const ss: number[] = [];
  STRUCTURE_TOUR.forEach((stop, i) => {
    const t = i / (n - 1);
    const x = -stop.scale * (stop.x - 0.5) * w;
    const y = -stop.scale * (stop.y - 0.5) * h;
    [Math.max(0, t - DWELL), Math.min(1, t + DWELL)].forEach((p) => {
      if (input.length && p <= input[input.length - 1]) return;
      input.push(p);
      xs.push(x);
      ys.push(y);
      ss.push(stop.scale);
    });
  });

  const x = useTransform(smooth, input, xs);
  const y = useTransform(smooth, input, ys);
  const scale = useTransform(smooth, input, ss);

  useMotionValueEvent(scrollYProgress, 'change', (p) => setActive(Math.min(n - 1, Math.max(0, Math.round(p * (n - 1))))));

  const stop = STRUCTURE_TOUR[active];

  return (
    <div ref={ref} className="relative" style={{ height: `${n * 110}vh` }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-brand-navy-deep">
        <motion.img
          src="/images/clinica-tour.webp"
          alt="Fachada da Clínica OralMaxx"
          loading="lazy"
          draggable={false}
          className="absolute max-w-none select-none"
          style={{
            width: w,
            height: h,
            left: `calc(50% - ${w / 2}px)`,
            top: `calc(50% - ${h / 2}px)`,
            x,
            y,
            scale,
            willChange: 'transform',
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-navy-deep/90 to-transparent" aria-hidden="true" />

        {/* legenda da parada */}
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1360px] px-5 pb-10 sm:px-8 lg:px-12 lg:pb-14">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-lg text-white">
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <h3 className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-5xl">{stop.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80 sm:text-base">{stop.description}</p>
              </motion.div>
            </div>
            <div className="hidden shrink-0 flex-col items-end gap-3 sm:flex" aria-hidden="true">
              <div className="flex gap-2">
                {STRUCTURE_TOUR.map((s, i) => (
                  <span
                    key={s.id}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? 'w-10 bg-brand-blue' : 'w-4 bg-white/35'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-white/60">Role para explorar a fachada</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Alternativa estática (movimento reduzido) */
const StaticGrid: React.FC = () => (
  <div className="mx-auto grid max-w-[1360px] gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:px-12">
    {STRUCTURE_TOUR.map((s) => (
      <figure key={s.id} className="relative overflow-hidden rounded-[26px] bg-brand-blue-soft">
        <img src={s.imageUrl} alt={s.title} loading="lazy" className="aspect-[16/10] w-full object-cover" />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-deep/85 to-transparent p-5 pt-14 text-white">
          <span className="block font-serif text-xl">{s.title}</span>
          <span className="mt-1 block text-sm text-white/80">{s.description}</span>
        </figcaption>
      </figure>
    ))}
  </div>
);

export const StructureSection: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section id="estrutura" className="bg-white pt-24 sm:pt-32 lg:pt-40" aria-labelledby="structure-heading">
      <div className="mx-auto mb-12 grid max-w-[1360px] gap-6 px-5 sm:px-8 lg:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-12">
        <h2 id="structure-heading" className="section-headline text-brand-navy-dark">
          <SplitWords text="Um ambiente pensado para receber você." />
        </h2>
        <Reveal>
          <p className="max-w-md text-[17px] leading-relaxed text-ink-secondary">
            Conheça de perto os ambientes da OralMaxx e o espaço onde começa a sua experiência de cuidado, combinando arquitetura
            contemporânea e conveniência clínica.
          </p>
        </Reveal>
      </div>

      {reduce ? <StaticGrid /> : <Tour />}

      <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <Reveal>
          <figure className="relative overflow-hidden rounded-[30px] bg-brand-blue-soft">
            <img
              src={STRUCTURE_RENDER.imageUrl}
              alt={STRUCTURE_RENDER.title}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover sm:aspect-[21/9]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-deep/85 to-transparent p-6 pt-20 text-white sm:p-8">
              <span className="block font-serif text-2xl sm:text-3xl">{STRUCTURE_RENDER.title}</span>
              <span className="mt-1 block max-w-lg text-sm text-white/80 sm:text-base">{STRUCTURE_RENDER.description}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
};
