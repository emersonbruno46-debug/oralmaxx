import React from 'react';
import { MessageCircle, CalendarCheck, MapPin, ArrowRight } from 'lucide-react';
import { JOURNEY_STEPS, getWhatsAppUrl } from '../../data/oralmaxxData';

const stepIcons = [
  <MessageCircle className="w-5 h-5 text-brand-navy" />,
  <CalendarCheck className="w-5 h-5 text-brand-navy" />,
  <MapPin className="w-5 h-5 text-brand-navy" />,
];

export const JourneySection: React.FC = () => {
  return (
    <section
      className="py-20 lg:py-28 bg-[#FAFAF8] relative overflow-hidden"
      aria-label="Jornada de Atendimento na Clínica OralMaxx"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        {/* Cabeçalho */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2.5 mb-4">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-brand-navy uppercase">
              COMO FUNCIONA
            </span>
            <span className="h-[1.5px] w-8 bg-brand-blue inline-block rounded-full" aria-hidden="true" />
          </div>

          <h2 className="section-headline text-brand-navy-dark mb-4">
            Seu cuidado começa com uma conversa.
          </h2>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            Sem complicações: um caminho simples, humano e direto para cuidar do seu sorriso desde o primeiro contato.
          </p>
        </div>

        {/* 3 Blocos Editoriais com Numeração Grande */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative mb-14">
          {/* Linha Conectora Decorativa no Desktop */}
          <div
            className="hidden md:block absolute top-14 left-[15%] right-[15%] h-[1.5px] bg-gradient-to-r from-brand-blue/30 via-brand-navy/20 to-brand-blue/30 -z-0"
            aria-hidden="true"
          />

          {JOURNEY_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative z-10 bg-white rounded-3xl p-8 sm:p-9 border border-gray-100 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  {/* Ícone */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue-soft flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                    {stepIcons[index]}
                  </div>

                  {/* Numeração Editorial Grande */}
                  <span className="text-4xl lg:text-5xl font-serif font-bold text-brand-navy/20 group-hover:text-brand-blue transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-brand-navy-dark mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-ink-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Ação Imediata */}
        <div className="text-center">
          <a
            href={getWhatsAppUrl('Olá! Gostaria de dar início ao meu agendamento na OralMaxx.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-navy-dark hover:bg-brand-navy text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all group"
          >
            <span>Iniciar conversa no WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-blue" />
          </a>
        </div>
      </div>
    </section>
  );
};
