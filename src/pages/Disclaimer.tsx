import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 page-enter">
      <Helmet>
        <title>Legal Disclaimer | Synckraft Technologies Private Limited</title>
        <meta name="description" content="Legal disclaimer for Synckraft Technologies regarding professional advice, automation risks, and liability limitations." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Legal Disclaimer | Synckraft Technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synckraft.in/disclaimer" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Legal Disclaimer",
            "url": "https://synckraft.in/disclaimer",
            "isPartOf": { "@type": "WebSite", "name": "Synckraft Technologies", "url": "https://synckraft.in" }
          })}
        </script>
      </Helmet>
      <main className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none text-slate-900">
            Legal <br />
            <span className="text-blue-600 italic font-light">Disclaimer.</span>
          </h1>
          <div>
            <p className="text-blue-600 font-bold text-2xl uppercase tracking-widest">Synckraft Technologies Private Limited</p>
            <p className="text-slate-400 text-sm font-mono mt-1">CIN: U62020MH2026PTC467409</p>
          </div>
        </div>

        <div className="max-w-4xl ml-[7rem] -mt-[8rem] mx-auto px-8 space-y-12 text-slate-600 leading-relaxed text-lg">
          {[
            { title: "1. General Disclaimer", body: "The information and services provided by Synckraft Technologies Private Limited are for general business and operational purposes only. We make no guarantees regarding business outcomes, revenue generation, or performance improvements." },
            { title: "2. No Professional Advice", body: "Our services do not constitute legal advice, financial advice, or investment advice. Users should consult qualified professionals before making decisions." },
            { title: "3. Automation & Technology Risks", body: "Automation tools depend on external systems and APIs. Failures, delays, or errors may occur. We are not liable for disruptions caused by third-party platforms." },
            { title: "4. WhatsApp & Communication Disclaimer", body: "Use of WhatsApp automation is subject to Meta policies. We do not guarantee delivery rates or account safety. Any penalties or bans are beyond our control." },
            { title: "5. Limitation of Guarantees", body: "We do not guarantee 100% uptime, error-free performance, or compatibility across all devices or platforms." },
            { title: "6. External Links", body: "Our platform may contain links to third-party websites. We are not responsible for their content or policies." },
            { title: "7. Use at Your Own Risk", body: "All services are used at your own risk. You assume full responsibility for business decisions and outcomes." },
            { title: "8. Changes", body: "We reserve the right to modify this Disclaimer at any time." },
          ].map((s, i) => (
            <section key={i}>
              <h2 className="text-[28px] font-bold mb-4 text-slate-900">{s.title}</h2>
              <p className="text-[18px] leading-relaxed text-slate-600">{s.body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-[28px] font-bold mb-4 text-slate-900">9. Contact</h2>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <p className="font-bold text-blue-600 mb-2">Synckraft Technologies Private Limited</p>
              <p className="text-slate-600">Email: grow@synckraft.in</p>
              <p className="text-slate-600">Phone: +91 9867799655</p>
            </div>
          </section>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-400">All Rights Reserved © Synckraft Technologies Private Limited</p>
        </div>
      </main>
    </div>
  );
};

export default Disclaimer;
