import React from 'react';
import { ArrowRight, Building2, UtensilsCrossed, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export const BusinessSolutions: React.FC<ThemeProps> = ({ theme }) => {
  const solutions = [
    {
      title: 'Real Estate Automation',
      desc: 'Predictive lead matching, 24/7 AI qualification, and automated property management ecosystems.',
      icon: <Building2 size={32} />,
      link: '/services#real-estate'
    },
    {
      title: 'Restaurant OS',
      desc: 'Predictive inventory processing, table turnover optimization, and unified POS intelligence.',
      icon: <UtensilsCrossed size={32} />,
      link: '/services#restaurant'
    },
    {
      title: 'Healthcare OS',
      desc: 'Secure EMR data flows, automated appointment sequencing, and remote diagnostics pipelines.',
      icon: <Stethoscope size={32} />,
      link: '/services#healthcare'
    }
  ];

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h4 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Business Solutions</h4>
          <h2 className={`text-4xl md:text-6xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>SaaS Architecture</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <div key={index} className={`group p-10 rounded-[2.5rem] border transition-transform transition-shadow duration-300 flex flex-col reveal elev-1 hover:-translate-y-2 ${
              theme === 'dark' ? 'bg-[#111112] border-white/5 hover:border-blue-500/30 shadow-blue-500/5' : 'bg-white border-slate-200 hover:border-blue-500/30'
            }`}>
              <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-8">
                {sol.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{sol.title}</h3>
              <p className={`text-base leading-relaxed mb-10 flex-grow ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{sol.desc}</p>
              
              <Link to={sol.link} className="flex items-center gap-3 text-blue-500 font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all">
                Explore Platform <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
