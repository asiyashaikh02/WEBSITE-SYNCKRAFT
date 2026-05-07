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
    description: "Enterprise AI infrastructure, WhatsApp API, CRM, and advanced business automation systems powering modern operations.",
    status: "Active Infrastructure",
    link: "https://www.unstopr.com",
    icon: Cpu,
    accent: "blue",
    isPrimary: true,
  },
  {
    title: "SOLVEIT INDIA",
    tag: "Business Operations",
    description: "Enterprise assistance, process management, and core business support infrastructure for operational excellence.",
    status: "Active Infrastructure",
    link: "https://www.solveitindia.com",
    icon: BarChart2,
    accent: "emerald",
    isPrimary: false,
  },
  {
    title: "SOLAROFT",
    tag: "Green Energy & Solar",
    description: "Comprehensive solar plant operations, industrial maintenance, and energy efficiency optimization systems.",
    status: "Active Infrastructure",
    link: "https://www.solaroft.com",
    icon: Sun,
    accent: "amber",
    isPrimary: false,
  }
];

const accentMap: Record<string, { gradient: string; badge: string; icon: string; glow: string }> = {
  blue:    { gradient: 'from-blue-600 to-blue-700',    badge: 'bg-blue-50 text-blue-700 border-blue-200',    icon: 'bg-blue-50 text-blue-600',    glow: 'from-blue-600/20 to-cyan-600/20' },
  emerald: { gradient: 'from-emerald-600 to-emerald-700', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: 'bg-emerald-50 text-emerald-600', glow: 'from-emerald-600/20 to-teal-600/20' },
  amber:   { gradient: 'from-amber-600 to-amber-700',   badge: 'bg-amber-50 text-amber-700 border-amber-200',   icon: 'bg-amber-50 text-amber-600',   glow: 'from-amber-600/20 to-orange-600/20' },
};

export const Ecosystem: React.FC<ThemeProps> = () => {
  return (
    <section id="ecosystem" className="py-28 md:py-36 bg-slate-50 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className={`${STYLES.container} relative z-10`}>

        {/* Section header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold uppercase tracking-[0.18em] text-[10px] mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Venture Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 leading-[1.1]">
              Specialized Brands.<br />
              <span className="text-slate-400 font-light italic">Unified Infrastructure.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
              We build and manage dedicated technology platforms engineered for massive scale and operational excellence.
            </p>
          </div>
        </div>

        {/* Venture cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {ventures.map((venture, index) => {
            const colors = accentMap[venture.accent];
            return (
              <a
                key={index}
                href={venture.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal group relative p-8 sm:p-10 rounded-3xl border bg-white flex flex-col card-premium hover-glow ${
                  venture.isPrimary
                    ? 'border-blue-200 shadow-lg shadow-blue-900/8 lg:col-span-2'
                    : 'border-slate-200'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                {/* Top row */}
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colors.icon} transition-all duration-500 group-hover:scale-110 group-hover:shadow-md`}>
                    <venture.icon size={venture.isPrimary ? 28 : 24} strokeWidth={1.8} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${colors.badge}`}>
                    {venture.status}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-4 relative z-10">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">{venture.tag}</span>
                  <h3 className={`mt-2 mb-4 font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 ${
                    venture.isPrimary ? 'text-3xl' : 'text-2xl'
                  }`}>
                    {venture.title}
                  </h3>
                </div>

                <p className="text-slate-500 leading-relaxed mb-10 flex-grow text-[15px]">{venture.description}</p>

                {/* Footer link */}
                <div className="pt-6 mt-auto border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[13px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                    Explore Brand
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition-all duration-300 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Primary card glow */}
                {venture.isPrimary && (
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl`} />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-16">
          <Button
            to="/ecosystem"
            variant="secondary"
            size="lg"
            icon={<ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />}
            iconPosition="right"
          >
            View Complete Ecosystem
          </Button>
        </div>
      </div>
    </section>
  );
};
