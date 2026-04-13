import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Clock, Target, ArrowRight, Building2, Utensils, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const theme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';

  const studies = [
    {
      id: "real-estate-automation",
      industry: "Real Estate Brokerage",
      icon: <Building2 className="text-blue-500" size={24} />,
      title: "Real Estate OS: 310% More Conversions",
      problem: "Manual lead tracking and 48-hour response delays were leading to a 40% loss in inbound prospects and exhaustive manual CRM entry.",
      solution: "Deployed Synckraft Real Estate OS featuring an autonomous AI Voice/Chat agent to qualify budgets and schedule viewings instantly.",
      results: "Better lead conversion, zero lead leakage, and 15 hours saved per agent every week."
    },
    {
      id: "restaurant-automation",
      industry: "QSR Restaurant Chain",
      icon: <Utensils className="text-orange-500" size={24} />,
      title: "Restaurant OS: Waste Reduced to 2.1%",
      problem: "Manual operations and inventory estimation took managers 4 hours every Sunday, leading to 18% over-ordering on perishables.",
      solution: "Integrated Synckraft Restaurant OS mapping weather APIs, local events, and historical sales to predict required daily inventory autonomously.",
      results: "Faster operations, inventory waste eliminated, reducing supply run time to just 12 minutes."
    },
    {
      id: "healthcare-automation",
      industry: "Regional Healthcare Clinic",
      icon: <Activity className="text-emerald-500" size={24} />,
      title: "Healthcare OS: 100% Digital Patient Flow",
      problem: "Manual patient management, manual intake forms, and phone-based scheduling caused severe receptionist burnout and extended wait times.",
      solution: "Implemented Synckraft Healthcare OS with seamless digital onboarding, auto-scheduling, and EHR integration.",
      results: "Better efficiency, 3x faster patient check-ins, and zero missed follow-up appointments."
    }
  ];

  return (
    <div className={`pt-24 pb-32 min-h-screen ${theme === 'dark' ? 'bg-[#080809]' : 'bg-slate-50'}`}>
      <Helmet>
        <title>Case Studies | Synckraft Business OS</title>
        <meta name="description" content="Explore real ROI and transformation examples from Synckraft Technologies." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Client Transformations</span>
          <h1 className={`text-5xl md:text-7xl font-black mt-4 mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Proven <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Results.</span>
          </h1>
          <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Discover how we have transformed manual operations into highly profitable automated systems across key industries.
          </p>
        </div>

        <div className="space-y-12">
          {studies.map((study, i) => (
            <div key={i} className={`p-8 md:p-12 rounded-[3rem] border ${theme === 'dark' ? 'bg-[#111112] border-white/5' : 'bg-white border-slate-200'} shadow-2xl transition-transform hover:-translate-y-2`}>
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-10 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'}`}>
                      {study.icon}
                    </div>
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-blue-500/10 text-blue-500">{study.industry}</span>
                  </div>
                  <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{study.title}</h2>
                </div>
                <Link 
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors w-fit shrink-0"
                >
                  Read Full Study <ArrowRight size={18} />
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                  <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[10px] tracking-widest mb-4">
                    <Clock size={16} /> The Problem
                  </div>
                  <p className={`text-sm leading-relaxed font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{study.problem}</p>
                </div>
                
                <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-blue-600/10' : 'bg-blue-50'}`}>
                  <div className="flex items-center gap-2 text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-4">
                    <Target size={16} /> The Solution
                  </div>
                  <p className={`text-sm leading-relaxed font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{study.solution}</p>
                </div>
                
                <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-green-500/10' : 'bg-emerald-50'}`}>
                  <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase text-[10px] tracking-widest mb-4">
                    <TrendingUp size={16} /> The Result
                  </div>
                  <p className={`text-base font-bold leading-relaxed ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`}>{study.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
