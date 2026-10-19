import React from 'react';
import { Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { ORALMAXX_CONFIG, getWhatsAppUrl } from '../../data/oralmaxxData';

export const TeamSection: React.FC = () => {
  return (
    <section
      id="equipe"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      aria-label="Equipe Profissional da Clínica OralMaxx"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2.5 mb-4">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-brand-navy uppercase">
              QUEM CUIDA DE VOCÊ
            </span>
            <span className="h-[1.5px] w-8 bg-brand-blue inline-block rounded-full" aria-hidden="true" />
          </div>

          <h2 className="section-headline text-brand-navy-dark mb-5">
            Pessoas que cuidam de pessoas.
          </h2>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            Conheça a coordenação técnica e os profissionais que fazem parte da OralMaxx, comprometidos com a ética, precisão e acolhimento em cada etapa.
          </p>
        </div>

        {/* Cards de Profissionais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14">
          {/* Card Destaque: Responsável Técnico Oficial */}
          <div className="bg-[#FAFAF8] rounded-3xl p-8 sm:p-10 border border-gray-200/70 shadow-soft hover:shadow-card-hover transition-all duration-300 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-navy text-white text-xs font-semibold tracking-wide">
                  <Award className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Responsável Técnico</span>
                </span>
                <span className="text-xs font-mono font-medium text-brand-navy-intermediate bg-brand-blue-soft px-3 py-1 rounded-md">
                  {ORALMAXX_CONFIG.brand.technicalDirector.cro}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy-dark mb-2">
                {ORALMAXX_CONFIG.brand.technicalDirector.name}
              </h3>
              
              <p className="text-sm font-semibold text-brand-navy-intermediate mb-4">
                Cirurgião-Dentista | {ORALMAXX_CONFIG.brand.technicalDirector.title}
              </p>

              <p className="text-sm sm:text-[15px] text-ink-secondary leading-relaxed font-normal mb-6">
                Supervisão clínica contínua focada em rigor científico, segurança do paciente e no cumprimento estrito das diretrizes éticas odontológicas.
              </p>

              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-ink-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Atendimento clínico individualizado e transparente</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Planejamento integrado com radiologia da clínica</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200/60">
              <span className="text-xs text-ink-muted">
                Registro profissional regular perante o Conselho Regional de Odontologia de Minas Gerais.
              </span>
            </div>
          </div>

          {/* Card: Corpo Clínico Especializado */}
          <div className="bg-[#FAFAF8] rounded-3xl p-8 sm:p-10 border border-gray-200/70 shadow-soft hover:shadow-card-hover transition-all duration-300 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-blue-soft text-brand-navy text-xs font-semibold tracking-wide">
                  <Users className="w-3.5 h-3.5 text-brand-navy" />
                  <span>Corpo Clínico Integrado</span>
                </span>
                <span className="text-xs font-medium text-ink-secondary">
                  Especialidades
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy-dark mb-2">
                Equipe Multidisciplinar
              </h3>

              <p className="text-sm font-semibold text-brand-navy-intermediate mb-4">
                Cirurgiões-Dentistas Especializados
              </p>

              <p className="text-sm sm:text-[15px] text-ink-secondary leading-relaxed font-normal mb-6">
                Profissionais qualificados nas diversas áreas da odontologia moderna — de implantes e ortodontia a cirurgias e estética facial —, atuando de forma colaborativa para planejar o melhor caminho terapêutico para você.
              </p>

              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-ink-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Especialistas em constante atualização científica</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Suporte diagnóstico ágil e sem deslocamentos</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200/60">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de agendar uma consulta com um dos dentistas da OralMaxx.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors group/cta"
              >
                <span>Agendar com a equipe no WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-brand-blue transition-transform group-hover/cta:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Informação Ética Obrigatória */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs text-ink-muted">
            Todas as condutas e procedimentos clínicos seguem o Código de Ética Odontológica do Conselho Federal de Odontologia (CFO/CRO-MG).
          </p>
        </div>
      </div>
    </section>
  );
};
