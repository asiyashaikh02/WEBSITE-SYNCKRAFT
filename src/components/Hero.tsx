import React from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";

const brands = [
  { name: 'UNSTOPR',       href: 'https://www.unstopr.com',     dot: 'bg-blue-500',    hover: 'hover:text-blue-600' },
  { name: 'SOLVEIT INDIA', href: 'https://www.solveitindia.com', dot: 'bg-emerald-500', hover: 'hover:text-emerald-600' },
  { name: 'SOLAROFT',      href: 'https://www.solaroft.com',     dot: 'bg-amber-500',   hover: 'hover:text-amber-600' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20 bg-white">

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Orbs */}
        <div className="absolute top-[-18%] left-[-18%] w-[62%] h-[62%] rounded-full bg-gradient-to-br from-blue-50/90 to-cyan-50/60 blur-3xl animate-orb-drift" />
        <div
          className="absolute bottom-[-18%] right-[-18%] w-[68%] h-[68%] rounded-full bg-gradient-to-tl from-slate-50/80 to-blue-50/50 blur-3xl animate-orb-drift"
          style={{ animationDelay: '-7s', animationDuration: '23s' }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.028,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center flex-1 justify-center">

        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 rounded-full border border-blue-200/70 bg-white/95 backdrop-blur-xl px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 mb-10 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Parent Ecosystem Company
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
        </div>

        {/* Headline */}
        <h1 className="hero-title text-[clamp(2.75rem,8vw,5.25rem)] font-black tracking-[-0.03em] text-slate-900 leading-[1.03] mb-7">
          Building the Future of
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 animate-gradient-x">
            Institutional Infrastructure
          </span>
        </h1>

        {/* Subheading */}
        <p className="hero-sub max-w-xl text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-12">
          Synckraft is the parent company behind specialized modern infrastructure brands — architecting ecosystems that drive enterprise performance at scale.
        </p>

        {/* CTAs */}
        <div className="hero-cta flex w-full flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            to="/ecosystem"
            variant="primary"
            size="lg"
            className="min-w-[188px] group"
            icon={<ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />}
            iconPosition="right"
          >
            Explore Ecosystem
          </Button>
          <Button
            to="/about"
            variant="outline"
            size="lg"
            className="min-w-[188px]"
          >
            About Synckraft
          </Button>
        </div>

        {/* Brand hints */}
        <div className="hero-brands mt-16 flex flex-wrap items-center justify-center gap-5 sm:gap-7">
          {brands.map((brand, i) => (
            <React.Fragment key={brand.name}>
              {i > 0 && <span className="w-px h-3.5 bg-slate-200 hidden sm:block" aria-hidden="true" />}
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-slate-400 ${brand.hover} transition-all duration-200`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${brand.dot} transition-transform duration-200 group-hover:scale-[1.4]`} />
                {brand.name}
                <ArrowUpRight size={10} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-brands relative z-10 mt-12 flex flex-col items-center gap-2 opacity-30 hover:opacity-60 transition-opacity duration-300 cursor-default" aria-hidden="true">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Scroll</span>
        <ChevronDown size={14} className="text-slate-400 scroll-indicator" />
      </div>
    </section>
  );
};

export default Hero;
