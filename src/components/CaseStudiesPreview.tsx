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
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-slate-950/95" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 12%, rgba(56,189,248,0.06), transparent 28%), radial-gradient(circle at 82% 18%, rgba(168,85,247,0.05), transparent 26%), radial-gradient(circle at 55% 85%, rgba(14,165,233,0.04), transparent 35%)",
          mixBlendMode: "screen",
          opacity: 0.5,
        }}
      />
      <div className="hero-glow opacity-50" />
      <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-cyan-500/8 blur-3xl" />
      <div className="absolute right-8 top-40 h-56 w-56 rounded-full bg-fuchsia-500/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
          <div className="max-w-2xl">
            <h4 className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Track Record</h4>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Real World <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">ROI.</span>
            </h2>
            <p className="mt-4 text-lg text-slate-300">
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
              className="p-8 rounded-[2rem] bg-slate-900/60 border border-white/10 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(56,189,248,0.15)] hover:border-cyan-500/30"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 rounded-xl bg-white/5">
                  {study.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">{study.industry}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                {study.title}
              </h3>
              
              <p className="text-sm leading-relaxed mb-8 h-20 text-slate-300">
                {study.summary}
              </p>

              <Link 
                to={`/case-studies/${study.id}`}
                className="text-cyan-400 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 hover:text-cyan-300 transition-all"
              >
                Read Case Study <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white font-bold transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_90px_rgba(56,189,248,0.35)] shadow-[0_24px_80px_rgba(56,189,248,0.25)]"
          >
            Explore Services <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};
