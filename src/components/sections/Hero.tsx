import React, { useEffect, useRef } from 'react';
import { animate, motion, useMotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ScanLine, ShieldCheck } from 'lucide-react';
import { ORALMAXX_CONFIG, SPECIALTIES, getWhatsAppUrl } from '../../data/oralmaxxData';
import { EASE, SplitWords } from '../../lib/motion';
import { WhatsAppIcon } from '../ui/Icons';

const Marquee: React.FC = () => {
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {SPECIALTIES.map((s) => (
        <React.Fragment key={s}>
          <span className="px-7 font-serif text-[1.65rem] italic tracking-tight sm:text-[2.1rem]">{s}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <div
      className="group relative z-10 overflow-hidden bg-brand-navy-deep py-5 text-white select-none"
      role="group"
      aria-label={SPECIALTIES.join(', ')}
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
};

const GlassCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-brand-navy-deep/60 px-4 py-3 text-white backdrop-blur-md">
    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15">{icon}</span>
    <span className="leading-tight">
      <span className="block text-[13px] font-semibold">{title}</span>
      <span className="block text-xs text-white/70">{text}</span>
    </span>
  </div>
);

const Photo: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <picture className="contents">
    <source media="(max-width: 767px)" srcSet="/images/clinica-hero-mobile.webp" />
    <img
      src="/images/clinica-hero-2000.webp"
      srcSet="/images/clinica-hero-1000.webp 1000w, /images/clinica-hero-2000.webp 2000w"
      sizes="100vw"
      alt=""
      className={`absolute inset-0 h-full w-full object-cover object-[60%_50%] ${className}`}
      style={style}
    />
  </picture>
);

export const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const copyY = useTransform(scrollYProgress, [0, 1], ['0px', '70px']);
  const { technicalDirector } = ORALMAXX_CONFIG.brand;

  // "Varredura de raio-X": a foto nasce em tom radiográfico e a cor é revelada por uma linha de luz
  const scan = useMotionValue(reduce ? 1 : 0);
  useEffect(() => {
    if (reduce) return;
    const controls = animate(scan, 1, { duration: 2.6, ease: [0.65, 0, 0.35, 1], delay: 0.35 });
    return () => controls.stop();
  }, [reduce, scan]);
  const colorClip = useTransform(scan, (v) => `inset(0 ${(1 - v) * 100}% 0 0)`);
  const lineLeft = useTransform(scan, (v) => `${v * 100}%`);
  const lineOpacity = useTransform(scan, [0, 0.04, 0.96, 1], [0, 1, 1, 0]);

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative bg-brand-navy-deep"
      aria-label="Apresentação da Clínica OralMaxx"
    >
      <div className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden lg:justify-center">
        {/* Fotografia em tela cheia (à direita no desktop) */}
        <motion.div
          className="absolute inset-0 lg:left-auto lg:w-[64%] lg:[mask-image:linear-gradient(to_right,transparent,black_26%)]"
          style={{ y: reduce ? 0 : photoY }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute -inset-x-2 -inset-y-[6%]"
            initial={reduce ? false : { scale: 1.18 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: EASE }}
          >
            {/* base: tom radiográfico */}
            <div className="absolute inset-0">
              <Photo className="[filter:grayscale(1)_contrast(1.2)_brightness(0.75)]" />
              <div className="absolute inset-0 bg-brand-blue/35 mix-blend-color" />
            </div>
            {/* cor revelada pela varredura */}
            <motion.div className="absolute inset-0" style={{ clipPath: colorClip }}>
              <Photo />
            </motion.div>
            <motion.span
              className="absolute inset-y-0 w-[2px] bg-brand-blue shadow-[0_0_28px_8px_rgba(109,187,239,0.65)]"
              style={{ left: lineLeft, opacity: lineOpacity }}
            />
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 hero-shade-desktop hidden md:block" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 hero-shade-mobile md:hidden" aria-hidden="true" />

        {/* Conteúdo */}
        <motion.div
          className="relative z-10 mx-auto w-full max-w-[1360px] px-5 pb-12 pt-[120px] sm:px-8 lg:px-12 lg:pb-24"
          style={{ y: reduce ? 0 : copyY }}
        >
          <div className="max-w-[600px]">
            <motion.p {...fade(0.1)} className="mb-6 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
              <span className="h-[1.5px] w-10 bg-brand-blue" aria-hidden="true" />
              {ORALMAXX_CONFIG.brand.eyebrow}
            </motion.p>

            <h1 className="hero-headline text-white" aria-label={ORALMAXX_CONFIG.brand.headline}>
              <span aria-hidden="true">
                <SplitWords text="Seu sorriso" onLoad delay={0.3} />
                <br />
                <SplitWords text="merece esse" onLoad delay={0.5} />
                <br />
                <SplitWords text="cuidado." onLoad delay={0.7} italicFrom={0} />
              </span>
            </h1>

            <motion.p {...fade(1)} className="mt-6 max-w-md text-[17px] leading-relaxed text-white/90 sm:text-lg">
              {ORALMAXX_CONFIG.brand.tagline}
            </motion.p>

            <motion.div {...fade(1.15)} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-[15px] font-bold text-brand-navy-deep shadow-pill transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-pill-hover"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agendar pelo WhatsApp
              </a>
              <a href="#clinica" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white">
                <span className="border-b border-white/50 pb-0.5 transition-colors group-hover:border-brand-blue">Conheça a clínica</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </motion.div>
            <motion.p {...fade(1.25)} className="mt-4 text-sm text-white/65">
              Vamos conversar sobre o seu sorriso?
            </motion.p>
          </div>
        </motion.div>

        {/* Cartões de vidro (desktop) */}
        <motion.div {...fade(1.5)} className="absolute bottom-10 right-8 z-10 hidden flex-col gap-3 lg:flex xl:right-12">
          <GlassCard icon={<ScanLine className="h-5 w-5" />} title="Radiologia integrada" text="No mesmo complexo da clínica" />
          <GlassCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title={technicalDirector.title}
            text={`${technicalDirector.name} · ${technicalDirector.cro}`}
          />
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
};
