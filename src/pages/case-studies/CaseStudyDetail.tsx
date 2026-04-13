import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle2, TrendingUp, Calendar, Zap, LayoutDashboard } from 'lucide-react';
import { CTA } from '../../components/CTA';

export default function CaseStudyDetail() {
  const { id } = useParams();
  const theme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Placeholder template mapping logic
  const title = id?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || "Automation Transformation";

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#080809] text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
      <Helmet>
        <title>{title} | Synckraft Case Study</title>
      </Helmet>

      {/* Hero Section */}
      <div className={`pt-32 pb-20 border-b ${theme === 'dark' ? 'border-white/10 bg-[#0A0A0B]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-bold text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
          <span className="block text-indigo-500 font-bold tracking-widest text-[10px] uppercase mb-4">Enterprise Automation</span>
          <h1 className={`text-4xl md:text-6xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            How {title} Scaled With AI Integration.
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            A deep technical overview of how we mapped existing bottlenecks, deployed our OS infrastructure, and drastically increased revenue retention.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-24 space-y-24">
        
        {/* Step 1: Problem */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <div className="p-3 bg-red-500/10 text-red-500 rounded-xl"><LayoutDashboard size={24} /></div>
              The Problem
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed">
            <p>
              Prior to utilizing Synckraft, the client was heavily reliant on manual data-entry protocols. Their legacy CRM was disconnected from their primary communication channels, resulting in segmented data silos.
            </p>
            <p>
              This structural flaw led to extreme operational friction, dropped leads, and inflated payroll hours allocated simply towards tracking workflow status instead of actually processing the work.
            </p>
          </div>
        </section>

        {/* Step 2: Solution */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><Zap size={24} /></div>
              The Solution
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed">
            <p>
              We designed a unified architectural blueprint starting with a central cloud database structure.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Deployed an intelligent lead categorization webhook system.",
                "Integrated conversational AI routing for instant client response.",
                "Automated the follow-up framework minimizing wait times from 48h to 2min."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Step 3: Implementation */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl"><Calendar size={24} /></div>
              Implementation
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed">
             <div className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-[#111112] border border-white/5' : 'bg-slate-100'}`}>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Deployment Timeline</h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-sm font-bold text-indigo-500">Week 1-2:</span>
                    <p>Workflow mapping and backend data migration.</p>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-indigo-500">Week 3-4:</span>
                    <p>OS Installation and active testing environment configuration.</p>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-indigo-500">Week 5:</span>
                    <p>Team training and full production launch.</p>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Step 4: Results */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl"><TrendingUp size={24} /></div>
              The Results
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed">
            <p>
              The business transformed fundamentally. Core operations that previously required full-time team management were reduced to automated oversight, allowing staff to handle purely high-value tasks.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                <div className="text-4xl font-black text-emerald-500 mb-2">310%</div>
                <div className="font-bold text-sm uppercase tracking-widest">Growth metric</div>
              </div>
              <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                <div className="text-4xl font-black text-emerald-500 mb-2">0</div>
                <div className="font-bold text-sm uppercase tracking-widest">Lead Leakage</div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Embedded CTA for Funnel Action */}
      <CTA theme={theme} />
      
    </div>
  );
}
