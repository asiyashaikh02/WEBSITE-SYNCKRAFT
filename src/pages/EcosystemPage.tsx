import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Ecosystem } from '../components/Ecosystem';

const EcosystemPage: React.FC = () => {
  return (
    <main className="bg-white min-h-screen pt-32">
      <Helmet>
        <title>Ecosystem | Synckraft Technologies</title>
        <meta name="description" content="Explore the Synckraft ecosystem of specialized infrastructure and technology brands." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Our Ecosystem
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
          Synckraft is the parent technology and infrastructure company powering specialized modern brands. We build systems that run industries.
        </p>
      </div>

      <Ecosystem theme="light" />
    </main>
  );
};

export default EcosystemPage;
