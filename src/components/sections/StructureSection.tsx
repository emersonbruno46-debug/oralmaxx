import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { STRUCTURE_GALLERY } from '../../data/oralmaxxData';
import { EASE, Reveal, SplitWords } from '../../lib/motion';

type Photo = (typeof STRUCTURE_GALLERY)[number];

const Tile: React.FC<{ photo: Photo; index: number }> = ({ photo, index }) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);

  return (
    <motion.figure
      ref={ref}
      className={`group relative overflow-hidden rounded-[26px] bg-brand-blue-soft ${photo.area} ${photo.ratio}`}
      initial={reduce ? false : { clipPath: 'inset(8% 8% 8% 8% round 26px)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 26px)', opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 1.2, ease: EASE, delay: (index % 2) * 0.1 }}
    >
      <motion.img
        src={photo.imageUrl}
        alt={photo.title}
        loading="lazy"
        style={{ y: reduce ? 0 : y }}
        className="absolute -top-[8%] h-[116%] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-deep/85 via-brand-navy-deep/40 to-transparent p-5 pt-16 text-white sm:p-6 sm:pt-20">
        <span className="block font-serif text-xl leading-tight sm:text-2xl">{photo.title}</span>
        <span className="mt-1 block max-w-sm text-[13px] leading-snug text-white/80 sm:text-sm">{photo.description}</span>
      </figcaption>
    </motion.figure>
  );
};

export const StructureSection: React.FC = () => (
  <section id="estrutura" className="bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="structure-heading">
    <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
      <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <h2 id="structure-heading" className="section-headline text-brand-navy-dark">
          <SplitWords text="Um ambiente pensado para receber você." />
        </h2>
        <Reveal>
          <p className="max-w-md text-[17px] leading-relaxed text-ink-secondary">
            Conheça de perto os ambientes da OralMaxx e o espaço onde começa a sua experiência de cuidado, combinando arquitetura
            contemporânea e conveniência clínica.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
        {STRUCTURE_GALLERY.map((p, i) => (
          <Tile key={p.id} photo={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);
