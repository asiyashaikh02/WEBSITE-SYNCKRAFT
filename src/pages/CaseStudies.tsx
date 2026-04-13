import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Clock, Target } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const theme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';

  const studies = [
    {
      industry: "Real Estate Brokerage",
      title: "Automating 4,000+ Lead Follow-ups/Month",
      before: "A major regional brokerage was losing 40% of inbound weekend leads due to 48hr+ response times and manual CRM entry.",
      after: "Deployed Synckraft Real Estate OS with an AI Voice/Chat bot that answers immediately, qualifies budget, and schedules viewings autonomously.",
      results: "+310% in viewing appointments, zero lead leakage, 15 hours/week saved per agent."
    },
    {
      industry: "QSR Restaurant Chain",
      title: "Predictive Inventory OS Deployment",
      before: "3 locations were over-ordering perishables by 18%, leading to massive waste. Inventory took managers 4 hours every Sunday.",
      after: "Integrated Synckraft Restaurant OS mapping weather APIs, local events, and historical sales to predict required daily inventory.",
      results: "Waste reduced to 2.1%. Ordering takes 12 minutes of automated approval."
    }
  ];

  return (
    <div className={`pt-24 pb-32 min-h-screen ${theme === 'dark' ? 'bg-[#080809]' : 'bg-slate-50'}`}>
      <Helmet>
        <title>Case Studies | Synckraft Business OS</title>
        <meta name="description" content="Real ROI and Business Automation examples delivered by Synckraft Technologies." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Client Transformations</span>
          <h1 className={`text-5xl md:text-7xl font-black mt-4 mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Proven <span className="text-blue-500">ROI.</span>
          </h1>
        </div>

        <div className="space-y-12">
          {studies.map((study, i) => (
            <div key={i} className={`p-8 md:p-12 rounded-[3rem] border ${theme === 'dark' ? 'bg-[#111112] border-white/5' : 'bg-white border-slate-200'} shadow-2xl shadow-blue-500/5`}>
              <div className="mb-10">
                <span className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-blue-500/10 text-blue-500">{study.industry}</span>
                <h2 className={`text-3xl md:text-4xl font-bold mt-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{study.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                  <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[10px] tracking-widest mb-4">
                    <Clock size={16} /> The Problem
                  </div>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{study.before}</p>
                </div>
                
                <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-blue-600/10' : 'bg-blue-50'}`}>
                  <div className="flex items-center gap-2 text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-4">
                    <Target size={16} /> The Solution
                  </div>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{study.after}</p>
                </div>
                
                <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'}`}>
                  <div className="flex items-center gap-2 text-green-500 font-bold uppercase text-[10px] tracking-widest mb-4">
                    <TrendingUp size={16} /> The Result
                  </div>
                  <p className={`text-base font-bold leading-relaxed ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>{study.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
