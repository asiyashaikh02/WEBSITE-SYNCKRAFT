import React from 'react';
import { ArrowRight, Box, Building2, UtensilsCrossed, Stethoscope, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export const ProductOSSection: React.FC<ThemeProps> = ({ theme }) => {
  const products = [
    {
      title: 'Real Estate OS',
      desc: 'Predictive CRM & automated property pipelines.',
      icon: <Building2 size={28} />,
      link: '/products/real-estate-os'
    },
    {
      title: 'Restaurant OS',
      desc: 'Omnichannel POS & kitchen automation intelligence.',
      icon: <UtensilsCrossed size={28} />,
      link: '/products/restaurant-os'
    },
    {
      title: 'Healthcare OS',
      desc: 'Secure EMR compliance & patient workflow automation.',
      icon: <Stethoscope size={28} />,
      link: '/products/healthcare-os'
    },
    {
      title: 'Retail OS',
      desc: 'Smart supply chains & physical-to-digital integrations.',
      icon: <Store size={28} />,
      link: '/products/retail-os'
    }
  ];

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h4 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8 flex justify-center items-center gap-2"><Box size={14} /> Product Ecosystem</h4>
          <h2 className={`text-4xl md:text-6xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Business Operating Systems</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((prod, index) => (
            <Link to={prod.link} key={index} className={`group block p-8 rounded-3xl border transition-all duration-300 reveal flex flex-col hover:-translate-y-2 ${
              theme === 'dark' ? 'bg-[#111112] border-white/5 hover:border-blue-500/30 shadow-blue-500/5' : 'bg-white border-slate-200 hover:border-blue-500/30 hover:shadow-xl'
            }`}>
              <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                {prod.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{prod.title}</h3>
              <p className={`text-sm leading-relaxed mb-6 flex-grow ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{prod.desc}</p>
              
              <div className="text-blue-500 font-bold text-xs uppercase tracking-widest flex items-center justify-between border-t border-blue-500/10 pt-4 group-hover:text-blue-400">
                <span>View Product</span> <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center reveal">
          <Link to="/products" className={`px-8 py-4 border rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 mx-auto max-w-fit ${theme === 'dark' ? 'border-white/20 text-white hover:bg-white/5' : 'border-slate-300 text-slate-800 hover:bg-slate-100'}`}>
            Explore All Products <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
