import React from 'react';
import { Target, ShieldCheck, Cpu, Zap } from 'lucide-react';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export const About: React.FC<ThemeProps> = ({ theme }) => {
  return (
    <section id="about" className={`py-24 md:py-40 relative overflow-hidden ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-8">Business OS</h4>
            <h2 className={`text-4xl md:text-6xl font-extrabold mb-10 leading-tight tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              OS for the Modern Era <br />
              <span className="text-slate-500 font-light italic">AI Automation. Smart Dashboards.</span>
            </h2>
            <p className={`text-xl leading-relaxed mb-12 max-w-xl font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Synckraft builds comprehensive Business Operating Systems. We don't just deliver software — we implement structured, scalable, and automated digital ecosystems.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-10">
               <div className="group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    theme === 'dark' ? 'bg-white/5 text-blue-500 group-hover:bg-blue-600 group-hover:text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    <Cpu size={24} />
                  </div>
                  <h4 className={`font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Architecture First</h4>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>Engineered for lasting performance and longevity.</p>
               </div>
               <div className="group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    theme === 'dark' ? 'bg-white/5 text-blue-500 group-hover:bg-blue-600 group-hover:text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className={`font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Industry Focus</h4>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>We deliver specialized OS solutions tailored to your exact sector.</p>
               </div>
            </div>

            {/* Portfolio Logos */}
            <div className="mt-20 pt-12 border-t border-white/5 flex flex-col items-center text-center group transition-all duration-500">
              <h3 className={`text-[35px] md:-ml-[18rem] font-bold mb-10 tracking-tight uppercase tracking-[0.2em] ${
                theme === 'dark' ? 'text-blue-500/50' : 'text-slate-400'
              }`}>
                Core <span className="text-blue-600/60 italic font-light lowercase">industries</span>
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                 <div className={`px-6 py-3 rounded-full text-sm font-bold border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>Real Estate</div>
                 <div className={`px-6 py-3 rounded-full text-sm font-bold border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>Restaurants & Hospitality</div>
                 <div className={`px-6 py-3 rounded-full text-sm font-bold border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>Healthcare & Clinics</div>
                 <div className={`hidden md:block px-6 py-3 rounded-full text-sm font-bold border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>Retail</div>
              </div>
            </div>
          </div>

          <div className="relative reveal lg:pl-12" style={{ transitionDelay: '0.2s' }}>
            <div className={`aspect-square rounded-[4rem] overflow-hidden flex items-center justify-center relative group border ${
              theme === 'dark' ? 'bg-[#111112] border-white/5' : 'bg-slate-50 border-slate-100'
            }`}>
              <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
                 <Zap size={400} className="text-blue-600" />
              </div>
              <div className="relative z-10 p-12 text-center">
                 <div className="w-24 h-24 rounded-[2rem] bg-blue-600 flex items-center justify-center mx-auto mb-10 shadow-2xl">
                    <Target size={44} className="text-white" />
                 </div>
                 <p className={`text-3xl font-bold italic leading-snug tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                   "Building the systems <br /> that redefine growth."
                 </p>
              </div>
            </div>
            
            {/* Visual Accents */}
            <div className={`absolute -bottom-8 -right-8 w-40 h-40 bg-blue-600/5 blur-3xl rounded-full -z-10`} />
          </div>
        </div>
      </div>
    </section>
  );
};