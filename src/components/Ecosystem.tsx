import React from 'react';
import { ArrowUpRight, Cpu, Sun, BarChart2 } from 'lucide-react';
import { Button } from "./ui/Button";
import { STYLES } from "../constants/designSystem";

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
    color: "from-blue-600 to-blue-700",
    bgLight: "bg-blue-50/50",
    isPrimary: true
  },
  {
    title: "SOLVEIT INDIA",
    tag: "Business Operations",
    description: "Enterprise assistance, process management, and core business support service infrastructure.",
    status: "Active Infrastructure",
    isLive: true,
    link: "https://www.solveitindia.com/",
    icon: BarChart2,
    color: "from-emerald-600 to-emerald-700",
    bgLight: "bg-emerald-50/50"
  },
  {
    title: "SOLAROFT",
    tag: "Green Energy & Solar Infrastructure",
    description: "Comprehensive solar plant operations, industrial maintenance, and efficiency optimization systems.",
    status: "Active Infrastructure",
    isLive: true,
    link: "https://www.solaroft.com/",
    icon: Sun,
    color: "from-amber-600 to-amber-700",
    bgLight: "bg-amber-50/50"
  }
];

export const Ecosystem: React.FC<ThemeProps> = () => {
  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className={`${STYLES.container} relative z-10`}>
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
              className={`group relative p-8 sm:p-10 rounded-3xl border transition-all duration-500 ease-out flex flex-col reveal bg-white hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-3 hover:border-blue-200 ${
                venture.isPrimary
                  ? 'border-blue-300 shadow-lg shadow-blue-900/10 lg:col-span-2 lg:row-span-1'
                  : 'border-slate-200'
              }`}
            >
              {/* Premium background effects */}
              <div className={`absolute inset-0 bg-gradient-to-br ${venture.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="flex justify-between items-start mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:rotate-3 ${venture.bgLight} text-slate-700 ${
                  venture.isPrimary ? 'w-16 h-16' : ''
                }`}>
                  <venture.icon size={venture.isPrimary ? 32 : 26} className="text-slate-900 drop-shadow-sm" />
                </div>
                <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                  venture.isPrimary
                    ? 'bg-blue-100 text-blue-700 border-blue-200 shadow-sm'
                    : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}>
                  {venture.status}
                </div>
              </div>

              <div className="mb-4 relative z-10">
                 <span className={`font-bold uppercase tracking-widest ${
                   venture.isPrimary ? 'text-blue-600' : 'text-blue-600'
                 }`}>{venture.tag}</span>
                 <h3 className={`mt-2 mb-3 tracking-tight ${
                   venture.isPrimary ? 'text-3xl' : 'text-2xl'
                 } font-black text-slate-900 group-hover:scale-105 transition-transform duration-300`}>{venture.title}</h3>
              </div>

              <p className="text-slate-500 leading-relaxed mb-10 flex-grow font-medium">{venture.description}</p>

              <div className="pt-6 mt-auto border-t border-slate-100 flex items-center justify-between group/link">
                <span className="text-slate-900 font-bold text-sm uppercase tracking-widest transition-colors group-hover:text-blue-600">
                  Explore Brand
                </span>
                <ArrowUpRight size={20} className="text-slate-400 transition-all duration-300 group-hover:text-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>

              {/* Subtle border glow for primary */}
              {venture.isPrimary && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              )}
            </a>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="text-center mt-20">
          <Button
            to="/ecosystem"
            variant="secondary"
            size="lg"
            className="shadow-lg shadow-slate-900/25 hover:shadow-xl hover:shadow-slate-900/30"
            icon={<ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />}
            iconPosition="right"
          >
            View Complete Ecosystem
          </Button>
        </div>
      </div>
    </section>
  );
};