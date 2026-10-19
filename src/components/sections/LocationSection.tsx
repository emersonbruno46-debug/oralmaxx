import React from 'react';
import { MapPin, Phone, Clock, Instagram, ExternalLink, ArrowRight } from 'lucide-react';
import { ORALMAXX_CONFIG, getWhatsAppUrl } from '../../data/oralmaxxData';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="localizacao"
      className="py-20 lg:py-28 bg-[#F4F7FA] relative overflow-hidden"
      aria-label="Localização e Contato da Clínica OralMaxx"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-brand-navy uppercase">
              ONDE ESTAMOS
            </span>
            <span className="h-[1.5px] w-12 bg-brand-blue inline-block rounded-full" aria-hidden="true" />
          </div>

          <h2 className="section-headline text-brand-navy-dark mb-5">
            Venha conhecer a OralMaxx.
          </h2>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            Estamos prontos para receber você em uma sede planejada para o seu bem-estar, com estacionamento fácil e atendimento acolhedor.
          </p>
        </div>

        {/* 2 Colunas: Informações de Contato + Apresentação Visual da Localização */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Coluna 1: Dados Institucionais */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-gray-100 shadow-soft">
              <h3 className="text-xl font-serif font-bold text-brand-navy-dark mb-6">
                Canais de Atendimento
              </h3>

              <div className="space-y-6">
                {/* WhatsApp Oficial */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-blue-soft flex items-center justify-center flex-shrink-0 text-brand-navy">
                    <Phone className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-secondary">
                      WhatsApp & Telefone Oficial
                    </p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-brand-navy-dark hover:text-brand-blue transition-colors"
                    >
                      {ORALMAXX_CONFIG.contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-ink-secondary mt-0.5">
                      Atendimento rápido para dúvidas e marcação de consultas
                    </p>
                  </div>
                </div>

                {/* Horários */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-blue-soft flex items-center justify-center flex-shrink-0 text-brand-navy">
                    <Clock className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-secondary">
                      Horário de Funcionamento
                    </p>
                    <p className="text-sm font-semibold text-brand-navy-dark mt-0.5">
                      {ORALMAXX_CONFIG.location.hours[0].days}
                    </p>
                    <p className="text-xs text-ink-secondary">
                      {ORALMAXX_CONFIG.location.hours[0].time}
                    </p>
                  </div>
                </div>

                {/* Instagram Oficial */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-blue-soft flex items-center justify-center flex-shrink-0 text-brand-navy">
                    <Instagram className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-secondary">
                      Instagram Oficial
                    </p>
                    <a
                      href={ORALMAXX_CONFIG.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy-dark hover:text-brand-blue transition-colors mt-0.5"
                    >
                      <span>{ORALMAXX_CONFIG.contact.instagramDisplay}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-brand-blue" />
                    </a>
                    <p className="text-xs text-ink-secondary mt-0.5">
                      Acompanhe o dia a dia e dicas de saúde bucal
                    </p>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-2xl bg-brand-blue-soft flex items-center justify-center flex-shrink-0 text-brand-navy">
                    <MapPin className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-secondary">
                      Localização da Clínica
                    </p>
                    <p className="text-sm font-semibold text-brand-navy-dark mt-0.5">
                      Clínica Odontológica OralMaxx & Radiologia
                    </p>
                    <p className="text-xs text-ink-secondary mt-1 leading-relaxed">
                      Solicite a rota exata e localização em tempo real diretamente pelo WhatsApp da clínica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de Rota */}
            <a
              href={getWhatsAppUrl('Olá! Gostaria de receber a localização exata e orientações de rota para a OralMaxx.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-2xl bg-brand-navy-dark hover:bg-brand-navy text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md group"
            >
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span>Solicitar rota e endereço no WhatsApp</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Coluna 2: Visual da Fachada com Detalhes de Acesso */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-card border border-gray-100 bg-brand-navy-dark min-h-[360px] sm:min-h-[420px] flex flex-col justify-end p-8 sm:p-10 text-white group">
            <img
              src="/images/fachada-hero-1440.webp"
              alt="Fachada arquitetônica da OralMaxx"
              className="absolute inset-0 w-full h-full object-cover object-[center_center] transition-transform duration-700 group-hover:scale-105 opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep via-brand-navy-deep/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white mb-4">
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                <span>Complexo Odontológico Próprio</span>
              </span>

              <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                OralMaxx & OralMaxx Radiologia
              </h4>

              <p className="text-sm text-white/85 leading-relaxed max-w-md mb-6 font-normal">
                Sede moderna e acessível, combinando atendimento clínico geral, consultórios especializados e setor próprio de diagnóstico por imagem.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl('Olá! Gostaria de consultar os horários disponíveis para atendimento.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-blue text-brand-navy-dark text-xs sm:text-sm font-bold shadow-pill hover:bg-brand-blue-hover transition-all"
                >
                  <span>Consultar horários</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={ORALMAXX_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Ver fotos no Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
