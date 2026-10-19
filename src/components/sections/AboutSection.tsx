import React from 'react';
import { Sparkles, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/oralmaxxData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="clinica"
      className="py-20 lg:py-28 bg-[#FAFAF8] relative overflow-hidden"
      aria-label="Sobre a Clínica OralMaxx"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna Esquerda: Composição Visual com Imagem Real */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Imagem Principal da Estrutura */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-brand-navy/5 aspect-[4/3] bg-brand-navy-dark">
                <img
                  src="/images/fachada-placa.webp"
                  alt="Estrutura e comunicação visual da Clínica OralMaxx"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Badge Sutil sobre a Imagem */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-soft border border-white/40 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-soft flex items-center justify-center flex-shrink-0 text-brand-navy">
                    <Sparkles className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                      Sede Própria & Estrutura Completa
                    </p>
                    <p className="text-xs text-ink-secondary">
                      Arquitetura moderna com setor de Radiologia Integrada
                    </p>
                  </div>
                </div>
              </div>

              {/* Elemento Decorativo Sutil no Fundo */}
              <div
                className="absolute -bottom-4 -right-4 w-40 h-40 bg-brand-blue/10 rounded-3xl -z-10"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Coluna Direita: Conteúdo Editorial */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-brand-navy uppercase">
                CONHEÇA A ORALMAXX
              </span>
              <span className="h-[1.5px] w-12 bg-brand-blue inline-block rounded-full" aria-hidden="true" />
            </div>

            <h2 className="section-headline text-brand-navy-dark mb-6">
              Um espaço dedicado ao cuidado com o seu sorriso.
            </h2>

            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed mb-6 font-normal">
              Na OralMaxx, acreditamos que cuidar do sorriso envolve atenção, confiança e uma experiência acolhedora. Queremos que você se sinta bem desde o primeiro contato, com informações claras e cuidado em cada etapa.
            </p>

            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-8">
              Nossa clínica foi planejada para reunir em um único endereço consultórios modernos, equipe multiprofissional e serviços integrados de diagnóstico por imagem, proporcionando tranquilidade e precisão no planejamento odontológico.
            </p>

            {/* Diferenciais Editoriais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-soft">
                <ShieldCheck className="w-5 h-5 text-brand-navy mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-brand-navy-dark">Acolhimento Individual</h3>
                  <p className="text-xs text-ink-secondary mt-0.5">Planos pensados respeitando suas necessidades reais.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-soft">
                <Clock className="w-5 h-5 text-brand-navy mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-brand-navy-dark">Pontualidade & Conforto</h3>
                  <p className="text-xs text-ink-secondary mt-0.5">Ambiente acolhedor e atendimento organizado.</p>
                </div>
              </div>
            </div>

            {/* Ações */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de conhecer melhor a clínica OralMaxx e agendar uma consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-navy-dark hover:bg-brand-navy text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all group"
              >
                <span>Falar com a nossa recepção</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#tratamentos"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-blue py-3 px-2 transition-colors"
              >
                <span>Ver tratamentos disponíveis</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
