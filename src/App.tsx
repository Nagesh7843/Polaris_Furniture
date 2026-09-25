import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { FilmNavbar } from './components/film/FilmNavbar';
import { HeroSection } from './components/film/HeroSection';
import { FurnitureDesignSection } from './components/film/FurnitureDesignSection';
import { MaterialsSection } from './components/film/MaterialsSection';
import { JoinerySection } from './components/film/JoinerySection';
import { FactoryFilmSection } from './components/film/FactoryFilmSection';
import { FurnitureToSpaceSection } from './components/film/FurnitureToSpaceSection';
import { ProjectsCatalogueSection } from './components/film/ProjectsCatalogueSection';
import { FinalCtaFilm } from './components/film/FinalCtaFilm';
import { OverlappingImageCollage } from './components/film/OverlappingImageCollage';
import { ComprehensiveFooter } from './components/film/ComprehensiveFooter';

import { AnatomyPage } from './components/pages/AnatomyPage';
import { MaterialsPage } from './components/pages/MaterialsPage';
import { JoineryPage } from './components/pages/JoineryPage';
import { FacilityPage } from './components/pages/FacilityPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { CommissionPage } from './components/pages/CommissionPage';

import { ProjectModal } from './components/ProjectModal';
import { MachineryModal } from './components/MachineryModal';
import { ConsultationModal } from './components/ConsultationModal';
import type { Project } from './data/polarisData';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [machineryModalOpen, setMachineryModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  // Active page state synced with URL hash
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['home', 'anatomy', 'materials', 'joinery', 'facility', 'projects', 'commission'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [activePage, setActivePage] = useState<string>(getPageFromHash);

  const navigateTo = (pageId: string) => {
    setActivePage(pageId);
    window.location.hash = pageId === 'home' ? '' : pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth architectural momentum scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      infinite: false
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [activePage]);

  return (
    <div className="polaris-app" style={{ minHeight: '100vh', backgroundColor: 'var(--color-obsidian)' }}>
      {/* Fixed Luxury Architectural Film Navbar */}
      <FilmNavbar
        activePage={activePage}
        onNavigatePage={navigateTo}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Main Page Rendering */}
      <main>
        {activePage === 'home' && (
          <>
            {/* 1. Cinematic Hero Visual */}
            <HeroSection
              onOpenConsultation={() => setConsultationModalOpen(true)}
              onNavigatePage={navigateTo}
            />

            {/* 2. Furniture Design — Exploded Anatomy & Assembly */}
            <FurnitureDesignSection />

            {/* 3. Overlapping Image Collage — 4 Images Partially Overlapping */}
            <OverlappingImageCollage
              onOpenConsultation={() => setConsultationModalOpen(true)}
              onNavigatePage={navigateTo}
            />

            {/* 4. Raw Materials & Transformation Process */}
            <MaterialsSection />

            {/* 4. Precision Joinery Macro Detail */}
            <JoinerySection />

            {/* 5. 45,000+ Sq. Ft. Manufacturing Campus */}
            <FactoryFilmSection onOpenMachineryModal={() => setMachineryModalOpen(true)} />

            {/* 6. Object to Environment (Furniture to Space) */}
            <FurnitureToSpaceSection />

            {/* 7. Selected Works Editorial Catalogue */}
            <ProjectsCatalogueSection onSelectProject={(project) => setSelectedProject(project)} />

            {/* 8. Final Cinematic Statement & Commission CTA */}
            <FinalCtaFilm onOpenConsultation={() => setConsultationModalOpen(true)} />
          </>
        )}

        {activePage === 'anatomy' && (
          <AnatomyPage
            onNavigatePage={navigateTo}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        )}

        {activePage === 'materials' && (
          <MaterialsPage
            onNavigatePage={navigateTo}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        )}

        {activePage === 'joinery' && (
          <JoineryPage
            onNavigatePage={navigateTo}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        )}

        {activePage === 'facility' && (
          <FacilityPage
            onNavigatePage={navigateTo}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            onOpenMachineryModal={() => setMachineryModalOpen(true)}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage
            onNavigatePage={navigateTo}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        )}

        {activePage === 'commission' && (
          <CommissionPage
            onNavigatePage={navigateTo}
          />
        )}
      </main>

      {/* Comprehensive Architectural Luxury Footer */}
      <ComprehensiveFooter
        onNavigatePage={navigateTo}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={() => setConsultationModalOpen(true)}
      />

      <MachineryModal
        isOpen={machineryModalOpen}
        onClose={() => setMachineryModalOpen(false)}
      />

      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />
    </div>
  );
};

export default App;
