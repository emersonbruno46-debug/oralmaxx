import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { JOURNEY_STEPS } from '../../data/oralmaxxData';
import { Reveal, SplitWords } from '../../lib/motion';

export const JourneySection: React.FC = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.4 });

  return (
    <section id="jornada" className="bg-brand-blue-tint py-24 sm:py-32 lg:py-40" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 id="journey-heading" className="section-headline text-brand-navy-dark">
              <SplitWords text="Seu cuidado começa com uma conversa." />
            </h2>
            <Reveal>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-secondary">
                Sem complicações: um caminho simples, humano e direto para cuidar do seu sorriso desde o primeiro contato.
              </p>
            </Reveal>
          </div>

          <ol ref={ref} className="relative space-y-6 pl-12 sm:pl-16">
            <span className="absolute bottom-6 left-[19px] top-6 w-px bg-brand-navy/15 sm:left-[27px]" aria-hidden="true" />
            <motion.span
              className="absolute bottom-6 left-[18px] top-6 w-[3px] origin-top rounded-full bg-brand-blue sm:left-[26px]"
              style={{ scaleY: reduce ? 1 : line }}
              aria-hidden="true"
            />
            {JOURNEY_STEPS.map((s, i) => (
              <li key={s.step} className="relative">
                <span className="absolute -left-12 top-6 grid h-10 w-10 place-items-center rounded-full bg-brand-navy text-sm font-bold text-white ring-8 ring-brand-blue-tint sm:-left-16 sm:h-14 sm:w-14 sm:text-base">
                  {s.step}
                </span>
                <Reveal delay={i * 0.05}>
                  <div className="rounded-[26px] bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover sm:p-9">
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-brand-navy-dark sm:text-3xl">{s.title}</h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-ink-secondary">{s.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
