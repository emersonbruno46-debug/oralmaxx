import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getWhatsAppUrl } from '../../data/oralmaxxData';
import { EASE } from '../../lib/motion';
import { WhatsAppIcon } from './Icons';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir conversa no WhatsApp oficial da OralMaxx"
          className="fixed bottom-5 right-5 z-40 group flex items-center gap-3 h-14 pl-4 pr-4 sm:pr-5 rounded-full bg-brand-navy text-white shadow-elevated"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.6, ease: EASE }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-brand-navy-deep">
            <span className="absolute inset-0 rounded-full bg-brand-blue animate-ping opacity-40" aria-hidden="true" />
            <WhatsAppIcon className="relative w-5 h-5" />
          </span>
          <span className="hidden sm:block text-sm font-semibold">Agendar pelo WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};
