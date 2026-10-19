import React from 'react';
import { Instagram, Phone, ArrowUp } from 'lucide-react';
import { ORALMAXX_CONFIG, getWhatsAppUrl } from '../../data/oralmaxxData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-deep text-white/80 pt-16 lg:pt-20 pb-12 border-t border-brand-navy-dark">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        {/* Grid Superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Coluna 1: Logo e Descrição Institucional (5 colunas) */}
          <div className="lg:col-span-5">
            <a href="#" className="inline-block mb-6" aria-label="Voltar ao início">
              <img
                src="/brand/oralmaxx-logo-negativo.svg"
                alt="OralMaxx Clínica Odontológica"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-6">
              Odontologia contemporânea e acolhimento individualizado. Estrutura completa planejada para cuidar com rigor e carinho da saúde e da estética do seu sorriso.
            </p>

            {/* Informações Éticas do Responsável Técnico */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 max-w-sm">
              <p className="text-xs font-semibold text-white">
                {ORALMAXX_CONFIG.brand.technicalDirector.name}
              </p>
              <p className="text-xs text-brand-blue font-mono mt-0.5">
                {ORALMAXX_CONFIG.brand.technicalDirector.title} • {ORALMAXX_CONFIG.brand.technicalDirector.cro}
              </p>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-5">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              {ORALMAXX_CONFIG.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors duration-200 inline-block py-0.5"
                >
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento e Redes (4 colunas) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-5">
              Atendimento Direto
            </h4>

            <div className="space-y-4 text-sm mb-6">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-brand-blue transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-navy-dark transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs block text-white/60">WhatsApp Oficial</span>
                  <span className="font-semibold">{ORALMAXX_CONFIG.contact.phoneDisplay}</span>
                </div>
              </a>

              <a
                href={ORALMAXX_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-brand-blue transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-navy-dark transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs block text-white/60">Instagram Oficial</span>
                  <span className="font-semibold">{ORALMAXX_CONFIG.contact.instagramDisplay}</span>
                </div>
              </a>
            </div>

            <p className="text-xs text-white/60 leading-relaxed">
              Atendimento de segunda a sexta-feira. Agendamento prévio com confirmação de disponibilidade.
            </p>
          </div>
        </div>

        {/* Linha Inferior com Copyright e Crédito Ideal Solutions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {currentYear} Clínica Odontológica OralMaxx. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <p className="font-medium text-white/80">
              Desenvolvido por <span className="text-brand-blue font-semibold">Ideal Solutions</span>
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-blue hover:text-brand-navy-dark transition-colors flex items-center justify-center text-white"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
