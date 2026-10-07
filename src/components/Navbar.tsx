import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, ArrowUpRight, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'playground', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Playground', href: '#playground' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zinc-50/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
              <Code2 size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-zinc-900 dark:text-white tracking-tight text-base sm:text-lg flex items-center gap-1.5">
                {personalInfo.name.split(' ')[0]}
                <span className="text-brand-500 font-mono">.dev</span>
              </span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 -mt-1 hidden sm:block">
                Frontend Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-zinc-100/80 dark:bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right actions: Theme toggle + Contact CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 sm:p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
            >
              {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>

            {/* Direct Hire / Contact CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white shadow-xs hover:shadow transition-all duration-200"
            >
              <span>Hubungi</span>
              <Send size={12} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi"
              className="md:hidden p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-2 animate-slide-up shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={14} className="text-zinc-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-2">
            <span className="text-xs text-zinc-500">Tampilan {isDark ? 'Gelap' : 'Terang'}</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-medium"
            >
              {isDark ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
