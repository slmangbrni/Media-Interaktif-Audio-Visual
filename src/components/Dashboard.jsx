import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import {
  Play,
  ShieldCheck,
  ArrowRight,
  BookOpen
} from 'lucide-react';

export default function Dashboard({ onStartLearning, onGoToMateri, setCurrentView, onGoToInstructions }) {
  const cardMouseX = useMotionValue(0);
  const cardMouseY = useMotionValue(0);
  const cardBackground = useMotionTemplate`radial-gradient(450px circle at ${cardMouseX}px ${cardMouseY}px, rgba(255, 197, 103, 0.2), transparent 80%)`;
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleStart = () => {
    if (setCurrentView) {
      setCurrentView('materi');
    } else if (onGoToMateri) {
      onGoToMateri();
    } else if (onStartLearning) {
      onStartLearning();
    }
  };

  const handleCardMouseMove = (e) => {
    if (!e || !e.currentTarget) return;
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      if (rect && cardMouseX && typeof cardMouseX.set === 'function' && cardMouseY && typeof cardMouseY.set === 'function') {
        cardMouseX.set(e.clientX - rect.left);
        cardMouseY.set(e.clientY - rect.top);
      }
    } catch (err) {
      // safe coordinate fallback
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center items-center my-auto py-2 sm:py-4 select-none">
      
      {/* ─── HERO NEO-BRUTALIST SECTION (CENTERED WITH ZERO-LAG SPOTLIGHT TRACKER) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        onMouseMove={handleCardMouseMove}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
        className="w-full bg-white rounded-2xl md:rounded-3xl border-[2.5px] border-black shadow-[6px_6px_0px_0px_#000000] p-6 sm:p-10 md:p-12 relative overflow-hidden group"
      >
        {/* Zero-Lag Interactive Card Spotlight Tracker */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl md:rounded-3xl transition-opacity duration-200"
          style={{
            background: cardBackground,
            opacity: isCardHovered ? 1 : 0,
          }}
        />

        <div className="relative z-10 flex flex-col items-start gap-4 md:gap-6">
          {/* High Contrast Accessibility Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC567] border-2 border-black text-black text-xs md:text-sm font-bold shadow-[2px_2px_0px_#000000]">
            <ShieldCheck className="w-4 h-4 text-[#00995E]" />
            <span>WCAG AAA Compliant • Desain Khusus SLB & Inklusi SMA</span>
          </div>

          {/* Main Title with Neo-brutalist badge */}
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black tracking-tight leading-[1.15]">
            Media Interaktif Audio-Visual{' '}
            <span className="px-3 py-1 inline-block border-[2.5px] border-black rounded-xl md:rounded-2xl shadow-[4px_4px_0px_#000000] bg-[#FFC567]">
              Pembelajaran Pelafalan
            </span>{' '}
            Bahasa Inggris
          </h1>

          {/* Lead Description Paragraph */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-800 leading-relaxed max-w-3xl">
            Media visual interaktif yang dirancang khusus untuk memfasilitasi pengajar dan siswa sekolah luar biasa (SLB) serta kelas inklusi dalam mengenali artikulasi fonem bahasa Inggris melalui visualisasi gerak bibir (lip-reading), getaran pita suara, dan diagram anatomi sagital.
          </p>

          {/* Primary & Secondary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
              onClick={handleStart}
              className="flex items-center gap-2.5 px-6 py-3.5 md:px-8 md:py-4 rounded-2xl bg-[#FD5A46] text-white font-black text-base md:text-lg border-[2.5px] border-black shadow-[4px_4px_0px_#000000] hover:bg-[#ff6e5b] transition-colors cursor-pointer"
            >
              <Play className="w-5 h-5 md:w-6 md:h-6 fill-white" />
              <span>Mulai Belajar Sekarang</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
              onClick={onGoToInstructions}
              className="flex items-center gap-2.5 px-6 py-3.5 md:px-8 md:py-4 rounded-2xl bg-white text-black font-black text-base md:text-lg border-[2.5px] border-black shadow-[4px_4px_0px_#000000] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            >
              <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-black" />
              <span>Petunjuk Penggunaan</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* ─── BOTTOM KEYBOARD ESC HINT ─── */}
      <div className="text-center pt-6 pb-2 flex justify-center">
        <div className="bg-white/90 border-2 border-black rounded-full px-5 py-2 shadow-[2px_2px_0px_#000000] inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black select-none">
          <span>Tekan</span>
          <kbd className="px-2 py-0.5 text-xs font-black bg-[#FFC567] border-2 border-black rounded-md shadow-[2px_2px_0px_#000000] inline-block mx-1 font-mono">
            Esc
          </kbd>
          <span>untuk kembali ke navigasi sebelumnya kapan saja</span>
        </div>
      </div>
    </div>
  );
}
