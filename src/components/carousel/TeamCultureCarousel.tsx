import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { QuoteOverlay } from '../ui/QuoteOverlay';

import img1 from '../../assets/images/regenerated_image_1785424603078.jpg';
import img2 from '../../assets/images/regenerated_image_1785424605138.jpg';
import img3 from '../../assets/images/regenerated_image_1785424608517.jpg';
import img4 from '../../assets/images/regenerated_image_1785424610371.jpg';
import img5 from '../../assets/images/regenerated_image_1785424612120.jpg';
import img6 from '../../assets/images/regenerated_image_1785427345952.jpg';
import img7 from '../../assets/images/regenerated_image_1785427348215.jpg';

export interface SlideItem {
  id: string;
  url: string;
  fallbackUrl: string;
  localFallback: string;
  caption: string;
  tag: string;
}

const TEAM_SLIDES: SlideItem[] = [
  {
    id: 'synckraft-photo-1',
    url: 'https://lh3.googleusercontent.com/d/1G9HgnYt8tHlUNIcxn4q8KCxCuGmwiz8j',
    fallbackUrl: 'https://drive.google.com/thumbnail?id=1G9HgnYt8tHlUNIcxn4q8KCxCuGmwiz8j&sz=w1200',
    localFallback: img1,
    caption: 'The Synckraft Team • Building Technology Together',
    tag: 'Group Photo',
  },
  {
    id: 'synckraft-photo-2',
    url: 'https://lh3.googleusercontent.com/d/1T_HbbarK5hdWw9Trcf4ewiJfzLtJbetb',
    fallbackUrl: 'https://drive.google.com/thumbnail?id=1T_HbbarK5hdWw9Trcf4ewiJfzLtJbetb&sz=w1200',
    localFallback: img2,
    caption: 'Synckraft Modern Office Workspace & Tech Hub',
    tag: 'Office Workspace',
  },
  {
    id: 'synckraft-photo-3',
    url: 'https://lh3.googleusercontent.com/d/15lil82-LhudyjNrLOFDLhFwxxkykj7DA',
    fallbackUrl: 'https://drive.google.com/thumbnail?id=15lil82-LhudyjNrLOFDLhFwxxkykj7DA&sz=w1200',
    localFallback: img3,
    caption: 'Engineers & Developers Crafting Enterprise Solutions',
    tag: 'Developers at Work',
  },
  {
    id: 'synckraft-photo-4',
    url: 'https://lh3.googleusercontent.com/d/1bCZBjBqvARR1oV2SsI5KXfAXElNzPMaN',
    fallbackUrl: 'https://drive.google.com/thumbnail?id=1bCZBjBqvARR1oV2SsI5KXfAXElNzPMaN&sz=w1200',
    localFallback: img4,
    caption: 'Collaborative Problem-Solving & Architecture Brainstorming',
    tag: 'Team Discussions',
  },
  {
    id: 'synckraft-photo-5',
    url: 'https://lh3.googleusercontent.com/d/1G9HgnYt8tHlUNIcxn4q8KCxCuGmwiz8j',
    fallbackUrl: 'https://drive.google.com/thumbnail?id=1G9HgnYt8tHlUNIcxn4q8KCxCuGmwiz8j&sz=w1200',
    localFallback: img5,
    caption: 'Product Strategy & Client Solution Reviews',
    tag: 'Client Strategy',
  },
  {
    id: 'synckraft-photo-6',
    url: 'https://lh3.googleusercontent.com/d/1HDqqNfZ-Ez2vvi8-JWhE4QMwWz0oGFdQ',
    fallbackUrl: 'https://drive.google.com/thumbnail?id=1HDqqNfZ-Ez2vvi8-JWhE4QMwWz0oGFdQ&sz=w1200',
    localFallback: img6,
    caption: 'Daily Agile Standups & Life at Synckraft',
    tag: 'Daily Office Life',
  },
  {
    id: 'synckraft-photo-7',
    url: 'https://lh3.googleusercontent.com/d/1zdKqy0-SU_7Pak0NLlv8r9bd2Hb5AosY',
    fallbackUrl: 'https://drive.google.com/thumbnail?id=1zdKqy0-SU_7Pak0NLlv8r9bd2Hb5AosY&sz=w1200',
    localFallback: img7,
    caption: 'Team Milestones, Successes & Celebrations',
    tag: 'Celebrations',
  },
  {
    id: 'synckraft-photo-8',
    url: 'https://lh3.googleusercontent.com/d/1ya3VhtIVTlSwdse1zN0djcEgPpXegP5U',
    fallbackUrl: 'https://drive.google.com/thumbnail?id=1ya3VhtIVTlSwdse1zN0djcEgPpXegP5U&sz=w1200',
    localFallback: img1,
    caption: 'Spontaneous Moments & Culture at Synckraft',
    tag: 'Candid Moments',
  },
  {
    id: 'synckraft-photo-9',
    url: 'https://lh3.googleusercontent.com/d/1q7u5q5PaUVFicT9VslrWbSzX14W4fo6r',
    fallbackUrl: 'https://drive.google.com/thumbnail?id=1q7u5q5PaUVFicT9VslrWbSzX14W4fo6r&sz=w1200',
    localFallback: img2,
    caption: 'Synckraft Team Culture & Shared Vision',
    tag: 'Team Culture',
  },
  {
    id: 'synckraft-photo-10',
    url: 'https://lh3.googleusercontent.com/d/1IOahpLEKmDOjFsVr8DvkFxdNVDmRKdOQ',
    fallbackUrl: 'https://drive.google.com/thumbnail?id=1IOahpLEKmDOjFsVr8DvkFxdNVDmRKdOQ&sz=w1200',
    localFallback: img3,
    caption: 'Synckraft Team Collaboration & Growth',
    tag: 'Team Moments',
  },
];

export const TeamCultureCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TEAM_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TEAM_SLIDES.length) % TEAM_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const slide = TEAM_SLIDES[currentIndex];
  const nextIdx = (currentIndex + 1) % TEAM_SLIDES.length;
  const prevIdx = (currentIndex - 1 + TEAM_SLIDES.length) % TEAM_SLIDES.length;

  return (
    <div className="space-y-4">
      {/* Hidden Preloader for smooth image transitions */}
      <div className="hidden" aria-hidden="true">
        <img src={TEAM_SLIDES[nextIdx].url} alt="" referrerPolicy="no-referrer" />
        <img src={TEAM_SLIDES[prevIdx].url} alt="" referrerPolicy="no-referrer" />
      </div>

      {/* Main Carousel Frame */}
      <div
        className="relative w-full rounded-[24px] sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group bg-slate-950 select-none focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Aspect Ratio Box */}
        <div className="aspect-[16/10] sm:aspect-[21/9] lg:aspect-[24/9] w-full relative overflow-hidden bg-slate-900">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={slide.id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slide.url}
                alt={slide.caption}
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src === slide.url) {
                    target.src = slide.fallbackUrl;
                  } else if (target.src === slide.fallbackUrl) {
                    target.src = slide.localFallback;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </motion.div>
          </AnimatePresence>

          {/* Autoplay Pause/Play indicator (Top Right) */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white/90 backdrop-blur-md border border-white/15 transition-all cursor-pointer opacity-80 group-hover:opacity-100"
              title={isPaused ? 'Resume Auto-play' : 'Pause Auto-play'}
              aria-label={isPaused ? 'Resume Auto-play' : 'Pause Auto-play'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
            </button>
          </div>

          {/* Navigation Arrow Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-[#0080FF] shadow-lg backdrop-blur-md border border-slate-200/80 flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 -ml-0.5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-[#0080FF] shadow-lg backdrop-blur-md border border-slate-200/80 flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 -mr-0.5" />
          </button>

          {/* Premium Inspirational Quote Overlay */}
          <QuoteOverlay
            quote="Great things in business are never built by one person. They are built by passionate people who believe in one vision, trust one another, and grow together every single day."
            author="— The Synckraft Team"
            brandName="Synckraft"
          />
        </div>
      </div>

      {/* Pagination Dots Below Image Container */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {TEAM_SLIDES.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'w-7 sm:w-8 bg-[#0080FF] shadow-xs'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}: ${item.tag}`}
              title={item.tag}
            />
          );
        })}
      </div>
    </div>
  );
};


