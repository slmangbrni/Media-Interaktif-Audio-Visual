import React, { useEffect, useRef } from 'react';

const COLORS = [
  '#FFC567', // Retro Yellow / Mustard
  '#FB7DA8', // Retro Pink
  '#058CD7', // Retro Blue
  '#00995E', // Neo Mint Green
  '#FD5A46', // Vibrant Orange-Red
];

const SHAPES = ['circle', 'square', 'cross'];

/**
 * ParticleCursorTrail
 * High-performance HTML5 Canvas particle trail matching the Neo-Brutalist palette.
 * Spawns colorful geometric particles (circles, confetti squares, crosses) with
 * micro-physics that fade smoothly as the cursor moves across the screen.
 */
export default function ParticleCursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let lastX = null;
    let lastY = null;
    let isRunning = false;

    // Handle high-DPI canvas sizing
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const createParticle = (x, y) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const size = Math.random() * 6 + 6; // 6px - 12px

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 0.3, // Gentle gravity drift
        size,
        initialSize: size,
        color,
        shape,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.1,
        life: 1,
        decay: Math.random() * 0.02 + 0.015, // Lifespan ~45-65 frames
      };
    };

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const currentSize = p.initialSize * Math.max(0.2, p.life);
        ctx.save();
        ctx.globalAlpha = Math.min(1, p.life * 1.2);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        ctx.fillStyle = p.color;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1.5;

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, currentSize / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else if (p.shape === 'square') {
          const half = currentSize / 2;
          ctx.fillRect(-half, -half, currentSize, currentSize);
          ctx.strokeRect(-half, -half, currentSize, currentSize);
        } else if (p.shape === 'cross') {
          const arm = currentSize / 2;
          const thick = currentSize / 4;
          ctx.beginPath();
          // Horizontal bar
          ctx.rect(-arm, -thick / 2, currentSize, thick);
          // Vertical bar
          ctx.rect(-thick / 2, -arm, thick, currentSize);
          ctx.fill();
          ctx.stroke();
        }

        ctx.restore();
      }

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(updateAndDraw);
      } else {
        isRunning = false;
      }
    };

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(updateAndDraw);
      }
    };

    const handlePointerMove = (e) => {
      if (!e || typeof e.clientX !== 'number' || typeof e.clientY !== 'number') return;
      const currentX = e.clientX;
      const currentY = e.clientY;

      if (lastX === null || lastY === null) {
        lastX = currentX;
        lastY = currentY;
        return;
      }

      const dx = currentX - lastX;
      const dy = currentY - lastY;
      const dist = Math.hypot(dx, dy);

      // Spawn particles only when cursor moves noticeably
      if (dist > 8) {
        const count = Math.min(3, Math.floor(dist / 12) + 1);
        for (let i = 0; i < count; i++) {
          // Micro interpolation between last and current pos for smooth trails
          const t = i / count;
          const px = lastX + dx * t + (Math.random() - 0.5) * 6;
          const py = lastY + dy * t + (Math.random() - 0.5) * 6;
          particles.push(createParticle(px, py));
        }

        // Keep particle buffer bounded
        if (particles.length > 100) {
          particles = particles.slice(particles.length - 100);
        }

        lastX = currentX;
        lastY = currentY;
        startAnimation();
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full select-none"
      aria-hidden="true"
    />
  );
}
