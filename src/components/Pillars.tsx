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
    <section id="process" className="py-24 md:py-32 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20 reveal flex flex-col items-center">
          <span className="text-[#06B6D4] font-semibold uppercase tracking-widest text-xs mb-4 inline-block px-4 py-1.5 rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/5">
            How it works
          </span>
          <h2 className="text-4xl md:text-[40px] font-sora font-semibold tracking-tight text-white mb-6">
            Ready, Set, Scale
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-[#111827] border border-[#1F2937] transition-all duration-300 reveal shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] hover:border-[#2563EB]/40 flex flex-col">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 border border-[#2563EB]/20 bg-[#2563EB]/10 text-[#06B6D4] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg]">
                <step.icon size={26} />
              </div>
              <h3 className="text-xl font-sora font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-[15px] leading-relaxed font-sans text-[#9CA3AF] flex-grow">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};