import { useCallback, useState } from 'react';
import type { Project } from './data';
import Footer from './components/layout/Footer';
import SiteHeader from './components/layout/SiteHeader';
import ProjectInspectorModal from './components/projects/ProjectInspectorModal';
import ProjectsSection from './components/projects/ProjectsSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import ExperienceSection from './components/sections/ExperienceSection';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [portraitLoadFailed, setPortraitLoadFailed] = useState(false);
  const closeProjectInspector = useCallback(() => setSelectedProject(null), []);

  return (
    <div className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-ink)]">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 lg:px-10">
        <HeroSection
          portraitLoadFailed={portraitLoadFailed}
          onPortraitError={() => setPortraitLoadFailed(true)}
        />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onProjectSelect={setSelectedProject}
        />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>

      <ProjectInspectorModal
        project={selectedProject}
        onClose={closeProjectInspector}
      />
    </div>
  );
}
