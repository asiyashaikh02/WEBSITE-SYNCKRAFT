import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32 bg-white">

      {/* Ambient background orbs — slow drift, no bounce */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-20%] left-[-20%] w-[65%] h-[65%] rounded-full bg-gradient-to-br from-blue-50/80 to-cyan-50/60 blur-3xl animate-orb-drift" />
        <div
          className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-slate-50/70 to-blue-50/50 blur-3xl animate-orb-drift"
          style={{ animationDelay: '-6s', animationDuration: '22s' }}
        />
        {/* Fine grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">

        {/* Badge — stagger 1 */}
        <div className="hero-badge inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-white/90 backdrop-blur-xl px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 mb-10 shadow-lg shadow-blue-100/40">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Parent Ecosystem Company
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
        </div>

        {/* Headline — stagger 2 */}
        <h1 className="hero-title max-w-5xl text-5xl md:text-7xl lg:text-[82px] font-black tracking-tight text-slate-900 leading-[1.04] mb-8">
          Building the Future of
          <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 animate-gradient-x">
            Institutional Infrastructure
          </span>
        </h1>

        {/* Subheading — stagger 3 */}
        <p className="hero-sub max-w-2xl text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-14">
          Synckraft is the parent company behind specialized modern infrastructure brands — architecting ecosystems that drive enterprise performance at scale.
        </p>

        {/* CTAs — stagger 4 */}
        <div className="hero-cta flex w-full flex-col justify-center gap-5 sm:flex-row sm:gap-6">
          <Button
            to="/ecosystem"
            variant="primary"
            size="lg"
            className="min-w-[220px] group"
            icon={<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />}
            iconPosition="right"
          >
            Explore Ecosystem
          </Button>

          <Button
            to="/about"
            variant="outline"
            size="lg"
            className="min-w-[220px]"
          >
            About Synckraft
          </Button>
        </div>

        {/* Ecosystem brand hints — stagger 5 */}
        <div className="hero-brands mt-20 flex flex-wrap items-center justify-center gap-8">
          <a
            href="https://www.unstopr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 text-[13px] font-semibold text-slate-400 hover:text-blue-600 transition-colors duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300" />
            UNSTOPR
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <span className="w-px h-4 bg-slate-200" aria-hidden="true" />
          <a
            href="https://www.solveitindia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 text-[13px] font-semibold text-slate-400 hover:text-emerald-600 transition-colors duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '0.5s' }} />
            SOLVEIT INDIA
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <span className="w-px h-4 bg-slate-200" aria-hidden="true" />
          <a
            href="https://www.solaroft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 text-[13px] font-semibold text-slate-400 hover:text-amber-600 transition-colors duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '1s' }} />
            SOLAROFT
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
