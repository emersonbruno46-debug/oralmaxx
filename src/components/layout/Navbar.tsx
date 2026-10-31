import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { ORALMAXX_CONFIG, getWhatsAppUrl } from '../../data/oralmaxxData';
import { EASE } from '../../lib/motion';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const openRef = useRef(open);
  openRef.current = open;

  useEffect(() => {
    // Direção com histerese: só troca de estado após ~16px na mesma direção (evita piscar)
    let anchor = 0;
    let dir = 0;
    return scrollY.on('change', (y) => {
      setScrolled((v) => (v ? y > 20 : y > 60));
      const delta = y - anchor;
      const d = delta > 0 ? 1 : delta < 0 ? -1 : 0;
      if (d !== 0 && d !== dir) {
        dir = d;
        anchor = y;
        return;
      }
      if (Math.abs(delta) > 16) {
        setHidden(dir > 0 && y > 520 && !openRef.current);
        anchor = y;
      }
      if (y <= 520) setHidden(false);
    });
  }, [scrollY]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const nav = ORALMAXX_CONFIG.navigation;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-[76px] transition-[transform,background-color,box-shadow] duration-500 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
        } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="mx-auto flex h-full max-w-[1360px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <a href="#inicio" aria-label="OralMaxx — voltar ao topo" className="shrink-0">
            <img src="/brand/oralmaxx-logo.svg" alt="Clínica OralMaxx" className="h-9 sm:h-10 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Navegação principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[15px] font-medium text-brand-navy-dark"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-[1.5px] origin-right scale-x-0 bg-brand-blue transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-navy-deep"
            >
              Agendar consulta <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="lg:hidden -mr-2 grid h-11 w-11 place-items-center rounded-full text-brand-navy-dark"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-brand-blue"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-brand-navy-deep px-5 pb-8 pt-4 text-white"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex h-14 items-center justify-between">
              <img src="/brand/oralmaxx-logo-negativo.svg" alt="Clínica OralMaxx" className="h-9 w-auto" />
              <button
                type="button"
                className="-mr-2 grid h-11 w-11 place-items-center rounded-full"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Menu">
              {nav.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block overflow-hidden font-serif text-[2.75rem] leading-[1.1] tracking-tight"
                >
                  <motion.span
                    className="block"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.25 + i * 0.08 }}
                  >
                    {item.label}
                  </motion.span>
                </a>
              ))}
            </nav>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-4 font-semibold text-brand-navy-deep"
            >
              Agendar consulta <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
