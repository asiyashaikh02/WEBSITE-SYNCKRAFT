import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-5 bg-white page-enter">
      <Helmet>
        <title>404 - Page Not Found | Synckraft Technologies</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Synckraft Technologies homepage for enterprise infrastructure solutions." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="404 - Page Not Found | Synckraft Technologies" />
        <meta property="og:description" content="The requested page could not be found." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synckraft.in/404" />
        <meta name="twitter:title" content="404 - Page Not Found | Synckraft Technologies" />
        <meta name="twitter:description" content="Page not found." />
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
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 bg-slate-100 relative">
          <Search size={40} className="text-slate-400" />
        </div>

        <h1 className="text-6xl font-black mb-4 text-slate-900">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-slate-700">Page Not Found</h2>
        <p className="mb-10 text-lg text-slate-500">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Return to Synckraft homepage"
          >
            <Home size={20} aria-hidden="true" />
            Return Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
