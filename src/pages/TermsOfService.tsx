import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 page-enter">
      <Helmet>
        <title>Terms of Service | Synckraft Technologies Private Limited</title>
        <meta name="description" content="Read the Terms of Service for Synckraft Technologies. Understand your rights and obligations when using our enterprise infrastructure services." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Terms of Service | Synckraft Technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synckraft.in/terms-of-service" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service",
            "url": "https://synckraft.in/terms-of-service",
            "isPartOf": { "@type": "WebSite", "name": "Synckraft Technologies", "url": "https://synckraft.in" }
          })}
        </script>
      </Helmet>
      <main className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none text-slate-900">
            Terms &amp; <br />
            <span className="text-blue-600 italic font-light">Conditions.</span>
          </h1>
          <div>
            <p className="text-blue-600 font-bold text-2xl uppercase tracking-widest">Synckraft Technologies Private Limited</p>
            <p className="text-slate-400 text-sm font-mono mt-1">CIN: U62020MH2026PTC467409</p>
          </div>
        </div>

        <div className="max-w-4xl ml-[7rem] -mt-[8rem] mx-auto px-8 space-y-12 text-slate-600 leading-relaxed text-lg">
          {[
            { title: "1. Acceptance of Terms", body: 'By accessing or using the services of Synckraft Technologies Private Limited ("Company", "we", "our"), you agree to be legally bound by these Terms & Conditions. If you do not agree, you must not use our services.' },
            { title: "2. Nature of Services", body: "We provide business automation solutions, digital platforms and tools, communication systems (including WhatsApp automation), and consulting and technology services. All services are provided on a best-effort basis, subject to technical and operational limitations." },
            { title: "3. User Responsibilities", body: "You agree to provide accurate information, use services legally and ethically, not misuse automation tools for spam, fraud, or illegal activity, and ensure compliance with applicable laws including data protection laws." },
            { title: "4. Client Obligations", body: "If you are a business client, you are solely responsible for the data you provide. You must obtain proper consent from your customers before using automation. You remain the data controller; we act only as a data processor." },
            { title: "5. WhatsApp & Communication Compliance", body: "You must comply with WhatsApp/Meta policies when using automation. We are not liable for account bans, restrictions, or penalties imposed by third-party platforms. Any misuse of communication tools is strictly your responsibility." },
            { title: "6. Payments & Pricing", body: "All fees are agreed upon before service delivery. Prices may change without prior notice for future services. Failure to pay may result in suspension or termination." },
            { title: "7. Intellectual Property", body: "All systems, software, and frameworks developed by Synckraft remain our intellectual property unless otherwise agreed. Unauthorized copying, resale, or distribution is strictly prohibited." },
            { title: "8. Service Availability", body: "We do not guarantee uninterrupted service, error-free operation, or compatibility with all systems. Downtime may occur due to maintenance, upgrades, or external factors." },
            { title: "9. Limitation of Liability", body: "To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages. Total liability shall not exceed the amount paid for services." },
            { title: "10. Termination", body: "We reserve the right to suspend or terminate services at any time and deny access in case of misuse or violation." },
            { title: "11. Third-Party Services", body: "Our services may rely on third-party platforms (e.g., WhatsApp, APIs, cloud providers). We are not responsible for their performance, policies, or disruptions." },
            { title: "12. Confidentiality", body: "We maintain strict confidentiality of client data and business information unless disclosure is required by law." },
            { title: "13. Governing Law", body: "These Terms shall be governed by the laws of India. Jurisdiction: Maharashtra." },
            { title: "14. Changes to Terms", body: "We may update these Terms at any time. Continued use of services implies acceptance." },
          ].map((s, i) => (
            <section key={i}>
              <h2 className="text-[28px] font-bold mb-4 text-slate-900">{s.title}</h2>
              <p className="text-[18px] leading-relaxed text-slate-600">{s.body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-[28px] font-bold mb-4 text-slate-900">15. Contact</h2>
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

export default TermsOfService;
