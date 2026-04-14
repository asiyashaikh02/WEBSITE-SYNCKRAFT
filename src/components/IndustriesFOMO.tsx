import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Building2, UtensilsCrossed, Stethoscope, Store, Factory, Hotel, Dumbbell, Scissors } from 'lucide-react';

interface ThemeProps {
  theme: 'dark' | 'light';
}

const industries = [
  { name: 'Real Estate', path: '/industries/real-estate', icon: Building2 },
  { name: 'Restaurant', path: '/industries/restaurant', icon: UtensilsCrossed },
  { name: 'Healthcare', path: '/industries/healthcare', icon: Stethoscope },
  { name: 'Retail', path: '/industries/retail', icon: Store },
  { name: 'Manufacturing', path: '/industries/manufacturing', icon: Factory },
  { name: 'Hospitality', path: '/industries/hospitality', icon: Hotel },
  { name: 'Gym', path: '/industries/gym', icon: Dumbbell },
  { name: 'Salon', path: '/industries/salon', icon: Scissors },
];

export const IndustriesFOMO: React.FC<ThemeProps> = ({ theme }) => {
  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-[#050505]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h4 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Industries Served</h4>
          <h2 className={`text-4xl md:text-6xl font-extrabold tracking-tight mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Digitally Transform</span>
          </h2>
          <p className={`text-xl font-light max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            Join global leaders who have already upgraded their operations securely.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {industries.map((ind, i) => (
            <Link 
              to={ind.path} 
              key={i} 
              className={`group relative overflow-hidden rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                theme === 'dark' ? 'bg-[#111112] border-white/5 hover:border-blue-500/30' : 'bg-slate-50 border-slate-200 hover:border-blue-500/30'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <ind.icon size={24} />
              </div>
              <span className={`font-bold text-sm text-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{ind.name}</span>
            </Link>
          ))}
        </div>

        <div className="text-center reveal">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-all hover:gap-4 hover:shadow-xl hover:shadow-blue-600/20"
          >
            Explore All Industries <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
