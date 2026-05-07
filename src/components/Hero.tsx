import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { STYLES } from "../constants/designSystem";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32 bg-white">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient orbs */}
        <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-blue-50/90 to-cyan-50/70 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-slate-50/80 to-blue-50/60 blur-3xl" />

        {/* Subtle floating elements */}
        <div className="absolute top-[20%] right-[10%] w-32 h-32 rounded-full bg-blue-100/30 blur-xl animate-bounce" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[30%] left-[15%] w-24 h-24 rounded-full bg-cyan-100/40 blur-lg animate-bounce" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-blue-200/50 bg-white/80 backdrop-blur-xl px-6 py-3 text-sm font-bold uppercase tracking-widest text-blue-700 mb-10 shadow-lg shadow-blue-100/50 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-500 group">
          <Sparkles size={16} className="text-blue-500 animate-pulse" />
          <span>Parent Ecosystem Company</span>
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
        </div>

        {/* Premium Typography */}
        <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-[80px] font-black tracking-tight text-slate-900 leading-[1.05] mb-8">
          Building the Future of
          <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 animate-gradient-x">
            Institutional Infrastructure
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-12">
          Synckraft builds and powers specialized modern infrastructure brands. We architect ecosystems that drive enterprise performance at scale.
        </p>

        {/* Premium Button Group */}
        <div className="flex w-full flex-col justify-center gap-6 sm:flex-row sm:gap-8">
          <Button
            to="/ecosystem"
            variant="primary"
            size="lg"
            className="min-w-[240px] group"
            icon={<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />}
            iconPosition="right"
          >
            Explore Ecosystem
          </Button>

          <Button
            to="/company"
            variant="outline"
            size="lg"
            className="min-w-[240px]"
          >
            About Synckraft
          </Button>
        </div>

        {/* Subtle ecosystem hint */}
        <div className="mt-20 flex items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            UNSTOPR
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            SOLVEIT INDIA
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: '1s' }} />
            SOLAROFT
          </div>
        </div>
      </div>

      {/* Floating animation styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
};

export default Hero;
