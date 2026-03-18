import React from 'react';
import { Navbar } from '../components/Navbar'; // Adjust path if needed
import { Footer } from '../components/Footer';

interface PageProps {
  theme: 'dark' | 'light';
}

const LegalPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <div className={theme === 'dark' ? 'bg-[#0A0A0B] text-white' : 'bg-white text-slate-900'}>
      <Navbar theme={theme} />
      
      <main className="max-w-4xl mx-auto px-8 py-32 min-h-screen">
        <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">
          Privacy Policy <span className="text-blue-600">.</span>
        </h1>
        
        <div className={`prose prose-lg ${theme === 'dark' ? 'prose-invert text-slate-400' : 'text-slate-600'} max-w-none space-y-8`}>
          <section>
            <h2 className="text-2xl font-bold text-blue-500 uppercase tracking-widest text-sm mb-4">Effective Date: March 18, 2026</h2>
            <p>
              Synckraft Technologies ("we," "us," or "our") is committed to protecting your privacy. This policy explains how we collect and use data.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-2">1. Data Tracking (Meta Pixel)</h3>
            <p>
              We use the <strong>Meta Pixel</strong> to track user behavior on our site. This helps us measure the effectiveness of our advertising and provide a better experience on Facebook and Instagram.
            </p>
          </section>

          {/* Add more sections here for Terms or Refund policy text */}
        </div>
      </main>

      <Footer theme={theme} />
    </div>
  );
};

export default LegalPage;