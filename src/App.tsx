import { useState } from 'react';
import { Project } from './data';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
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
  const [activePillar, setActivePillar] = useState(0);
  const [portraitLoadFailed, setPortraitLoadFailed] = useState(false);

  const closeProjectInspector = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-obsidian-950)] font-sans text-stone-900">
      <SiteHeader />

      <div className="flex-1 bg-[var(--color-obsidian-950)] text-stone-800">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 p-4 sm:p-6 lg:grid-cols-[250px_1fr] lg:p-8">
          <Sidebar />

          <main className="space-y-16">
            <HeroSection
              portraitLoadFailed={portraitLoadFailed}
              onPortraitError={() => setPortraitLoadFailed(true)}
            />
            <AboutSection activePillar={activePillar} onSelectPillar={setActivePillar} />
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
        </div>
      </div>

      <ProjectInspectorModal
        project={selectedProject}
        onClose={closeProjectInspector}
      />
    </div>
  );
}
