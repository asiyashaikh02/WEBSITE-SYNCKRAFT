import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from "./ui/Button";
import { STYLES } from "../constants/designSystem";

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-28 relative overflow-hidden bg-white border-t border-slate-100">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-3xl animate-orb-drift" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-slate-50/70 blur-3xl animate-orb-drift" style={{ animationDelay: '-8s' }} />
      </div>

      <div className={`${STYLES.container} relative z-10`}>
        <div className="reveal relative rounded-3xl overflow-hidden p-10 sm:p-16 md:p-24 text-center bg-slate-50 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/8 transition-all duration-500 group">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/25 to-cyan-50/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/40 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black mb-7 tracking-tight leading-[1.05] text-slate-900">
              Ready to build the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic animate-gradient-x">
                future?
              </span>
            </h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium max-w-xl mx-auto">
              Join the ecosystem. Let's engineer scalable infrastructure for your next enterprise venture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                className="min-w-[200px] group/btn"
                icon={<ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />}
                iconPosition="right"
              >
                Partner With Us
              </Button>
              <Button
                to="/about"
                variant="outline"
                size="lg"
                className="min-w-[200px] group/btn"
                icon={<ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-all duration-300 text-slate-400" />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
