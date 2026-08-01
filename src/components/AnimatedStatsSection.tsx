import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Rocket, Users, Globe2, ThumbsUp } from 'lucide-react';

interface StatMetric {
  id: string;
  label: string;
  endValue: number;
  suffix: string;
  duration: number; // in seconds
  delay: number; // in milliseconds
  icon: React.ReactNode;
}

const STATS_DATA: StatMetric[] = [
  {
    id: 'projects',
    label: 'Projects Delivered',
    endValue: 17,
    suffix: '+',
    duration: 1.8,
    delay: 0,
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    id: 'team',
    label: 'Team Members',
    endValue: 20,
    suffix: '+',
    duration: 1.8,
    delay: 150,
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 'industries',
    label: 'Industries Served',
    endValue: 12,
    suffix: '+',
    duration: 1.8,
    delay: 300,
    icon: <Globe2 className="w-6 h-6" />,
  },
  {
    id: 'satisfaction',
    label: 'Client Satisfaction',
    endValue: 99,
    suffix: '%',
    duration: 2.0,
    delay: 450,
    icon: <ThumbsUp className="w-6 h-6" />,
  },
];

// Individual Stat Card component with custom smooth easeOut count-up animation
const StatCard: React.FC<{
  stat: StatMetric;
  inView: boolean;
}> = React.memo(({ stat, inView }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const startedRef = useRef(false);
  const valueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    let animFrame: number;
    let startTime: number | null = null;

    const timer = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;
        const progress = Math.min(elapsed / stat.duration, 1);

        // Cubic easeOut curve for silky smooth slowing down towards end
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const val = Math.floor(easeOut * stat.endValue);

        if (valueRef.current) {
          valueRef.current.textContent = `${val}`;
        }

        if (progress < 1) {
          animFrame = requestAnimationFrame(step);
        } else {
          if (valueRef.current) {
            valueRef.current.textContent = `${stat.endValue}`;
          }
          setIsCompleted(true);
        }
      };

      animFrame = requestAnimationFrame(step);
    }, stat.delay);

    return () => {
      clearTimeout(timer);
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, [inView, stat]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.96 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: isHovered ? -6 : 0,
              scale: isHovered ? 1.02 : 1,
            }
          : { opacity: 0, y: 15, scale: 0.96 }
      }
      transition={{
        duration: 0.7,
        delay: stat.delay / 1000,
        ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out curve
      }}
      style={{ willChange: 'transform, opacity' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-250 cursor-default ${
        isHovered
          ? 'bg-blue-50/50 border border-blue-400/60 shadow-lg shadow-blue-500/10'
          : 'bg-transparent border border-transparent'
      }`}
    >
      {/* Icon with entrance spring + gentle infinite float */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: isHovered ? 1.08 : 1,
                rotate: 0,
              }
            : { opacity: 0, scale: 0.8, rotate: -4 }
        }
        transition={{
          duration: 0.5,
          delay: stat.delay / 1000 + 0.1,
          type: 'spring',
          stiffness: 200,
          damping: 15,
        }}
        style={{ willChange: 'transform, opacity' }}
        className="shrink-0"
      >
        <motion.div
          animate={{
            y: [-1.5, 1.5, -1.5],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
          className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shadow-2xs border border-blue-100/80"
        >
          {stat.icon}
        </motion.div>
      </motion.div>

      {/* Number & Label */}
      <div className="space-y-0.5">
        <motion.div
          animate={{
            scale: isCompleted ? [1, 1.08, 1] : 1,
          }}
          transition={{
            duration: 0.25,
            ease: 'easeOut',
          }}
          style={{ willChange: 'transform' }}
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center"
        >
          <span ref={valueRef}>0</span>
          <span className="text-[#1D63FF]">{stat.suffix}</span>
        </motion.div>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
});

StatCard.displayName = 'StatCard';

export const AnimatedStatsSection: React.FC = React.memo(() => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Trigger ONLY ONCE when entering viewport
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="pt-3 md:pt-0 md:px-2 first:pt-0"
            >
              <StatCard stat={stat} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

AnimatedStatsSection.displayName = 'AnimatedStatsSection';

