import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EngineeringCapabilities } from './components/EngineeringCapabilities';
import { TechStrip } from './components/TechStrip';
import { ExperienceSummary } from './components/ExperienceSummary';
import { DebuggingApproach } from './components/DebuggingApproach';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F5F7FA] font-['Inter'] selection:bg-[#9FE870] selection:text-[#080B12]">
      {/* Homepage Navigation */}
      <Navbar />

      {/* Main Single-Page Homepage Content */}
      <main>
        {/* Section 1: Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('capabilities')}
          onViewResume={() => setIsResumeModalOpen(true)}
          onExploreDebugging={() => scrollToSection('debugging')}
        />

        {/* Section 2: Compact Technology Strip */}
        <TechStrip />

        {/* Section 3: Engineering Capabilities (4 Cards) */}
        <EngineeringCapabilities
          onExploreDebugging={() => scrollToSection('debugging')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Section 4: Debugging & Troubleshooting Differentiator */}
        <DebuggingApproach />

        {/* Section 5: Professional Experience Summary */}
        <ExperienceSummary />

        {/* Section 6: Final Contact Call-To-Action */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* View Resume Dossier Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
