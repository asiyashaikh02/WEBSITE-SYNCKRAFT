import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';
import { MicroAnimatedIcon } from './MicroAnimatedCard';

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  icon: React.ReactNode;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'expertise',
    title: 'Proven Expertise',
    description: 'Experienced team with deep industry knowledge.',
    iconName: 'shield',
    icon: <ShieldCheck className="w-6 h-6 text-[#1D63FF]" />,
  },
  {
    id: 'reliable',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.99% uptime for your needs.',
    iconName: 'check',
    icon: <CheckCircle2 className="w-6 h-6 text-[#1D63FF]" />,
  },
  {
    id: 'agile',
    title: 'Agile & Flexible',
    description: 'We adapt quickly and deliver solutions that evolve with you.',
    iconName: 'zap',
    icon: <Zap className="w-6 h-6 text-[#1D63FF]" />,
  },
  {
    id: 'client',
    title: 'Client Focused',
    description: 'Your success is our priority at every stage.',
    iconName: 'users',
    icon: <Users className="w-6 h-6 text-[#1D63FF]" />,
  },
  {
    id: 'results',
    title: 'Measurable Results',
    description: 'Solutions built to deliver real impact and growth.',
    iconName: 'analytics',
    icon: <TrendingUp className="w-6 h-6 text-[#1D63FF]" />,
  },
];

export const WhyChooseTimelineSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-60px' });
  const startTimeRef = useRef<number | null>(null);

  // Smooth continuous data flow dot animation (8-10 second cycle)
  useEffect(() => {
    if (isPaused) return;

    let animFrameId: number;
    const cycleDuration = 9000; // 9 seconds for one complete top-to-bottom journey

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) % cycleDuration;
      const p = elapsed / cycleDuration;
      setProgress(p);

      // Determine active node index based on progress (5 items mapped across line)
      const calculatedIndex = Math.min(4, Math.max(0, Math.round(p * 4)));
      setActiveIndex(calculatedIndex);

      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameId);
  }, [isPaused]);

  return (
    <section
      ref={sectionRef}
      className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 select-none overflow-hidden"
    >
      {/* Background Subtle Pattern / Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center space-y-4 mb-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#1D63FF] border border-blue-100 shadow-2xs">
            WHY BUSINESSES CHOOSE SYNCKRAFT
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Built on Trust.{' '}
          <span className="text-[#1D63FF]">Driven by Results.</span>
        </motion.h2>

        {/* Dash Indicator Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-1.5 pt-2"
        >
          <div className="w-10 h-1 rounded-full bg-[#1D63FF]" />
          <div className="w-2.5 h-1 rounded-full bg-slate-200" />
          <div className="w-2.5 h-1 rounded-full bg-slate-200" />
          <div className="w-2.5 h-1 rounded-full bg-slate-200" />
        </motion.div>
      </div>

      {/* Main Vertical Timeline Container */}
      <div className="relative z-10 max-w-4xl mx-auto pl-4 sm:pl-8">
        {/* Continuous Thin Blue Vertical Line with Subtle Data Flow Dot */}
        <div className="absolute top-6 bottom-12 left-8 sm:left-12 w-0.5 z-0 bg-slate-200/90 rounded-full">
          {/* Subtle blue line fill */}
          <div className="absolute top-0 bottom-0 left-0 w-full bg-[#1D63FF]/30 rounded-full" />

          {/* Tiny Glowing Blue Data Flow Dot (6-8px) */}
          <div
            className="absolute -left-[3px] w-2 h-2 rounded-full bg-[#1D63FF] shadow-[0_0_8px_#1D63FF] transition-opacity duration-300"
            style={{
              top: `${progress * 100}%`,
              opacity:
                progress < 0.05
                  ? progress / 0.05
                  : progress > 0.92
                  ? (1 - progress) / 0.08
                  : 1,
              transform: 'translateY(-50%)',
            }}
          >
            {/* Low opacity outer glow */}
            <div className="absolute -inset-1 rounded-full bg-[#1D63FF]/25 pointer-events-none" />
          </div>
        </div>

        {/* Timeline Rows */}
        <div className="space-y-6 sm:space-y-7 relative z-10">
          {TIMELINE_DATA.map((item, idx) => {
            const isActive = activeIndex === idx;
            const isHovered = hoveredIndex === idx;
            const isCurrentActive = isActive || isHovered;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 25, scale: 0.97 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                      }
                    : { opacity: 0, x: 25, scale: 0.97 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.2 + idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setHoveredIndex(idx);
                  setActiveIndex(idx);
                }}
                onMouseLeave={() => {
                  setIsPaused(false);
                  setHoveredIndex(null);
                }}
                className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
              >
                {/* 1. Circular Timeline Node */}
                <div className="relative shrink-0 flex items-center justify-center w-8 h-8 z-10">
                  <motion.div
                    animate={{
                      scale: isCurrentActive ? [1, 1.08, 1] : 1,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                      isCurrentActive
                        ? 'bg-[#1D63FF] border-[#1D63FF] shadow-[0_0_8px_rgba(29,99,255,0.4)]'
                        : 'bg-white border-slate-300 group-hover:border-blue-400'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        isCurrentActive ? 'bg-white' : 'bg-slate-300 group-hover:bg-blue-400'
                      }`}
                    />
                  </motion.div>
                </div>

                {/* 2. Icon Box Container */}
                <motion.div
                  animate={{
                    y: isCurrentActive ? -2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border ${
                    isCurrentActive
                      ? 'bg-blue-50 border-blue-300 text-[#1D63FF] shadow-md shadow-blue-500/10'
                      : 'bg-blue-50/50 border-blue-100/80 text-[#1D63FF] group-hover:border-blue-300 group-hover:bg-blue-50/80'
                  }`}
                >
                  <MicroAnimatedIcon
                    type={item.iconName}
                    cardHovered={isCurrentActive}
                    cardInView={inView}
                  >
                    {item.icon}
                  </MicroAnimatedIcon>
                </motion.div>

                {/* 3. Message Card with Pointer Tail */}
                <motion.div
                  animate={{
                    y: isCurrentActive ? -2 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex-1 rounded-2xl p-4 sm:p-5 sm:px-6 transition-all duration-700 border flex items-center justify-between gap-4 ${
                    isCurrentActive
                      ? 'bg-[#F7FAFF] border-[#1D63FF] shadow-md shadow-blue-500/10'
                      : 'bg-white border-slate-200/90 shadow-2xs group-hover:shadow-md group-hover:border-blue-300'
                  }`}
                >
                  {/* Speech Tail Pointer */}
                  <div
                    className={`hidden sm:block absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 border-l border-b transition-colors duration-700 ${
                      isCurrentActive
                        ? 'bg-[#F7FAFF] border-[#1D63FF]'
                        : 'bg-white border-slate-200/90 group-hover:border-blue-300'
                    }`}
                  />

                  {/* Card Content Text */}
                  <div className="space-y-1">
                    <h3
                      className={`text-base sm:text-lg font-extrabold transition-colors duration-500 ${
                        isCurrentActive ? 'text-[#1D63FF]' : 'text-slate-900 group-hover:text-[#1D63FF]'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Arrow Icon */}
                  <div className="shrink-0 pl-2">
                    <motion.div
                      animate={{
                        x: isCurrentActive ? 4 : 0,
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 ${
                        isCurrentActive
                          ? 'text-[#1D63FF] bg-blue-100/80'
                          : 'text-slate-400 group-hover:text-[#1D63FF] group-hover:bg-blue-50'
                      }`}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
