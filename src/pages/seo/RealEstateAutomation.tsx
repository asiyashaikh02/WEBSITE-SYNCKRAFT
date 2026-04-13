import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Target, Shield, Zap } from 'lucide-react';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export default function RealEstateAutomation({ theme }: ThemeProps) {
  const isDark = theme === 'dark';
  
  return (
    <>
      <Helmet>
        <title>Real Estate Automation Software | Synckraft</title>
        <meta name="description" content="Transform your real estate business with Synckraft's AI-driven property management, automated lead generation, and predictive valuation software." />
        <meta name="keywords" content="Real Estate Automation, Property Management Software, Real Estate AI, Synckraft Real Estate OS" />
      </Helmet>

      <main className="pt-24 min-h-screen flex flex-col">
        {/* HERO */}
        <section className={`py-20 px-6 ${isDark ? 'bg-black/30' : 'bg-slate-50'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Fully Automated <span className="text-blue-500">Real Estate</span> Workflows.
            </h1>
            <p className={`text-lg md:text-xl md:leading-relaxed mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Accelerate deal closings, optimize predictive property valuations, and manage massive portfolios efficiently with our core Real Estate OS automation architecture.
            </p>
            <a 
              href="/services#real-estate" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
            >
              Explore Real Estate OS <ChevronRight size={20} />
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
                  <p><strong>Lost Leads:</strong> Delayed reaction times mean losing buyers to competitors instantly.</p>
                </li>
                <li className={`flex gap-3 items-start ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <div className="mt-1 text-red-500"><Shield size={20} /></div>
                  <p><strong>Manual Appraisals:</strong> Outdated analytics slow down listing velocity and property valuation limits.</p>
                </li>
              </ul>
            </div>

            {/* Synckraft's Solution */}
            <div className={`p-8 md:p-10 rounded-3xl border ${isDark ? 'bg-[#111112] border-white/10 shadow-xl shadow-blue-900/10' : 'bg-white border-blue-100 shadow-xl shadow-slate-200/50'}`}>
              <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Zap className="text-blue-500" /> Synckraft Solution
              </h2>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                The Synckraft Real Estate Architecture connects your CRM natively to AI-bot lead qualification. Instantly rank buyers, automate follow-up cadences, and deploy AI-driven dynamic pricing models for total portfolio control.
              </p>
              <a 
                href="/services#real-estate" 
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
