import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
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
      className="group overflow-hidden bg-brand-navy-deep py-5 text-white select-none"
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

export const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const frameY = useTransform(scrollYProgress, [0, 1], ['0px', '-40px']);
  const { technicalDirector } = ORALMAXX_CONFIG.brand;

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section id="hero" ref={ref} className="relative bg-brand-blue-tint pt-[76px]" aria-label="Apresentação da Clínica OralMaxx">
      <div className="mx-auto grid max-w-[1360px] items-center gap-10 px-5 pb-14 pt-8 sm:px-8 lg:min-h-[calc(100svh-76px-84px)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-12 lg:pb-16 lg:pt-10">
        <div>
          <motion.p {...fade(0.1)} className="mb-6 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-brand-navy-intermediate">
            <span className="h-[1.5px] w-10 bg-brand-blue" aria-hidden="true" />
            {ORALMAXX_CONFIG.brand.eyebrow}
          </motion.p>

          <h1 className="hero-headline text-brand-navy-dark" aria-label={ORALMAXX_CONFIG.brand.headline}>
            <span aria-hidden="true">
              <SplitWords text="Seu sorriso" onLoad delay={0.2} />
              <br />
              <SplitWords text="merece esse" onLoad delay={0.4} />
              <br />
              <SplitWords text="cuidado." onLoad delay={0.6} italicFrom={0} />
            </span>
          </h1>

          <motion.p {...fade(0.9)} className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-secondary sm:text-lg">
            {ORALMAXX_CONFIG.brand.tagline}
          </motion.p>

          <motion.div {...fade(1.05)} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-navy px-8 py-4 text-[15px] font-semibold text-white shadow-elevated transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy-deep"
            >
              <WhatsAppIcon className="h-5 w-5 text-brand-blue" />
              Agendar pelo WhatsApp
            </a>
            <a href="#clinica" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-brand-navy-dark">
              <span className="border-b border-brand-navy-dark/30 pb-0.5 transition-colors group-hover:border-brand-blue">Conheça a clínica</span>
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </motion.div>
          <motion.p {...fade(1.15)} className="mt-4 text-sm text-ink-muted">
            Vamos conversar sobre o seu sorriso?
          </motion.p>
        </div>

        {/* Foto real da fachada */}
        <motion.div className="relative" style={{ y: reduce ? 0 : frameY }}>
          <motion.div
            className="relative aspect-[4/4.6] overflow-hidden rounded-[28px] bg-brand-blue-soft sm:aspect-[5/4] lg:aspect-auto lg:h-[min(66vh,620px)] lg:rounded-[36px]"
            initial={reduce ? false : { clipPath: 'inset(0 0 100% 0 round 36px)' }}
            animate={{ clipPath: 'inset(0 0 0% 0 round 36px)' }}
            transition={{ duration: 1.5, ease: EASE, delay: 0.15 }}
          >
            <motion.picture style={{ y: reduce ? 0 : imgY }} className="absolute inset-x-0 -top-[6%] block h-[112%]">
              <source media="(max-width: 767px)" srcSet="/images/clinica-hero-mobile.webp" />
              <motion.img
                src="/images/clinica-hero-2000.webp"
                srcSet="/images/clinica-hero-1000.webp 1000w, /images/clinica-hero-2000.webp 2000w"
                sizes="(min-width: 1024px) 55vw, 100vw"
                alt="Fachada da Clínica Odontológica OralMaxx com o setor de Radiologia integrado"
                className="h-full w-full object-cover object-[55%_45%]"
                initial={reduce ? false : { scale: 1.25 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, ease: EASE, delay: 0.15 }}
              />
            </motion.picture>
          </motion.div>

          <motion.div
            {...fade(1.2)}
            className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-elevated sm:left-8"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-blue-soft text-brand-navy">
              <ScanLine className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[13px] font-semibold text-brand-navy-dark">Radiologia integrada</span>
              <span className="block text-xs text-ink-secondary">No mesmo complexo da clínica</span>
            </span>
          </motion.div>

          <motion.div
            {...fade(1.35)}
            className="absolute -top-4 right-4 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-elevated sm:flex"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-blue-soft text-brand-navy">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[13px] font-semibold text-brand-navy-dark">{technicalDirector.title}</span>
              <span className="block text-xs text-ink-secondary">{technicalDirector.cro}</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
};
