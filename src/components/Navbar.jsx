import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, HelpCircle, ArrowLeft } from 'lucide-react';

export default function Navbar({ activeScreen, onNavigate, onBack, canGoBack }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const rootEl = document.querySelector('.min-h-screen');
      const rootScroll = rootEl ? rootEl.scrollTop : 0;
      setIsScrolled(scrollY > 10 || rootScroll > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const rootEl = document.querySelector('.min-h-screen');
    if (rootEl) {
      rootEl.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rootEl) {
        rootEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full transition-all duration-300 bg-white/85 backdrop-blur-md border-b-2 border-black shadow-[0_2px_0px_rgba(0,0,0,0.06)] px-3 sm:px-6 md:px-8 py-2 md:py-3.5 flex items-center justify-between select-none ${
        isScrolled ? 'shadow-[0_4px_14px_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      {/* Brand & Application Title */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink min-w-0">
        <AnimatePresence mode="wait">
          {canGoBack && (
            <motion.button
              key="back-button"
              initial={{ opacity: 0, scale: 0.9, x: -8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -8 }}
              transition={{ duration: 0.15 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white border-2 border-black shadow-[2px_2px_0px_#000000] text-black font-black text-xs sm:text-sm md:text-base hover:bg-[#FFC567] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer shrink-0"
              title="Kembali ke navigasi sebelumnya (Tombol Esc)"
              aria-label="Kembali"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-black" />
              <span className="hidden sm:inline">Kembali</span>
            </motion.button>
          )}
        </AnimatePresence>

        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink min-w-0"
        >
          <img 
            src="/logo_EPVM.png" 
            alt="EPVM Logo" 
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain rounded-xl border-2 border-black bg-white p-0.5 shadow-[2px_2px_0px_#000000] shrink-0" 
            onError={(e) => { e.currentTarget.src = "/logo-EPVM.png"; }}
          />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-heading font-black text-base sm:text-xl md:text-2xl tracking-tight text-black leading-tight whitespace-nowrap">
                EPVM<span className="text-[#FD5A46]">English</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00995E] text-white border-2 border-black text-[10px] md:text-xs font-bold shadow-[1.5px_1.5px_0px_#000000]">
                <ShieldCheck className="w-3 h-3 text-white" />
                WCAG AAA
              </span>
            </div>
            {/* Descriptive subtitle hidden on mobile (< md) to prevent blowout */}
            <p className="hidden md:block text-xs md:text-sm font-semibold text-zinc-800 truncate max-w-xs sm:max-w-md lg:max-w-xl">
              Media Interaktif Audio-Visual Pembelajaran Pelafalan Bahasa Inggris
            </p>
          </div>
        </motion.div>
      </div>

      {/* Screen Navigation Links with Neo-Brutalist Buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('dashboard')}
          className={`px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl font-black text-xs sm:text-sm md:text-base cursor-pointer border-2 border-black transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
            activeScreen === 'dashboard' || activeScreen === 'beranda'
              ? 'bg-[#FFC567] text-black shadow-[3px_3px_0px_#000000]'
              : 'bg-white text-black shadow-[2px_2px_0px_#000000] hover:bg-[#FAF8F5]'
          }`}
        >
          Beranda
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('categories')}
          className={`px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl font-black text-xs sm:text-sm md:text-base cursor-pointer border-2 border-black transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
            activeScreen === 'categories' || activeScreen === 'learning' || activeScreen === 'materi'
              ? 'bg-[#FB7DA8] text-black shadow-[3px_3px_0px_#000000]'
              : 'bg-white text-black shadow-[2px_2px_0px_#000000] hover:bg-[#FAF8F5]'
          }`}
        >
          Materi
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('instructions')}
          className={`px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl font-black text-xs sm:text-sm md:text-base cursor-pointer border-2 border-black transition-all flex items-center gap-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
            activeScreen === 'instructions' || activeScreen === 'petunjuk'
              ? 'bg-[#058CD7] text-white shadow-[3px_3px_0px_#000000]'
              : 'bg-white text-black shadow-[2px_2px_0px_#000000] hover:bg-[#FAF8F5]'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Petunjuk</span>
        </motion.button>
      </div>
    </header>
  );
}
