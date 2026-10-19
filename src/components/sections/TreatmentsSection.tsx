import React from 'react';
import {
  Sparkles,
  Smile,
  HeartHandshake,
  ShieldCheck,
  Gem,
  Activity,
  ArrowRight,
} from 'lucide-react';
import { TREATMENTS, getWhatsAppUrl } from '../../data/oralmaxxData';

// Mapeamento dinâmico de ícones Lucide
const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-brand-navy" />,
  Smile: <Smile className="w-6 h-6 text-brand-navy" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-brand-navy" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-navy" />,
  Gem: <Gem className="w-6 h-6 text-brand-navy" />,
  Activity: <Activity className="w-6 h-6 text-brand-navy" />,
};

export const TreatmentsSection: React.FC = () => {
  return (
    <section
      id="tratamentos"
      className="py-20 lg:py-28 bg-[#F4F7FA] relative overflow-hidden"
      aria-label="Tratamentos Odontológicos da Clínica OralMaxx"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2.5 mb-4">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-brand-navy uppercase">
              NOSSOS TRATAMENTOS
            </span>
            <span className="h-[1.5px] w-8 bg-brand-blue inline-block rounded-full" aria-hidden="true" />
          </div>

          <h2 className="section-headline text-brand-navy-dark mb-5">
            Cuidado para cada fase do seu sorriso.
          </h2>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            Conheça os tratamentos disponíveis e converse com nossa equipe para saber mais sobre as opções de cuidado odontológico.
          </p>
        </div>

        {/* Grid de Cards (3 colunas desktop, 2 colunas tablet, 1 coluna mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {TREATMENTS.map((treatment) => (
            <article
              key={treatment.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 shadow-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Ícone com Fundo Circular Refinado */}
                <div className="w-13 h-13 rounded-2xl bg-brand-blue-soft flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors duration-300">
                  {iconMap[treatment.iconName] || <Sparkles className="w-6 h-6 text-brand-navy" />}
                </div>

                {/* Título do Tratamento */}
                <h3 className="text-xl sm:text-[22px] font-serif font-semibold text-brand-navy-dark mb-3 group-hover:text-brand-navy transition-colors">
                  {treatment.name}
                </h3>

                {/* Descrição */}
                <p className="text-sm sm:text-[15px] text-ink-secondary leading-relaxed mb-6 font-normal">
                  {treatment.fullDescription}
                </p>
              </div>

              {/* Link CTA para WhatsApp com Mensagem Contextualizada */}
              <div className="pt-4 border-t border-gray-100/80">
                <a
                  href={getWhatsAppUrl(treatment.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors group/link focus:outline-none"
                  aria-label={`Consultar sobre ${treatment.name} pelo WhatsApp`}
                >
                  <span>Consultar pelo WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1 text-brand-blue" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Nota Editorial & CTA de Apoio */}
        <div className="max-w-2xl mx-auto text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-soft">
          <p className="text-xs sm:text-sm text-ink-secondary mb-3">
            Não encontrou o procedimento que procura ou tem dúvidas sobre a indicação para o seu caso?
          </p>
          <a
            href={getWhatsAppUrl('Olá! Gostaria de consultar sobre a disponibilidade de tratamentos na OralMaxx.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy-dark hover:text-brand-blue transition-colors underline underline-offset-4"
          >
            <span>Fale diretamente com nossa equipe no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
