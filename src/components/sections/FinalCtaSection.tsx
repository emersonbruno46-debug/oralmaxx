import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { getWhatsAppUrl } from '../../data/oralmaxxData';
import { Reveal, SplitWords } from '../../lib/motion';
import { WhatsAppIcon } from '../ui/Icons';

export const FinalCtaSection: React.FC = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-navy py-28 text-white sm:py-36 lg:py-44" aria-labelledby="cta-heading">
      <motion.img
        src="/brand/oralmaxx-simbolo.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 opacity-[0.09] sm:h-[620px] sm:w-[620px] lg:right-10"
        style={{ rotate: reduce ? 0 : rotate, y: reduce ? 0 : y }}
      />
      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <h2 id="cta-heading" className="max-w-[16ch] font-serif text-[2.9rem] font-medium leading-[1.02] tracking-[-0.025em] sm:text-7xl lg:text-[6.2rem]">
          <SplitWords text="Seu sorriso merece atenção em cada detalhe." />
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/75">
            Entre em contato com a OralMaxx e dê o primeiro passo para cuidar da saúde e da beleza do seu sorriso com tranquilidade.
          </p>
          <a
            href={getWhatsAppUrl('Olá! Gostaria de dar início ao meu agendamento na OralMaxx.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-brand-blue px-9 py-5 text-[16px] font-bold text-brand-navy-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Iniciar conversa no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
};
