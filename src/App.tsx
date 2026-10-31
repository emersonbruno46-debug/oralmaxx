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
import { useSmoothScroll } from './lib/useSmoothScroll';

export const App: React.FC = () => {
  useSmoothScroll();

  return (
    <div id="inicio" className="flex min-h-screen flex-col bg-white font-sans text-ink-primary">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <AboutSection />
        <TreatmentsSection />
        <StructureSection />
        <TeamSection />
        <JourneySection />
        <FaqSection />
        <LocationSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
