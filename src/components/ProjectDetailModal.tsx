import React, { useEffect } from 'react';
import type { Project } from '../types/portfolio';
import { ProjectMockup } from './ProjectMockup';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-8 animate-slide-up">
        
        {/* Header bar */}
        <div className="flex items-start justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-1.5">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              {project.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup modal"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mockup Preview */}
        <div className="my-5">
          <ProjectMockup type={project.mockupType} title={project.title} />
        </div>

        {/* Content Details */}
        <div className="space-y-5 text-xs sm:text-sm">
          {/* Overview */}
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Ringkasan Proyek</h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 dark:text-red-400 mb-1.5">
                <AlertCircle size={14} />
                <span>Tantangan Frontend</span>
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-1.5">
                <CheckCircle2 size={14} />
                <span>Solusi & Arsitektur</span>
              </div>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Metrics */}
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-500" />
              <span>Dampak & Metrik Kunci</span>
            </h4>
            <ul className="space-y-1.5">
              {project.metrics.map((m, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Teknologi yang Digunakan</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Kunjungi Live Demo</span>
              <ExternalLink size={13} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <GithubIcon size={14} />
              <span>Lihat Kode</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white px-3 py-1.5"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
