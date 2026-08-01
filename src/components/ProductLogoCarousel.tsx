import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  ExternalLink,
  Sparkles,
  Zap,
  ShieldCheck,
  Building2,
  Utensils,
  Stethoscope,
  Boxes,
  Dumbbell,
  CheckCircle2,
} from 'lucide-react';import { useReducedMotion } from 'motion/react';
export interface ProductCarouselItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  url?: string;
  brandColor: string;
  accentBg: string;
  logoLetter: string;
  logoUrl?: string;
  icon: React.ReactNode;
}

const CAROUSEL_PRODUCTS: ProductCarouselItem[] = [
  {
    id: 'unstopr',
    name: 'Unstopr',
    tagline: 'AI Voice Agents & Sales Automation',
    category: 'AI Tech',
    url: 'https://unstopr.com/',
    brandColor: '#2563EB',
    accentBg: '#EFF6FF',
    logoLetter: 'U',
    logoUrl: '/unstopr-logo.png',
    icon: <Sparkles className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    id: 'solveit-india',
    name: 'SolveIt India',
    tagline: 'CA Productivity Suite',
    category: 'Tax & Compliance',
    url: 'https://www.solveitindia.com/',
    brandColor: '#10B981',
    accentBg: '#ECFDF5',
    logoLetter: 'S',
    logoUrl: '/solveitindia-logo.png',
    icon: <ShieldCheck className="w-5 h-5 text-[#10B981]" />,
  },
  {
    id: 'ordrji',
    name: 'Ordrji',
    tagline: 'Restaurant Management',
    category: 'Hospitality POS',
    url: 'http://ordrji.com/',
    brandColor: '#F97316',
    accentBg: '#FFF7ED',
    logoLetter: 'O',
    logoUrl: '/ordrji-logo.png',
    icon: <Utensils className="w-5 h-5 text-[#F97316]" />,
  },
  {
    id: 'solaroft',
    name: 'Solaroft',
    tagline: 'Business Management',
    category: 'Enterprise ERP',
    url: 'http://solaroft.com/',
    brandColor: '#EAB308',
    accentBg: '#FEFCE8',
    logoLetter: 'S',
    logoUrl: '/solaroft-logo.png',
    icon: <Boxes className="w-5 h-5 text-[#EAB308]" />,
  },
  {
    id: 'runtilldone',
    name: 'RunTillDone',
    tagline: 'Task & Workflow Suite',
    category: 'Automation Engine',
    brandColor: '#14B8A6',
    accentBg: '#CCFBF1',
    logoLetter: 'R',
    logoUrl: '/runtilldone-logo.png',
    icon: <Zap className="w-5 h-5 text-[#14B8A6]" />,
  },
  {
    id: 'syncfyre',
    name: 'SyncFyre',
    tagline: 'Gym & Fitness Management',
    category: 'Fitness Tech',
    brandColor: '#E11D48',
    accentBg: '#FFF1F2',
    logoLetter: 'S',
    logoUrl: '/syncfyre-logoo.png',
    icon: <Dumbbell className="w-5 h-5 text-[#E11D48]" />,
  },
];

export const ProductLogoCarousel: React.FC<{ onNavigateToProducts?: () => void }> = React.memo(({
  onNavigateToProducts,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const hoveredIdRef = useRef<string | null>(null);
  hoveredIdRef.current = hoveredId;

  const [containerWidth, setContainerWidth] = useState<number>(1200);
  const containerWidthRef = useRef<number>(1200);

  // Repeat the 6 products 5 times to ensure seamless infinite looping without gaps
  const itemsList = useMemo(() => Array(5).fill(CAROUSEL_PRODUCTS).flat(), []);
  const itemsListRef = useRef<ProductCarouselItem[]>([]);
  itemsListRef.current = itemsList;

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Compact card width (180px) and gap (30px) -> step = 210px
  const cardWidth = 180;
  const cardGap = 30;
  const itemStep = cardWidth + cardGap; // 210px
  const setWidth = CAROUSEL_PRODUCTS.length * itemStep; // 6 products * 210px = 1260px

  const offsetRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);

  // Track window/container size
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setContainerWidth(w);
        containerWidthRef.current = w;
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Continuous infinite RAF animation loop driving direct DOM transforms (0 React re-renders/sec)
  useEffect(() => {
    const speed = shouldReduceMotion ? 0.35 : 1.18;

    const updateDOM = () => {
      const cWidth = containerWidthRef.current;
      const containerCenter = cWidth / 2;
      const maxTrackWidth = itemsListRef.current.length * itemStep;
      const maxDist = Math.max(cWidth * 0.38, 260);

      itemsListRef.current.forEach((product, idx) => {
        const el = itemRefs.current[idx];
        if (!el) return;

        const rawX = idx * itemStep - offsetRef.current;
        let currentX = rawX;
        while (currentX < -cardWidth * 2) {
          currentX += maxTrackWidth;
        }
        while (currentX > cWidth + cardWidth) {
          currentX -= maxTrackWidth;
        }

        const itemCenter = currentX + cardWidth / 2;
        const distFromCenter = Math.abs(itemCenter - containerCenter);
        const normDist = Math.min(distFromCenter / maxDist, 1);

        const isHovered = hoveredIdRef.current === `${product.id}-${idx}`;

        let scale = 1 - normDist * 0.16;
        let opacity = 1 - normDist * 0.70;
        let blur = normDist * 9.5;
        let translateZ = (1 - normDist) * 25;
        let zIndex = Math.round((1 - normDist) * 40);

        if (isHovered) {
          scale = 1.04;
          opacity = 1;
          blur = 0;
          translateZ = 35;
          zIndex = 50;
        }

        el.style.transform = `translate3d(${currentX}px, -50%, ${translateZ}px) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.filter = `blur(${blur}px)`;
        el.style.zIndex = `${zIndex}`;
      });
    };

    const step = () => {
      if (document.hidden) {
        animFrameRef.current = 0;
        return;
      }

      offsetRef.current = (offsetRef.current + speed) % setWidth;
      updateDOM();
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [setWidth, shouldReduceMotion]);

  const handleCardClick = (product: ProductCarouselItem) => {
    if (product.url) {
      window.open(product.url, '_blank', 'noopener,noreferrer');
    } else if (onNavigateToProducts) {
      onNavigateToProducts();
    }
  };

  const containerCenter = containerWidth / 2;

  return (
    <section className="relative w-full overflow-hidden py-8 select-none">
      {/* Header Badge & Title */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[#1D63FF] text-[11px] font-bold uppercase tracking-wider shadow-2xs">
          <span>Proprietary Software Suite</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Intelligent Products Built By <span className="text-[#1D63FF]">Synckraft</span>
        </h2>
        <p className="text-xs text-slate-500 max-w-lg mx-auto font-normal">
          Enterprise SaaS platforms powering businesses, healthcare networks, and CA productivity.
        </p>
      </div>

      {/* Infinite Carousel Container with 3D Perspective */}
      <div
        ref={containerRef}
        className="relative w-full h-[170px] flex items-center justify-center overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        {/* Soft edge gradient masks for cinematic fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#FAFCFF] via-[#FAFCFF]/85 to-transparent z-40 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#FAFCFF] via-[#FAFCFF]/85 to-transparent z-40 pointer-events-none" />

        {/* Carousel Track */}
        <div className="relative w-full h-full flex items-center">
          {itemsList.map((product, idx) => {
            const isHovered = hoveredId === `${product.id}-${idx}`;

            return (
              <div
                key={`${product.id}-${idx}`}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                onClick={() => handleCardClick(product)}
                onMouseEnter={() => setHoveredId(`${product.id}-${idx}`)}
                onMouseLeave={() => setHoveredId(null)}
                className="absolute top-1/2 left-0 cursor-pointer"
                style={{
                  width: `${cardWidth}px`,
                  transform: 'translate3d(0px, -50%, 0px) scale(1)',
                  willChange: 'transform, opacity, filter',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className={`bg-white/95 backdrop-blur-md border rounded-xl p-3.5 flex flex-col justify-between h-[115px] transition-all duration-300 relative group overflow-hidden ${
                    isHovered
                      ? 'border-blue-400/90 shadow-[0_10px_28px_rgba(29,99,255,0.22)] ring-2 ring-blue-500/15'
                      : 'border-slate-200/80 shadow-sm'
                  }`}
                >
                  {/* Subtle Top Accent Line */}
                  <div
                    className="absolute top-0 inset-x-0 h-1 transition-opacity duration-300"
                    style={{
                      backgroundColor: product.brandColor,
                      opacity: isHovered ? 1 : 0.5,
                    }}
                  />

                  {/* Top Row: Compact Icon & Category Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shadow-2xs overflow-hidden p-1 shrink-0"
                      style={{
                        backgroundColor: product.accentBg,
                      }}
                    >
                      {product.logoUrl ? (
                        <img
                          src={product.logoUrl}
                          alt={product.name}
                          decoding="async"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        React.cloneElement(product.icon as React.ReactElement, { className: 'w-6 h-6' })
                      )}
                    </div>

                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-slate-100/80 truncate max-w-[85px]"
                      style={{
                        color: product.brandColor,
                        backgroundColor: product.accentBg,
                      }}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* Middle: Product Title & Tagline */}
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-[#1D63FF] transition-colors truncate">
                        {product.name}
                      </h3>
                      {product.url && (
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1D63FF] transition-colors shrink-0" />
                      )}
                    </div>
                    <p className="text-[10px] font-medium text-slate-500 truncate">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Bottom: Action link */}
                  <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[9px] font-bold">
                    <span className="text-[#1D63FF] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      {product.url ? 'Visit' : 'Details'} →
                    </span>
                    <span className="text-slate-400 font-normal">
                      {product.url ? 'Live' : 'SaaS'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

ProductLogoCarousel.displayName = 'ProductLogoCarousel';

