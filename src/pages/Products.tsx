import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, BarChart2, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const theme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  
  const products = [
    { title: "Real Estate OS", desc: "Full CRM, property matching, automated nurturing, and smart analytics all wrapped in one dashboard.", link: "/products/real-estate-os" },
    { title: "Restaurant OS", desc: "Omnichannel ordertaking, smart inventory prediction, and built-in loyalty and retention pipelines.", link: "/products/restaurant-os" },
    { title: "Healthcare OS", desc: "Compliant EMR, zero-drop appointment flow, and automated patient communication modules.", link: "/products/healthcare-os" },
    { title: "Retail OS", desc: "Predictive inventory, omnichannel POS integration, and advanced customer analytics.", link: "/products/retail-os" },
    { title: "Manufacturing OS", desc: "IoT integration, real-time machine floor analytics, and supply chain routing.", link: "/products/manufacturing-os" },
    { title: "Business OS", desc: "End-to-end unified architecture connecting all disparate business operations.", link: "/products/business-os" }
  ];

  return (
    <div className={`pt-24 pb-32 min-h-screen ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-slate-50'}`}>
      <Helmet>
        <title>Products | Synckraft Business OS</title>
        <meta name="description" content="Explore Synckraft's flagship Business Operating Systems tailored for enterprise growth." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Ecosystem Products</span>
          <h1 className={`text-5xl md:text-7xl font-black mt-4 mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Dashboards.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <Link to={p.link} key={i} className={`block group cursor-pointer p-8 rounded-[2rem] border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${theme === 'dark' ? 'bg-[#111112] border-white/5 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-500/30'}`}>
              <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <BarChart2 size={24} />
              </div>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{p.title}</h2>
              <p className={`text-base leading-relaxed mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{p.desc}</p>
              
              <div className="flex gap-4 mb-8">
                <div className={`flex flex-col gap-1 items-center justify-center w-full p-4 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                  <Zap size={20} className="text-yellow-500" />
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Fast UI</span>
                </div>
                <div className={`flex flex-col gap-1 items-center justify-center w-full p-4 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                  <Shield size={20} className="text-green-500" />
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Secure</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                 <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Request Demo</span>
                 <ArrowUpRight className="text-blue-500 group-hover:rotate-45 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
