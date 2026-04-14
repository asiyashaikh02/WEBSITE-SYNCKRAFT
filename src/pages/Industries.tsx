import { useEffect } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IndustrySolutions } from '../components/IndustrySolutions';

const Industries: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  
  return (
    <div className={`pt-24 min-h-screen ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-white'}`}>
      <Helmet>
        <title>Industries | Synckraft Business OS</title>
        <meta name="description" content="Discover how Synckraft's AI-powered Business Operating Systems transform Real Estate, Healthcare, Restaurants, and Retail." />
        <link rel="canonical" href="https://synckraft.in/industries" />
      </Helmet>
      
      <div className="text-center py-20 px-8 max-w-4xl mx-auto">
        <h1 className={`text-5xl md:text-7xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          OS built for <span className="text-blue-500">your</span> sector.
        </h1>
        <p className={`text-xl font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
          No generic software. Just highly specialized, AI-driven architectures designed to solve the exact bottlenecks of your specific industry.
        </p>
      </div>

      <IndustrySolutions theme={theme} />
    </div>
  );
};

export default Industries;
