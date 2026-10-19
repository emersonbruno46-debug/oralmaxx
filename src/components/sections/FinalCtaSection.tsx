import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/oralmaxxData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      aria-label="Chamada Final para Agendamento"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        {/* Bloco Nobre Azul-Marinho Profundo */}
        <div className="relative rounded-3xl lg:rounded-[36px] bg-brand-navy-deep overflow-hidden p-8 sm:p-14 lg:p-20 shadow-elevated">
          {/* Elemento Gráfico de Marca no Fundo com o Símbolo Oficial */}
          <div
            className="absolute -right-16 -bottom-24 w-80 sm:w-[480px] h-80 sm:h-[480px] opacity-10 pointer-events-none select-none"
            aria-hidden="true"
          >
            <img
              src="/brand/oralmaxx-simbolo.svg"
              alt=""
              className="w-full h-full object-contain filter invert"
            />
          </div>

          {/* Sutil brilho azul-claro no topo esquerdo */}
          <div
            className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs sm:text-sm font-bold tracking-[0.24em] text-brand-blue uppercase">
                CLÍNICA ODONTOLÓGICA ORALMAXX
              </span>
              <span className="h-[1.5px] w-12 bg-brand-blue/70 inline-block rounded-full" aria-hidden="true" />
            </div>

            <h2 className="hero-headline text-white font-serif mb-6 leading-tight">
              Seu sorriso merece atenção em cada detalhe.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-normal mb-9 max-w-xl">
              Entre em contato com a OralMaxx e dê o primeiro passo para cuidar da saúde e da beleza do seu sorriso com tranquilidade.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de agendar uma consulta na OralMaxx.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-blue-hover text-brand-navy-dark font-bold text-base shadow-pill hover:shadow-pill-hover hover:-translate-y-0.5 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-brand-navy-dark"
              >
                <span>Agendar pelo WhatsApp</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <span className="text-xs sm:text-sm text-white/70">
                Atendimento humanizado de segunda a sexta
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
