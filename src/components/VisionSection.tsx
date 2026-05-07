import React from 'react';

const pillars = [
  {
    num: '01',
    title: 'Proprietary Ecosystem',
    desc: 'We incubate and launch specialized platforms designed for massive scale — each operating independently while sharing our core technological foundation.',
  },
  {
    num: '02',
    title: 'Institutional Scale',
    desc: 'Our ventures are built to handle institutional workloads, delivering enterprise-grade reliability and performance from day one.',
  },
  {
    num: '03',
    title: 'Continuous Innovation',
    desc: 'We constantly iterate on our infrastructure, ensuring our brands remain at the cutting edge of AI, automation, and operational efficiency.',
  },
];

export const VisionSection: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-50/35 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-slate-50/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.18em] text-[10px] mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Our Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Infrastructure for<br />Tomorrow's Economy
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Synckraft powers a growing ecosystem of specialized ventures — combining deep domain expertise with cutting-edge technology to solve complex operational challenges at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((item, i) => (
            <div
              key={i}
              className="reveal group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-900/6 transition-all duration-400 hover:-translate-y-1.5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Number */}
              <div className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-200 mb-5 group-hover:text-blue-400 transition-colors duration-300">
                {item.num}
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-[14px]">{item.desc}</p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
