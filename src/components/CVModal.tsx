import React, { useEffect } from 'react';
import { personalInfo, experiencesData, skillCategories } from '../data/portfolioData';
import { X, Printer, Mail, MapPin, Globe } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-10 animate-slide-up">
        
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800 mb-6 print:hidden">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Preview Curriculum Vitae (CV)
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <Printer size={13} />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="space-y-6 text-zinc-800 dark:text-zinc-200 font-sans print:text-black">
          
          {/* Header Info */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white print:text-black">
              {personalInfo.name}
            </h1>
            <div className="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-1">
              {personalInfo.role}
            </div>

            <div className="mt-3 flex flex-wrap gap-4 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <Mail size={12} /> {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Globe size={12} /> {personalInfo.socials.github}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Ringkasan Profesional
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
              Pengalaman Kerja
            </h2>
            <div className="space-y-4">
              {experiencesData.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white print:text-black">
                      {exp.role} — <span className="font-semibold text-brand-600 dark:text-brand-400">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside text-xs text-zinc-700 dark:text-zinc-300 space-y-0.5 pt-1">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Kemampuan Teknis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800/50">
                  <span className="font-bold text-zinc-900 dark:text-white block mb-1">{cat.category}</span>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {cat.items.map(i => i.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
