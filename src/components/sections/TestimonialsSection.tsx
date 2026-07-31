import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TESTIMONIALS_DATA } from '../../data/websiteData';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  onOpenBookModal?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "Partner Statements & Feedback",
  subtitle = "How our custom software engineering & business automation platforms drive tangible operational results.",
  onOpenBookModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const total = TESTIMONIALS_DATA.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Autoplay management: 2 seconds interval
  useEffect(() => {
    timerRef.current = setInterval(() => {
      goToNext();
    }, 2000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [goToNext]);

  const item = TESTIMONIALS_DATA[currentIndex];

  // Motion variants for smooth slide + fade (25px slide, 600ms duration)
  const variants = {
    enter: {
      x: 25,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -25,
      opacity: 0,
    },
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-100">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1D63FF] text-xs font-semibold tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5" />
          Verified Client Outcomes
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>

      {/* Main Spotlight Auto Carousel Box */}
      <div className="relative max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-12 shadow-xs hover:shadow-xl transition-all duration-300 min-h-[320px] sm:min-h-[290px] flex flex-col justify-between overflow-hidden">
        {/* Subtle background glow element */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header inside card: Rating & Company Badge */}
        <div className="relative z-10 flex items-center justify-between pb-6 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-bold text-slate-500 ml-1">
              5.0 / 5.0 Rating
            </span>
          </div>

          <div>
            {item.companyLogoText && (
              <span className="text-xs font-black tracking-widest text-slate-400 uppercase bg-slate-50 px-3 py-1 rounded-full border border-slate-200/60">
                {item.companyLogoText}
              </span>
            )}
          </div>
        </div>

        {/* Dynamic Animated Content */}
        <div className="relative z-10 my-6 sm:my-8 min-h-[120px] sm:min-h-[90px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 260, damping: 28 },
                opacity: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
              }}
              className="w-full relative"
            >
              <Quote className="w-10 h-10 text-blue-100 absolute -top-5 -left-3 -z-10 select-none pointer-events-none opacity-80" />
              <p className="relative z-10 text-base sm:text-lg text-slate-800 italic leading-relaxed font-normal">
                "{item.review}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer inside card: Client Info */}
        <div className="relative z-10 pt-6 border-t border-slate-100 flex items-center justify-between">
          {/* Client Avatar & Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id + '-meta'}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="flex items-center gap-3.5 w-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1D63FF] to-blue-700 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md border border-blue-400/30">
                {item.companyName.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {item.clientName}
                </h4>
                <p className="text-xs font-semibold text-slate-500">
                  {item.clientRole} • <span className="text-[#1D63FF] font-bold">{item.companyName}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer verified disclaimer */}
      <div className="mt-8 text-center text-xs text-slate-400 font-medium">
        * Case metrics and client endorsements verified through technical delivery milestones.
      </div>

      {onOpenBookModal && (
        <div className="mt-8 text-center">
          <button
            onClick={onOpenBookModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer shadow-xs"
          >
            <span>Request Verified Client References</span>
          </button>
        </div>
      )}
    </section>
  );
};

