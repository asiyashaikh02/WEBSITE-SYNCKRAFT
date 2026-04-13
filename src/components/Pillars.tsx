import React from 'react';
import { Rocket, Layers, TrendingUp, ChevronRight } from 'lucide-react';

interface ThemeProps {
  theme: 'dark' | 'light';
}

const pillarData = [
  {
    title: 'AI Automation',
    description: 'We build intelligent workflows that eliminate manual tasks, reduce overhead, and scale operations infinitely.',
    icon: Rocket,
  },
  {
    title: 'Business OS Deployment',
    description: 'Proprietary dashboards and comprehensive operating systems tailored specifically to your sector.',
    icon: Layers,
  },
  {
    title: 'Growth Architecture',
    description: 'Data-driven systems and scalable infrastructure designed for predictable revenue and market expansion.',
    icon: TrendingUp,
  },
];

export const Pillars: React.FC<ThemeProps> = ({ theme }) => {
  return (
    <section id="pillars" className={`py-24 md:py-40 -mt-[140px] ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-28 reveal">
          <h4 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">System Architecture</h4>
          <h2 className={`text-4xl md:text-6xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Core OS Capabilities</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {pillarData.map((pillar, index) => (
            <div key={index} className={`group p-12 rounded-[3rem] border transition-transform transition-shadow duration-200 ease-out -translate-y-0 reveal card-glow elev-1 ${
              theme === 'dark' ? 'bg-[#111112] border-white/5 hover:border-blue-500/30' : 'bg-white border-slate-100 hover:border-blue-600/30'
            }`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-200 ease-out transform-gpu group-hover:-translate-y-1 group-hover:shadow-lg ${
                theme === 'dark' ? 'bg-blue-600/10 text-blue-500' : 'bg-blue-50 text-blue-600'
              }`}>
                <pillar.icon size={32} />
              </div>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{pillar.title}</h3>
              <p className={`text-lg leading-relaxed mb-10 font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{pillar.description}</p>
              
              <div className="flex items-center gap-2 text-blue-500 font-bold text-sm uppercase tracking-widest cursor-pointer hover:gap-3 transition-all">
                View Features <ChevronRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};