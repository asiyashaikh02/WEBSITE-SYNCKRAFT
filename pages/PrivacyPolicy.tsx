import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const PrivacyPolicy = ({ theme, toggleTheme }: { theme: 'dark' | 'light', toggleTheme: () => void }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0A0A0B] text-white' : 'bg-white text-slate-900'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="max-w-4xl mx-auto px-8 py-40">
        <h1 className="text-5xl font-black mb-10">Privacy Policy<span className="text-blue-600">.</span></h1>
        <div className="space-y-8 opacity-70 leading-relaxed">
          <p>At Synckraft Technologies, we prioritize your privacy. This policy explains how we handle your data.</p>
          <h3 className="text-xl font-bold text-blue-500">1. Data Tracking</h3>
          <p>We use the <strong>Meta Pixel</strong> and other cookies to analyze website traffic and optimize our advertising campaigns on Facebook and Instagram.</p>
          <h3 className="text-xl font-bold text-blue-500">2. Contact Information</h3>
          <p>Data collected through our contact form is used solely for business inquiries and is never sold to third parties.</p>
        </div>
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default PrivacyPolicy;