import React, { useRef, useState, useEffect } from 'react';
import { ServiceItem } from '../../types';
import { ServiceCard } from '../cards/ServiceCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServicesHorizontalScrollProps {
  services: ServiceItem[];
  onOpenBookModal: () => void;
}

export const ServicesHorizontalScroll: React.FC<ServicesHorizontalScrollProps> = ({
  services,
  onOpenBookModal,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate active index
    const cardWidth = clientWidth > 1024 ? clientWidth / 3 : clientWidth > 640 ? clientWidth / 2 : clientWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), services.length - 1));
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;

    const handleWheelEvent = (e: WheelEvent) => {
      if (!el) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const isScrollEndRight = el.scrollLeft >= el.scrollWidth - el.clientWidth - 5;
        const isScrollEndLeft = el.scrollLeft <= 5;

        // Scroll horizontally if not at boundaries
        if ((e.deltaY > 0 && !isScrollEndRight) || (e.deltaY < 0 && !isScrollEndLeft)) {
          e.preventDefault();
          el.scrollBy({
            left: e.deltaY * 1.5,
            behavior: 'smooth',
          });
        }
      }
    };

    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      el.addEventListener('wheel', handleWheelEvent, { passive: false });
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScroll);
        el.removeEventListener('wheel', handleWheelEvent);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, [services.length]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    // Map vertical wheel scrolling to horizontal scrolling when cursor is over the cards container
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      const container = scrollRef.current;
      const isScrollEndRight = container.scrollLeft >= container.scrollWidth - container.clientWidth - 5;
      const isScrollEndLeft = container.scrollLeft <= 5;

      // Scroll horizontally if not at boundaries
      if ((e.deltaY > 0 && !isScrollEndRight) || (e.deltaY < 0 && !isScrollEndLeft)) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY * 1.5,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.clientWidth > 1024 ? container.clientWidth / 3 : container.clientWidth > 640 ? container.clientWidth / 2 : container.clientWidth;
    const scrollAmount = direction === 'left' ? -cardWidth * 1.05 : cardWidth * 1.05;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative space-y-6">
      {/* Navigation Controls */}
      <div className="flex items-center justify-end gap-2 pr-1">
        <button
          onClick={() => scrollByAmount('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className={`w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center transition-all cursor-pointer shadow-2xs ${
            canScrollLeft
              ? 'text-slate-700 hover:border-[#1D63FF] hover:text-[#1D63FF] hover:shadow-md'
              : 'text-slate-300 opacity-40 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollByAmount('right')}
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className={`w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center transition-all cursor-pointer shadow-2xs ${
            canScrollRight
              ? 'text-slate-700 hover:border-[#1D63FF] hover:text-[#1D63FF] hover:shadow-md'
              : 'text-slate-300 opacity-40 cursor-not-allowed'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 sm:gap-8 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {services.map((srv, idx) => (
          <div
            key={srv.id}
            className="snap-start shrink-0 w-[88vw] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] min-w-[290px] sm:min-w-[340px] lg:min-w-[360px]"
          >
            <ServiceCard
              service={srv}
              index={idx}
              onOpenBookModal={onOpenBookModal}
            />
          </div>
        ))}
      </div>

      {/* Subtle Scroll Indicator Dots */}
      <div className="flex justify-center items-center gap-1.5 pt-2">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!scrollRef.current) return;
              const container = scrollRef.current;
              const cardWidth = container.clientWidth > 1024 ? container.clientWidth / 3 : container.clientWidth > 640 ? container.clientWidth / 2 : container.clientWidth;
              container.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex
                ? 'w-6 bg-[#1D63FF]'
                : 'w-2 bg-slate-200 hover:bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
