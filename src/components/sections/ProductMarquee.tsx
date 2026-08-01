import React, { useRef, useEffect, useState } from 'react';
import {
  Bot,
  Building2,
  Utensils,
  Sun,
  FileCheck,
  Dumbbell,
  Stethoscope,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface ProductMarqueeProps {
  onNavigateProducts: () => void;
}

interface MarqueeProduct {
  id: string;
  name: string;
  website?: string;
  brandColor: string;
  icon: React.ReactNode;
  logoUrl?: string;
  isComingSoon?: boolean;
}

// Link placeholder for the SyncFyre website - update here whenever official link is live
export const SYNCFYRE_WEBSITE_URL = 'https://syncfyre.com';

const PRODUCTS_LIST: MarqueeProduct[] = [
  {
    id: 'unstopr',
    name: 'Unstopr',
    website: 'https://unstopr.com',
    brandColor: '#0080FF',
    logoUrl: '/unstopr-logo.svg',
    icon: <Bot className="w-7 h-7" />,
  },
  {
    id: 'runtilldone',
    name: 'RunTillDone',
    website: 'https://runtilldone.in',
    brandColor: '#10B981',
    logoUrl: '/runtilldone-logo.svg',
    icon: <Building2 className="w-7 h-7" />,
  },
  {
    id: 'ordrji',
    name: 'Ordrji',
    website: 'https://www.ordrji.com',
    brandColor: '#F97316',
    logoUrl: '/ordrji-logo.svg',
    icon: <Utensils className="w-7 h-7" />,
  },
  {
    id: 'solaroft',
    name: 'Solaroft',
    website: 'https://solaroft.com',
    brandColor: '#EAB308',
    logoUrl: '/solaroft-logo.svg',
    icon: <Sun className="w-7 h-7" />,
  },
  {
    id: 'solveit-india',
    name: 'SolveIt India',
    website: 'https://www.solveitindia.com',
    brandColor: '#4F46E5',
    logoUrl: '/solveitindia-logo.svg',
    icon: <FileCheck className="w-7 h-7" />,
  },
  {
    id: 'syncfyre',
    name: 'SyncFyre',
    website: SYNCFYRE_WEBSITE_URL,
    brandColor: '#E11D48',
    logoUrl: '/syncfyre-logo.svg',
    icon: <Dumbbell className="w-7 h-7" />,
  },
  {
    id: 'coming-soon',
    name: 'Shhh... Building Something Cool 🤫',
    brandColor: '#1D63FF',
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 16.5C3 17.76 2.5 21.5 2.5 21.5S6.24 21 7.5 19.5C8.21 18.66 8.2 17.37 7.41 16.59C6.63 15.8 5.34 15.79 4.5 16.5Z"
          fill="#3B82F6"
          fillOpacity="0.2"
          stroke="#1D63FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15L9 12C9 12 10.5 8 13 5.5C15.5 3 19 2 21.5 2.5C22 5 21 8.5 18.5 11C16 13.5 12 15 12 15Z"
          fill="url(#rocketGrad)"
          stroke="#1D63FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 9A1.5 1.5 0 1 0 15 6A1.5 1.5 0 0 0 15 9Z"
          fill="#FFFFFF"
        />
        <path
          d="M9 20C8 20.5 7 21 6 21"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 22C11 21.5 10.5 20.5 10.5 19.5"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19 16L20 18L22 19L20 20L19 22L18 20L16 19L18 18L19 16Z"
          fill="#F59E0B"
        />
        <defs>
          <linearGradient id="rocketGrad" x1="9" y1="2" x2="21.5" y2="15" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#1D63FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    isComingSoon: true,
  },
];

export const ProductMarquee: React.FC<ProductMarqueeProps> = React.memo(({
  onNavigateProducts,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Four sets of items to guarantee smooth continuous infinite wrapping in both directions
  const repeatedProducts = [
    ...PRODUCTS_LIST,
    ...PRODUCTS_LIST,
    ...PRODUCTS_LIST,
    ...PRODUCTS_LIST,
  ];

  useEffect(() => {
    let animId: number | null = null;
    let lastTime = performance.now();

    const step = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      const el = scrollRef.current;
      if (el && !isPaused && !isDragging) {
        // Compute speed so 1 single loop set (7 items) completes in ~30 seconds (25-35s requirement)
        const singleSetWidth = el.scrollWidth / 4;
        if (singleSetWidth > 0) {
          const pixelsPerMs = singleSetWidth / 30000;
          el.scrollLeft += pixelsPerMs * delta;

          // Wrap around seamlessly
          if (el.scrollLeft >= singleSetWidth * 2) {
            el.scrollLeft -= singleSetWidth;
          } else if (el.scrollLeft <= 0) {
            el.scrollLeft += singleSetWidth;
          }
        }
      }

      if (!isPaused && !isDragging) {
        animId = requestAnimationFrame(step);
      } else {
        animId = null;
      }
    };

    if (!isPaused && !isDragging) {
      animId = requestAnimationFrame(step);
    }

    return () => {
      if (animId) {
        cancelAnimationFrame(animId);
      }
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    startScrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }
    const el = scrollRef.current;
    const singleSetWidth = el.scrollWidth / 4;
    let newScrollLeft = startScrollLeftRef.current - walk;

    if (singleSetWidth > 0) {
      if (newScrollLeft >= singleSetWidth * 2) {
        newScrollLeft -= singleSetWidth;
        startXRef.current = x;
        startScrollLeftRef.current = newScrollLeft;
      } else if (newScrollLeft <= 0) {
        newScrollLeft += singleSetWidth;
        startXRef.current = x;
        startScrollLeftRef.current = newScrollLeft;
      }
    }
    el.scrollLeft = newScrollLeft;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    startXRef.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    startScrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }
    const el = scrollRef.current;
    const singleSetWidth = el.scrollWidth / 4;
    let newScrollLeft = startScrollLeftRef.current - walk;

    if (singleSetWidth > 0) {
      if (newScrollLeft >= singleSetWidth * 2) {
        newScrollLeft -= singleSetWidth;
        startXRef.current = x;
        startScrollLeftRef.current = newScrollLeft;
      } else if (newScrollLeft <= 0) {
        newScrollLeft += singleSetWidth;
        startXRef.current = x;
        startScrollLeftRef.current = newScrollLeft;
      }
    }
    el.scrollLeft = newScrollLeft;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const singleSetWidth = el.scrollWidth / 4;
    if (singleSetWidth > 0) {
      if (el.scrollLeft >= singleSetWidth * 2) {
        el.scrollLeft -= singleSetWidth;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += singleSetWidth;
      }
    }
  };

  const handleCardClick = (p: MarqueeProduct) => {
    if (hasDraggedRef.current) return; // Ignore trigger if user was dragging/swiping
    if (p.isComingSoon) {
      onNavigateProducts();
    } else if (p.website) {
      window.open(p.website, '_blank', 'noopener,noreferrer');
    } else {
      onNavigateProducts();
    }
  };

  return (
    <div className="space-y-10 py-4">
      {/* Infinite Horizontal Scrolling Container */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setIsDragging(false);
        }}
      >
        {/* Left & Right subtle gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
          className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex items-center gap-6 py-3 px-4 w-max">
            {repeatedProducts.map((p, idx) => (
              <div
                key={`${p.id}-${idx}`}
                onClick={() => handleCardClick(p)}
                className="group relative flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-white border border-slate-200/90 transition-all duration-300 cursor-pointer shrink-0 select-none hover:scale-105"
                style={{
                  boxShadow: '0 2px 6px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                {p.logoUrl ? (
                  <div className="h-16 sm:h-20 px-3 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={p.logoUrl}
                      alt={p.name}
                      decoding="async"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-14 sm:h-16 w-auto max-w-[280px] object-contain"
                    />
                  </div>
                ) : (
                  <>
                    {/* Product Logo / Icon Badge */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 p-3"
                      style={{
                        backgroundColor: `${p.brandColor}15`,
                        color: p.brandColor,
                      }}
                    >
                      {p.icon}
                    </div>

                    {/* Product Name */}
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-slate-900 tracking-tight whitespace-nowrap">
                      {p.name}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

ProductMarquee.displayName = 'ProductMarquee';

