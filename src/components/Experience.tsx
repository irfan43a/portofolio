import React from 'react';
import { experiencesData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const education = [
    {
      degree: "S1 Teknik Informatika / Ilmu Komputer",
      institution: "Universitas Negeri Terkemuka",
      period: "2017 — 2021",
      gpa: "IPK 3.82 / 4.00",
      description: "Fokus pada Rekayasa Perangkat Lunak, Algoritma & Struktur Data, serta Interaksi Manusia dan Komputer (HCI)."
    }
  ];

  const certifications = [
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta / Coursera",
      year: "2023",
      credentialId: "ID: COURS-META-88910"
    },
    {
      name: "TypeScript Professional & Clean Architecture",
      issuer: "Frontend Masters",
      year: "2023",
      credentialId: "Verified Certificate"
    }
  ];

  return (
    <section id="experience" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            <span>05</span>
            <span className="w-6 h-[1px] bg-brand-500"></span>
            <span>Pengalaman & Edukasi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Perjalanan Karir & Rekam Jejak
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            Pengalaman dalam memimpin dan berkontribusi pada pengembangan antarmuka skala produksi.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-200 dark:border-zinc-800 space-y-12">
          {experiencesData.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-100 group-hover:scale-125 transition-transform flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded">
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-5">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-zinc-400 mr-1">Stack:</span>
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Education Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                Pendidikan Formal
              </h3>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-zinc-500">{edu.period}</span>
                </div>
                <div className="text-xs font-medium text-brand-600 dark:text-brand-400">
                  {edu.institution}
                </div>
                <span className="inline-block text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {edu.gpa}
                </span>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 pt-1 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                <Award size={18} />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                Sertifikasi Profesional
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800/60">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <span className="text-[10px] font-mono text-zinc-400">{cert.year}</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {cert.issuer} • {cert.credentialId}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
