import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RefundPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 page-enter">
      <Helmet>
        <title>Refund Policy | Synckraft Technologies Private Limited</title>
        <meta name="description" content="Understand Synckraft Technologies' refund policy for enterprise services, custom development, and infrastructure solutions." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Refund Policy | Synckraft Technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synckraft.in/refund-policy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Refund Policy",
            "url": "https://synckraft.in/refund-policy",
            "isPartOf": { "@type": "WebSite", "name": "Synckraft Technologies", "url": "https://synckraft.in" }
          })}
        </script>
      </Helmet>
      <main className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none text-slate-900">
            Refund <br />
            <span className="text-blue-600 italic font-light">Policy.</span>
          </h1>
          <div>
            <p className="text-blue-600 font-bold text-2xl uppercase tracking-widest">Synckraft Technologies Private Limited</p>
            <p className="text-slate-400 text-sm font-mono mt-1">CIN: U62020MH2026PTC467409</p>
          </div>
        </div>

        <div className="max-w-4xl ml-[7rem] -mt-[8rem] mx-auto px-8 space-y-12 text-slate-600 leading-relaxed text-lg">
          {[
            { title: "1. General Policy", body: "All payments made to Synckraft Technologies Private Limited are non-refundable, unless explicitly stated otherwise in a written agreement." },
            { title: "2. Service-Based Work", body: "Due to the nature of our services (automation, consulting, and digital systems), work begins immediately after confirmation, resources are allocated upon payment, and time and effort invested are non-recoverable. Hence, refunds are not applicable once work has started.", list: ["Work begins immediately after confirmation", "Resources are allocated upon payment", "Time and effort invested are non-recoverable"] },
            { title: "3. Exceptions", body: "Refunds may be considered only if the Company fails to initiate the agreed service, a duplicate payment is made, or a billing error occurs. All such cases are subject to internal review and approval." },
            { title: "4. Subscription Services", body: "Subscription fees are non-refundable. Cancellation will stop future billing but does not trigger refunds." },
            { title: "5. Third-Party Costs", body: "Payments for third-party tools, APIs, and domain registration are strictly non-refundable as these are external costs incurred on your behalf." },
          ].map((s, i) => (
            <section key={i}>
              <h2 className="text-[28px] font-bold mb-4 text-slate-900">{s.title}</h2>
              <p className="text-[18px] leading-relaxed text-slate-600">{s.body}</p>
              {s.list && (
                <ul className="list-disc pl-5 mt-3 space-y-1 text-[18px] text-slate-700">
                  {s.list.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-[28px] font-bold mb-4 text-slate-900">6. Contact Us</h2>
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

export default RefundPolicy;
