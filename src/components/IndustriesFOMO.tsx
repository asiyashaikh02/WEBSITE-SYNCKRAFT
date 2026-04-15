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
    <section className={`py-24 relative overflow-hidden ${theme === 'dark' ? 'bg-surface' : 'bg-surface-container'}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 bg-surface opacity-95" />
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
        <div className="text-center mb-16 reveal">
          <h4 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Industries Served</h4>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-on-surface">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Digitally Transform</span>
          </h2>
          <p className="text-xl font-light max-w-2xl mx-auto text-on-surface/70">
            Join global leaders who have already upgraded their operations securely.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {industries.map((ind, i) => (
            <Link 
              to={ind.path} 
              key={i} 
              className="group relative overflow-hidden rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 bg-surface-container bg-opacity-70 border border-outline-variant backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(56,189,248,0.15)] hover:border-cyan-500/30"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-on-surface transition-all duration-300">
                <ind.icon size={24} />
              </div>
              <span className="font-bold text-sm text-center text-on-surface">{ind.name}</span>
            </Link>
          ))}
        </div>

        <div className="text-center reveal">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-on-surface font-bold px-8 py-4 rounded-full transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_90px_rgba(56,189,248,0.35)] shadow-[0_24px_80px_rgba(56,189,248,0.25)] hover:gap-4"
          >
            Explore All Industries <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
