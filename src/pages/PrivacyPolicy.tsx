import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 page-enter">
      <Helmet>
        <title>Privacy Policy | Synckraft Technologies Private Limited</title>
        <meta name="description" content="Read Synckraft Technologies' Privacy Policy to understand how we collect, use, and protect your personal data." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Privacy Policy | Synckraft Technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synckraft.in/privacy-policy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "url": "https://synckraft.in/privacy-policy",
            "isPartOf": { "@type": "WebSite", "name": "Synckraft Technologies", "url": "https://synckraft.in" }
          })}
        </script>
      </Helmet>
      <main className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none text-slate-900">
            Privacy <br />
            <span className="text-blue-600 italic font-light">Policy.</span>
          </h1>
          <div>
            <p className="text-blue-600 font-bold text-2xl uppercase tracking-widest">Synckraft Technologies Private Limited</p>
            <p className="text-slate-400 text-sm font-mono mt-1">CIN: U62020MH2026PTC467409</p>
          </div>
        </div>

        <div className="max-w-4xl ml-[7rem] -mt-[8rem] mx-auto px-8 space-y-12 text-slate-600 leading-relaxed text-lg">
          {[
            { title: "1. Introduction", body: 'Synckraft Technologies Private Limited ("Company", "we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, process, and safeguard your information when you use our services, website, or engage with us.' },
            { title: "2. Scope of Services", body: "We provide automation solutions, technology consulting, digital platforms, and business services to individuals and enterprises.", list: ["Workflow automation", "Communication systems (including WhatsApp integrations)", "Data processing tools", "Platform-based services"] },
            { title: "3. Information We Collect", body: "We may collect: Name, Phone number, Email address, Business details, IP address, Device information, Browser type, and interaction data." },
            { title: "4. Use of Data", body: "We use collected data to provide and maintain our services, execute automation workflows, improve system performance, communicate with users, and ensure legal compliance." },
            { title: "5. WhatsApp Communication", body: "By using our services or submitting your contact details, you explicitly consent to receive communication via WhatsApp including service updates, automation alerts, and transactional messages. You may opt out at any time by contacting us." },
            { title: "6. Data Processing & Automation", body: "We may process customer data provided by our clients. We act as a data processor, while the client remains the data controller. Data is used strictly for intended automation workflows. We do not sell or misuse customer data." },
            { title: "7. Customer Consent", body: "By using our services, you confirm that you have provided informed consent and authorize Synckraft to process your data." },
            { title: "8. Data Sharing", body: "We do NOT sell personal data. We may share data with trusted service providers, cloud infrastructure partners, and legal authorities when required." },
            { title: "9. Data Security", body: "We implement industry-standard security measures including encryption, access control, and secure infrastructure. However, no system is 100% secure." },
            { title: "10. Data Retention", body: "We retain data only as long as necessary for service delivery, legal compliance, and business operations." },
            { title: "11. User Rights", body: "You have the right to access your data, request correction, request deletion, and withdraw consent." },
            { title: "12. Third-Party Services", body: "Our platform may integrate with third-party services. We are not responsible for their privacy practices." },
            { title: "13. Updates to Policy", body: "We reserve the right to update this Privacy Policy at any time. Changes will be reflected on this page." },
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
            <h2 className="text-[28px] font-bold mb-4 text-slate-900">14. Contact</h2>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <p className="font-bold text-blue-600 mb-2">Synckraft Technologies Private Limited</p>
              <p className="text-slate-600">Email: grow@synckraft.in</p>
              <p className="text-slate-600">Phone: +91 9867799655</p>
              <p className="text-slate-600">Address: 414, 4th Floor, Daga Plazzo, Amravati, Maharashtra, India</p>
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

export default PrivacyPolicy;
