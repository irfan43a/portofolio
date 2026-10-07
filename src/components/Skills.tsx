import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code, Layers, Database, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyHighlights, setOnlyHighlights] = useState<boolean>(false);

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Core Frontend':
        return <Code size={15} />;
      case 'Styling & UI':
        return <Layers size={15} />;
      case 'State & Data Fetching':
        return <Database size={15} />;
      case 'Tools & Testing':
        return <Wrench size={15} />;
      default:
        return <Code size={15} />;
    }
  };

  const categories = [
    { id: 'all', label: 'Semua Kategori' },
    ...skillCategories.map(c => ({ id: c.category, label: c.category }))
  ];

  const displayedCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  const dailyTools = [
    { name: 'VS Code', tag: 'Editor & Extensions' },
    { name: 'Figma', tag: 'UI/UX Specs' },
    { name: 'Chrome DevTools', tag: 'Profiler & Network' },
    { name: 'GitHub', tag: 'PR & CI/CD' },
    { name: 'Vercel', tag: 'Edge Deployment' },
    { name: 'Postman', tag: 'API Testing' },
    { name: 'Lighthouse', tag: 'Performance Audit' },
    { name: 'Prettier & ESLint', tag: 'Code Quality' }
  ];

  return (
    <section id="skills" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
              <span>02</span>
              <span className="w-6 h-[1px] bg-brand-500"></span>
              <span>Teknologi & Kemampuan</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Tech Stack & Tooling Pilihan
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              Teknologi modern yang saya gunakan sehari-hari untuk merancang web apps dengan performa tinggi dan skalabilitas tinggi.
            </p>
          </div>

          {/* Filter options */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setOnlyHighlights(!onlyHighlights)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                onlyHighlights
                  ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/30'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
              }`}
            >
              <Sparkles size={13} className={onlyHighlights ? "text-brand-500" : "text-zinc-400"} />
              <span>Skill Unggulan Saja</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto pb-2 mb-8 border-b border-zinc-200/60 dark:border-zinc-800/60 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-8">
          {displayedCategories.map((catGroup, gIdx) => {
            const items = onlyHighlights 
              ? catGroup.items.filter(i => i.highlight)
              : catGroup.items;

            if (items.length === 0) return null;

            return (
              <div key={gIdx} className="bg-white dark:bg-zinc-900/60 rounded-2xl p-5 sm:p-6 border border-zinc-200 dark:border-zinc-800 shadow-xs">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
                  <div className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                      {catGroup.category}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {catGroup.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800/70 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                            {skill.name}
                          </span>
                          {skill.highlight && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium">
                              Utama
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                          {skill.experience}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-zinc-800 dark:bg-zinc-200 h-full rounded-full transition-all duration-500 group-hover:bg-brand-500 dark:group-hover:bg-brand-400"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="mt-1 flex justify-between text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
                        <span>Tingkat kemahiran</span>
                        <span>{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Daily Tools Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
          <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 mb-4">
            Tools & Workflow Sehari-hari
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {dailyTools.map((tool, idx) => (
              <div 
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/60 shadow-2xs flex items-center gap-2"
              >
                <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                  {tool.name}
                </span>
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 border-l border-zinc-200 dark:border-zinc-700 pl-2">
                  {tool.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
