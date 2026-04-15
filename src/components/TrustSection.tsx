import React from 'react';
import { Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustSection = () => {
  const industries = [
    'Real Estate',
    'Restaurants',
    'Healthcare',
    'Retail',
    'Manufacturing'
  ];

  return (
    <section className="py-20 border-y bg-surface text-on-surface border-outline-variant/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <motion.div
          className="flex flex-col items-center justify-center text-center reveal"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Globe2 className="text-primary mb-6" size={40} />
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-on-surface">
            Trusted Across Industries. Serving Businesses Globally.
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="px-6 py-3 rounded-full font-bold text-sm md:text-base border border-outline-variant/10 text-on-surface/80 bg-surface-container"
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
