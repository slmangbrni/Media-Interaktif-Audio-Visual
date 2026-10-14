import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Smile,
  Activity,
  Sparkles,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { TREATMENTS, VOCABULARY_DATA } from '../data/vocabulary';

export default function CategorySelect({ onSelectTreatment, onBackToDashboard, onSelectWordDirectly }) {
  const treatmentThemes = {
    bilabial: {
      accentBg: "bg-[#FFC567]",
      accentText: "text-black",
      btnBg: "bg-[#FD5A46] text-white",
      icon: Layers,
      tag: "Treatment 1"
    },
    labiodental: {
      accentBg: "bg-[#FB7DA8]",
      accentText: "text-black",
      btnBg: "bg-[#552CB7] text-white",
      icon: Smile,
      tag: "Treatment 2"
    },
    alveolar: {
      accentBg: "bg-[#058CD7]",
      accentText: "text-white",
      btnBg: "bg-[#FD5A46] text-white",
      icon: Activity,
      tag: "Treatment 3"
    },
    velar: {
      accentBg: "bg-[#00995E]",
      accentText: "text-white",
      btnBg: "bg-[#552CB7] text-white",
      icon: Sparkles,
      tag: "Treatment 4"
    },
  };

  return (
    <div className="w-full max-w-7xl px-4 md:px-8 mx-auto flex-1 flex flex-col justify-between py-2 sm:py-3 overflow-y-auto lg:overflow-hidden select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-black">
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
            onClick={onBackToDashboard}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-black font-black text-xs hover:bg-[#FFC567] transition-colors cursor-pointer"
            aria-label="Kembali ke beranda"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Kembali (Esc)</span>
          </motion.button>
          <div>
            <h1 className="font-heading font-black text-xl sm:text-2xl text-black leading-tight">
              Kategori Artikulasi Pembentukan Suara
            </h1>
            <p className="text-[11px] sm:text-xs text-black/85 font-bold">
              4 klasifikasi penempatan bibir, lidah, dan gigi dalam pengucapan bahasa Inggris
            </p>
          </div>
        </div>
      </div>

      {/* 4 Chunky Neo-Brutalist Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 my-auto">
        {TREATMENTS.map((treatment) => {
          const theme = treatmentThemes[treatment.id] || treatmentThemes.bilabial;
          const IconComp = theme.icon;
          const words = VOCABULARY_DATA.filter((v) => v.treatment === treatment.id);

          return (
            <motion.div
              key={treatment.id}
              whileHover={{ scale: 1.015 }}
              className="bg-white rounded-2xl border-[2.5px] border-black shadow-[5px_5px_0px_0px_#000000] overflow-hidden flex flex-col justify-between transition-all"
            >
              {/* Chunky Distinct Retro Accent Header */}
              <div className={`px-4 py-2.5 border-b-2 border-black flex items-center justify-between ${theme.accentBg} ${theme.accentText}`}>
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center font-black text-xs border border-black shadow-[1px_1px_0px_0px_#000000]">
                    <IconComp className="w-4 h-4 text-[#FFC567]" />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider block opacity-90">
                      {theme.tag}
                    </span>
                    <h2 className="font-heading font-black text-base sm:text-lg leading-none">
                      {treatment.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {treatment.phonemes.map((ph) => (
                    <span
                      key={ph}
                      className="px-2 py-0.5 rounded-md bg-white text-black border-1.5 border-black font-mono-ipa font-black text-xs shadow-[1px_1px_0px_0px_#000000]"
                    >
                      {ph}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-4">
                <p className="text-xs text-black font-semibold mb-2.5 leading-relaxed">
                  {treatment.desc}
                </p>

                {/* Vocal Cue Banner */}
                <div className="p-2 rounded-xl bg-[#FAF8F5] border-1.5 border-black mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FD5A46] shrink-0" />
                  <span className="text-[11px] font-black text-black">
                    Kunci Visual: {treatment.visualCue}
                  </span>
                </div>

                {/* Interactive Word Chips */}
                <div>
                  <div className="text-[10px] font-black text-black uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Daftar Kata Kosakata:</span>
                    <span className="font-mono text-[#552CB7]">{treatment.count} Kata</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {words.map((w, wIdx) => (
                      <motion.button
                        key={w.code}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98, x: 2, y: 2, transition: { duration: 0.05 } }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectWordDirectly(treatment.id, wIdx);
                        }}
                        className="px-2 py-1 rounded-lg bg-white hover:bg-[#FFC567] border-1.5 border-black text-black font-black text-[11px] text-center transition-colors cursor-pointer shadow-[2px_2px_0px_0px_#000000]"
                      >
                        <span className="font-mono">{w.word}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-3 pt-0">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
                  onClick={() => onSelectTreatment(treatment.id)}
                  className={`w-full py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm border-2 border-black shadow-[4px_4px_0px_0px_#000000] transition-colors cursor-pointer flex items-center justify-center gap-2 ${theme.btnBg}`}
                >
                  <span>Mulai Belajar {treatment.shortName}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Hint */}
      <div className="text-center pt-2 pb-1 flex justify-center">
        <div className="bg-white/90 border-2 border-black rounded-full px-4 py-1.5 shadow-[2px_2px_0px_#000000] inline-flex items-center gap-1.5 text-sm md:text-base font-bold text-black select-none">
          <span>Tekan</span>
          <kbd className="px-2.5 py-1 text-xs md:text-sm font-black bg-[#FFC567] border-2 border-black rounded-md shadow-[2px_2px_0px_#000000] inline-block mx-1 font-mono">
            Esc
          </kbd>
          <span>untuk kembali ke beranda kapan saja</span>
        </div>
      </div>
    </div>
  );
}
