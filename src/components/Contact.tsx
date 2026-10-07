import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, Copy, Check, Send, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Web App Baru',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Harap isi semua kolom yang diperlukan.');
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Format email tidak valid.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Web App Baru',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            <span>07</span>
            <span className="w-6 h-[1px] bg-brand-500"></span>
            <span>Hubungi Saya</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Mari Berkolaborasi & Bangun Solusi Digital
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            Punya ide proyek, peluang freelance, atau tawaran pekerjaan full-time? Mari terhubung dan diskusikan ide Anda.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Email Langsung
                </span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Fast Response
                </span>
              </div>

              <div className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white break-all mb-4">
                {personalInfo.email}
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 px-4 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span className="text-emerald-500">Email Tersalin ke Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Salin Alamat Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Other details */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-zinc-400 text-xs block">Lokasi:</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  <Clock size={16} />
                </div>
                <div>
                  <span className="text-zinc-400 text-xs block">Waktu Respon:</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">Biasanya dalam &lt; 24 jam</span>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="p-6 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Profil Profesional:
              </span>
              <div className="flex items-center space-x-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white shadow-2xs transition-colors"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white shadow-2xs transition-colors"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Pesan Berhasil Terkirim!
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
                  Terima kasih sudah menghubungi saya. Pesan Anda telah diterima dan saya akan membalasnya sesegera mungkin.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  Kirim Pesan Langsung
                </h3>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
                    <AlertCircle size={14} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Email Anda *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. budi@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Topik / Keperluan
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  >
                    <option value="Web App Baru">Pengembangan Web App / Single Page App</option>
                    <option value="Redesign UI/UX">Slicing Desain Figma ke React / Tailwind</option>
                    <option value="Konsultasi Performa">Audit & Optimasi Performa Web</option>
                    <option value="Tawaran Pekerjaan">Tawaran Pekerjaan (Full-time / Remote)</option>
                    <option value="Lainnya">Lainnya / Diskusi Santai</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Pesan *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ceritakan gambaran singkat proyek Anda, timeline, atau kebutuhan spesifik..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-zinc-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sedang Mengirim...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan Sekarang</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
