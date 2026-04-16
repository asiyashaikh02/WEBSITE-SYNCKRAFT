import React from 'react';
import { Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustSection = () => {
  const industries = [
    'Real Estate',
    'Restaurants',
    'Healthcare',
    'Retail',
    'Manufacturing',
    'E-Commerce',
    'Education',
    'Hospitality',
    'Fintech',
    'Automotive'
  ];

  return (
    <section className="py-12 border-y bg-slate-950 text-white border-white/10 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative mb-6">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-slate-400 font-semibold tracking-widest uppercase text-xs">
            Trusted by industry leaders across the globe
          </p>
        </div>
      </div>
      
      <div className="flex overflow-hidden relative w-full">
        <motion.div
          className="flex whitespace-nowrap gap-8"
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* Double array for seamless loop */}
          {[...industries, ...industries, ...industries].map((ind, i) => (
            <div
              key={i}
              className="px-6 py-2 rounded-full font-bold text-sm md:text-base border border-white/10 text-slate-300 bg-white/5 whitespace-nowrap"
            >
              {ind}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
