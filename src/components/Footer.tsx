import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-sm">
              <Code2 size={16} />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white">
                {personalInfo.name}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Frontend Developer & UI Specialist
              </div>
            </div>
          </div>

          {/* Center Copyright & Tech */}
          <div className="text-center text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
            <div>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </div>
            <div className="text-[11px] text-zinc-400 dark:text-zinc-500">
              Dibangun dengan React 19, TypeScript, dan Tailwind CSS.
            </div>
          </div>

          {/* Right Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs font-medium cursor-pointer"
          >
            <span>Ke Atas</span>
            <ArrowUp size={14} />
          </button>

        </div>
      </div>
    </footer>
  );
};
