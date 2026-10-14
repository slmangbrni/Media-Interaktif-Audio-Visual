import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * AmbientCursorBackground Component
 * Implements a clean, unobtrusive cursor-following ambient mesh / glow using Framer Motion springs.
 * - Tracks pointer position with spring smoothing (damping: 25, stiffness: 150).
 * - Renders 3 soft blurred radial gradient orbs (#FFC567, #FB7DA8, #058CD7) at 12-18% opacity with blur-3xl.
 * - Pure interactive glow without doodles or distracting graphics to maintain strict WCAG AAA contrast.
 */
export default function AmbientCursorBackground() {
  const rawX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 400);
  const rawY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 300);

  // Exact spring configuration specified by user
  const mouseX = useSpring(rawX, { damping: 25, stiffness: 150 });
  const mouseY = useSpring(rawY, { damping: 25, stiffness: 150 });

  // Staggered springs for secondary and tertiary orbs to create organic depth
  const orb2X = useSpring(rawX, { damping: 30, stiffness: 120 });
  const orb2Y = useSpring(rawY, { damping: 30, stiffness: 120 });

  const orb3X = useSpring(rawX, { damping: 35, stiffness: 95 });
  const orb3Y = useSpring(rawY, { damping: 35, stiffness: 95 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [rawX, rawY]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Orb 1: Warm Mustard Yellow (#FFC567) at ~16% opacity */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-[460px] h-[460px] rounded-full bg-[#FFC567] opacity-16 blur-3xl will-change-transform"
      />

      {/* Orb 2: Bubblegum Pink (#FB7DA8) at ~14% opacity */}
      <motion.div
        style={{
          x: orb2X,
          y: orb2Y,
          translateX: '-40%',
          translateY: '-60%',
        }}
        className="absolute w-[420px] h-[420px] rounded-full bg-[#FB7DA8] opacity-14 blur-3xl will-change-transform"
      />

      {/* Orb 3: Bright Retro Blue (#058CD7) at ~12% opacity */}
      <motion.div
        style={{
          x: orb3X,
          y: orb3Y,
          translateX: '-60%',
          translateY: '-40%',
        }}
        className="absolute w-[480px] h-[480px] rounded-full bg-[#058CD7] opacity-12 blur-3xl will-change-transform"
      />
    </div>
  );
}
