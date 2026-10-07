import React from 'react';
import { ArrowDown, Send, FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onDownloadCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadCV }) => {
  const techPills = [
    { name: 'React 19', bg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
    { name: 'TypeScript', bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
    { name: 'Tailwind CSS', bg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20' },
    { name: 'Next.js', bg: 'bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 border-zinc-500/20' },
    { name: 'Vite', bg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
    { name: 'Zustand', bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-brand-500/5 dark:bg-brand-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Tersedia untuk Freelance & Full-time Roles</span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
          Frontend Developer yang merancang{' '}
          <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
            antarmuka bersih, cepat, & interaktif.
          </span>
        </h1>

        {/* Sub-headline description */}
        <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Halo, saya <span className="font-semibold text-zinc-900 dark:text-white">{personalInfo.name}</span>. Berfokus pada React, TypeScript, dan Tailwind CSS. Mengubah desain kompleks menjadi kode modular, ramah performa (Core Web Vitals), dan nyaman digunakan.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer group"
          >
            <span>Lihat Proyek</span>
            <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm font-semibold transition-all duration-200"
          >
            <span>Hubungi Saya</span>
            <Send size={14} />
          </a>

          <button
            onClick={onDownloadCV}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-sm font-medium transition-colors"
          >
            <FileText size={16} />
            <span>Download CV</span>
          </button>
        </div>

        {/* Social Links & Quick Presence */}
        <div className="mt-8 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-zinc-500 dark:text-zinc-400">
            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-500">
              Sosial:
            </span>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg hover:bg-zinc-200/60 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg hover:bg-zinc-200/60 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-lg hover:bg-zinc-200/60 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex items-center flex-wrap justify-center gap-1.5">
            <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mr-1 hidden lg:inline">
              Tech:
            </span>
            {techPills.map((tech) => (
              <span
                key={tech.name}
                className={`text-xs px-2.5 py-1 rounded-md border font-mono font-medium ${tech.bg}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
