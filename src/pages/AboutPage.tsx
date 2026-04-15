import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Rocket, Zap, Shield, Briefcase, ChevronRight } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';

const AboutPage = () => {
  const { theme } = useTheme();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={`pt-24 min-h-screen transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-white'
    }`}>
      <Helmet>
        <title>About Us | Synckraft Technologies Private Limited</title>
        <meta name="description" content="Discover Synckraft Technologies Private Limited - a forward-thinking technology and automation company dedicated to building intelligent systems." />
      </Helmet>

      <main className="py-20 md:py-32 -mt-[100px]">
        <div className="max-w-7xl mx-auto px-8">
          {/* Hero Section */}
          <section className="reveal mb-24 relative">
            <div className="max-w-4xl">
              <h1 className={`text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                About <br />
                <span className="text-blue-600 italic font-light">Synckraft.</span>
              </h1>
              <p className={`text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-10 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Synckraft Technologies Private Limited is a forward-thinking technology and automation company 
                dedicated to building intelligent systems that enhance efficiency, scalability, and business performance.
              </p>
              <div className="flex gap-10">
                 {[
                   { label: 'Ventures', val: '5+' },
                   { label: 'Growth', val: '9.8x' },
                   { label: 'Tech Stack', val: 'Full' }
                 ].map((m) => (
                   <div key={m.label}>
                      <p className="text-2xl font-black text-blue-600">{m.val}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{m.label}</p>
                   </div>
                 ))}
              </div>
            </div>
          </section>

          {/* Core Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 reveal" style={{ transitionDelay: '0.2s' }}>
            {[
              "Automation-driven solutions",
              "Scalable infrastructure",
              "Platform ecosystems",
              "Data-centric systems"
            ].map((item, index) => (
              <div key={index} className={`p-8 rounded-3xl border transition-all hover:border-blue-500/30 ${
                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <ChevronRight className="text-blue-600 mb-4" size={20} />
                <p className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{item}</p>
              </div>
            ))}
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />
            <div className={`p-10 md:p-16 rounded-[3.5rem] reveal border relative z-10 ${
              theme === 'dark' ? 'bg-[#111112] border-white/5' : 'bg-blue-50 border-blue-100 shadow-sm'
            }`}>
              <Target className="text-blue-600 mb-8" size={48} />
              <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Vision</h2>
              <p className={`text-lg font-light leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                To build a powerful, integrated ecosystem where technology, automation, and intelligence redefine how businesses operate.
              </p>
            </div>

            <div className={`p-10 md:p-16 rounded-[3.5rem] reveal border relative z-10 ${
              theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`} style={{ transitionDelay: '0.2s' }}>
              <Rocket className="text-blue-600 mb-8" size={48} />
              <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Mission</h2>
              <ul className={`space-y-4 text-lg font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Simplify complex workflows through automation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Empower businesses with scalable digital tools</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Create high-performance systems for results</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What We Do */}
          <section className="mb-24 reveal">
            <div className="flex flex-col md:flex-row gap-12 items-start p-10 md:p-16 rounded-[3.5rem] bg-blue-600/5 border border-blue-600/10">
              <div className="md:w-1/3">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>What We Do</h2>
                <p className="text-slate-500 font-light leading-relaxed">Synckraft operates across multiple domains with an execution-first mindset.</p>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Zap, title: "Process Automation" },
                  { icon: Briefcase, title: "Comm Systems" },
                  { icon: Target, title: "Tech Consulting" },
                  { icon: Rocket, title: "Platform Dev" },
                  { icon: Shield, title: "Data Optimization" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 shrink-0 transform group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <span className={`font-bold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Legal & Commitment */}
          <div className="grid md:grid-cols-2 gap-12 py-20 border-t border-white/10 reveal">
            <div>
              <h3 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Legal Identity</h3>
              <div className="space-y-4 font-mono text-sm text-slate-500">
                <p><span className="text-blue-500 font-bold uppercase tracking-widest mr-4">Company</span> Synckraft Technologies Private Limited</p>
                <p><span className="text-blue-500 font-bold uppercase tracking-widest mr-4">CIN</span> U62020MH2026PTC467409</p>
                <p><span className="text-blue-500 font-bold uppercase tracking-widest mr-4">Location</span> India</p>
              </div>
            </div>
            <div>
              <h3 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Commitment</h3>
              <div className="grid grid-cols-2 gap-6">
                {["Data integrity", "Client confidentiality", "Long-term partnerships", "Continuous innovation"].map((t, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span className="text-sm font-medium opacity-70">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final Statement */}
          <section className="mt-40 text-center reveal">
            <div className={`p-12 md:p-20 rounded-[4rem] border ${
              theme === 'dark' ? 'bg-blue-600/5 border-blue-600/20' : 'bg-slate-50 border-slate-200'
            }`}>
              <p className={`text-2xl md:text-4xl font-bold leading-tight mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Synckraft is not just a company — <br />
                it is a <span className="text-blue-600">system built for scale,</span> <br />
                precision, and dominance in the digital era.
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
                All Rights Reserved © Synckraft Technologies Private Limited
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
