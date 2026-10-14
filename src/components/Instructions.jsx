import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  Eye,
  Activity,
  Layers,
  Gauge,
  Volume2,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { playVocabAudio } from '../utils/audioEngine';

export default function Instructions({ onStartLearning, onBack }) {
  const [testStatus, setTestStatus] = useState(null);

  const runTestSpeech = (type) => {
    setTestStatus(type);
    if (type === 'slow') {
      playVocabAudio('/audio_vocab/pencil.m4a', 'Pencil', { speed: 0.2 });
    } else {
      playVocabAudio('/audio_vocab/pencil.m4a', 'Pencil', { speed: 1.0 });
    }
    setTimeout(() => setTestStatus(null), 1500);
  };

  const steps = [
    {
      num: "01",
      title: "Perhatikan Gerak Bibir (Modul 1)",
      desc: "Amati bentuk bibir pada frame video. Perhatikan apakah kedua bibir menutup rapat (/p/, /b/, /m/), gigi atas menyentuh bibir bawah (/f/, /v/), atau lidah menyentuh gusi atas (/t/, /d/).",
      icon: Eye,
      badge: "bg-[#FFC567] text-black"
    },
    {
      num: "02",
      title: "Cek Getaran Pita Suara (Voiced/Voiceless)",
      desc: "Perhatikan indikator getaran pita suara. Bunyi Voiced (/b/, /v/, /d/, /g/, /m/, /n/) mengaktifkan badge hijau bergetar, sedangkan bunyi Voiceless (/p/, /f/, /t/, /k/) tetap hening.",
      icon: Activity,
      badge: "bg-[#00995E] text-white"
    },
    {
      num: "03",
      title: "Studio 2-Kolom Terpadu & Interaktif",
      desc: "Studio belajar menyajikan 2 kolom berdampingan: Frame Video Lip-Reading di sebelah kiri dan Kosakata, Objek Riil, Transkripsi IPA, serta Anatomi Sagital terpadu di sebelah kanan.",
      icon: Layers,
      badge: "bg-[#FB7DA8] text-black"
    },
    {
      num: "04",
      title: "Gunakan Tombol Tempo 0.2x & 1.0x",
      desc: "Gunakan tombol tempo 0.2x (Lambat) untuk mendengarkan dan mengamati pergerakan artikulator secara mendalam sebelum beralih ke kecepatan 1.0x (Normal).",
      icon: Gauge,
      badge: "bg-[#058CD7] text-white"
    }
  ];

  return (
    <div className="w-full max-w-7xl px-4 md:px-8 mx-auto flex-1 flex flex-col justify-between py-2 sm:py-3 overflow-y-auto lg:overflow-hidden select-none">
      
      {/* Top Header Row with Back Button */}
      <div className="flex items-center justify-between pb-2 mb-1 border-b-2 border-black">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
          onClick={onBack}
          className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-black font-black text-xs hover:bg-[#FFC567] transition-colors cursor-pointer"
          aria-label="Kembali"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Kembali (Esc)</span>
        </motion.button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC567] border-2 border-black text-black font-black text-xs shadow-[2px_2px_0px_0px_#000000]">
          <HelpCircle className="w-3.5 h-3.5 text-black" />
          <span>Panduan Penggunaan Inklusif</span>
        </div>
      </div>

      {/* Title */}
      <div className="text-center my-1">
        <h1 className="font-heading font-black text-2xl sm:text-3xl text-black">
          Petunjuk Pembelajaran Media Visual EPVM
        </h1>
        <p className="text-black/85 font-bold text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Dirancang untuk memfasilitasi pengajar SLB dan siswa tunarungu/inklusi agar dapat mengenali posisi artikulasi fonem bahasa Inggris secara visual dan kinestetik.
        </p>
      </div>

      {/* 4 Step Cards with Neo-Brutalist Styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 my-auto">
        {steps.map((st) => {
          const IconComp = st.icon;
          return (
            <motion.div
              key={st.num}
              whileHover={{ scale: 1.015 }}
              className="bg-white rounded-2xl border-[2.5px] border-black shadow-[5px_5px_0px_0px_#000000] p-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-8 h-8 rounded-xl bg-black text-[#FFC567] font-mono font-black text-sm flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
                    {st.num}
                  </span>
                  <div className={`p-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000000] ${st.badge}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <h2 className="font-heading font-black text-sm sm:text-base text-black mb-1">
                  {st.title}
                </h2>
                <p className="text-[11px] sm:text-xs text-black/90 font-medium leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Audio & Speech Test Box */}
      <motion.div
        className="bg-white rounded-2xl border-[2.5px] border-black shadow-[5px_5px_0px_0px_#000000] p-3 my-1"
      >
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-xl bg-[#058CD7] text-white border-2 border-black shadow-[2px_2px_0px_#000000] flex items-center justify-center shrink-0">
              <Volume2 className="w-4 h-4" />
            </span>
            <h3 className="font-heading font-black text-xs sm:text-sm text-black">
              Uji Coba Suara
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
            onClick={() => runTestSpeech('normal')}
            className={`px-3.5 py-1.5 rounded-xl font-black text-xs border-2 border-black cursor-pointer transition-all ${
              testStatus === 'normal'
                ? 'bg-[#552CB7] text-white shadow-[1px_1px_0px_0px_#000000]'
                : 'bg-[#552CB7] text-white shadow-[4px_4px_0px_0px_#000000] hover:bg-[#6537d9]'
            }`}
          >
            Uji Suara Normal (1.0x)
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
            onClick={() => runTestSpeech('slow')}
            className={`px-3.5 py-1.5 rounded-xl font-black text-xs border-2 border-black cursor-pointer transition-all ${
              testStatus === 'slow'
                ? 'bg-[#FD5A46] text-white shadow-[1px_1px_0px_0px_#000000]'
                : 'bg-[#FD5A46] text-white shadow-[4px_4px_0px_0px_#000000] hover:bg-[#ff6e5b]'
            }`}
          >
            Uji Suara Lambat (0.2x)
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom Action Row */}
      <div className="flex items-center justify-between pt-1 pb-1">
        <div className="bg-white/90 border-2 border-black rounded-full px-4 py-1.5 shadow-[2px_2px_0px_#000000] inline-flex items-center gap-1.5 text-sm md:text-base font-bold text-black select-none">
          <span>Tekan</span>
          <kbd className="px-2.5 py-1 text-xs md:text-sm font-black bg-[#FFC567] border-2 border-black rounded-md shadow-[2px_2px_0px_#000000] inline-block mx-1 font-mono">
            Esc
          </kbd>
          <span>untuk kembali</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
          onClick={onStartLearning}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FD5A46] hover:bg-[#ff6e5b] text-white font-black text-xs sm:text-sm border-2 border-black shadow-[4px_4px_0px_0px_#000000] transition-colors cursor-pointer"
        >
          <span>Mulai Belajar Sekarang</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </motion.button>
      </div>
    </div>
  );
}
