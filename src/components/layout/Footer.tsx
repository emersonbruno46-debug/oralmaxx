import React from 'react';
import { Instagram, Phone } from 'lucide-react';
import { ORALMAXX_CONFIG, getWhatsAppUrl } from '../../data/oralmaxxData';

export const Footer: React.FC = () => {
  const { brand, contact, navigation } = ORALMAXX_CONFIG;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-deep pb-24 pt-16 text-white sm:pb-12 sm:pt-20" aria-label="Rodapé">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src="/brand/oralmaxx-logo-negativo.svg" alt="Clínica OralMaxx" className="h-12 w-auto sm:h-14" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/65">{brand.tagline}</p>
            <p className="mt-5 text-sm text-white/50">
              {brand.technicalDirector.title}: {brand.technicalDirector.name} · {brand.technicalDirector.cro}
            </p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3 text-[15px]">
            <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-white/40">Navegação</p>
            {navigation.map((n) => (
              <a key={n.href} href={n.href} className="w-fit text-white/80 transition-colors hover:text-brand-blue">
                {n.label}
              </a>
            ))}
            <a href="#faq" className="w-fit text-white/80 transition-colors hover:text-brand-blue">
              Perguntas frequentes
            </a>
          </nav>

          <div className="flex flex-col gap-3 text-[15px]">
            <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-white/40">Contato</p>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-white/80 transition-colors hover:text-brand-blue">
              <Phone className="h-4 w-4" /> {contact.phoneDisplay}
            </a>
            <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-white/80 transition-colors hover:text-brand-blue">
              <Instagram className="h-4 w-4" /> {contact.instagramDisplay}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:justify-between sm:pr-60">
          <span>© {year} Clínica Odontológica OralMaxx. Todos os direitos reservados.</span>
          <span>
            Desenvolvido por <span className="font-semibold text-brand-blue">Ideal Solutions</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
