import React from 'react';
import { Link } from 'react-router-dom';

export default function RealEstate() {
  return (
    <main className="pt-32 min-h-screen">
      <section className="px-8 max-w-7xl mx-auto mb-20 text-center">
        <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">
          Real Estate Platform
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
          Coming Soon
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold hover:shadow-[0_0_20px_rgba(137,206,255,0.4)] transition-all">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}