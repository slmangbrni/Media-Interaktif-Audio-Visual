import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Instructions from './components/Instructions';
import CategorySelect from './components/CategorySelect';
import BentoGrid from './components/BentoGrid';
import ParticleCursorTrail from './components/ParticleCursorTrail';
import CustomCursor from './components/CustomCursor';
import { VOCABULARY_DATA } from './data/vocabulary';
import { stopAllSpeech } from './utils/audioEngine';

export default function App() {
  // Deterministic 3-Level Linear View Hierarchy (Beranda -> Materi -> Petunjuk)
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  const [currentTreatment, setCurrentTreatment] = useState('bilabial');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Filter words for active treatment
  const wordsInCurrentTreatment = VOCABULARY_DATA.filter(
    (item) => item.treatment === currentTreatment
  );
  const currentWord = wordsInCurrentTreatment[currentWordIndex] || wordsInCurrentTreatment[0];

  // Navigation Handlers with Audio Teardown
  const navigateTo = (screen) => {
    stopAllSpeech();
    if (screen === 'beranda') setCurrentScreen('dashboard');
    else if (screen === 'materi') setCurrentScreen('categories');
    else if (screen === 'petunjuk') setCurrentScreen('instructions');
    else setCurrentScreen(screen);
  };

  const setCurrentView = (view) => navigateTo(view);

  // Deterministic Linear Back Navigation:
  // Petunjuk -> Materi -> Beranda (Stops on Beranda where button disappears)
  const navigateBack = () => {
    stopAllSpeech();
    setCurrentScreen((prev) => {
      if (prev === 'instructions' || prev === 'petunjuk') {
        return 'categories'; // From Petunjuk back to Materi
      }
      if (prev === 'learning') {
        return 'categories'; // From Learning back to Categories in Materi
      }
      if (prev === 'categories' || prev === 'materi') {
        return 'dashboard'; // From Materi back to Beranda
      }
      return 'dashboard'; // On Beranda: cannot go further back
    });
  };

  // When on Beranda, back button is hidden; visible on Materi and Petunjuk
  const canGoBack = currentScreen !== 'dashboard' && currentScreen !== 'beranda';

  // Global Escape Key Listener for Instant Back Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        navigateBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTreatment = (treatmentId) => {
    stopAllSpeech();
    setCurrentTreatment(treatmentId);
    setCurrentWordIndex(0);
    navigateTo('learning');
  };

  const handleSelectWordDirectly = (treatmentId, wordIndex) => {
    stopAllSpeech();
    setCurrentTreatment(treatmentId);
    setCurrentWordIndex(wordIndex);
    navigateTo('learning');
  };

  const pageVariants = {
    initial: { opacity: 0, scale: 0.99, y: 8 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.99, y: -8, transition: { duration: 0.15, ease: 'easeIn' } },
  };

  return (
    <div className="min-h-screen overflow-y-auto w-full flex flex-col justify-between bg-gradient-to-br from-[#FFFDF8] via-[#FBF5ED] to-[#F5EEFF] text-black selection:bg-[#FFC567] selection:text-black relative isolate">
      {/* 1:1 Zero-Lag Custom Cursor Layer */}
      <CustomCursor />

      {/* Interactive Particle Cursor Trail Layer */}
      <ParticleCursorTrail />

      {/* Chunky Neo-Brutalist Top Navbar */}
      <Navbar
        activeScreen={currentScreen}
        onNavigate={navigateTo}
        onBack={navigateBack}
        canGoBack={canGoBack}
      />

      {/* Main Single-Canvas Viewport Container with fixed navbar spacer */}
      <main className="flex-1 relative z-10 flex flex-col w-full pt-24 md:pt-28 pb-6 px-4 md:px-8">
        <AnimatePresence mode="wait">
          {currentScreen === 'dashboard' && (
            <motion.div
              key="dashboard"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex-1 flex flex-col justify-center items-center my-auto min-h-[calc(100vh-13rem)] md:min-h-[calc(100vh-15rem)]"
            >
              <Dashboard
                onStartLearning={() => navigateTo('materi')}
                onGoToMateri={() => navigateTo('materi')}
                setCurrentView={setCurrentView}
                onGoToInstructions={() => navigateTo('instructions')}
              />
            </motion.div>
          )}

          {currentScreen === 'instructions' && (
            <motion.div
              key="instructions"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex-1 flex flex-col"
            >
              <Instructions
                onStartLearning={() => navigateTo('categories')}
                onBack={navigateBack}
              />
            </motion.div>
          )}

          {currentScreen === 'categories' && (
            <motion.div
              key="categories"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex-1 flex flex-col"
            >
              <CategorySelect
                onSelectTreatment={handleSelectTreatment}
                onBackToDashboard={navigateBack}
                onSelectWordDirectly={handleSelectWordDirectly}
              />
            </motion.div>
          )}

          {currentScreen === 'learning' && (
            <motion.div
              key="learning"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex-1 flex flex-col"
            >
              <BentoGrid
                currentWord={currentWord}
                wordsInTreatment={wordsInCurrentTreatment}
                currentIndex={currentWordIndex}
                onSelectIndex={(idx) => {
                  stopAllSpeech();
                  setCurrentWordIndex(idx);
                }}
                onBackToCategories={navigateBack}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Clean Neo-Brutalist Bottom Bar */}
      <footer className="shrink-0 bg-[#FAF8F5] border-t-2 border-black px-4 sm:px-6 md:px-8 py-2.5 md:py-3 z-20 select-none">
        <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-black truncate">
          <span className="w-3 h-3 bg-[#00995E] rounded-full border border-black inline-block shrink-0" />
          <span className="truncate">Media Interaktif Audio-Visual Pembelajaran Pelafalan Bahasa Inggris</span>
        </div>
      </footer>
    </div>
  );
}
