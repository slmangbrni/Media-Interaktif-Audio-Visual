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
    <div className="w-full max-w-7xl px-4 md:px-8 mx-auto flex-1 flex flex-col justify-between py-2 sm:py-2.5 overflow-y-auto lg:overflow-hidden select-none">
      
      {/* ─── TOP WORKSPACE CONTROLS & BREADCRUMB BAR ─── */}
      <div className="flex items-center justify-between gap-2 pb-2 mb-1.5 border-b-2 border-black">
        {/* Left: Navigation and Breadcrumb */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
            onClick={onBackToCategories}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-black font-black text-xs hover:bg-[#FFC567] transition-colors cursor-pointer"
            aria-label="Kembali ke kategori artikulasi"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Kategori (Esc)</span>
          </motion.button>

          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-xl bg-[#552CB7] text-white border-2 border-black font-black text-xs tracking-wider uppercase shadow-[2px_2px_0px_0px_#000000]">
              {currentWord.treatmentTitle}
            </span>
            <span className="px-2 py-1 rounded-lg bg-[#FFC567] text-black border-2 border-black font-black text-xs font-mono shadow-[2px_2px_0px_0px_#000000]">
              {currentWord.code}
            </span>
          </div>
        </div>

        {/* Center: Stepper Progress Dots */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-black text-black">
            {currentIndex + 1}/{wordsInTreatment.length}
          </span>
          <div className="flex items-center gap-1">
            {wordsInTreatment.map((item, idx) => (
              <button
                key={item.code}
                onClick={() => onSelectIndex(idx)}
                className={`transition-all rounded-full cursor-pointer border-1.5 border-black ${
                  idx === currentIndex
                    ? 'w-5 h-2.5 bg-[#FD5A46]'
                    : 'w-2.5 h-2.5 bg-white hover:bg-[#FFC567]'
                }`}
                title={`${item.code}: ${item.word}`}
                aria-label={`Pilih kata ${item.word}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Word Prev/Next Stepper Navigation */}
        <div className="flex items-center gap-2">
          {/* Stepper Buttons */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98, x: 2, y: 2, transition: { duration: 0.05 } }}
            disabled={currentIndex === 0}
            onClick={() => onSelectIndex(currentIndex - 1)}
            className={`p-1.5 sm:p-2 rounded-xl border-2 border-black font-black cursor-pointer transition-all ${
              currentIndex === 0
                ? 'opacity-40 bg-slate-100 cursor-not-allowed text-slate-400'
                : 'bg-white text-black hover:bg-[#FFC567] shadow-[2px_2px_0px_0px_#000000]'
            }`}
            aria-label="Kata sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
            onClick={() => {
              if (isLastWord) {
                onBackToCategories();
              } else {
                onSelectIndex(currentIndex + 1);
              }
            }}
            className="flex items-center gap-1 px-3 sm:px-4 py-1.5 rounded-xl bg-[#FD5A46] hover:bg-[#ff6e5b] text-white font-black text-xs sm:text-sm border-2 border-black shadow-[4px_4px_0px_0px_#000000] transition-colors cursor-pointer"
          >
            <span>{isLastWord ? 'Selesai' : 'Lanjut'}</span>
            {isLastWord ? <CheckCircle className="w-4 h-4 text-[#FFC567]" /> : <ChevronRight className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>

      {/* ─── 2-COLUMN SIDE-BY-SIDE NEO-BRUTALISM STUDIO ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 my-auto items-stretch">
        
        {/* ════════════════════════════════════════════════════════════════
            COLUMN 1: MODUL 1 (FRAME VIDEO ARTIKULASI & KONTROL) (Col Span 6)
            ════════════════════════════════════════════════════════════════ */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl border-[2.5px] border-black shadow-[5px_5px_0px_0px_#000000] p-3 sm:p-4 relative"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-lg bg-black text-[#FFC567]">
                <Eye className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-heading font-black text-xs sm:text-sm text-black leading-tight">
                  Modul 1: Frame Video Artikulasi
                </h3>
                <span className="text-[10px] font-bold text-black/75">
                  Sinkronisasi Visual Lip-Reading & Equalizer
                </span>
              </div>
            </div>

            {/* Vocal Hint Pill */}
            <span className="px-2.5 py-0.5 rounded-full bg-[#FFC567] border-2 border-black text-black font-black text-[10px] flex items-center gap-1 shadow-[2px_2px_0px_0px_#000000]">
              <Sparkles className="w-3 h-3 text-[#FD5A46]" />
              <span>{currentWord.shape.toUpperCase()} {currentWord.phoneme}</span>
            </span>
          </div>

          {/* 16:9 Video Player Container (border-3 border-black + hard shadow) */}
          <motion.div
            whileTap={{ scale: 0.99, x: 2, y: 2, transition: { duration: 0.05 } }}
            onClick={togglePlayPause}
            className="w-full bg-[#181028] rounded-xl relative aspect-video flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden group border-[3px] border-black shadow-[4px_4px_0px_0px_#000000]"
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
                // When video is playing, do NOT call setIsPlaying(false).
                // Audio stays silent while the video smoothly finishes follow-through lip gestures.
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
                <span>{currentWord.voiced ? 'Getaran Pita Suara' : 'Hening (Voiceless)'}</span>
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
          <div className="flex flex-wrap items-center justify-between gap-2 mt-2 pt-2 border-t-2 border-black/15">
            {/* Play & Replay buttons */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
                onClick={togglePlayPause}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-black text-xs border-2 border-black cursor-pointer transition-colors ${
                  isPlaying
                    ? 'bg-[#FFC567] text-black shadow-[4px_4px_0px_0px_#000000]'
                    : 'bg-[#FD5A46] text-white shadow-[4px_4px_0px_0px_#000000] hover:bg-[#ff6e5b]'
                }`}
                aria-label={isPlaying ? 'Jeda video' : 'Putar video'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                <span>{isPlaying ? 'Jeda' : 'Putar'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98, x: 3, y: 3, transition: { duration: 0.05 } }}
                onClick={() => handlePlay({ fromStart: true })}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white text-black font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_#000000] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                title="Putar ulang dari awal"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Ulangi</span>
              </motion.button>
            </div>

            {/* Speed Toggles (Chunky pill buttons for 1.0x and 0.2x) */}
            <div className="flex items-center gap-1 bg-[#FAF8F5] p-0.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
              <span className="text-[10px] font-black text-black px-1 flex items-center gap-1">
                <Gauge className="w-3 h-3 text-[#FD5A46]" />
                <span className="hidden sm:inline">Tempo:</span>
              </span>

              {/* 0.2x Speed Toggle */}
              <button
                onClick={() => {
                  setPlaybackSpeed(0.2);
                  handlePlay({ speed: 0.2, fromStart: true });
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  playbackSpeed === 0.2
                    ? 'bg-[#FD5A46] text-white border-1.5 border-black shadow-[2px_2px_0px_0px_#000000]'
                    : 'text-black hover:bg-[#FFC567]'
                }`}
                aria-pressed={playbackSpeed === 0.2}
                title="Kecepatan lambat 0.2x"
              >
                0.2x (Lambat)
              </button>

              {/* 1.0x Speed Toggle */}
              <button
                onClick={() => {
                  setPlaybackSpeed(1.0);
                  handlePlay({ speed: 1.0, fromStart: true });
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  playbackSpeed === 1.0
                    ? 'bg-[#058CD7] text-white border-1.5 border-black shadow-[2px_2px_0px_0px_#000000]'
                    : 'text-black hover:bg-[#FFC567]'
                }`}
                aria-pressed={playbackSpeed === 1.0}
                title="Kecepatan normal 1.0x"
              >
                1.0x (Normal)
              </button>
            </div>
          </div>
        </motion.div>


        {/* ════════════════════════════════════════════════════════════════
            COLUMN 2: UNIFIED MODUL 2 (KOSAKATA, OBJEK & ANATOMI SAGITAL) (Col Span 6)
            ════════════════════════════════════════════════════════════════ */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl border-[2.5px] border-black shadow-[5px_5px_0px_0px_#000000] p-3 sm:p-4 relative select-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#552CB7] text-white border-2 border-black font-black text-xs shadow-[2px_2px_0px_0px_#000000]">
              <Headphones className="w-3.5 h-3.5 text-white" />
              <span>Modul 2: Kosakata, Objek & Anatomi Sagital</span>
            </span>

            <span className="text-xs font-mono font-black text-black bg-[#FFC567] px-2.5 py-0.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
              {currentWord.code}
            </span>
          </div>

          {/* Top Section: Vocabulary & Real Object Showcase (Horizontal Split) */}
          <div className="flex items-center gap-3 sm:gap-4 my-1">
            {/* Left: Real-world Object Image Frame */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-blue-50/60 rounded-xl border-2 border-black p-2 shadow-[3px_3px_0px_#000000] flex items-center justify-center shrink-0 overflow-hidden">
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
              <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-black tracking-tight leading-none truncate">
                  {currentWord.word}
                </h2>
                <span className="bg-[#FFC567] text-black font-black text-xs sm:text-sm md:text-base px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg border-2 border-black shadow-[2px_2px_0px_#000000] shrink-0">
                  {currentWord.translation}
                </span>
              </div>

              {/* Phonetic row: IPA Symbol + Pronunciation Guide Badge */}
              <div className="flex items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2 flex-wrap">
                <span className="font-mono-ipa font-black text-lg sm:text-xl text-black">
                  {currentWord.ipa}
                </span>
                <span className="font-mono text-xs sm:text-sm font-black text-black bg-[#FAF8F5] border-1.5 border-black px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_0px_#000000]">
                  Panduan: /{currentWord.guide}/
                </span>
              </div>

              {/* Phoneme & Vocal Cord Badges */}
              <div className="flex items-center gap-1.5 sm:gap-2 mt-2 flex-wrap">
                <span className="px-2 sm:px-2.5 py-0.5 rounded-lg bg-[#552CB7] text-white border-1.5 border-black font-mono-ipa font-black text-[11px] sm:text-xs shadow-[1.5px_1.5px_0px_0px_#000000]">
                  Fonem: {currentWord.phoneme}
                </span>
                <span className={`px-2 sm:px-2.5 py-0.5 rounded-lg border-1.5 border-black font-black text-[11px] sm:text-xs shadow-[1.5px_1.5px_0px_0px_#000000] ${
                  currentWord.voiced ? 'bg-[#00995E] text-white' : 'bg-[#FB7DA8] text-black'
                }`}>
                  {currentWord.voiced ? 'Pita Suara Bergetar' : 'Pita Suara Tidak Bergetar'}
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-black/15 my-2.5 sm:my-3" />

          {/* Middle Section: Dynamic Sagittal Vocal Tract Diagram */}
          <div className="w-full h-[170px] md:h-[195px] bg-[#FAF8F5] border-2 border-black rounded-xl p-2 flex items-center justify-center shadow-[2px_2px_0px_#000000] overflow-hidden">
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
          <div className="w-full mt-2.5 sm:mt-3 p-3.5 bg-[#FFC567] border-2 border-black rounded-xl shadow-[3px_3px_0px_#000000]">
            <p className="text-xs sm:text-sm font-bold text-black leading-relaxed">
              {currentWord.articulatorDesc || currentWord.articulationDesc}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
