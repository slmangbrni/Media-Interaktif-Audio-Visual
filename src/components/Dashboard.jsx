import React from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Layers,
  Smile,
  Activity,
  Sparkles,
  ShieldCheck,
  Eye,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { TREATMENTS, VOCABULARY_DATA } from '../data/vocabulary';

export default function Dashboard({ onStartLearning, onSelectTreatment, onGoToInstructions }) {
  const treatmentIcons = {
    bilabial: Layers,
    labiodental: Smile,
    alveolar: Activity,
    velar: Sparkles,
  };

  const treatmentThemes = {
    bilabial: {
      accentBg: "bg-[#FFC567]",
      accentText: "text-black",
      badgeClass: "bg-[#FFC567] text-black",
      num: "Treatment 1",
    },
    labiodental: {
      accentBg: "bg-[#FB7DA8]",
      accentText: "text-black",
      badgeClass: "bg-[#FB7DA8] text-black",
      num: "Treatment 2",
    },
    alveolar: {
      accentBg: "bg-[#058CD7]",
      accentText: "text-white",
      badgeClass: "bg-[#058CD7] text-white",
      num: "Treatment 3",
    },
    velar: {
      accentBg: "bg-[#00995E]",
      accentText: "text-white",
      badgeClass: "bg-[#00995E] text-white",
      num: "Treatment 4",
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between select-none">
      
      {/* ─── HERO NEO-BRUTALIST RETRO CARD ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full bg-white rounded-2xl border-[2.5px] border-black shadow-[5px_5px_0px_0px_#000000] p-4 sm:p-6 mb-1 sm:mb-2"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-6">
          <div className="max-w-3xl">
            {/* High Contrast Accessibility Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC567] border-2 border-black text-black text-xs md:text-sm font-bold shadow-[2px_2px_0px_#000000]">
              <ShieldCheck className="w-4 h-4 text-[#00995E]" />
              <span>WCAG AAA Compliant • Desain Khusus SLB & Inklusi SMA</span>
            </div>

            {/* Main Title with comfortable breathing room and natural vertical balance */}
            <div className="py-4 md:py-6">
              <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-black tracking-tight leading-tight">
                Media Interaktif Audio-Visual{' '}
                <span className="px-3 py-1 inline-block border-[2.5px] border-black rounded-xl shadow-[3px_3px_0px_#000000] bg-[#FFC567]">
                  Pembelajaran Pelafalan
                </span>{' '}
                Bahasa Inggris
              </h1>
            </div>

            {/* Primary & Secondary CTA Buttons with balanced margins */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
                onClick={onStartLearning}
                className="flex items-center gap-2.5 px-6 py-3 md:px-7 md:py-3.5 rounded-2xl bg-[#FD5A46] text-white font-black text-base md:text-lg border-[2.5px] border-black shadow-[4px_4px_0px_#000000] hover:bg-[#ff6e5b] transition-colors cursor-pointer"
              >
                <Play className="w-5 h-5 md:w-6 md:h-6 fill-white" />
                <span>Mulai Belajar Sekarang</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
                onClick={onGoToInstructions}
                className="flex items-center gap-2.5 px-6 py-3 md:px-7 md:py-3.5 rounded-2xl bg-white text-black font-black text-base md:text-lg border-[2.5px] border-black shadow-[4px_4px_0px_#000000] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
              >
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-black" />
                <span>Petunjuk Penggunaan</span>
              </motion.button>
            </div>
          </div>

          {/* 4 Feature Badges Strip - Completely Harmonized */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0">
            <div className="flex items-center gap-2.5 p-3 md:p-3.5 rounded-xl bg-[#FAF8F5] border-2 border-black shadow-[3px_3px_0px_#000000]">
              <span className="p-2 md:p-2.5 rounded-xl bg-black text-[#FFC567] border-2 border-black shrink-0 flex items-center justify-center">
                <Eye className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div>
                <div className="text-sm md:text-base font-black text-black">Gerak Bibir</div>
                <div className="text-xs md:text-sm font-bold text-zinc-700">Lip-Reading</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 md:p-3.5 rounded-xl bg-[#FAF8F5] border-2 border-black shadow-[3px_3px_0px_#000000]">
              <span className="p-2 md:p-2.5 rounded-xl bg-black text-[#FFC567] border-2 border-black shrink-0 flex items-center justify-center">
                <Activity className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div>
                <div className="text-sm md:text-base font-black text-black">Pita Suara</div>
                <div className="text-xs md:text-sm font-bold text-zinc-700">Resonansi Voiced</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 md:p-3.5 rounded-xl bg-[#FAF8F5] border-2 border-black shadow-[3px_3px_0px_#000000]">
              <span className="p-2 md:p-2.5 rounded-xl bg-black text-[#FFC567] border-2 border-black shrink-0 flex items-center justify-center">
                <Layers className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div>
                <div className="text-sm md:text-base font-black text-black">Anatomi Sagital</div>
                <div className="text-xs md:text-sm font-bold text-zinc-700">Lidah & Gusi</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 md:p-3.5 rounded-xl bg-[#FAF8F5] border-2 border-black shadow-[3px_3px_0px_#000000]">
              <span className="p-2 md:p-2.5 rounded-xl bg-black text-[#FFC567] border-2 border-black shrink-0 flex items-center justify-center">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div>
                <div className="text-sm md:text-base font-black text-black">Tempo 0.2x / 1.0x</div>
                <div className="text-xs md:text-sm font-bold text-zinc-700">Slow Audio</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── 4 ARTICULATION TREATMENTS CARDS SECTION ─── */}
      <div className="mt-8 sm:mt-10 mb-6 flex flex-col items-start gap-2">
        <div className="inline-block px-5 py-2 rounded-xl bg-[#FFC567] border-2 border-black font-black text-base md:text-lg shadow-[3px_3px_0px_#000000]">
          4 Kategori Artikulasi Pengucapan (Treatments 1 – 4)
        </div>
        <p className="text-sm md:text-base font-bold text-zinc-900 mt-1">
          Pilih klasifikasi artikulasi untuk menjelajahi 20 kosakata sekolah
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full items-stretch">
        {TREATMENTS.map((treatment) => {
          const IconComp = treatmentIcons[treatment.id] || Layers;
          const words = VOCABULARY_DATA.filter((v) => v.treatment === treatment.id);
          const theme = treatmentThemes[treatment.id] || treatmentThemes.bilabial;

          return (
            <motion.div
              key={treatment.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
              onClick={() => onSelectTreatment(treatment.id)}
              className="p-5 md:p-6 flex flex-col justify-between min-h-[300px] rounded-2xl border-[2.5px] border-black shadow-[5px_5px_0px_#000000] bg-white transition-all cursor-pointer group h-full"
            >
              {/* Top Section: Header & Description with fixed flex container */}
              <div className="flex flex-col flex-1">
                {/* Header Bar: Uniform, Symmetrical Alignment without Word Count Badge */}
                <div className="flex items-center gap-3.5 mb-3">
                  <span className="w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-xl border-2 border-black bg-black text-[#FFC567] shadow-[2px_2px_0px_#000000] flex items-center justify-center shrink-0">
                    <IconComp className="w-6 h-6" />
                  </span>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-black tracking-wider text-zinc-500 uppercase leading-none mb-1">
                      {theme.num}
                    </span>
                    <h3 className="font-heading font-black text-xl md:text-2xl text-black leading-none">
                      {treatment.shortName}
                    </h3>
                  </div>
                </div>

                {/* Description Container with fixed min-h-[4.5rem] across all 4 cards */}
                <div className="flex-1 min-h-[4.5rem] flex items-start mb-3">
                  <p className="text-sm md:text-base font-medium text-zinc-800 leading-snug">
                    {treatment.desc}
                  </p>
                </div>
              </div>

              {/* Synchronized Bottom Alignment Block: Phonemes, Words, and CTA on identical baseline */}
              <div className="mt-auto flex flex-col gap-3 pt-2">
                {/* Phonemes Pills */}
                <div className="flex items-center gap-1.5 min-h-[2.25rem]">
                  {treatment.phonemes.map((ph) => (
                    <span
                      key={ph}
                      className="text-base md:text-lg font-black px-3 py-1 bg-zinc-100 border-2 border-black rounded-lg shadow-[2px_2px_0px_#000000] font-mono-ipa text-black"
                    >
                      {ph}
                    </span>
                  ))}
                </div>

                {/* Word Chips */}
                <div className="flex flex-wrap items-center gap-1.5 min-h-[2rem]">
                  {words.slice(0, 3).map((w) => (
                    <span
                      key={w.code}
                      className="text-xs md:text-sm font-bold px-2.5 py-1 bg-white border border-black rounded-md shadow-[1px_1px_0px_#000000] text-black font-mono"
                    >
                      {w.word}
                    </span>
                  ))}
                  {words.length > 3 && (
                    <span className="text-xs md:text-sm font-bold text-zinc-600 px-1">
                      +{words.length - 3} lagi
                    </span>
                  )}
                </div>

                {/* Action Link Button */}
                <div className="pt-3 border-t-2 border-black/15 flex items-center justify-between text-black">
                  <span className="text-sm md:text-base font-black text-black">
                    Buka {treatment.shortName}
                  </span>
                  <div className="w-10 h-10 border-2 border-black rounded-xl bg-[#FFC567] shadow-[2px_2px_0px_#000000] flex items-center justify-center group-hover:translate-x-1 transition-transform shrink-0">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Keyboard Hint */}
      <div className="text-center pt-8 pb-2 flex justify-center">
        <div className="bg-white/90 border-2 border-black rounded-full px-5 py-2 shadow-[2px_2px_0px_#000000] inline-flex items-center gap-2 text-sm md:text-base font-bold text-black select-none">
          <span>Tekan</span>
          <kbd className="px-2.5 py-1 text-xs md:text-sm font-black bg-[#FFC567] border-2 border-black rounded-md shadow-[2px_2px_0px_#000000] inline-block mx-1 font-mono">
            Esc
          </kbd>
          <span>untuk kembali ke navigasi sebelumnya kapan saja</span>
        </div>
      </div>
    </div>
  );
}
