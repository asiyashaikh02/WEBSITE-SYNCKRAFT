import React from 'react';
import { Globe2, MapPin } from 'lucide-react';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export const GlobalSection: React.FC<ThemeProps> = ({ theme }) => {
  const regions = [
    { country: 'India', desc: 'APAC Headquarters' },
    { country: 'UAE', desc: 'MENA Operations' },
    { country: 'USA', desc: 'North America Hub' },
    { country: 'UK', desc: 'European Gateway' },
    { country: 'Singapore', desc: 'SE Asia Command' },
    { country: 'Australia', desc: 'Oceania Partners' }
  ];

  return (
    <section className={`py-24 border-t ${theme === 'dark' ? 'bg-[#0A0A0B] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-blue-500/10 text-blue-500 mb-6">
            <Globe2 size={32} />
          </div>
          <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Serving Businesses Globally
          </h2>
          <p className={`text-xl font-light max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            Synckraft's automation ecosystems are trusted by enterprise leaders across 6 major economic regions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 reveal">
          {regions.map((region, i) => (
            <div key={i} className={`p-6 rounded-3xl border text-center transition-all hover:-translate-y-1 hover:shadow-xl ${theme === 'dark' ? 'bg-[#111112] border-white/5 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-500/30'}`}>
              <MapPin size={24} className="mx-auto text-blue-500 mb-4 opacity-80" />
              <h3 className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{region.country}</h3>
              <p className={`text-xs uppercase tracking-wider font-bold ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{region.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
