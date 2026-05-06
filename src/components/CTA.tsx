import React from 'react';
import { ArrowRight, Mail, Search, Component, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ThemeProps {
  theme?: 'dark' | 'light';
}

export const CTA: React.FC<ThemeProps> = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-white border-t border-slate-100">
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50 blur-3xl opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-slate-50 blur-3xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 md:p-24 text-center bg-slate-50 border border-slate-200 shadow-xl shadow-slate-200/50">
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight leading-tight text-slate-900">
              Ready to build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic">future?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              Join the ecosystem. Let's engineer scalable infrastructure for your next enterprise venture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <Link to="/contact" className="group px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 hover:bg-blue-600 flex items-center gap-3 w-full sm:w-auto justify-center text-center">
                  Partner With Us <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </Link>
               <Link to="/about" className="group px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-lg transition duration-300 hover:bg-slate-50 hover:-translate-y-1 hover:border-slate-300 hover:shadow-sm flex items-center gap-3 w-full sm:w-auto justify-center text-center">
                  Learn More <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform text-slate-400" />
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};