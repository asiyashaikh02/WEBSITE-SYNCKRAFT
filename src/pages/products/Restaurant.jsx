import React from 'react';
import { Link } from 'react-router-dom';

export default function Restaurant() {
  return (
    <main className="pt-32 min-h-screen">
      <section className="px-8 max-w-7xl mx-auto mb-20 text-center">
        <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">
          Restaurant Platform
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-8">
          Optimize inventory, table turnover, and customer experience with our intelligent Restaurant Operating System.
        </p>
        <p className="text-lg text-on-surface-variant mb-12">
          Coming Soon
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book-demo" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold hover:shadow-[0_0_20px_rgba(137,206,255,0.4)] transition-all">
            Book Demo
          </Link>
          <Link to="/services" className="px-8 py-4 bg-surface-container-high text-on-surface rounded-xl font-bold border border-outline-variant/20 hover:bg-surface-container-highest transition-all">
            Explore Services
          </Link>
        </div>
      </section>
    </main>
  );
}