import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

/**
 * AmbientCursorBackground Component (Zero-Lag 1:1 Compositor Thread Tracking)
 * Directly binds mouse coordinates to useMotionValue inside the style prop.
 * Completely removes useSpring wrappers, damping, and stiffness delays.
 */
export default function AmbientCursorBackground() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e) => {
      if (!e || typeof e.clientX !== 'number' || typeof e.clientY !== 'number') return;
      if (cursorX && typeof cursorX.set === 'function') {
        cursorX.set(e.clientX);
      }
      if (cursorY && typeof cursorY.set === 'function') {
        cursorY.set(e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Orb 1: Warm Mustard Yellow (#FFC567) at ~16% opacity */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 pointer-events-none w-[460px] h-[460px] rounded-full bg-[#FFC567] opacity-16 blur-3xl will-change-transform z-0"
      />

      {/* Orb 2: Bubblegum Pink (#FB7DA8) at ~14% opacity */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-40%',
          translateY: '-60%',
        }}
        className="fixed top-0 left-0 pointer-events-none w-[420px] h-[420px] rounded-full bg-[#FB7DA8] opacity-14 blur-3xl will-change-transform z-0"
      />

      {/* Orb 3: Bright Retro Blue (#058CD7) at ~12% opacity */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-60%',
          translateY: '-40%',
        }}
        className="fixed top-0 left-0 pointer-events-none w-[480px] h-[480px] rounded-full bg-[#058CD7] opacity-12 blur-3xl will-change-transform z-0"
      />
    </div>
  );
}
