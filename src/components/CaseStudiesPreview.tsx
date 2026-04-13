import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Utensils, Activity } from 'lucide-react';
import { motion } from 'framer-motion';


export const CaseStudiesPreview = ({ theme }: { theme: 'dark' | 'light' }) => {
  const previewStudies = [
    {
      id: "real-estate-automation",
      industry: "Real Estate",
      icon: <Building2 className="text-blue-500" size={24} />,
      title: "310% More Conversions",
      summary: "Deployed Synckraft Real Estate OS with autonomous AI Voice/Chat to qualify budgets instantly.",
    },
    {
      id: "restaurant-automation",
      industry: "Restaurants",
      icon: <Utensils className="text-orange-500" size={24} />,
      title: "Waste Reduced to 2.1%",
      summary: "Integrated Restaurant OS mapped to weather APIs and historical sales for predictive daily inventory.",
    },
    {
      id: "healthcare-automation",
      industry: "Healthcare",
      icon: <Activity className="text-emerald-500" size={24} />,
      title: "100% Digital Data Flow",
      summary: "Implemented Healthcare OS with seamless digital onboarding, auto-scheduling, and EHR integration.",
    }
  ];

  return (
    <section className={`py-32 relative overflow-hidden ${theme === 'dark' ? 'bg-[#080809]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
          <div className="max-w-2xl">
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Track Record</h4>
            <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Real World <span className="text-blue-600">ROI.</span>
            </h2>
            <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              See how we've deployed Business OS architecture to radically transform manual operations into fully optimized digital systems.
            </p>
          </div>
          <Link 
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-transform hover:-translate-y-1 shrink-0"
          >
            View All Case Studies <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewStudies.map((study, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`p-8 rounded-[2rem] border transition-all hover:-translate-y-2 ${
                theme === 'dark' 
                  ? 'bg-[#111112] border-white/5 hover:border-blue-500/30' 
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-xl shadow-slate-200/50'
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'}`}>
                  {study.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">{study.industry}</span>
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {study.title}
              </h3>
              
              <p className={`text-sm leading-relaxed mb-8 h-20 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                {study.summary}
              </p>

              <Link 
                to={`/case-studies/${study.id}`}
                className="text-blue-500 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Read Case Study <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
