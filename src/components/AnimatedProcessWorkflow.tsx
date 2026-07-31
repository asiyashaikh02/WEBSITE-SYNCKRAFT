import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PROCESS_STEPS } from '../data/websiteData';
import { MicroAnimatedIcon } from './MicroAnimatedCard';
import { Search, Target, Code2, Rocket, TrendingUp } from 'lucide-react';

interface AnimatedProcessWorkflowProps {
  badge?: string;
  title?: React.ReactNode;
}

export const AnimatedProcessWorkflow: React.FC<AnimatedProcessWorkflowProps> = ({
  badge = 'HOW WE WORK',
  title = 'HUMANS OF SYNCKRAFT',
}) => {
  const [glowingIndex, setGlowingIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [iconTriggers, setIconTriggers] = useState<number[]>([0, 0, 0, 0, 0]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });

  const lastPickedRef = useRef<number>(-1);

  // Random ambient breathing animation (every 1.5 to 3.5 seconds)
  useEffect(() => {
    // Pause ambient random breathing when a card is hovered
    if (hoveredIndex !== null) return;

    let timeoutId: NodeJS.Timeout;
    let clearGlowTimeoutId: NodeJS.Timeout;

    const scheduleNextGlow = () => {
      // Delay between card animations: 1500ms to 3500ms
      const delay = Math.floor(Math.random() * 2000) + 1500;

      timeoutId = setTimeout(() => {
        // Randomly pick a card index (0 to 4), avoiding same consecutive card
        let nextIndex = Math.floor(Math.random() * PROCESS_STEPS.length);
        if (nextIndex === lastPickedRef.current && PROCESS_STEPS.length > 1) {
          nextIndex = (nextIndex + 1) % PROCESS_STEPS.length;
        }
        lastPickedRef.current = nextIndex;

        setGlowingIndex(nextIndex);
        setIconTriggers((prev) => {
          const next = [...prev];
          next[nextIndex] = (next[nextIndex] || 0) + 1;
          return next;
        });

        // Breathing duration: 800ms
        clearGlowTimeoutId = setTimeout(() => {
          setGlowingIndex(null);
          // Schedule the next random glow iteration
          scheduleNextGlow();
        }, 800);
      }, delay);
    };

    scheduleNextGlow();

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(clearGlowTimeoutId);
    };
  }, [hoveredIndex]);

  const getProcessIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-white" />;
      case 'Target':
        return <Target className="w-6 h-6 text-white" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-white" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-white" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-white" />;
      default:
        return <Search className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section ref={sectionRef} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12 select-none">
      {(badge || title) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          {badge && (
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D63FF]">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h2>
          )}
        </motion.div>
      )}

      {/* Grid Container - Clean & Independent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {PROCESS_STEPS.map((step, idx) => {
          const isHovered = hoveredIndex === idx;
          const isGlowing = glowingIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: isHovered ? -8 : 0,
                      scale: isHovered ? 1.02 : isGlowing ? 1.015 : 1,
                    }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: isGlowing ? 0.8 : 0.4,
                delay: inView && !isHovered && !isGlowing ? idx * 0.12 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => {
                setHoveredIndex(idx);
                setIconTriggers((prev) => {
                  const next = [...prev];
                  next[idx] = (next[idx] || 0) + 1;
                  return next;
                });
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative rounded-2xl p-6 text-center space-y-4 transition-all duration-300 flex flex-col items-center cursor-pointer overflow-hidden ${
                isHovered
                  ? 'bg-blue-50/70 border-2 border-[#1D63FF] shadow-xl shadow-blue-500/15 ring-2 ring-blue-500/10'
                  : isGlowing
                  ? 'bg-[#F7FAFF] border-2 border-blue-400/80 shadow-md shadow-blue-500/10 ring-2 ring-blue-400/10'
                  : 'bg-white border border-slate-200/80 shadow-2xs hover:shadow-md'
              }`}
            >
              {/* Step Badge */}
              <span
                className={`text-[11px] font-bold tracking-wider px-2.5 py-0.5 rounded-full transition-colors ${
                  isHovered
                    ? 'bg-[#1D63FF] text-white shadow-xs'
                    : isGlowing
                    ? 'bg-blue-500 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                Step {step.step}
              </span>

              {/* Icon Circle Container */}
              <motion.div
                key={`icon-circle-${idx}-${iconTriggers[idx]}`}
                animate={{
                  scale: isHovered ? 1.08 : isGlowing ? [1, 1.08, 1] : 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isHovered
                    ? 'bg-[#1D63FF] text-white shadow-lg shadow-blue-500/40 ring-4 ring-blue-100'
                    : isGlowing
                    ? 'bg-[#1D63FF] text-white shadow-md shadow-blue-500/30 ring-2 ring-blue-100'
                    : 'bg-[#1D63FF]/90 text-white shadow-xs'
                }`}
              >
                <MicroAnimatedIcon
                  key={`icon-${idx}-${iconTriggers[idx]}`}
                  type={step.iconName}
                  cardHovered={isHovered || isGlowing}
                  cardInView={inView}
                >
                  {getProcessIcon(step.iconName)}
                </MicroAnimatedIcon>
              </motion.div>

              {/* Step Content */}
              <div className="relative z-10 space-y-1.5">
                <h3 className="text-base font-extrabold text-slate-900 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

