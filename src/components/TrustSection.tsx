import React from 'react';
import { Globe2 } from 'lucide-react';

export const TrustSection = ({ theme }: { theme: 'dark' | 'light' }) => {
  const industries = [
    "Real Estate",
    "Restaurants",
    "Healthcare",
    "Retail",
    "Manufacturing"
  ];

  return (
    <section className={`py-20 border-y ${theme === 'dark' ? 'bg-[#0A0A0B] border-white/5' : 'bg-white border-slate-100'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-8 relative">
        
        <div className="flex flex-col items-center justify-center text-center reveal">
          <Globe2 className="text-blue-500 mb-6" size={40} />
          <h2 className={`text-2xl md:text-3xl font-black mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Trusted Across Industries. Serving Businesses Globally.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
            {industries.map((ind, i) => (
              <div 
                key={i}
                className={`px-6 py-3 rounded-full font-bold text-sm md:text-base border ${
                  theme === 'dark' 
                    ? 'border-white/10 text-slate-300 bg-white/5' 
                    : 'border-slate-200 text-slate-600 bg-slate-50'
                }`}
              >
                {ind}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
