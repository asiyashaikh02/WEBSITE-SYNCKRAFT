import React from 'react';
import { ArrowUpRight, Cpu, Sun, BarChart2 } from 'lucide-react';

interface ThemeProps {
  theme?: 'dark' | 'light';
}

const ventures = [
  { 
    title: "UNSTOPR", 
    tag: "AI & Automation",
    description: "Enterprise AI infrastructure, WhatsApp API, CRM, and advanced business automation systems.",
    status: "Active Infrastructure",
    isLive: true,
    link: "https://www.unstopr.com/in",
    icon: Cpu,
    color: "from-purple-500 to-indigo-500",
    bgLight: "bg-indigo-50/50"
  },
  { 
    title: "SOLAROFT", 
    tag: "Solar Infrastructure",
    description: "Comprehensive solar plant operations, industrial maintenance, and efficiency optimization systems.",
    status: "Active Infrastructure",
    isLive: true,
    link: "https://www.solaroft.com/",
    icon: Sun,
    color: "from-amber-400 to-orange-500",
    bgLight: "bg-orange-50/50"
  },
  { 
    title: "SOLVEIT INDIA", 
    tag: "Business Operations",
    description: "Enterprise assistance, process management, and core business support service infrastructure.",
    status: "Active Infrastructure",
    isLive: true,
    link: "https://www.solveitindia.com/",
    icon: BarChart2,
    color: "from-emerald-400 to-teal-500",
    bgLight: "bg-teal-50/50"
  }
];

export const Ecosystem: React.FC<ThemeProps> = () => {
  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 reveal">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-4 inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50">
              Venture Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Specialized Brands.<br/>Unified Infrastructure.
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              We build and manage dedicated technology platforms tailored for massive scale and operational excellence.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {ventures.map((venture, index) => (
            <a 
              key={index} 
              href={venture.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-8 sm:p-10 rounded-3xl border border-slate-200 transition-all duration-300 ease-out flex flex-col reveal bg-white hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 hover:border-blue-200`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${venture.color} opacity-[0.03] rounded-bl-full transition-opacity duration-300 group-hover:opacity-[0.08]`}></div>
              
              <div className="flex justify-between items-start mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md ${venture.bgLight} text-slate-700`}>
                  <venture.icon size={26} className="text-slate-900" />
                </div>
                <div className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-500 border border-slate-200">
                  {venture.status}
                </div>
              </div>
              
              <div className="mb-4 relative z-10">
                 <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">{venture.tag}</span>
                 <h3 className="text-2xl font-bold mt-2 mb-3 text-slate-900 tracking-tight">{venture.title}</h3>
              </div>
              
              <p className="text-slate-500 leading-relaxed mb-10 flex-grow font-medium">{venture.description}</p>
              
              <div className="pt-6 mt-auto border-t border-slate-100 flex items-center justify-between group/link">
                <span className="text-slate-900 font-bold text-sm uppercase tracking-widest transition-colors group-hover:text-blue-600">
                  Explore Brand
                </span>
                <ArrowUpRight size={20} className="text-slate-400 transition-all duration-300 group-hover:text-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};