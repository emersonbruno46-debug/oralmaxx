import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { GUIDE_GOALS, GUIDE_TIMING, TREATMENTS, getWhatsAppUrl } from '../../data/oralmaxxData';
import { EASE, Reveal, SplitWords } from '../../lib/motion';

const chip =
  'group flex w-full items-center justify-between gap-4 rounded-2xl border border-brand-navy/15 bg-white px-5 py-4 text-left text-[16px] font-semibold text-brand-navy-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:shadow-card focus-visible:outline-brand-blue';

export const GuideSection: React.FC = () => {
  const [goal, setGoal] = useState<string | null>(null);
  const [timing, setTiming] = useState<string | null>(null);

  const step = goal === null ? 0 : timing === null ? 1 : 2;
  const goalItem = GUIDE_GOALS.find((g) => g.id === goal);
  const treatment = goalItem ? TREATMENTS.find((t) => t.id === goalItem.treatmentId) : undefined;

  const message =
    goalItem && treatment && timing
      ? `Olá! Usei o guia do site da OralMaxx. Meu interesse: ${goalItem.label.toLowerCase()} (${treatment.name}). Gostaria de atendimento: ${timing.toLowerCase()}.`
      : undefined;

  const reset = () => {
    setGoal(null);
    setTiming(null);
  };

  return (
    <section id="guia" className="bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="guide-heading">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 id="guide-heading" className="section-headline text-brand-navy-dark">
              <SplitWords text="Por onde começar?" />
            </h2>
            <Reveal>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-secondary">
                Responda duas perguntas rápidas e leve para a recepção uma conversa já encaminhada.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
                É só um ponto de partida: o diagnóstico e o plano de tratamento são definidos na avaliação com o dentista.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="min-h-[470px] rounded-[32px] bg-brand-blue-tint p-6 sm:p-10">
              <div className="mb-8 flex items-center gap-3" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${i <= step ? 'bg-brand-navy' : 'bg-brand-navy/15'}`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="s0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.45, ease: EASE }}>
                    <h3 className="font-serif text-3xl font-medium tracking-tight text-brand-navy-dark sm:text-4xl">O que você busca?</h3>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {GUIDE_GOALS.map((g) => (
                        <button key={g.id} type="button" className={chip} onClick={() => setGoal(g.id)}>
                          {g.label}
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-navy/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.45, ease: EASE }}>
                    <button type="button" onClick={reset} className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy-intermediate">
                      <ArrowLeft className="h-4 w-4" /> Voltar
                    </button>
                    <h3 className="font-serif text-3xl font-medium tracking-tight text-brand-navy-dark sm:text-4xl">Quando você gostaria de ser atendido(a)?</h3>
                    <div className="mt-7 grid gap-3">
                      {GUIDE_TIMING.map((t) => (
                        <button key={t} type="button" className={chip} onClick={() => setTiming(t)}>
                          {t}
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-navy/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && treatment && message && (
                  <motion.div key="s2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.45, ease: EASE }}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-4 py-2 text-[13px] font-semibold text-white">
                      <Check className="h-4 w-4" /> Sugestão para começar
                    </span>
                    <h3 className="mt-6 font-serif text-4xl font-medium tracking-tight text-brand-navy-dark sm:text-5xl">{treatment.name}</h3>
                    <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-secondary">{treatment.fullDescription}</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <a
                        href={getWhatsAppUrl(message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-brand-navy-deep"
                      >
                        Conversar com a recepção
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                      <button type="button" onClick={reset} className="rounded-full px-5 py-4 text-[15px] font-semibold text-brand-navy-dark underline-offset-4 hover:underline">
                        Refazer o guia
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
