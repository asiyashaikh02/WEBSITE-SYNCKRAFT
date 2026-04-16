import React from 'react';
import { ArrowRight, Building2, UtensilsCrossed, Stethoscope, Store, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export const BusinessSolutions: React.FC<ThemeProps> = ({ theme }) => {
  const solutions = [
    {
      title: 'Lead Generation OS',
      desc: 'Automates customer acquisition and qualifies leads 24/7 so you only talk to ready buyers.',
      icon: <Building2 size={32} />,
      link: '/services'
    },
    {
      title: 'Operations Automation',
      desc: 'Connects your scattered tools into one seamless dashboard to eliminate manual data entry.',
      icon: <Factory size={32} />,
      link: '/services'
    },
    {
      title: 'Growth Analytics',
      desc: 'Turns complex data into simple, actionable insights that help you scale revenue predictably.',
      icon: <Store size={32} />,
      link: '/services'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-slate-950/95" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 12%, rgba(56,189,248,0.06), transparent 28%), radial-gradient(circle at 82% 18%, rgba(168,85,247,0.05), transparent 26%), radial-gradient(circle at 55% 85%, rgba(14,165,233,0.04), transparent 35%)",
          mixBlendMode: "screen",
          opacity: 0.5,
        }}
      />
      <div className="hero-glow opacity-50" />
      <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-cyan-500/8 blur-3xl" />
      <div className="absolute right-8 top-40 h-56 w-56 rounded-full bg-fuchsia-500/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h4 className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">What We Do</h4>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">Systems That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">Growth</span></h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <div key={index} className="group p-10 rounded-[2.5rem] bg-slate-900/60 border border-white/10 backdrop-blur-xl transition-all duration-300 flex flex-col reveal hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(56,189,248,0.15)] hover:border-cyan-500/30">
              <div className="w-16 h-16 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {sol.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{sol.title}</h3>
              <p className="text-base leading-relaxed mb-10 flex-grow text-slate-300">{sol.desc}</p>
              
              <Link to={sol.link} className="flex items-center gap-3 text-cyan-400 font-bold text-sm uppercase tracking-widest hover:gap-4 hover:text-cyan-300 transition-all">
                See Solutions <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
