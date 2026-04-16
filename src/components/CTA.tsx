import React from 'react';
import { ArrowRight, Mail, Search, Component } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export const CTA: React.FC<ThemeProps> = ({ theme }) => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-slate-950/95" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 12%, rgba(56,189,248,0.12), transparent 28%), radial-gradient(circle at 82% 18%, rgba(168,85,247,0.10), transparent 26%), radial-gradient(circle at 55% 85%, rgba(14,165,233,0.08), transparent 35%)",
          mixBlendMode: "screen",
          opacity: 0.7,
        }}
      />
      <div className="hero-glow" />
      <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute right-8 top-40 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="relative rounded-[4rem] overflow-hidden p-8 sm:p-12 md:p-24 text-center bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-[0_32px_80px_rgba(56,189,248,0.15)]">
          {/* Visual Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500 blur-[120px] rounded-full" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-extrabold mb-10 tracking-tight leading-tight text-white">
              Ready to Scale <br /> Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 italic">Revenue?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-14 leading-relaxed opacity-90 font-light">
              Stop losing leads and wasting time on manual tasks. Let's build your automated growth engine today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <Link to="/free-audit" className="group px-8 py-5 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white font-bold text-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_90px_rgba(56,189,248,0.35)] shadow-[0_24px_80px_rgba(56,189,248,0.25)] flex items-center gap-3 w-full sm:w-auto justify-center text-center">
                  Get Free Audit <Search size={24} className="group-hover:translate-x-1 transition-transform" />
               </Link>
               <Link to="/contact-sales" className="group px-8 py-5 rounded-full bg-slate-900/70 border border-white/10 text-slate-100 font-bold text-xl transition duration-300 hover:bg-slate-900/90 hover:shadow-[0_24px_70px_rgba(56,189,248,0.18)] shadow-[0_20px_60px_rgba(15,23,42,0.2)] backdrop-blur-md flex items-center gap-3 w-full sm:w-auto justify-center text-center">
                  Contact Sales <Component size={24} className="group-hover:translate-x-1 transition-transform text-cyan-300" />
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};