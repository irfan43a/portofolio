import React from 'react';
import { testimonialsData } from '../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            <span>06</span>
            <span className="w-6 h-[1px] bg-brand-500"></span>
            <span>Rekomendasi & Testimoni</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Apa Kata Rekan Kerja & Klien
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            Feedback nyata dari Product Lead, Designer, dan CTO yang pernah berkolaborasi bersama.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top rating stars + quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={20} className="text-zinc-300 dark:text-zinc-700" />
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-xs">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {item.role}, <span className="font-semibold">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
