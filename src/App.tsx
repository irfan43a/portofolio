import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Playground } from './components/Playground';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CVModal } from './components/CVModal';
import type { Project } from './types/portfolio';

export function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check saved theme or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-200 flex flex-col font-sans">
      {/* Top Fixed Navbar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onDownloadCV={() => setIsCVOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Playground />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <CVModal 
        isOpen={isCVOpen} 
        onClose={() => setIsCVOpen(false)} 
      />
    </div>
  );
}

export default App;
