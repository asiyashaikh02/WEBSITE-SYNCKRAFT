import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Synckraft automated our restaurant operations completely. Inventory waste dropped, and management saves literally hours every week.",
    author: "Operations Director",
    location: "QSR Chain, Mumbai"
  },
  {
    text: "Real estate automation improved our workflow beyond expectations. Lead response times went from hours to seconds.",
    author: "Managing Partner",
    location: "Real Estate Brokerage, Delhi"
  },
  {
    text: "Synckraft helped us transform an idea into a scalable digital system. Their Healthcare OS simplified our entire patient intake process.",
    author: "Lead Administrator",
    location: "Healthcare Provider, Pune"
  },
  {
    text: "Working with the Synckraft team has been a masterclass in execution. They don't just build software; they build business models that work.",
    author: "Founder",
    location: "Logistics Setup, Bangalore"
  }
];

export const Testimonials = ({ theme = 'light' }: { theme?: 'dark' | 'light' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className={`py-32 relative overflow-hidden ${theme === 'dark' ? 'bg-[#0A0A0B] border-y border-white/5' : 'bg-white border-y border-slate-50'}`}>
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Testimonials</h4>
          <h2 className={`text-3xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Trusted by Visionaries
          </h2>
        </div>
        
        <div className="relative reveal">
          <div className={`p-12 md:p-16 rounded-[3rem] border text-center relative shadow-xl ${theme === 'dark' ? 'bg-[#111112] border-white/5 shadow-black/50' : 'bg-blue-50/30 border-blue-100 shadow-blue-500/5'}`}>
             <Quote className={`absolute top-10 left-5 ${theme === 'dark' ? 'text-blue-500/20' : 'text-blue-200'}`} size={48} />
             <div className="min-h-[140px] flex flex-col justify-center items-center relative z-10">
                <p className={`text-xl md:text-2xl italic leading-relaxed mb-10 transition-all duration-500 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  "{testimonials[index].text}"
                </p>
                <div>
                   <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{testimonials[index].author}</p>
                   <p className={`text-sm uppercase tracking-widest font-medium mt-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{testimonials[index].location}</p>
                </div>
             </div>
             <Quote className={`absolute bottom-[125px] right-5 ${theme === 'dark' ? 'text-blue-500/20' : 'text-blue-200'}`} size={48} />
          </div>
          
          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2 items-center">
               {testimonials.map((_, i) => (
                 <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-blue-600 w-6' : 'bg-blue-500/20 w-2'}`} />
               ))}
            </div>
            <button 
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
