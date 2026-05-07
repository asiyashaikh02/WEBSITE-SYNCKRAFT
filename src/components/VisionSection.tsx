import React from 'react';

interface ThemeProps {
  theme?: 'dark' | 'light';
}

const pillars = [
  {
    title: 'Proprietary Ecosystem',
    desc: 'We incubate and launch specialized platforms designed for massive scale, operating independently but sharing our core technological foundation.',
  },
  {
    title: 'Institutional Scale',
    desc: 'Our ventures are built to handle institutional workloads, providing enterprise-grade reliability and performance from day one.',
  },
  {
    title: 'Continuous Innovation',
    desc: 'We constantly iterate on our infrastructure, ensuring our brands remain at the cutting edge of AI, automation, and operational efficiency.',
  },
];

export const VisionSection: React.FC<ThemeProps> = () => {
  return (
    <section className="py-28 md:py-36 bg-white relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-50/40 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-slate-50/60 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.18em] text-[10px] mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Our Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Building the Infrastructure<br />for Tomorrow's Economy
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Synckraft powers a growing ecosystem of specialized ventures — combining deep industry expertise with cutting-edge technology to solve complex operational challenges at scale.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((item, i) => (
            <div
              key={i}
              className="reveal group p-8 rounded-3xl bg-slate-50 border border-slate-100 card-premium hover:border-blue-200"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number accent */}
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-200 mb-6 group-hover:text-blue-400 transition-colors duration-300">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
