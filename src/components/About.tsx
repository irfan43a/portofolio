import React from 'react';
import { personalInfo, statsData, servicesData } from '../data/portfolioData';
import { Layout, Sparkles, Zap, CheckCircle2, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-brand-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-brand-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-brand-500" />;
      default:
        return <Code2 className="w-5 h-5 text-brand-500" />;
    }
  };

  const principles = [
    {
      title: "Clean & Maintainable Code",
      desc: "Menulis kode TypeScript dan komponen React yang terstruktur rapi, reusable, dan mudah dipahami oleh anggota tim lainnya."
    },
    {
      title: "Performance & Web Vitals",
      desc: "Setiap baris kode diperhitungkan untuk performa pemuatan yang cepat, zero layout shifts (CLS), dan skor Core Web Vitals optimal."
    },
    {
      title: "Pixel-Perfect & Accessible",
      desc: "Menerjemahkan desain Figma dengan akurasi tinggi serta mengedepankan aksesibilitas (a11y/WCAG) untuk semua pengguna."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            <span>01</span>
            <span className="w-6 h-[1px] bg-brand-500"></span>
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Menghubungkan Desain Estetis dengan Engineering yang Presisi
          </h2>
        </div>

        {/* Narrative & Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Bio Story */}
          <div className="lg:col-span-7 space-y-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
            <p>
              {personalInfo.bio}
            </p>
            <p>
              Bagi saya, antarmuka pengguna bukan sekadar visual yang indah, melainkan media komunikasi utama antara pengguna dan solusi digital. Oleh karena itu, saya selalu mengutamakan hierarki informasi yang jelas, responsivitas di setiap ukuran layar, serta interaksi yang terasa natural tanpa jeda.
            </p>
            
            {/* Principles Box */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {principles.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800"
                >
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            {statsData.map((stat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                    {stat.label}
                  </div>
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/60 leading-tight">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services & Offerings Cards */}
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <span>Apa yang Bisa Saya Bantu untuk Anda</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {servicesData.map((service, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 shadow-xs hover:shadow flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 dark:bg-brand-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
