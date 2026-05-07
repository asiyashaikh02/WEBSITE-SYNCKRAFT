import React from 'react';
import { Globe, Layers, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Layers,
    title: 'Architecture First',
    desc: 'Every platform we build is engineered for lasting performance, stability, and longevity — not just speed to market.',
  },
  {
    icon: Globe,
    title: 'Ecosystem Thinking',
    desc: 'We design interconnected brands that share a unified technological foundation while operating at independent scale.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[15%] -right-[10%] w-[45%] h-[45%] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute top-[55%] -left-[10%] w-[35%] h-[35%] rounded-full bg-slate-50/70 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left */}
          <div className="reveal">
            <span className="text-blue-600 font-bold uppercase tracking-[0.18em] text-[10px] mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              About Synckraft
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-7 leading-[1.1] tracking-tight text-slate-900">
              Institutional Scale.<br />
              <span className="text-slate-400 font-light italic">Precision Execution.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-12 max-w-lg font-medium text-slate-500">
              Synckraft is a technology holding company. We architect, launch, and scale specialized infrastructure brands — each built to dominate its domain at enterprise grade.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="reveal group p-6 rounded-2xl border border-slate-100 bg-slate-50/60 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-400"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-blue-50 text-blue-600 transition-all duration-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/20">
                    <pillar.icon size={20} strokeWidth={1.8} />
                  </div>
                  <h4 className="font-bold text-[15px] mb-1.5 text-slate-900">{pillar.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual statement */}
          <div className="reveal-right relative lg:pl-6">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-100 p-12 md:p-16 group hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/8 transition-all duration-500 hover:-translate-y-2">

              {/* Background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
                <Zap size={320} className="text-blue-600" />
              </div>

              <div className="relative z-10 text-center">
                {/* Metric row */}
                <div className="flex justify-center gap-10 mb-12">
                  {[
                    { val: '3', label: 'Active Brands' },
                    { val: '∞', label: 'Scale Potential' },
                    { val: '1', label: 'Unified Vision' },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-blue-600 mb-1">{m.val}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mb-10" />

                <blockquote className="text-xl md:text-2xl font-bold italic leading-snug tracking-tight text-slate-900">
                  "Building the systems<br />that define tomorrow."
                </blockquote>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Synckraft Technologies
                </p>
              </div>
            </div>

            {/* Decorative blur */}
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-blue-50/70 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
