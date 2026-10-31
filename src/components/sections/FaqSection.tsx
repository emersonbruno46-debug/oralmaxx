import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/oralmaxxData';
import { EASE, Reveal, SplitWords } from '../../lib/motion';

export const FaqSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="faq-heading">
      <div className="mx-auto grid max-w-[1360px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <h2 id="faq-heading" className="section-headline text-brand-navy-dark lg:sticky lg:top-32 lg:self-start">
          <SplitWords text="Ainda ficou alguma dúvida?" />
        </h2>

        <ul className="border-t border-brand-navy/15">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.question} className="border-b border-brand-navy/15">
                <Reveal delay={i * 0.05} y={16}>
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="font-serif text-[1.35rem] font-medium leading-snug tracking-tight text-brand-navy-dark sm:text-[1.75rem]">
                        {item.question}
                      </span>
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                          isOpen ? 'rotate-45 border-transparent bg-brand-navy text-white' : 'border-brand-navy/25 text-brand-navy-dark'
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 text-[16px] leading-relaxed text-ink-secondary">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
