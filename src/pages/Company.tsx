import React from 'react';
import { Helmet } from 'react-helmet-async';
import { About as AboutSection } from '../components/About';
import { Pillars } from '../components/Pillars';

const Company: React.FC = () => {
  const theme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';

  return (
    <div className={`pt-24 min-h-screen ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-white'}`}>
      <Helmet>
        <title>Company | Synckraft Technologies</title>
        <meta name="description" content="Learn about Synckraft's holding strategy, company DNA, and OS execution frameworks." />
      </Helmet>
      
      <div className="text-center py-20 px-8">
        <h1 className={`text-5xl md:text-7xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          The Team Building <br />
          <span className="text-blue-500">The Future of OS.</span>
        </h1>
      </div>

      <AboutSection theme={theme} />
      <Pillars theme={theme} />
    </div>
  );
};

export default Company;
