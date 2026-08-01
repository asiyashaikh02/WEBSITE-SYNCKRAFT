import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const BackgroundEffects: React.FC = React.memo(() => {
  // Smooth parallax tracking using requestAnimationFrame lerp directly on DOM nodes
  const shouldReduceMotion = useReducedMotion();
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const blobRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const updateParallax = () => {
      // Linear interpolation (lerp) for weightless, smooth movement
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      if (Math.abs(dx) > 0.0001 || Math.abs(dy) > 0.0001) {
        currentPos.current.x += dx * 0.03;
        currentPos.current.y += dy * 0.03;

        if (blobRef.current) {
          blobRef.current.style.transform = `translate3d(${currentPos.current.x * 12}px, ${currentPos.current.y * 12}px, 0)`;
        }
        if (waveRef.current) {
          waveRef.current.style.transform = `translate3d(${currentPos.current.x * 4}px, ${currentPos.current.y * 4}px, 0)`;
        }
        animationFrameId = requestAnimationFrame(updateParallax);
      } else {
        isAnimating.current = false;
        animationFrameId = null;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      // Normalize mouse coordinates from -1 to 1 relative to window center
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      targetPos.current = { x, y };

      if (!isAnimating.current) {
        isAnimating.current = true;
        animationFrameId = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-950/0">
      {/* 1. Dynadot-style Ambient Multi-Stop Page Canvas Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-15%,rgba(0,163,224,0.18),rgba(29,99,255,0.08)_50%,rgba(248,250,252,0.95)_85%,#FFFFFF_100%)]" />

      {/* 2. Floating Animated Aesthetic Gradient Mesh Blobs (Hero & Mid-page Ambient Blurs) */}
      <div
        ref={blobRef}
        className="absolute inset-0"
        style={{
          transform: 'translate3d(0px, 0px, 0)',
          willChange: 'transform',
        }}
      >
        {/* Top Center-Left Sky Blue Glow */}
        <motion.div
          animate={shouldReduceMotion ? { scale: 1, opacity: 0.65, x: 0, y: 0 } : {
            scale: [1, 1.15, 1],
            opacity: [0.65, 0.85, 0.65],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={shouldReduceMotion ? { duration: 0 } : {
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -top-[10%] left-[12%] w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-tr from-[#00A3E0]/20 via-[#38BDF8]/25 to-blue-400/10 blur-[110px]"
        />

        {/* Top Right Royal Blue Glow */}
        <motion.div
          animate={shouldReduceMotion ? { scale: 1, opacity: 0.55, x: 0, y: 0 } : {
            scale: [1, 1.2, 1],
            opacity: [0.55, 0.75, 0.55],
            x: [0, -40, 0],
            y: [0, 25, 0],
          }}
          transition={shouldReduceMotion ? { duration: 0 } : {
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -top-[5%] right-[8%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-bl from-[#1D63FF]/20 via-[#60A5FA]/20 to-indigo-500/15 blur-[120px]"
        />

        {/* Mid-Left Soft Violet Accent Glow */}
        <motion.div
          animate={shouldReduceMotion ? { scale: 1, opacity: 0.35, y: 0 } : {
            scale: [1, 1.1, 1],
            opacity: [0.35, 0.55, 0.35],
            y: [0, 35, 0],
          }}
          transition={shouldReduceMotion ? { duration: 0 } : {
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute top-[35%] -left-[10%] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-r from-sky-300/15 via-indigo-300/15 to-blue-500/10 blur-[130px]"
        />

        {/* Mid-Right Cyan Vibrant Glow */}
        <motion.div
          animate={shouldReduceMotion ? { scale: 1, opacity: 0.4, x: 0 } : {
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -25, 0],
          }}
          transition={shouldReduceMotion ? { duration: 0 } : {
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute top-[50%] -right-[8%] w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-l from-[#00A3E0]/20 via-sky-400/15 to-transparent blur-[125px]"
        />
      </div>

      {/* 3. Subtle Dotted Grid Texture Overlay for High-Tech Aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `radial-gradient(#1D63FF 0.8px, transparent 0.8px)`,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 85%)',
        }}
      />

      {/* 4. ANIMATED FLOWING WAVE LINES - Minimal, elegant signature wave feature */}
      <div
        ref={waveRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: 'translate3d(0px, 0px, 0)',
          willChange: 'transform',
        }}
      >
        <svg
          className="absolute top-0 right-0 w-full max-w-[1440px] h-[850px] opacity-60 overflow-visible"
          viewBox="0 0 1400 850"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wave Mesh Filled Silk Region */}
          <path
            d="M -100 220 C 300 120, 700 380, 1100 180 C 1300 80, 1500 280, 1650 160 L 1650 -100 L -100 -100 Z"
            fill="url(#waveMeshGrad)"
            opacity="0.12"
          />

          {/* Wave Line A - Primary Solid Blue */}
          <path
            d="M -100 240 C 320 140, 720 390, 1120 190 C 1320 90, 1520 290, 1650 170"
            stroke="url(#blueLineGrad1)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Wave Line B - Dashed Secondary Accent */}
          <path
            d="M -100 290 C 350 190, 750 440, 1150 240 C 1350 140, 1550 340, 1650 220"
            stroke="#00A3E0"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            opacity="0.45"
          />

          {/* Wave Line C - Sky Blue Ambient Curve */}
          <path
            d="M -100 340 C 380 240, 780 490, 1180 290 C 1380 190, 1580 390, 1650 270"
            stroke="url(#blueLineGrad2)"
            strokeWidth="1.5"
            opacity="0.45"
          />

          {/* SVG Gradients for Waves */}
          <defs>
            <linearGradient id="waveMeshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#1D63FF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="blueLineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1D63FF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#00A3E0" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.15" />
            </linearGradient>

            <linearGradient id="blueLineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#1D63FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
});

BackgroundEffects.displayName = 'BackgroundEffects';

