import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Entrada suave (sobe + aparece) quando o bloco entra na tela. */
export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 28, className }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
};

interface SplitProps {
  text: string;
  delay?: number;
  className?: string;
  /** palavras a partir deste índice ficam em itálico */
  italicFrom?: number;
  /** anima ao carregar (hero) em vez de ao rolar */
  onLoad?: boolean;
}

/** Título em que cada palavra sobe de uma máscara. O gatilho fica no contêiner. */
export const SplitWords: React.FC<SplitProps> = ({ text, delay = 0, className, italicFrom, onLoad }) => {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  const trigger = onLoad
    ? { animate: 'show' }
    : { whileInView: 'show', viewport: { once: true, margin: '0px 0px -10% 0px' } };
  return (
    <motion.span className={className} initial={reduce ? false : 'hidden'} {...trigger}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingBottom: '0.14em', marginBottom: '-0.14em' }}
        >
          <motion.span
            style={{ display: 'inline-block', fontStyle: italicFrom !== undefined && i >= italicFrom ? 'italic' : undefined }}
            variants={{
              hidden: { y: '115%' },
              show: { y: 0, transition: { duration: 1.05, ease: EASE, delay: delay + i * 0.07 } },
            }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
