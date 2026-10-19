import React from 'react';
import { Building2, Sparkles, Shield, Camera } from 'lucide-react';
import { STRUCTURE_GALLERY } from '../../data/oralmaxxData';

export const StructureSection: React.FC = () => {
  const mainPhoto = STRUCTURE_GALLERY[0];
  const sidePhotos = STRUCTURE_GALLERY.slice(1);

  return (
    <section
      id="estrutura"
      className="py-20 lg:py-28 bg-[#FAFAF8] relative overflow-hidden"
      aria-label="Estrutura Física da Clínica OralMaxx"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        {/* Cabeçalho Editorial */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-brand-navy uppercase">
              NOSSO ESPAÇO
            </span>
            <span className="h-[1.5px] w-12 bg-brand-blue inline-block rounded-full" aria-hidden="true" />
          </div>

          <h2 className="section-headline text-brand-navy-dark mb-5">
            Um ambiente pensado para receber você.
          </h2>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-normal max-w-2xl">
            Conheça de perto os ambientes da OralMaxx e o espaço onde começa a sua experiência de cuidado, combinando arquitetura contemporânea e conveniência clínica.
          </p>
        </div>

        {/* Galeria Editorial Assimétrica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12">
          {/* Foto Principal Grande (7 colunas no desktop) */}
          <div className="lg:col-span-7 group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-gray-100 bg-brand-navy-dark min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]">
            <img
              src={mainPhoto.imageUrl}
              alt={mainPhoto.title}
              className="w-full h-full object-cover object-[center_center] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/80 via-brand-navy-deep/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-wider font-semibold mb-3">
                <Camera className="w-3.5 h-3.5 text-brand-blue" />
                <span>Foto Real da Clínica</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                {mainPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-md">
                {mainPhoto.description}
              </p>
            </div>
          </div>

          {/* Coluna Direita com 3 Destaques Fotográficos Complementares (5 colunas) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {sidePhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-2xl overflow-hidden shadow-card border border-gray-100 bg-brand-navy-dark h-[155px] sm:h-[160px] lg:h-[160px]"
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/85 via-brand-navy-deep/30 to-transparent" />

                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <h4 className="text-sm font-serif font-semibold text-white mb-0.5">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-white/80 line-clamp-1">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilares Estruturais da Clínica */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200/60">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-blue-soft flex items-center justify-center flex-shrink-0 text-brand-navy">
              <Building2 className="w-5 h-5 text-brand-navy" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-navy-dark">Arquitetura Integrada</h4>
              <p className="text-xs text-ink-secondary mt-1">Ambientes amplos, acessíveis e planejados para o bem-estar.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-blue-soft flex items-center justify-center flex-shrink-0 text-brand-navy">
              <Sparkles className="w-5 h-5 text-brand-navy" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-navy-dark">Radiologia Própria</h4>
              <p className="text-xs text-ink-secondary mt-1">OralMaxx Radiologia no próprio complexo para maior rapidez diagnóstica.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-blue-soft flex items-center justify-center flex-shrink-0 text-brand-navy">
              <Shield className="w-5 h-5 text-brand-navy" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-navy-dark">Biossegurança Rigorosa</h4>
              <p className="text-xs text-ink-secondary mt-1">Protocolos estritos de esterilização e higiene em cada atendimento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
