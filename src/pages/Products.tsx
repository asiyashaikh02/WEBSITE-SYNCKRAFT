import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, BarChart2, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Products: React.FC = () => {

  const products = [
    { title: 'Real Estate Platform', desc: 'Comprehensive real estate management and automation platform.', link: '/products/RealEstate' },
    { title: 'Restaurant Platform', desc: 'Complete restaurant operations and customer management system.', link: '/products/Restaurant' },
    { title: 'Healthcare Platform', desc: 'Advanced healthcare management and patient care platform.', link: '/products/Healthcare' },
    { title: 'Business OS', desc: 'Unified business operating system for enterprise automation.', link: '/products/BusinessOS' },
    { title: 'Automation Platform', desc: 'Intelligent automation solutions for business processes.', link: '/products/Automation' }
  ];

  return (
    <div className="pt-24 pb-32 min-h-screen bg-surface text-on-surface">
      <Helmet>
        <title>Products | Synckraft Business OS</title>
        <meta name="description" content="Explore Synckraft's flagship Business Operating Systems tailored for enterprise growth." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Ecosystem Products</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 text-on-surface">
            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Dashboards.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer p-8 rounded-[2rem] border border-outline-variant/10 bg-surface-container transition-all duration-300 shadow-sm hover:shadow-2xl"
            >
              <Link to={p.link} className="block h-full">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <BarChart2 size={24} />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-on-surface">{p.title}</h2>
                <p className="text-base leading-relaxed mb-8 text-on-surface/70">{p.desc}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex flex-col gap-1 items-center justify-center w-full p-4 rounded-xl bg-surface-container-highest">
                    <Zap size={20} className="text-yellow-500" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-on-surface/70">Fast UI</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center justify-center w-full p-4 rounded-xl bg-surface-container-highest">
                    <Shield size={20} className="text-emerald-500" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-on-surface/70">Secure</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/10">
                  <span className="text-primary font-bold uppercase tracking-widest text-xs">Request Demo</span>
                  <ArrowUpRight className="text-primary group-hover:rotate-45 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
