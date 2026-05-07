import React from 'react';
import { Target, ShieldCheck, Cpu, Zap } from 'lucide-react';

interface ThemeProps {
  theme?: 'dark' | 'light';
}

export const About: React.FC<ThemeProps> = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div data-reveal>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-6 inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 animate-pulse">
              About Synckraft
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight text-slate-900">
              Institutional Scale. <br />
              <span className="text-slate-400 font-light italic">Precision Execution.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-12 max-w-xl font-medium text-slate-500">
              Synckraft architects and manages specialized digital ecosystems. We build the foundational technology platforms that power modern infrastructure brands.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
               <div data-reveal className="group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20 group-hover:scale-110">
                    <Cpu size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-slate-900">Architecture First</h4>
                  <p className="text-sm leading-relaxed text-slate-500">Engineered for lasting performance, stability, and longevity.</p>
               </div>
               <div data-reveal className="group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20 group-hover:scale-110">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-slate-900">Ecosystem Focus</h4>
                  <p className="text-sm leading-relaxed text-slate-500">We develop dedicated solutions tailored to complex operational sectors.</p>
               </div>
            </div>
          </div>

          <div data-reveal className="relative lg:pl-12">
            <div className="aspect-square rounded-3xl overflow-hidden flex items-center justify-center relative group bg-slate-50 border border-slate-100 transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2">
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500">
                 <Zap size={300} className="text-blue-600" />
              </div>
              <div className="relative z-10 p-10 text-center">
                 <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform duration-500">
                    <Target size={36} className="text-white" />
                 </div>
                 <p className="text-2xl md:text-3xl font-bold italic leading-snug tracking-tight text-slate-900">
                   "Building the systems <br /> that define tomorrow."
                 </p>
              </div>
            </div>

            {/* Visual Accents */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50/80 blur-3xl rounded-full -z-10 group-hover:w-80 group-hover:h-80 transition-all duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};