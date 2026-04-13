import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Target, Shield, Zap } from 'lucide-react';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export default function RestaurantAutomation({ theme }: ThemeProps) {
  const isDark = theme === 'dark';
  
  return (
    <>
      <Helmet>
        <title>Restaurant Automation System | Synckraft</title>
        <meta name="description" content="Scale your restaurant chain with Synckraft's advanced Restaurant OS. Automate kitchen workflows, inventory prediction, and unified POS intelligence." />
        <meta name="keywords" content="Restaurant Automation, POS Automation, Inventory AI Software, Synckraft Restaurant OS" />
      </Helmet>

      <main className="pt-24 min-h-screen flex flex-col">
        {/* HERO */}
        <section className={`py-20 px-6 ${isDark ? 'bg-black/30' : 'bg-slate-50'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Next-Gen <span className="text-blue-500">Restaurant</span> Operating Systems.
            </h1>
            <p className={`text-lg md:text-xl md:leading-relaxed mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Eradicate manual inventory tracking, maximize table turnover logic, and optimize your entire POS ecosystem natively with Synckraft.
            </p>
            <a 
              href="/services#restaurant" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
            >
              Explore Restaurant OS <ChevronRight size={20} />
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
                  <p><strong>Supply Spoilage:</strong> Incorrect predictive ordering leads to excessive waste and profit erosion.</p>
                </li>
                <li className={`flex gap-3 items-start ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <div className="mt-1 text-red-500"><Shield size={20} /></div>
                  <p><strong>Disjointed Systems:</strong> Front-of-house POS never cleanly integrates with back-of-house logistics.</p>
                </li>
              </ul>
            </div>

            {/* Synckraft's Solution */}
            <div className={`p-8 md:p-10 rounded-3xl border ${isDark ? 'bg-[#111112] border-white/10 shadow-xl shadow-blue-900/10' : 'bg-white border-blue-100 shadow-xl shadow-slate-200/50'}`}>
              <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Zap className="text-blue-500" /> Synckraft Solution
              </h2>
              <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                The Synckraft Restaurant Architecture completely unifies your data streams into one dashboard. It analyzes historic patterns to automate precise inventory purchasing, tracks table efficiency, and dynamically adjusts menu pricing parameters.
              </p>
              <a 
                href="/services#restaurant" 
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
