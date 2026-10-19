import React, { useState } from 'react';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS, getWhatsAppUrl } from '../../data/oralmaxxData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      aria-label="Perguntas Frequentes sobre a Clínica OralMaxx"
    >
      <div className="max-w-[960px] mx-auto px-6 sm:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-2.5 mb-4">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-brand-navy uppercase">
              DÚVIDAS COMUNS
            </span>
            <span className="h-[1.5px] w-8 bg-brand-blue inline-block rounded-full" aria-hidden="true" />
          </div>

          <h2 className="section-headline text-brand-navy-dark mb-4">
            Ainda ficou alguma dúvida?
          </h2>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl mx-auto">
            Reunimos as respostas para as dúvidas mais frequentes de quem vai conhecer a OralMaxx pela primeira vez.
          </p>
        </div>

        {/* Lista Accordion */}
        <div className="space-y-4 mb-14">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-brand-blue/60 bg-[#FBFDFF] shadow-soft'
                    : 'border-gray-200/80 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left p-6 sm:p-7 gap-4 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-semibold text-brand-navy-dark">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-brand-blue text-brand-navy-dark'
                        : 'bg-brand-blue-soft text-brand-navy'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-[15px] text-ink-secondary leading-relaxed border-t border-gray-100 animate-in fade-in-50 duration-200">
                    <p className="mt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloco de CTA no Rodapé da FAQ */}
        <div className="bg-[#FAFAF8] rounded-2xl p-6 sm:p-8 border border-gray-200/70 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
          <div className="text-left">
            <h3 className="text-base font-semibold text-brand-navy-dark">
              Não encontrou o que procurava?
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary mt-0.5">
              Nossa equipe da recepção está pronta para atender você no WhatsApp.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Olá! Gostaria de tirar uma dúvida que não encontrei no site da OralMaxx.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy-dark hover:bg-brand-navy text-white text-sm font-semibold transition-all group flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-brand-blue" />
            <span>Conversar no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
