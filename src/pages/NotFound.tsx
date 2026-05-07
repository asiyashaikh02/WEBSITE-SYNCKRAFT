import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const theme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';

  return (
    <div className={`min-h-screen flex items-center justify-center pt-24 pb-12 px-5 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0A0A0B] text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
      <Helmet>
        <title>404 - Page Not Found | Synckraft Technologies</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Synckraft Technologies homepage for enterprise AI infrastructure and digital transformation solutions." />
        <meta name="robots" content="noindex, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="404 - Page Not Found | Synckraft Technologies" />
        <meta property="og:description" content="The requested page could not be found. Explore our enterprise AI infrastructure and digital transformation solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synckraft.in/404" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="404 - Page Not Found | Synckraft Technologies" />
        <meta name="twitter:description" content="Page not found. Discover our enterprise infrastructure solutions." />

        {/* Structured Data - WebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "404 - Page Not Found",
            "description": "Error page for Synckraft Technologies website",
            "url": "https://synckraft.in/404",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Synckraft Technologies",
              "url": "https://synckraft.in"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-md w-full text-center">
        
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 relative ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-200'}`}>
          <Search size={48} className={theme === 'dark' ? 'text-slate-500' : 'text-slate-400'} />
        </div>

        <h1 className={`text-6xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          404
        </h1>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
          Page Not Found
        </h2>
        
        <p className="mb-10 text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Return to Synckraft homepage"
          >
            <Home size={20} aria-hidden="true" />
            Return Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className={`w-full border font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              theme === 'dark'
                ? 'border-white/10 text-white hover:bg-white/5'
                : 'border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Go back to previous page"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
}
