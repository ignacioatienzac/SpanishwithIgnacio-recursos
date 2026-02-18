import React, { useState } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ResourceSection from './components/ResourceSection';
import Footer from './components/Footer';
import GeminiTutor from './components/GeminiTutor';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);

  const scrollToSection = (section: SectionId) => {
    setActiveSection(section);
    
    if (section === SectionId.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (section === SectionId.GAMES) {
        // Just scrolling to resources for now as a fallback/placeholder or could be a separate section
        const element = document.getElementById(SectionId.RESOURCES);
        element?.scrollIntoView({ behavior: 'smooth' });
        return;
    }

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="flex-grow">
        <AboutSection />
        <ResourceSection />
      </main>

      <Footer />
      <GeminiTutor />
    </div>
  );
};

export default App;