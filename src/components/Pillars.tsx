import React from 'react';
import { Rocket, PhoneCall, Code2, PlayCircle, ChevronRight } from 'lucide-react';

interface ThemeProps {
  theme: 'dark' | 'light';
}

const processSteps = [
  {
    title: '1. Discovery Call',
    description: 'We audit your current systems, identify friction points, and map out your custom growth blueprint.',
    icon: PhoneCall,
  },
  {
    title: '2. System Design',
    description: 'Our team architects a scalable ecosystem tailored to your unique operational and revenue goals.',
    icon: Code2,
  },
  {
    title: '3. Rapid Deployment',
    description: 'We build and launch your custom automated workflows without disrupting your daily operations.',
    icon: Rocket,
  },
  {
    title: '4. Scale & Optimize',
    description: 'We provide continuous iteration and analytics to ensure predictable, long-term revenue growth.',
    icon: PlayCircle,
  },
];

export const Pillars: React.FC<ThemeProps> = ({ theme }) => {
  return (
    <section id="process" className={`py-24 md:py-40 -mt-[140px] ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-28 reveal">
          <h4 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">How it works</h4>
          <h2 className={`text-4xl md:text-6xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Ready, Set, Scale
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className={`group p-10 rounded-[2rem] border transition-transform transition-shadow duration-200 ease-out -translate-y-0 reveal card-glow elev-1 ${
              theme === 'dark' ? 'bg-[#111112] border-white/5 hover:border-blue-500/30' : 'bg-white border-slate-100 hover:border-blue-600/30'
            }`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-transform duration-200 ease-out transform-gpu group-hover:-translate-y-1 group-hover:shadow-lg ${
                theme === 'dark' ? 'bg-blue-600/10 text-blue-500' : 'bg-blue-50 text-blue-600'
              }`}>
                <step.icon size={26} />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
              <p className={`text-base leading-relaxed mb-8 font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};