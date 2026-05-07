import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Ecosystem } from '../components/Ecosystem';

const EcosystemPage: React.FC = () => {
  return (
    <main className="bg-white min-h-screen pt-32">
      <Helmet>
        <title>Our Ecosystem | UNSTOPR, SOLVEIT INDIA, SOLAROFT | Synckraft Technologies</title>
        <meta name="description" content="Explore Synckraft's ecosystem of specialized infrastructure brands: UNSTOPR (AI & Automation), SOLVEIT INDIA (Business Operations), and SOLAROFT (Green Energy & Solar Infrastructure). Enterprise-grade solutions for modern businesses." />
        <meta name="keywords" content="UNSTOPR, SOLVEIT INDIA, SOLAROFT, AI infrastructure, business automation, solar energy, enterprise software, digital transformation" />

        {/* Open Graph */}
        <meta property="og:title" content="Synckraft Ecosystem | UNSTOPR, SOLVEIT INDIA, SOLAROFT" />
        <meta property="og:description" content="Discover our specialized infrastructure brands powering enterprise performance at scale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synckraft.in/ecosystem" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Synckraft Ecosystem | Enterprise Infrastructure Brands" />
        <meta name="twitter:description" content="UNSTOPR, SOLVEIT INDIA, SOLAROFT - Specialized brands for enterprise excellence." />

        {/* Structured Data - ItemList for Ecosystem */}
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
                  "url": "https://www.unstopr.com/in",
                  "logo": "https://www.unstopr.com/logo.png"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Organization",
                  "name": "SOLVEIT INDIA",
                  "description": "Enterprise assistance, process management, and core business support service infrastructure",
                  "url": "https://www.solveitindia.com",
                  "logo": "https://www.solveitindia.com/logo.png"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Organization",
                  "name": "SOLAROFT",
                  "description": "Comprehensive solar plant operations, industrial maintenance, and efficiency optimization systems",
                  "url": "https://www.solaroft.com",
                  "logo": "https://www.solaroft.com/logo.png"
                }
              }
            ]
          })}
        </script>
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
