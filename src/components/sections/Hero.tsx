import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { ORALMAXX_CONFIG, getWhatsAppUrl } from '../../data/oralmaxxData';

// Ícone oficial SVG do WhatsApp para perfeita correspondência com a referência
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-brand-navy-dark pt-20 lg:pt-[88px] min-h-[640px] lg:min-h-[720px] xl:min-h-[780px] 2xl:min-h-[840px] flex items-center"
      aria-label="Apresentação da Clínica OralMaxx"
    >
      {/* 
        Fotografia Principal da Fachada
        Desktop: usa a foto otimizada da fachada com proporções preservadas à direita.
        Mobile: enquadramento vertical focado no edifício.
      */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <img
          src="/images/HERO%20CORRETA.webp"
          alt="Fachada arquitetônica da Clínica Odontológica OralMaxx"
          className="w-full h-full object-cover object-[62%_center] lg:object-[right_center] xl:object-[72%_center]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>

      {/* Overlay Gradiente Fiel à Imagem de Referência */}
      <div
        className="absolute inset-0 pointer-events-none hero-gradient-desktop hidden md:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none hero-gradient-mobile md:hidden"
        aria-hidden="true"
      />

      {/* Sutil escurecimento na base para conduzir ao scroll */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-brand-navy-deep/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Conteúdo Textual e Interativo */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24">
        <div className="max-w-xl xl:max-w-2xl text-left">
          {/* Eyebrow */}
          <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
            <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.24em] text-brand-blue uppercase">
              {ORALMAXX_CONFIG.brand.eyebrow}
            </span>
            <span
              className="h-[1.5px] w-12 sm:w-16 bg-brand-blue/70 inline-block rounded-full"
              aria-hidden="true"
            />
          </div>

          {/* Headline Principal Serifada Editorial */}
          <h1 className="hero-headline text-white font-serif font-semibold mb-5 sm:mb-6 drop-shadow-md tracking-[-0.015em]">
            Seu sorriso <br />
            merece esse <br />
            cuidado.
          </h1>

          {/* Texto de Apoio */}
          <p className="text-base sm:text-lg md:text-[19px] text-white/95 leading-relaxed max-w-lg mb-8 sm:mb-9 font-normal drop-shadow-sm">
            {ORALMAXX_CONFIG.brand.tagline}
          </p>

          {/* Grupo de Botões e CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-3">
            {/* CTA Principal WhatsApp */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#6DBBEF] hover:bg-[#5CA9DE] text-[#0D2945] font-bold text-[15px] sm:text-[16px] shadow-pill hover:shadow-pill-hover hover:-translate-y-0.5 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-brand-navy-dark"
            >
              <WhatsAppIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110 text-[#0D2945]" />
              <span>Agendar pelo WhatsApp</span>
            </a>

            {/* CTA Secundário: Conheça a clínica */}
            <a
              href="#clinica"
              className="inline-flex items-center gap-2 text-white hover:text-brand-blue text-[15px] sm:text-[16px] font-medium transition-colors py-2 border-b border-white/60 hover:border-brand-blue group self-start sm:self-auto drop-shadow-sm"
            >
              <span>Conheça a clínica</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Microcopy */}
          <p className="text-xs sm:text-[13px] text-white/80 tracking-wide pl-1 pb-8 sm:pb-0">
            Vamos conversar sobre o seu sorriso?
          </p>
        </div>
      </div>

      {/* Indicador Inferior de Rolagem */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex justify-center pointer-events-auto">
        <a
          href="#clinica"
          className="group inline-flex flex-col items-center gap-1.5 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-full p-2"
          aria-label="Rolar para a seção Conheça a OralMaxx"
        >
          <span className="text-[12px] sm:text-[13px] font-medium tracking-wide">
            Conheça a OralMaxx
          </span>
          <ArrowDown className="w-4 h-4 animate-float-gentle text-brand-blue group-hover:text-white transition-colors" />
        </a>
      </div>
    </section>
  );
};
