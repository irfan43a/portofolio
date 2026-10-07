import React, { useState } from 'react';
import { Sliders, Copy, Check, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';

export const Playground: React.FC = () => {
  const [componentType, setComponentType] = useState<'button' | 'card' | 'badge'>('button');
  const [accentColor, setAccentColor] = useState<'brand' | 'emerald' | 'violet' | 'rose' | 'amber'>('brand');
  const [radius, setRadius] = useState<'rounded-none' | 'rounded-lg' | 'rounded-2xl' | 'rounded-full'>('rounded-xl' as any);
  const [variant, setVariant] = useState<'solid' | 'outline' | 'subtle' | 'gradient'>('solid');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Color mappings
  const colorMap = {
    brand: {
      solid: 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-500/20',
      outline: 'border-sky-600 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/40',
      subtle: 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300',
      gradient: 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sky-500/20',
      borderAccent: 'border-sky-500',
      pill: 'bg-sky-500',
    },
    emerald: {
      solid: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20',
      outline: 'border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40',
      subtle: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
      gradient: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-emerald-500/20',
      borderAccent: 'border-emerald-500',
      pill: 'bg-emerald-500',
    },
    violet: {
      solid: 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-500/20',
      outline: 'border-violet-600 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/40',
      subtle: 'bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-300',
      gradient: 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-violet-500/20',
      borderAccent: 'border-violet-500',
      pill: 'bg-violet-500',
    },
    rose: {
      solid: 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/20',
      outline: 'border-rose-600 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40',
      subtle: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300',
      gradient: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-rose-500/20',
      borderAccent: 'border-rose-500',
      pill: 'bg-rose-500',
    },
    amber: {
      solid: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/20',
      outline: 'border-amber-600 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40',
      subtle: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
      gradient: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-500/20',
      borderAccent: 'border-amber-500',
      pill: 'bg-amber-500',
    }
  };

  const getGeneratedCode = () => {
    const col = colorMap[accentColor][variant];
    const rClass = radius;

    if (componentType === 'button') {
      return `<button className="px-5 py-2.5 ${rClass} font-semibold transition-all duration-200 inline-flex items-center gap-2 ${col}">
  <span>Klik Aksi</span>
  <ArrowRight size={16} />
</button>`;
    }

    if (componentType === 'card') {
      return `<div className="p-5 ${rClass} bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
  <div className="flex items-center justify-between mb-3">
    <span className="text-xs font-mono uppercase text-zinc-400">Metrik Pengguna</span>
    <span className="w-2.5 h-2.5 ${rClass} ${colorMap[accentColor].pill}"></span>
  </div>
  <div className="text-2xl font-bold text-zinc-900 dark:text-white">+84.2%</div>
  <p className="text-xs text-zinc-500 mt-1">Peningkatan konversi 30 hari terakhir</p>
</div>`;
    }

    return `<span className="inline-flex items-center gap-1.5 px-3 py-1 ${rClass} text-xs font-semibold ${col}">
  <Sparkles size={12} />
  <span>Feature Tag</span>
</span>`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getGeneratedCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            <span>04</span>
            <span className="w-6 h-[1px] bg-brand-500"></span>
            <span>Interactive Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Frontend UI Playground
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            Coba sesuaikan properti komponen di bawah ini secara langsung untuk melihat reaktivitas state React dan output kelas Tailwind CSS.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (Left side) */}
          <div className="lg:col-span-5 bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <span className="text-xs font-mono uppercase font-semibold text-zinc-500 flex items-center gap-1.5">
                <Sliders size={14} /> Kontrol Properti
              </span>
              <span className="text-[11px] text-zinc-400">Live State</span>
            </div>

            {/* Component Type Selector */}
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-2">
                Pilih Komponen:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'button', label: 'Button' },
                  { id: 'card', label: 'Metric Card' },
                  { id: 'badge', label: 'Badge / Pill' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setComponentType(item.id as any)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                      componentType === item.id
                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs font-semibold'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Variant Selector */}
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-2">
                Style Variant:
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'solid', label: 'Solid' },
                  { id: 'outline', label: 'Outline' },
                  { id: 'subtle', label: 'Subtle' },
                  { id: 'gradient', label: 'Gradient' },
                ].map(v => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id as any)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-medium text-center transition-all ${
                      variant === v.id
                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Color Selector */}
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-2">
                Warna Aksen:
              </label>
              <div className="flex items-center gap-2.5">
                {[
                  { id: 'brand', bg: 'bg-sky-500', name: 'Sky' },
                  { id: 'emerald', bg: 'bg-emerald-500', name: 'Emerald' },
                  { id: 'violet', bg: 'bg-violet-500', name: 'Violet' },
                  { id: 'rose', bg: 'bg-rose-500', name: 'Rose' },
                  { id: 'amber', bg: 'bg-amber-500', name: 'Amber' },
                ].map(c => (
                  <button
                    key={c.id}
                    onClick={() => setAccentColor(c.id as any)}
                    title={c.name}
                    className={`w-7 h-7 rounded-full ${c.bg} transition-all ${
                      accentColor === c.id ? 'ring-2 ring-offset-2 ring-zinc-900 dark:ring-white scale-110' : 'opacity-80 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Border Radius */}
            <div>
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-2">
                Border Radius:
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'rounded-none', label: 'Square' },
                  { id: 'rounded-lg', label: 'Small' },
                  { id: 'rounded-2xl', label: 'Medium' },
                  { id: 'rounded-full', label: 'Pill' },
                ].map(r => (
                  <button
                    key={r.id}
                    onClick={() => setRadius(r.id as any)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-medium text-center transition-all ${
                      radius === r.id
                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulation controls */}
            {componentType === 'button' && (
              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-600 dark:text-zinc-400">Simulasikan Loading State:</span>
                <button
                  onClick={() => setIsLoading(!isLoading)}
                  className={`text-xs px-2.5 py-1 rounded-md border ${
                    isLoading 
                      ? 'bg-amber-500/10 text-amber-600 border-amber-500/30' 
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700'
                  }`}
                >
                  {isLoading ? 'Sedang Loading...' : 'Normal'}
                </button>
              </div>
            )}
          </div>

          {/* Interactive Preview Canvas & Code (Right side) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Canvas Box */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-xs flex flex-col justify-between min-h-[260px] relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>// LIVE PREVIEW</span>
                <span className="flex items-center gap-1.5 text-emerald-500 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Real-time
                </span>
              </div>

              {/* Render Area */}
              <div className="my-auto flex items-center justify-center p-6">
                {componentType === 'button' && (
                  <button
                    disabled={isLoading}
                    className={`px-6 py-3 ${radius} font-semibold transition-all duration-200 inline-flex items-center gap-2 shadow-sm ${
                      variant === 'outline' ? 'border-2' : ''
                    } ${colorMap[accentColor][variant]} ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" />
                        <span>Memproses...</span>
                      </>
                    ) : (
                      <>
                        <span>Aksi Utama</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                )}

                {componentType === 'card' && (
                  <div className={`p-6 ${radius} bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm max-w-sm w-full transition-all`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono uppercase text-zinc-500">Performa Aplikasi</span>
                      <span className={`w-3 h-3 ${radius} ${colorMap[accentColor].pill}`}></span>
                    </div>
                    <div className="text-3xl font-extrabold text-zinc-900 dark:text-white font-mono">
                      99.8%
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Uptime stabil dan latensi rata-rata di bawah 120ms.
                    </p>
                  </div>
                )}

                {componentType === 'badge' && (
                  <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 ${radius} text-xs font-semibold ${
                    variant === 'outline' ? 'border' : ''
                  } ${colorMap[accentColor][variant]}`}>
                    <Sparkles size={13} />
                    <span>Feature Component v2.0</span>
                  </div>
                )}
              </div>

              <div className="text-center text-[11px] text-zinc-400">
                Ubah parameter di sebelah kiri untuk melihat pembaruan instan.
              </div>
            </div>

            {/* Generated Code Snippet */}
            <div className="bg-zinc-950 text-zinc-200 rounded-2xl p-5 border border-zinc-800 font-mono text-xs shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
                <span className="text-zinc-400 text-[11px] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  Generated React & Tailwind Snippet
                </span>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-[11px] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Salin Kode</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="overflow-x-auto text-zinc-300 leading-relaxed scrollbar-none">
                <code>{getGeneratedCode()}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
