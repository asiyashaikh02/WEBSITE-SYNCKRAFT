import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: 'Synckraft automated our restaurant operations completely. Inventory waste dropped, and management saves literally hours every week.',
    author: 'Operations Director',
    location: 'QSR Chain, Mumbai'
  },
  {
    text: 'Real estate automation improved our workflow beyond expectations. Lead response times went from hours to seconds.',
    author: 'Managing Partner',
    location: 'Real Estate Brokerage, Delhi'
  },
  {
    text: 'Synckraft helped us transform an idea into a scalable digital system. Their Healthcare OS simplified our entire patient intake process.',
    author: 'Lead Administrator',
    location: 'Healthcare Provider, Pune'
  },
  {
    text: 'Working with the Synckraft team has been a masterclass in execution. They don\'t just build software; they build business models that work.',
    author: 'Founder',
    location: 'Logistics Setup, Bangalore'
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-surface text-on-surface border-y border-outline-variant/10">
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">Testimonials</h4>
          <h2 className="text-3xl font-bold tracking-tight text-on-surface">Trusted by Visionaries</h2>
        </div>

        <motion.div
          className="relative reveal"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-12 md:p-16 rounded-[3rem] border border-outline-variant/10 bg-surface-container shadow-xl shadow-black/5 text-center relative overflow-hidden">
            <Quote className="absolute top-10 left-5 text-primary/10" size={48} />
            <div className="min-h-[140px] flex flex-col justify-center items-center relative z-10">
              <p className="text-xl md:text-2xl italic leading-relaxed mb-10 text-on-surface/70 transition-all duration-500">
                "{testimonials[index].text}"
              </p>
              <div>
                <p className="font-bold text-on-surface">{testimonials[index].author}</p>
                <p className="text-sm uppercase tracking-widest font-medium mt-1 text-on-surface/70">{testimonials[index].location}</p>
              </div>
            </div>
            <Quote className="absolute bottom-[125px] right-5 text-primary/10" size={48} />
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 text-on-surface/50 hover:text-primary transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ width: i === index ? 24 : 8, backgroundColor: i === index ? 'var(--primary)' : 'rgba(148,163,184,0.24)' }}
                  className="h-2 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-2 text-on-surface/50 hover:text-primary transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
