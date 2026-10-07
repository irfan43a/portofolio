import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectMockup } from './ProjectMockup';
import { ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const filterOptions = ['Semua', 'Dashboard', 'E-Commerce', 'UI Library', 'Web Apps'];

  const filteredProjects = activeFilter === 'Semua'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
              <span>03</span>
              <span className="w-6 h-[1px] bg-brand-500"></span>
              <span>Portofolio Proyek</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Proyek Pilihan & Studi Kasus
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              Antarmuka web interaktif yang dibangun dengan fokus pada arsitektur komponen bersih, aksesibilitas, dan performa optimal.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 self-start md:self-auto scrollbar-none">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100/70 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Mockup Preview Header */}
              <div 
                onClick={() => onSelectProject(project)}
                className="p-3.5 sm:p-4 bg-zinc-100/50 dark:bg-zinc-950/50 border-b border-zinc-100 dark:border-zinc-800/80 cursor-pointer relative"
              >
                <ProjectMockup type={project.mockupType} title={project.title} />
                
                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-zinc-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none rounded-t-2xl">
                  <span className="px-3.5 py-1.5 rounded-full bg-zinc-900/90 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
                    <Eye size={13} /> Klik untuk Detail Studi Kasus
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded font-medium">
                        Unggulan
                      </span>
                    )}
                  </div>

                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-brand-600 dark:hover:text-brand-400 inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Studi Kasus</span>
                    <ArrowUpRight size={13} />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <GithubIcon size={15} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout Footer */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
              Tertarik melihat eksperimen dan source code lainnya?
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Lihat commit history, repositori publik, dan snippet eksperimen saya di GitHub.
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-xs font-semibold hover:border-zinc-400 shadow-2xs transition-colors shrink-0"
          >
            <GithubIcon size={15} />
            <span>Kunjungi GitHub (@irfanabidin)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
