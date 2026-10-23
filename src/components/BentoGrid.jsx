import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  Gauge,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle,
  Headphones,
} from 'lucide-react';
import ArticulatorSvg from './ArticulatorSvg';
import { speakWord, stopAllSpeech } from '../utils/audioEngine';

/**
 * Resolves .m4a audio path cleanly for all 20 vocabulary items
 */
const getAudioPath = (wordObj) => {
  if (!wordObj) return '';
  if (wordObj.audioUrl) return wordObj.audioUrl;
  if (wordObj.audioSrc) return wordObj.audioSrc;
  const rawWord = (wordObj.word || '').toLowerCase().trim();
  const cleanName = rawWord.replace(/\s+/g, '');
  if (cleanName === 'nametag') return '/audio_vocab/nametag.m4a';
  return `/audio_vocab/${cleanName}.m4a`;
};

/**
 * Resolves .mp4 video path cleanly for all 20 vocabulary items
 */
const getVideoPath = (wordObj) => {
  if (!wordObj) return '';
  if (wordObj.videoUrl) return wordObj.videoUrl;
  if (wordObj.videoSrc && wordObj.videoSrc.startsWith('/videos_vocab/')) return wordObj.videoSrc;
  const rawWord = (wordObj.word || '').toLowerCase().trim();
  const cleanName = rawWord.replace(/\s+/g, '');
  if (cleanName === 'nametag') return '/videos_vocab/nametag.mp4';
  return `/videos_vocab/${cleanName}.mp4`;
};

/**
 * BentoGrid Component (2-Column Side-by-Side Studio Edition)
 * Strictly fitted within single-canvas h-[100dvh] viewport height.
 * 
 * Column 1: Modul 1 - Frame Video Artikulasi & Kontrol Putar
 * Column 2: Unified Modul 2 - Kosakata, Objek Riil & Anatomi Sagital
 */
export default function BentoGrid({
  currentWord,
  wordsInTreatment,
  currentIndex,
  onSelectIndex,
  onBackToCategories,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0); // 1.0 or 0.2
  const [timecode, setTimecode] = useState("00:00 / 00:03");
  const [activeLipShape, setActiveLipShape] = useState(currentWord.shape || 'bilabial');
  const [waveSeed, setWaveSeed] = useState(0);
  const [videoError, setVideoError] = useState(false);

  // Single Audio & Video element runtime references
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const waveIntervalRef = useRef(null);

  useEffect(() => {
    setActiveLipShape(currentWord.shape || 'bilabial');
    setVideoError(false);
    stopPlayback();
    setTimecode("00:00 / 00:03");

    const vSrc = getVideoPath(currentWord);
    const aSrc = getAudioPath(currentWord);

    if (videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.src = vSrc;
        videoRef.current.load();
      } catch (e) {}
    }
    if (audioRef.current) {
      try {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.src = aSrc;
        audioRef.current.load();
      } catch (e) {}
    }
  }, [currentWord]);

  useEffect(() => {
    return () => {
      stopPlayback();
    };
  }, []);

  // Keyboard navigation shortcuts for Screen 4
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentIndex < wordsInTreatment.length - 1) {
          onSelectIndex(currentIndex + 1);
        } else {
          onBackToCategories();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) {
          onSelectIndex(currentIndex - 1);
        } else {
          onBackToCategories();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, wordsInTreatment, isPlaying, playbackSpeed]);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime || 0;
      const dur = videoRef.current.duration || (playbackSpeed <= 0.2 ? 6 : 3);
      const curSec = Math.floor(cur);
      const totalSec = Math.ceil(dur);
      const formatTime = (s) => (s < 10 ? `0${s}` : `${s}`);
      setTimecode(`00:${formatTime(curSec)} / 00:${formatTime(totalSec)}`);
    }

    if (!videoRef.current || !audioRef.current || audioRef.current.ended) return;
    const drift = Math.abs(videoRef.current.currentTime - audioRef.current.currentTime);
    // If audio drifts by more than 120ms, snap it back to match video
    if (drift > 0.12) {
      audioRef.current.currentTime = videoRef.current.currentTime;
    }
  };

  const handleAudioTimeUpdate = () => {
    if (videoError || !videoRef.current) {
      if (audioRef.current) {
        const cur = audioRef.current.currentTime || 0;
        const dur = audioRef.current.duration || 3;
        const curSec = Math.floor(cur);
        const totalSec = Math.ceil(dur);
        const formatTime = (s) => (s < 10 ? `0${s}` : `${s}`);
        setTimecode(`00:${formatTime(curSec)} / 00:${formatTime(totalSec)}`);
      }
    }
  };

  const stopPlayback = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (waveIntervalRef.current) {
      clearInterval(waveIntervalRef.current);
      waveIntervalRef.current = null;
    }
    if (audioRef.current) {
      try {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } catch (e) {}
    }
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    stopAllSpeech();
    if (videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch (e) {}
    }
    setIsPlaying(false);
  };

  /**
   * Synchronized Audio-Video Playback:
   * Video acts as the Master Clock for completion.
   * Both share identical playbackRate (0.5x in slow practice mode for audible playback, 1.0x in normal).
   */
  const handlePlay = (opts = {}) => {
    let speed = playbackSpeed;
    let slowMotion = false;
    let fromStart = true;

    if (typeof opts === 'number') {
      speed = opts;
      slowMotion = opts <= 0.2;
    } else if (typeof opts === 'object' && opts !== null) {
      if (opts.speed !== undefined) speed = opts.speed;
      if (opts.slowMotion !== undefined) slowMotion = opts.slowMotion;
      if (opts.fromStart !== undefined) fromStart = opts.fromStart;
    }

    const isSlowMode = slowMotion || speed <= 0.2;
    const uiSpeed = isSlowMode ? 0.2 : 1.0;
    setPlaybackSpeed(uiSpeed);

    // Stop ongoing speech & timers
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    stopAllSpeech();

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (waveIntervalRef.current) {
      clearInterval(waveIntervalRef.current);
      waveIntervalRef.current = null;
    }

    // 2. Lock Playback Speeds 1:1 (Identical Tempo)
    // 0.5x is the lowest audible Chromium HTML5 rate for slow practice mode
    const activeRate = isSlowMode ? 0.5 : 1.0;

    // 3. Precision Start: Reset both media timestamps to zero simultaneously
    const videoPath = getVideoPath(currentWord);
    if (videoRef.current && videoPath) {
      const fullVPath = videoPath.startsWith('http') ? videoPath : window.location.origin + videoPath;
      if (videoRef.current.src !== fullVPath && !videoRef.current.src.endsWith(videoPath)) {
        videoRef.current.src = videoPath;
      }
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = activeRate;
    }

    const audioPath = getAudioPath(currentWord);
    if (audioRef.current && audioPath) {
      const fullPath = audioPath.startsWith('http') ? audioPath : window.location.origin + audioPath;
      if (audioRef.current.src !== fullPath && !audioRef.current.src.endsWith(audioPath)) {
        audioRef.current.src = audioPath;
      }

      audioRef.current.currentTime = 0;
      audioRef.current.preservesPitch = true;
      audioRef.current.mozPreservesPitch = true;
      audioRef.current.webkitPreservesPitch = true;
      audioRef.current.playbackRate = activeRate;
    }

    setIsPlaying(true);

    // Play both promises concurrently
    Promise.all([
      videoRef.current && !videoError ? videoRef.current.play() : Promise.resolve(),
      audioRef.current && audioPath ? audioRef.current.play() : Promise.resolve()
    ]).catch((err) => {
      console.warn("[BentoGrid] Concurrent media playback:", err);
      if (!audioRef.current || videoError) {
        speakWord(currentWord?.word || '', {
          speed: activeRate,
          lang: 'en-US',
          onEnd: () => {
            if (videoError || !videoRef.current) stopPlayback();
          },
        });
      }
    });

    // Drive dynamic waveform animation while playing
    waveIntervalRef.current = setInterval(() => {
      setWaveSeed((prev) => (prev + 1) % 100);
    }, 120);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      handlePlay({ fromStart: true });
    }
  };

  const isLastWord = currentIndex >= wordsInTreatment.length - 1;

  return (
    <div className="w-full max-w-7xl max-w-screen overflow-x-hidden mx-auto flex-1 flex flex-col justify-between py-1 sm:py-2 select-none">
      
      {/* ─── COMPACT ARCADE-STYLE HUD BAR (NO HORIZONTAL OVERFLOW) ─── */}
      <div className="w-full max-w-full overflow-hidden flex items-center justify-between gap-1.5 sm:gap-2 pb-2 mb-2 border-b-2 border-black">
        {/* Left: Back to Category button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          onClick={onBackToCategories}
          className="flex items-center gap-1 text-xs font-black px-2.5 py-1.5 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_#000000] hover:bg-[#FFC567] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer shrink-0"
          aria-label="Kembali ke kategori artikulasi"
        >
          <ChevronLeft className="w-4 h-4 stroke-[3]" />
          <span className="hidden xs:inline sm:inline">Kategori</span>
          <span className="hidden md:inline">(Esc)</span>
        </motion.button>

        {/* Center: Active Category & Progress badge in deep violet */}
        <div className="flex items-center gap-1 bg-[#4D28D4] text-white border-2 border-black px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-black shadow-[2px_2px_0px_#000000] truncate text-center shrink">
          <span className="truncate uppercase tracking-wider">
            {currentWord.shape || currentWord.treatment}
          </span>
          <span className="text-[#FFC567] mx-0.5">•</span>
          <span className="font-mono text-[#FFC567] tracking-tight">
            {String(currentIndex + 1).padStart(2, '0')}/{String(wordsInTreatment.length).padStart(2, '0')}
          </span>
        </div>

        {/* Right: Unified Prev (<) and Next (>) tactile game buttons */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={currentIndex === 0}
            onClick={() => onSelectIndex(currentIndex - 1)}
            className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border-2 border-black font-black text-xs transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
              currentIndex === 0
                ? 'opacity-40 bg-zinc-200 cursor-not-allowed text-zinc-400'
                : 'bg-white text-black hover:bg-[#FFC567] shadow-[2px_2px_0px_#000000] cursor-pointer'
            }`}
            aria-label="Kata sebelumnya"
          >
            <ChevronLeft className="w-4 h-4 stroke-[3]" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (isLastWord) {
                onBackToCategories();
              } else {
                onSelectIndex(currentIndex + 1);
              }
            }}
            className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg border-2 border-black font-black text-xs transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer ${
              isLastWord
                ? 'bg-[#00995E] text-white shadow-[2px_2px_0px_#000000] hover:bg-[#00804e]'
                : 'bg-[#FD5A46] text-white shadow-[2px_2px_0px_#000000] hover:bg-[#ff6e5b]'
            }`}
            aria-label={isLastWord ? 'Selesai materi' : 'Kata berikutnya'}
          >
            <span>{isLastWord ? 'Selesai' : 'Lanjut'}</span>
            {isLastWord ? (
              <CheckCircle className="w-3.5 h-3.5 text-[#FFC567]" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            )}
          </motion.button>
        </div>
      </div>

      {/* ─── 2-COLUMN SIDE-BY-SIDE NEO-BRUTALISM STUDIO ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 my-auto items-stretch w-full max-w-full">
        
        {/* ════════════════════════════════════════════════════════════════
            COLUMN 1: MODUL 1 (FRAME VIDEO ARTIKULASI & KONTROL) (Col Span 6)
            ════════════════════════════════════════════════════════════════ */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000000] p-3 sm:p-4 relative"
        >
          {/* Header Row: Category Badge cleanly wraps without overlapping */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-lg bg-black text-[#FFC567] shrink-0">
                <Eye className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-heading font-black text-xs sm:text-sm text-black leading-tight">
                  Modul 1: Frame Video Artikulasi
                </h3>
                <span className="text-[10px] font-bold text-black/70">
                  Sinkronisasi Visual Lip-Reading & Equalizer
                </span>
              </div>
            </div>

            {/* Vocal Hint Pill */}
            <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-[#FFC567] border-2 border-black text-black font-black text-[10px] flex items-center gap-1 shadow-[2px_2px_0px_0px_#000000]">
              <Sparkles className="w-3 h-3 text-[#FD5A46]" />
              <span>{currentWord.shape.toUpperCase()} {currentWord.phoneme}</span>
            </span>
          </div>

          {/* 4:3 Video Player Container (never letterboxed awkwardly) */}
          <motion.div
            whileTap={{ scale: 0.99 }}
            onClick={togglePlayPause}
            className="w-full bg-[#151226] rounded-xl relative aspect-[4/3] max-h-[260px] sm:max-h-[300px] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden group border-2 border-black shadow-[3px_3px_0px_0px_#000000]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                togglePlayPause();
              }
            }}
            aria-label="Area video artikulasi. Klik untuk putar atau jeda."
          >
            {/* Dedicated HTML5 Audio Element for authentic .m4a audio playback */}
            <audio
              ref={audioRef}
              src={getAudioPath(currentWord)}
              preload="auto"
              onTimeUpdate={handleAudioTimeUpdate}
              onEnded={() => {
                // If video is errored or missing, audio completes playback
                if (videoError || !videoRef.current) {
                  stopPlayback();
                }
              }}
              onError={(e) => {
                console.warn(`[BentoGrid] Audio element error for ${currentWord?.word}:`, e);
                if (audioRef.current && audioRef.current.src.includes('nametag.m4a')) {
                  audioRef.current.src = '/audio_vocab/name_tag.m4a';
                  audioRef.current.play().catch(() => {
                    speakWord(currentWord?.word || '', {
                      speed: playbackSpeed <= 0.2 ? 0.5 : 1.0,
                      lang: 'en-US',
                      onEnd: () => {
                        if (videoError || !videoRef.current) stopPlayback();
                      },
                    });
                  });
                  return;
                }
                speakWord(currentWord?.word || '', {
                  speed: playbackSpeed <= 0.2 ? 0.5 : 1.0,
                  lang: 'en-US',
                  onEnd: () => {
                    if (videoError || !videoRef.current) stopPlayback();
                  },
                });
              }}
              className="hidden"
            />

            {/* Real HTML5 Video Player in Module 1 Viewport */}
            {videoError ? (
              <div className="flex flex-col items-center justify-center p-4 text-center z-10 select-none">
                <div className="w-12 h-12 rounded-full bg-[#FFC567] border-2 border-black flex items-center justify-center mb-2 shadow-[2px_2px_0px_#000000]">
                  <Eye className="w-6 h-6 text-black" />
                </div>
                <span className="text-white font-black text-sm">Video Artikulasi: {currentWord.word}</span>
                <span className="text-[#FFC567] text-xs font-semibold mt-1">Audio .m4a aktif & tersinkronisasi</span>
              </div>
            ) : (
              <video
                ref={videoRef}
                src={getVideoPath(currentWord)}
                playsInline
                muted
                preload="auto"
                className="w-full h-full object-contain rounded-xl"
                onTimeUpdate={handleVideoTimeUpdate}
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    const dur = Math.ceil(videoRef.current.duration || 3);
                    const formatTime = (s) => (s < 10 ? `0${s}` : `${s}`);
                    setTimecode(`00:00 / 00:${formatTime(dur)}`);
                  }
                }}
                onEnded={() => {
                  setIsPlaying(false);
                  if (audioRef.current) {
                    try {
                      audioRef.current.pause();
                      audioRef.current.currentTime = 0;
                    } catch (e) {}
                  }
                  if (waveIntervalRef.current) {
                    clearInterval(waveIntervalRef.current);
                    waveIntervalRef.current = null;
                  }
                }}
                onError={(e) => {
                  console.warn("Video failed to load:", e.target.src);
                  if (e.target.src && e.target.src.includes('nametag.mp4')) {
                    e.target.src = '/videos_vocab/name_tag.mp4';
                    return;
                  }
                  setVideoError(true);
                }}
              />
            )}

            {/* Center Play Overlay Icon on hover/pause */}
            {!isPlaying && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 rounded-xl backdrop-blur-xs group-hover:bg-black/30 transition-all pointer-events-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FD5A46] text-white flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_#000000] group-hover:scale-110 transition-transform pointer-events-auto">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </div>
            )}

            {/* Top Bar inside Video: Timecode & Voiced Badge */}
            <div className="absolute top-2 left-2.5 right-2.5 z-20 flex items-center justify-between text-xs text-white pointer-events-none">
              <span className="font-mono bg-black px-2 py-0.5 rounded-md border-1.5 border-[#FFC567] text-[#FFC567] font-black text-[11px] shadow-[2px_2px_0px_0px_#000000]">
                {timecode}
              </span>

              {/* Voiced Vibration Indicator for Deaf Students (#00995E) */}
              <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border-1.5 border-black text-[10px] font-black shadow-[2px_2px_0px_0px_#000000] ${
                currentWord.voiced
                  ? (isPlaying ? 'bg-[#00995E] text-white animate-pulse' : 'bg-[#00995E] text-white')
                  : 'bg-black/80 text-white'
              }`}>
                <span className={`w-2 h-2 rounded-full ${currentWord.voiced ? (isPlaying ? 'bg-[#FFC567] animate-ping' : 'bg-[#FFC567]') : 'bg-slate-400'}`} />
                <span>{currentWord.voiced ? 'Pita Suara Bergetar' : 'Hening (Voiceless)'}</span>
              </div>
            </div>

            {/* Bottom Bar: Dynamic Equalizer Waveform dancing across the bottom */}
            <div className="absolute bottom-2 left-3 right-3 z-20 flex items-center justify-center gap-1 sm:gap-1.5 h-6 pointer-events-none">
              {[12, 22, 14, 28, 16, 24, 18, 28, 15, 24, 26, 14, 20, 24, 16, 22, 14, 26, 18, 24, 15, 28, 16, 20].map((baseHeight, i) => {
                const colors = ['bg-[#058CD7]', 'bg-[#FFC567]', 'bg-[#FB7DA8]', 'bg-[#00995E]'];
                const chosenColor = colors[i % 4];
                const mod = isPlaying ? ((waveSeed + i * 3) % 10) * 1.5 : 0;
                const currentH = isPlaying ? Math.min(28, Math.max(6, baseHeight + mod - 4)) : 5;

                return (
                  <span
                    key={i}
                    style={{
                      height: `${currentH}px`,
                      transition: 'height 0.1s ease'
                    }}
                    className={`w-1 sm:w-1.5 md:w-2 rounded-full border border-black ${
                      isPlaying ? chosenColor : 'bg-white/40'
                    }`}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Module 1 Controls: Play, Replay, and 1.0x / 0.2x Speed Toggles */}
          <div className="flex flex-col gap-2 mt-2 pt-2 border-t-2 border-black/15">
            {/* Tactile Arcade Buttons: Putar & Ulangi */}
            <div className="grid grid-cols-2 gap-2 w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={togglePlayPause}
                className={`min-h-[44px] py-2.5 px-4 rounded-xl font-black text-sm border-2 border-black cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5 active:shadow-none transition-all ${
                  isPlaying
                    ? 'bg-[#FFC567] text-black shadow-[3px_3px_0px_#000000]'
                    : 'bg-[#FD5A46] text-white shadow-[3px_3px_0px_#000000] hover:bg-[#ff6e5b]'
                }`}
                aria-label={isPlaying ? 'Jeda video' : 'Putar video'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                <span>{isPlaying ? 'Jeda' : 'Putar'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePlay({ fromStart: true })}
                className="min-h-[44px] py-2.5 px-4 rounded-xl bg-white text-black font-black text-sm border-2 border-black shadow-[3px_3px_0px_#000000] hover:bg-[#FAF8F5] flex items-center justify-center gap-1.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                title="Putar ulang dari awal"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi</span>
              </motion.button>
            </div>

            {/* Tempo Toggle (Full-width underneath, minimum 44px touch target) */}
            <div className="w-full flex items-center justify-between gap-1.5 bg-[#FAF8F5] p-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000000] min-h-[44px]">
              <span className="text-xs font-black text-black px-2 flex items-center gap-1.5 shrink-0">
                <Gauge className="w-4 h-4 text-[#FD5A46]" />
                <span>Tempo:</span>
              </span>

              <div className="grid grid-cols-2 gap-1.5 flex-1">
                <button
                  onClick={() => {
                    setPlaybackSpeed(0.2);
                    handlePlay({ speed: 0.2, fromStart: true });
                  }}
                  className={`min-h-[36px] py-1.5 px-3 rounded-lg text-xs font-black transition-all cursor-pointer text-center ${
                    playbackSpeed === 0.2
                      ? 'bg-[#FD5A46] text-white border-1.5 border-black shadow-[2px_2px_0px_#000000]'
                      : 'text-black hover:bg-[#FFC567] bg-white border border-black/20'
                  }`}
                  aria-pressed={playbackSpeed === 0.2}
                  title="Kecepatan lambat 0.2x"
                >
                  0.2x (Lambat)
                </button>

                <button
                  onClick={() => {
                    setPlaybackSpeed(1.0);
                    handlePlay({ speed: 1.0, fromStart: true });
                  }}
                  className={`min-h-[36px] py-1.5 px-3 rounded-lg text-xs font-black transition-all cursor-pointer text-center ${
                    playbackSpeed === 1.0
                      ? 'bg-[#058CD7] text-white border-1.5 border-black shadow-[2px_2px_0px_#000000]'
                      : 'text-black hover:bg-[#FFC567] bg-white border border-black/20'
                  }`}
                  aria-pressed={playbackSpeed === 1.0}
                  title="Kecepatan normal 1.0x"
                >
                  1.0x (Normal)
                </button>
              </div>
            </div>
          </div>
        </motion.div>


        {/* ════════════════════════════════════════════════════════════════
            COLUMN 2: UNIFIED MODUL 2 (KOSAKATA, OBJEK & ANATOMI SAGITAL) (Col Span 6)
            ════════════════════════════════════════════════════════════════ */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000000] p-3 sm:p-4 relative select-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#552CB7] text-white border-2 border-black font-black text-xs shadow-[2px_2px_0px_0px_#000000]">
              <Headphones className="w-3.5 h-3.5 text-white" />
              <span>Modul 2: Kosakata, Objek & Anatomi</span>
            </span>

            <span className="text-xs font-mono font-black text-black bg-[#FFC567] px-2.5 py-0.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
              {currentWord.code}
            </span>
          </div>

          {/* Top Section: Interactive Flashcard Format (Object Image on Left + Word Info on Right) */}
          <div className="flex items-center gap-3 sm:gap-4 my-1">
            {/* Left: Real-world Object Image Frame */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-white rounded-xl border-2 border-black p-2 shadow-[2px_2px_0px_#000000] flex items-center justify-center shrink-0 overflow-hidden">
              <img
                key={currentWord.code || currentWord.word}
                src={currentWord.image}
                alt={currentWord.word}
                className="max-h-full max-w-full object-contain select-none"
                onError={(e) => {
                  if (!e.target.dataset.triedFallback) {
                    e.target.dataset.triedFallback = 'true';
                    if (e.target.src.endsWith('.png')) {
                      e.target.src = e.target.src.replace('.png', '.jpg');
                      return;
                    } else if (e.target.src.endsWith('.jpg')) {
                      e.target.src = e.target.src.replace('.jpg', '.png');
                      return;
                    }
                  }
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Right: Word, Translation, Phonetic, Badges */}
            <div className="flex flex-col justify-center flex-1 min-w-0">
              {/* English Word + Indonesian Translation Pill */}
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black tracking-tight leading-none truncate">
                  {currentWord.word}
                </h2>
                <span className="bg-[#FFC567] text-black font-black text-xs sm:text-sm px-2.5 py-0.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_#000000] shrink-0">
                  {currentWord.translation}
                </span>
              </div>

              {/* Phonetic row: IPA Symbol + Pronunciation Guide Badge */}
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className="font-mono-ipa font-black text-base sm:text-xl text-black">
                  {currentWord.ipa}
                </span>
                <span className="font-mono text-xs font-black text-black bg-[#FAF8F5] border-1.5 border-black px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_0px_#000000]">
                  /{currentWord.guide}/
                </span>
              </div>

              {/* Phoneme & Vocal Cord Game-Tag Badges */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="text-xs font-black py-1 px-2.5 rounded-md border-2 border-black bg-[#552CB7] text-white shadow-[1.5px_1.5px_0px_0px_#000000]">
                  Fonem: {currentWord.phoneme}
                </span>
                <span className={`text-xs font-black py-1 px-2.5 rounded-md border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000000] ${
                  currentWord.voiced ? 'bg-[#00995E] text-white' : 'bg-[#FB7DA8] text-black'
                }`}>
                  {currentWord.voiced ? 'Pita Suara Bergetar' : 'Voiceless'}
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-black/15 my-2 sm:my-3" />

          {/* Middle Section: Dynamic Sagittal Vocal Tract Diagram */}
          <div className="h-[140px] md:h-[180px] w-full bg-white rounded-xl border-2 border-black p-2 flex items-center justify-center shadow-[2px_2px_0px_#000000] overflow-hidden">
            {currentWord.sagittalImage ? (
              <img
                key={currentWord.sagittalImage}
                src={currentWord.sagittalImage}
                alt={`Anatomi Sagital fonem ${currentWord.phoneme}`}
                className="max-h-full max-w-full object-contain mx-auto select-none"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallbackEl = e.currentTarget.parentElement.querySelector('.sagittal-svg-fallback');
                  if (fallbackEl) fallbackEl.style.display = 'flex';
                }}
              />
            ) : null}
            <div
              className="sagittal-svg-fallback w-full h-full items-center justify-center"
              style={{ display: currentWord.sagittalImage ? 'none' : 'flex' }}
            >
              <ArticulatorSvg phoneme={currentWord.phoneme} isVoiced={currentWord.voiced} />
            </div>
          </div>

          {/* Bottom Section: Full-width Yellow Articulation Mechanism Banner */}
          <div className="w-full mt-2 sm:mt-3 p-3 bg-[#FFC567] border-2 border-black rounded-xl shadow-[2px_2px_0px_#000000]">
            <p className="text-xs md:text-sm font-bold text-black leading-relaxed">
              {currentWord.articulatorDesc || currentWord.articulationDesc}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
