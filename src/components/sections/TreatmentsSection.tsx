import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Activity, ArrowUpRight, Gem, HeartHandshake, ShieldCheck, Smile, Sparkles } from 'lucide-react';
import { TREATMENTS, getWhatsAppUrl } from '../../data/oralmaxxData';
import { EASE, Reveal, SplitWords } from '../../lib/motion';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Smile,
  HeartHandshake,
  ShieldCheck,
  Gem,
  Activity,
};

const Detail: React.FC<{ index: number }> = ({ index }) => {
  const t = TREATMENTS[index];
  const Icon = ICONS[t.iconName] ?? Sparkles;
  return (
    <div className="space-y-6">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-blue text-brand-navy-deep">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <h3 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">{t.name}</h3>
        <p className="mt-3 text-[15px] font-medium text-brand-blue">{t.shortDescription}</p>
      </div>
      <p className="text-[16px] leading-relaxed text-white/75">{t.fullDescription}</p>
      <a
        href={getWhatsAppUrl(t.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-brand-navy-dark transition-colors hover:bg-brand-blue"
      >
        Tirar dúvidas no WhatsApp
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
};

export const TreatmentsSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="tratamentos" className="bg-brand-blue-tint py-24 sm:py-32 lg:py-40" aria-labelledby="treatments-heading">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 grid gap-6 lg:mb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 id="treatments-heading" className="section-headline text-brand-navy-dark">
            <SplitWords text="Tratamentos para cada etapa do seu sorriso." />
          </h2>
          <Reveal>
            <p className="max-w-md text-[17px] leading-relaxed text-ink-secondary">
              Das consultas preventivas aos procedimentos mais complexos, tudo planejado de forma personalizada com a nossa equipe.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <ul className="border-t border-brand-navy/15" role="tablist" aria-label="Tratamentos">
            {TREATMENTS.map((t, i) => {
              const isActive = i === active;
              return (
                <li key={t.id} className="border-b border-brand-navy/15">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`treatment-panel-${t.id}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group relative flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="treatment-bar"
                        className="absolute inset-y-2 -left-3 w-1 rounded-full bg-brand-blue"
                        transition={{ duration: 0.5, ease: EASE }}
                      />
                    )}
                    <span
                      className={`font-serif text-[1.7rem] leading-tight tracking-tight transition-all duration-500 sm:text-[2.4rem] ${
                        isActive ? 'translate-x-2 text-brand-navy-dark' : 'text-brand-navy-dark/45 group-hover:text-brand-navy-dark/80'
                      }`}
                    >
                      {t.name}
                    </span>
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-navy/25 transition-all duration-500 ${
                        isActive ? 'rotate-45 border-transparent bg-brand-navy text-white' : 'text-brand-navy-dark'
                      }`}
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>

                  {/* Painel inline — somente no celular */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`treatment-panel-${t.id}`}
                        role="tabpanel"
                        className="overflow-hidden lg:hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                      >
                        <div className="mb-5 rounded-[24px] bg-brand-navy-deep p-6">
                          <Detail index={i} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Painel fixo — desktop */}
          <div className="relative hidden lg:block">
            <div className="sticky top-28 min-h-[460px] overflow-hidden rounded-[32px] bg-brand-navy-deep p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <Detail index={active} />
                </motion.div>
              </AnimatePresence>
              <img
                src="/brand/oralmaxx-simbolo.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 opacity-[0.07]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
