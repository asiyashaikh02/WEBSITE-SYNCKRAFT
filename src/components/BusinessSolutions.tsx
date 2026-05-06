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
    <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
      {/* Refined clean dark background with subtle structure */}
      <div className="absolute inset-0 bg-[#0B0F19]" />
      
      {/* Subtle SaaS structural gradient (focused, non-messy) */}
      <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20 reveal flex flex-col items-center">
          <span className="text-[#06B6D4] font-semibold uppercase tracking-widest text-xs mb-4 inline-block px-4 py-1.5 rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/5">
            What We Do
          </span>
          <h2 className="text-4xl md:text-[40px] font-sora font-bold tracking-tight text-white mb-6">
            Systems That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Growth</span>
          </h2>
          <p className="max-w-2xl text-lg text-[#9CA3AF] font-sans">
            Replace chaotic processes with streamlined operating systems that empower your team to focus on high-leverage work.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <div key={index} className="group p-10 rounded-2xl bg-[#111827] border border-[#1F2937] transition-all duration-300 flex flex-col reveal hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] hover:border-[#2563EB]/40">
              <div className="w-16 h-16 bg-[#2563EB]/10 text-[#06B6D4] rounded-xl flex items-center justify-center mb-8 border border-[#2563EB]/20 group-hover:scale-105 transition-transform">
                {sol.icon}
              </div>
              <h3 className="text-2xl font-sora font-semibold mb-4 text-white">{sol.title}</h3>
              <p className="text-[17px] leading-relaxed mb-10 flex-grow text-[#9CA3AF] font-sans">{sol.desc}</p>
              
              <Link to={sol.link} className="flex items-center gap-2 text-[#06B6D4] font-semibold text-sm uppercase tracking-wider hover:gap-3 hover:text-cyan-300 transition-all">
                See Solutions <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
