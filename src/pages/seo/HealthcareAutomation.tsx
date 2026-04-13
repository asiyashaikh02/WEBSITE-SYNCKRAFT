import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Target, Shield, Zap } from 'lucide-react';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export default function HealthcareAutomation({ theme }: ThemeProps) {
  const isDark = theme === 'dark';
  
  return (
    <>
      <Helmet>
        <title>Healthcare Automation Software | Synckraft</title>
        <meta name="description" content="Securely automate your medical institute with Synckraft Healthcare OS. End-to-end EMR data pipelines, predictive appointment flows, and robust diagnostics systems." />
        <meta name="keywords" content="Healthcare Automation, Clinic Management System, EMR Automation, Synckraft Healthcare OS" />
      </Helmet>

      <main className="pt-24 min-h-screen flex flex-col">
        {/* HERO */}
        <section className={`py-20 px-6 ${isDark ? 'bg-black/30' : 'bg-slate-50'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Intelligent <span className="text-blue-500">Healthcare</span> Architectures.
            </h1>
            <p className={`text-lg md:text-xl md:leading-relaxed mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Modernize fragmented clinic data, drastically reduce no-show rates via proactive automation, and secure your EMR frameworks.
            </p>
            <a 
              href="/services#healthcare" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
            >
              Explore Healthcare OS <ChevronRight size={20} />
            </a>
          </div>
        </section>

        {/* PROBLEMS & SOLUTIONS */}
        <section className="py-20 px-6 flex-grow">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            
            {/* Industry Problems */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>The Challenges</h2>
              <ul className="space-y-4">
                <li className={`flex gap-3 items-start ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <div className="mt-1 text-red-500"><Target size={20} /></div>
                  <p><strong>Missed Revenue:</strong> Patient no-shows and poor automated follow-ups lead to millions in lost institutional revenue yearly.</p>
                </li>
                <li className={`flex gap-3 items-start ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <div className="mt-1 text-red-500"><Shield size={20} /></div>
                  <p><strong>Complex EMR:</strong> Legacy frameworks don't natively converse with modern patient booking architectures safely.</p>
                </li>
              </ul>
            </div>

            {/* Synckraft's Solution */}
            <div className={`p-8 md:p-10 rounded-3xl border ${isDark ? 'bg-[#111112] border-white/10 shadow-xl shadow-blue-900/10' : 'bg-white border-blue-100 shadow-xl shadow-slate-200/50'}`}>
              <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Zap className="text-blue-500" /> Synckraft Solution
              </h2>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                The Synckraft Healthcare OS acts as a secure intermediary automation engine. Construct automated WhatsApp/SMS SMS confirmation flows, track diagnostic life cycles efficiently, and build native dashboards for medical staff logic.
              </p>
              <a 
                href="/services#healthcare" 
                className="text-blue-500 font-bold flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wider text-sm"
              >
                Access System <ChevronRight size={16} />
              </a>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
