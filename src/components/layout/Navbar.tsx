import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ORALMAXX_CONFIG, getWhatsAppUrl } from '../../data/oralmaxxData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled
          ? 'shadow-sm border-b border-gray-100 py-3 lg:py-4'
          : 'border-b border-gray-100/60 py-4 lg:py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo Oficial OralMaxx */}
        <a
          href="#"
          className="flex items-center gap-2 group transition-opacity hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg"
          aria-label="OralMaxx Clínica Odontológica - Página Inicial"
        >
          <img
            src="/brand/oralmaxx-logo.svg"
            alt="Clínica OralMaxx"
            className="h-10 sm:h-12 lg:h-[54px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
          />
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Navegação principal">
          {ORALMAXX_CONFIG.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-brand-navy-dark hover:text-brand-blue transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão de Agendamento Desktop */}
        <div className="hidden lg:flex items-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-brand-navy-dark hover:bg-brand-navy text-white text-[14px] font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:translate-x-0.5 group focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2"
          >
            <span>Agendar consulta</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Botão Mobile Hamburger */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-brand-navy-dark hover:bg-brand-blue-soft transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-xl px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 mb-6" aria-label="Navegação mobile">
            {ORALMAXX_CONFIG.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-lg font-medium text-brand-navy-dark hover:text-brand-blue py-2 border-b border-gray-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-navy-dark text-white font-semibold text-center transition-colors hover:bg-brand-navy"
          >
            <span>Agendar consulta pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
