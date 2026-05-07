import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Ecosystem } from '../components/Ecosystem';

const EcosystemPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="bg-white min-h-screen page-enter">
      <Helmet>
        <title>Our Ecosystem | UNSTOPR, SOLVEIT INDIA, SOLAROFT | Synckraft Technologies</title>
        <meta name="description" content="Explore Synckraft's ecosystem of specialized infrastructure brands: UNSTOPR (AI & Automation), SOLVEIT INDIA (Business Operations), and SOLAROFT (Green Energy & Solar Infrastructure)." />
        <meta name="keywords" content="UNSTOPR, SOLVEIT INDIA, SOLAROFT, AI infrastructure, business automation, solar energy, enterprise software" />
        <meta property="og:title" content="Synckraft Ecosystem | UNSTOPR, SOLVEIT INDIA, SOLAROFT" />
        <meta property="og:description" content="Discover our specialized infrastructure brands powering enterprise performance at scale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synckraft.in/ecosystem" />
        <meta name="twitter:title" content="Synckraft Ecosystem | Enterprise Infrastructure Brands" />
        <meta name="twitter:description" content="UNSTOPR, SOLVEIT INDIA, SOLAROFT — Specialized brands for enterprise excellence." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Synckraft Ecosystem Brands",
            "description": "Specialized infrastructure brands under Synckraft Technologies",
            "numberOfItems": 3,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Organization",
                  "name": "UNSTOPR",
                  "description": "Enterprise AI infrastructure, WhatsApp API, CRM, and advanced business automation systems",
                  "url": "https://www.unstopr.com"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Organization",
                  "name": "SOLVEIT INDIA",
                  "description": "Enterprise assistance, process management, and core business support service infrastructure",
                  "url": "https://www.solveitindia.com"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Organization",
                  "name": "SOLAROFT",
                  "description": "Comprehensive solar plant operations, industrial maintenance, and efficiency optimization systems",
                  "url": "https://www.solaroft.com"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Page hero */}
      <div className="relative overflow-hidden pt-36 pb-20 bg-white border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/60 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-slate-50/80 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="text-blue-600 font-bold uppercase tracking-[0.18em] text-[10px] mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Venture Ecosystem
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.04]">
            Our Ecosystem
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
            Synckraft is the parent technology and infrastructure company powering specialized modern brands. We build systems that run industries.
          </p>
        </div>
      </div>

      <Ecosystem theme="light" />
    </main>
  );
};

export default EcosystemPage;
