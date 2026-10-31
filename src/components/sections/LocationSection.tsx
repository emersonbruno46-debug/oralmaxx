import React from 'react';
import { ArrowUpRight, Clock, Instagram, MapPin, Phone } from 'lucide-react';
import { ORALMAXX_CONFIG, getWhatsAppUrl } from '../../data/oralmaxxData';
import { Reveal, SplitWords } from '../../lib/motion';
import { WhatsAppIcon } from '../ui/Icons';

const { contact, location } = ORALMAXX_CONFIG;

const Row: React.FC<{ icon: React.ReactNode; label: string; children: React.ReactNode }> = ({ icon, label, children }) => (
  <div className="flex gap-4 border-b border-brand-navy/10 py-5 last:border-b-0">
    <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-blue-soft text-brand-navy">{icon}</span>
    <div>
      <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-muted">{label}</p>
      <div className="mt-1 text-[16px] leading-relaxed text-brand-navy-dark">{children}</div>
    </div>
  </div>
);

export const LocationSection: React.FC = () => (
  <section id="localizacao" className="bg-brand-blue-tint py-24 sm:py-32 lg:py-40" aria-labelledby="location-heading">
    <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
      <h2 id="location-heading" className="section-headline mb-12 max-w-[18ch] text-brand-navy-dark lg:mb-16">
        <SplitWords text="Venha conhecer a OralMaxx." />
      </h2>

      <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:gap-6">
        <Reveal>
          <div className="h-full rounded-[30px] bg-white p-6 shadow-card sm:p-9">
            <Row icon={<MapPin className="h-5 w-5" />} label="Localização">
              {location.city}
              <br />
              <span className="text-ink-secondary">Solicite o endereço exato e a rota pelo WhatsApp.</span>
            </Row>
            <Row icon={<Phone className="h-5 w-5" />} label="WhatsApp">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-4 hover:underline">
                {contact.phoneDisplay}
              </a>
            </Row>
            <Row icon={<Instagram className="h-5 w-5" />} label="Instagram">
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-4 hover:underline">
                {contact.instagramDisplay}
              </a>
            </Row>
            <Row icon={<Clock className="h-5 w-5" />} label="Horários">
              <ul className="space-y-1">
                {location.hours.map((h) => (
                  <li key={h.days}>
                    <span className="font-semibold">{h.days}:</span> <span className="text-ink-secondary">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-ink-secondary">{location.note}</p>
            </Row>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de receber a localização exata e orientações de rota para a OralMaxx.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-navy px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-brand-navy-deep"
              >
                <WhatsAppIcon className="h-5 w-5 text-brand-blue" />
                Solicitar rota e endereço
              </a>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/25 px-7 py-4 text-[15px] font-semibold text-brand-navy-dark transition-colors hover:bg-brand-blue-soft"
              >
                Ver fotos no Instagram
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="relative h-full min-h-[360px] overflow-hidden rounded-[30px] bg-brand-blue-soft lg:min-h-[560px]">
            <img
              src="/images/clinica-hero-1000.webp"
              alt="Fachada real da Clínica OralMaxx"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[55%_50%] transition-transform duration-[1600ms] ease-out hover:scale-[1.05]"
            />
            <figcaption className="absolute bottom-5 left-5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy-dark shadow-elevated">
              Complexo odontológico próprio
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  </section>
);
