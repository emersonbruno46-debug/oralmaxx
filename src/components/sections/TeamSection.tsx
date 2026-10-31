import React from 'react';
import { ArrowRight, BadgeCheck, Stethoscope, Users } from 'lucide-react';
import { ORALMAXX_CONFIG, getWhatsAppUrl } from '../../data/oralmaxxData';
import { Reveal, SplitWords } from '../../lib/motion';

export const TeamSection: React.FC = () => {
  const { technicalDirector } = ORALMAXX_CONFIG.brand;

  return (
    <section id="equipe" className="relative overflow-hidden bg-brand-navy-deep py-24 text-white sm:py-32 lg:py-40" aria-labelledby="team-heading">
      <img
        src="/brand/oralmaxx-simbolo.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-[460px] w-[460px] opacity-[0.05] sm:h-[620px] sm:w-[620px]"
      />
      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 id="team-heading" className="section-headline text-white">
              <SplitWords text="Pessoas que cuidam de pessoas." />
            </h2>
            <Reveal>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/70">
                Conheça a coordenação técnica e os profissionais que fazem parte da OralMaxx, comprometidos com a ética, precisão e
                acolhimento em cada etapa.
              </p>
              <a
                href={getWhatsAppUrl('Olá! Gostaria de agendar uma consulta com um dos dentistas da OralMaxx.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-brand-blue px-7 py-3.5 text-[15px] font-semibold text-brand-navy-deep transition-colors hover:bg-white"
              >
                Agendar com a equipe no WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal>
              <article className="rounded-[30px] bg-white p-7 text-brand-navy-dark sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-navy font-serif text-2xl text-white">LS</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-soft px-4 py-2 text-[13px] font-semibold text-brand-navy">
                    <BadgeCheck className="h-4 w-4" />
                    {technicalDirector.cro}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-3xl font-medium tracking-tight sm:text-4xl">{technicalDirector.name}</h3>
                <p className="mt-2 text-[15px] font-semibold text-brand-navy-intermediate">
                  Cirurgião-Dentista | {technicalDirector.title}
                </p>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-secondary">
                  Supervisão clínica contínua focada em rigor científico, segurança do paciente e no cumprimento estrito das
                  diretrizes éticas odontológicas.
                </p>
                <ul className="mt-6 space-y-2.5 text-[15px] text-brand-navy-dark">
                  {['Atendimento clínico individualizado e transparente', 'Planejamento integrado com radiologia da clínica'].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="rounded-[30px] border border-white/15 bg-white/[0.04] p-7 sm:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-blue text-brand-navy-deep">
                  <Users className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-medium tracking-tight sm:text-3xl">Cirurgiões-Dentistas Especializados</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-white/70">
                  Profissionais qualificados nas diversas áreas da odontologia moderna — de implantes e ortodontia a cirurgias e
                  estética facial —, atuando de forma colaborativa para planejar o melhor caminho terapêutico para você.
                </p>
                <p className="mt-5 text-sm text-white/50">
                  Todas as condutas e procedimentos clínicos seguem o Código de Ética Odontológica do Conselho Federal de
                  Odontologia (CFO/CRO-MG).
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
