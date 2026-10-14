// ─── AUDIO ENGINE & RESONANCE SYNTHESIZER ───
// Supports Web Audio API Acoustic Tones, Web Speech Synthesis, & HTML5 Media

let webAudioCtx = null;

/**
 * Play a low resonant sinusoidal tone to simulate vocal fold vibration
 * Useful for deaf & hard-of-hearing students to feel resonance through device speakers
 */
export function playResonanceTone(freq = 200, durationSec = 1.0) {
  try {
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtxClass) return;
    if (!webAudioCtx) {
      webAudioCtx = new AudioCtxClass();
    }
    if (webAudioCtx.state === 'suspended') {
      webAudioCtx.resume();
    }

    const osc = webAudioCtx.createOscillator();
    const gain = webAudioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, webAudioCtx.currentTime);

    // Smooth attack and release envelope to prevent click artifacts
    gain.gain.setValueAtTime(0.001, webAudioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, webAudioCtx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, webAudioCtx.currentTime + durationSec);

    osc.connect(gain);
    gain.connect(webAudioCtx.destination);

    osc.start();
    osc.stop(webAudioCtx.currentTime + durationSec);
  } catch (err) {
    console.warn("Web Audio tone unavailable", err);
  }
}

/**
 * Text-to-Speech pronunciation wrapper with configurable speed and gender pitch
 */
export function speakWord(text, { speed = 1.0, gender = 'female', lang = 'en-US', onStart = null, onEnd = null } = {}) {
  if (!('speechSynthesis' in window)) {
    if (onStart) onStart();
    setTimeout(() => { if (onEnd) onEnd(); }, 1200 / speed);
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = speed; // 0.2 for slow motion, 1.0 for normal
  utterance.pitch = gender === 'female' ? 1.15 : 0.85;

  const voices = window.speechSynthesis.getVoices();
  const langVoices = voices.filter(v => v.lang.startsWith(lang.split('-')[0]));
  if (langVoices.length > 0) {
    const pattern = gender === 'female' ? /female|woman|zira|samantha|victoria/i : /male|man|david|mark|guy/i;
    const chosen = langVoices.find(v => pattern.test(v.name)) || langVoices[0];
    utterance.voice = chosen;
  }

  utterance.onstart = () => {
    if (onStart) onStart();
  };

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
}

let currentPlayingAudio = null;

/**
 * Stop all ongoing audio and speech synthesis
 */
export function stopAllSpeech() {
  if (currentPlayingAudio) {
    try {
      currentPlayingAudio.pause();
      currentPlayingAudio.currentTime = 0;
    } catch (e) {}
    currentPlayingAudio = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

/**
 * Play authentic vocabulary audio (.m4a) with playback rate & pitch preservation.
 * Seamlessly falls back to Web Speech Synthesis if audioUrl is missing or fails to load.
 */
export function playVocabAudio(audioUrl, wordText, { speed = 1.0, onStart = null, onEnd = null } = {}) {
  stopAllSpeech();

  if (audioUrl) {
    try {
      const audio = new Audio(audioUrl);
      currentPlayingAudio = audio;
      const targetRate = speed <= 0.2 ? 0.5 : speed;
      audio.playbackRate = targetRate;
      audio.preservesPitch = true;
      audio.mozPreservesPitch = true;
      audio.webkitPreservesPitch = true;

      audio.onplay = () => {
        if (onStart) onStart();
      };

      audio.onended = () => {
        currentPlayingAudio = null;
        if (onEnd) onEnd();
      };

      audio.onerror = () => {
        console.warn(`[audioEngine] Failed to load audio file: ${audioUrl}. Falling back to Web Speech.`);
        currentPlayingAudio = null;
        speakWord(wordText, { speed, lang: 'en-US', onStart, onEnd });
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("[audioEngine] play() rejected or interrupted:", err);
          currentPlayingAudio = null;
          speakWord(wordText, { speed, lang: 'en-US', onStart, onEnd });
        });
      }
      return audio;
    } catch (err) {
      console.warn("[audioEngine] Audio playback error:", err);
      speakWord(wordText, { speed, lang: 'en-US', onStart, onEnd });
      return null;
    }
  } else {
    speakWord(wordText, { speed, lang: 'en-US', onStart, onEnd });
    return null;
  }
}

