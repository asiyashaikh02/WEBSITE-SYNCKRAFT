import React from 'react';

interface ThemeProps {
  theme?: 'dark' | 'light';
}

export const VisionSection: React.FC<ThemeProps> = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Light subtle gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-3xl opacity-60" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-slate-50/80 blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-4 inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50">
            Our Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Building the Infrastructure for Tomorrow's Economy
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Synckraft powers a growing ecosystem of specialized ventures. We combine deep industry expertise with cutting-edge technology to solve complex operational challenges at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 reveal">
          {[
            {
              title: "Proprietary Ecosystem",
              desc: "We incubate and launch specialized platforms designed for massive scale, operating independently but sharing our core technological foundation."
            },
            {
              title: "Institutional Scale",
              desc: "Our ventures are built to handle institutional workloads, providing enterprise-grade reliability and performance from day one."
            },
            {
              title: "Continuous Innovation",
              desc: "We constantly iterate on our infrastructure, ensuring our brands remain at the cutting edge of AI, automation, and operational efficiency."
            }
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
