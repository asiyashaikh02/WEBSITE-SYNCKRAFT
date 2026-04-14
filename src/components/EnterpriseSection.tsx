import React from 'react';
import { Network, Server, ArrowRight, GitBranch, Settings2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export const EnterpriseSection: React.FC<ThemeProps> = ({ theme }) => {
  const features = [
    { title: 'Multi-location Management', icon: <Network size={24} />, desc: 'Orchestrate hundreds of branches from a centralized global dashboard.' },
    { title: 'AI Automation', icon: <Settings2 size={24} />, desc: 'Deploy cognitive loops to eliminate manual administrative bottlenecks.' },
    { title: 'Custom Workflows', icon: <GitBranch size={24} />, desc: 'Map your exact operational logic into digital, error-free pipelines.' },
    { title: 'API Integrations', icon: <Server size={24} />, desc: 'Connect seamlessly with legacy databases, ERPs, and external partners.' },
    { title: 'Scalable Infrastructure', icon: <ShieldCheck size={24} />, desc: 'Rely on military-grade encryption and auto-scaling cloud compute.' }
  ];

  return (
    <section className={`py-32 relative overflow-hidden ${theme === 'dark' ? 'bg-[#050505]' : 'bg-slate-900'}`}>
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 reveal">
            <h4 className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center gap-2">
              <ShieldCheck size={14} /> Higher-Order Architecture
            </h4>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8 leading-tight">
              Enterprise-Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Business Operating Systems</span>
            </h2>
            <p className="text-xl font-light text-slate-300 leading-relaxed mb-10 max-w-lg">
              Engineered exclusively for global organizations requiring unified data layers, custom process automation, and unlimited scale.
            </p>
            
            <Link to="/contact-sales" className="inline-flex items-center gap-3 px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg shadow-2xl shadow-blue-500/20 transition-all hover:-translate-y-1 hover:shadow-blue-500/40">
              Request Enterprise Demo <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="lg:w-1/2 w-full reveal">
            <div className="grid gap-4">
              {features.map((feat, i) => (
                <div key={i} className={`flex items-start gap-5 p-6 rounded-3xl border transition-all hover:-translate-y-1 ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:border-blue-500/30' : 'bg-white/10 border-white/10 hover:border-blue-400/40'} backdrop-blur-md`}>
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
