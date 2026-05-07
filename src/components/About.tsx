import React from 'react';
import { Target, ShieldCheck, Cpu, Zap } from 'lucide-react';

interface ThemeProps {
  theme?: 'dark' | 'light';
}

const pillars = [
  {
    icon: Cpu,
    title: 'Architecture First',
    desc: 'Engineered for lasting performance, stability, and longevity across every platform we build.',
  },
  {
    icon: ShieldCheck,
    title: 'Ecosystem Focus',
    desc: 'We develop dedicated solutions tailored to complex operational sectors at institutional scale.',
  },
];

export const About: React.FC<ThemeProps> = () => {
  return (
    <section id="about" className="py-28 md:py-36 bg-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[15%] -right-[10%] w-[45%] h-[45%] rounded-full bg-blue-50/60 blur-3xl" />
        <div className="absolute top-[50%] -left-[10%] w-[35%] h-[35%] rounded-full bg-slate-50/80 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — text */}
          <div className="reveal">
            <span className="text-blue-600 font-bold uppercase tracking-[0.18em] text-[10px] mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              About Synckraft
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-[1.1] tracking-tight text-slate-900">
              Institutional Scale.<br />
              <span className="text-slate-400 font-light italic">Precision Execution.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-14 max-w-xl font-medium text-slate-500">
              Synckraft architects and manages specialized digital ecosystems. We build the foundational technology platforms that power modern infrastructure brands.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {pillars.map((pillar, i) => (
                <div key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-blue-50 text-blue-600 transition-all duration-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20 group-hover:scale-110">
                    <pillar.icon size={22} strokeWidth={1.8} />
                  </div>
                  <h4 className="font-bold text-[17px] mb-2 text-slate-900">{pillar.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div className="reveal-right relative lg:pl-8">
            <div className="aspect-square rounded-3xl overflow-hidden flex items-center justify-center relative group bg-slate-50 border border-slate-100 transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/8 hover:-translate-y-2">
              {/* Background icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.025] group-hover:opacity-[0.05] transition-opacity duration-500">
                <Zap size={280} className="text-blue-600" />
              </div>

              <div className="relative z-10 p-12 text-center">
                <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-600/25 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-600/30 transition-all duration-500">
                  <Target size={36} className="text-white" />
                </div>
                <p className="text-2xl md:text-3xl font-bold italic leading-snug tracking-tight text-slate-900">
                  "Building the systems<br />that define tomorrow."
                </p>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-blue-50/80 blur-3xl rounded-full -z-10 transition-all duration-700 group-hover:w-72 group-hover:h-72" />
          </div>
        </div>
      </div>
    </section>
  );
};
