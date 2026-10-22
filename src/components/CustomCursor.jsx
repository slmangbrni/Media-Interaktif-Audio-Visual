import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

/**
 * CustomCursor Component (1:1 Zero-Lag Hardware Pointer Tracking)
 * Directly binds mouse coordinates to useMotionValue inside the style prop.
 * Completely eliminates useState, useSpring wrappers, and animate={{ x, y }} transitions
 * to prevent any animation lag behind the hardware cursor.
 */
export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isVisible, setIsVisible] = useState(false);

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
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-150"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
      aria-hidden="true"
    >
      {/* Zero-Lag Neo-Brutalist Cursor Indicator */}
      <div className="w-5 h-5 rounded-full border-2 border-black bg-[#FFC567] shadow-[2px_2px_0px_#000000] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-black" />
      </div>
    </motion.div>
  );
}
