import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { TreatmentsSection } from './components/sections/TreatmentsSection';
import { StructureSection } from './components/sections/StructureSection';
import { TeamSection } from './components/sections/TeamSection';
import { JourneySection } from './components/sections/JourneySection';
import { FaqSection } from './components/sections/FaqSection';
import { LocationSection } from './components/sections/LocationSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-ink-primary flex flex-col font-sans selection:bg-brand-blue selection:text-brand-navy-dark">
      {/* Barra de Navegação Superior */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Principal com Foto Real e Gradiente Aprovado */}
        <Hero />

        {/* 2. Apresentação da Clínica */}
        <AboutSection />

        {/* 3. Tratamentos Odontológicos Especializados */}
        <TreatmentsSection />

        {/* 4. Galeria da Estrutura e Ambientes */}
        <StructureSection />

        {/* 5. Equipe e Responsável Técnico */}
        <TeamSection />

        {/* 6. Jornada de Atendimento em 3 Etapas */}
        <JourneySection />

        {/* 7. Perguntas Frequentes (FAQ Accordion) */}
        <FaqSection />

        {/* 8. Localização e Canais de Contato */}
        <LocationSection />

        {/* 9. CTA Final */}
        <FinalCtaSection />
      </main>

      {/* 10. Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
