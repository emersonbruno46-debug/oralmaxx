import React, { useRef } from 'react';
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Building2, HeartHandshake, Hourglass } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/oralmaxxData';
import { Reveal } from '../../lib/motion';

const STATEMENT =
  'Um espaço dedicado ao cuidado com o seu sorriso. Reunimos consultórios modernos, equipe multiprofissional e diagnóstico por imagem em um único endereço.';

const FEATURES = [
  { icon: HeartHandshake, title: 'Acolhimento individual', text: 'Planos pensados respeitando suas necessidades reais.' },
  { icon: Hourglass, title: 'Pontualidade & conforto', text: 'Ambiente acolhedor e atendimento organizado.' },
  { icon: Building2, title: 'Sede própria', text: 'Arquitetura moderna com setor de Radiologia Integrada.' },
];

const Word: React.FC<{ word: string; range: [number, number]; progress: MotionValue<number>; reduce: boolean }> = ({
  word,
  range,
  progress,
  reduce,
}) => {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span className="mr-[0.26em] inline-block" style={{ opacity: reduce ? 1 : opacity }}>
      {word}
    </motion.span>
  );
};

export const AboutSection: React.FC = () => {
  const reduce = !!useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });
  const words = STATEMENT.split(' ');

  return (
    <section id="clinica" className="bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="about-statement">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-brand-navy-intermediate">
            <span className="h-[1.5px] w-10 bg-brand-blue" aria-hidden="true" />
            Sede própria & estrutura completa
          </p>
        </Reveal>

        <h2
          id="about-statement"
          ref={ref}
          className="max-w-[22ch] font-serif text-[2.1rem] font-medium leading-[1.12] tracking-[-0.02em] text-brand-navy-dark sm:text-5xl lg:max-w-[26ch] lg:text-[3.9rem]"
        >
          {words.map((w, i) => (
            <Word key={i} word={w} range={[i / words.length, Math.min(1, (i + 1) / words.length + 0.08)]} progress={scrollYProgress} reduce={reduce} />
          ))}
        </h2>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="max-w-md text-[17px] leading-relaxed text-ink-secondary">
              Na OralMaxx, acreditamos que cuidar do sorriso envolve atenção, confiança e uma experiência acolhedora. Queremos que
              você se sinta bem desde o primeiro contato, com informações claras e cuidado em cada etapa.
            </p>
            <a
              href={getWhatsAppUrl('Olá! Gostaria de conhecer melhor a clínica OralMaxx e agendar uma consulta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-brand-navy px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-navy-deep"
            >
              Falar com a nossa recepção
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-3 lg:gap-5">
            {FEATURES.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <Reveal delay={i * 0.1} className="h-full">
                  <div className="group h-full rounded-[22px] bg-brand-blue-tint p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-brand-blue-soft hover:shadow-card-hover">
                    <span className="mb-10 grid h-12 w-12 place-items-center rounded-full bg-white text-brand-navy shadow-soft transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-[15px] font-semibold text-brand-navy-dark">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
