import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


interface PageProps {
  theme: 'dark' | 'light';
}

const TermsOfService: React.FC<PageProps> = ({ theme }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={`pt-24 min-h-screen ${theme === 'dark' ? 'bg-[#0A0A0B] text-white' : 'bg-white text-slate-900'}`}>
      <Helmet>
        <title>Terms & Conditions | Synckraft Technologies</title>
        <meta name="description" content="Read the Terms & Conditions of Synckraft Technologies Private Limited to understand your rights and obligations when using our services." />
      </Helmet>
      <main className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <h1 className={`text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Terms & <br />
            <span className="text-blue-600 italic font-light">Conditions.</span>
          </h1>
          
            <div>
              <p className="text-blue-500 font-bold text-[2rem] uppercase tracking-widest">Synckraft Technologies Private Limited</p>
              <p className="text-slate-500 text-sm font-mono">CIN: U62020MH2026PTC467409</p>
            </div>
            <div className="md:ml-auto">
          </div>
        </div>

        <div className={`max-w-4xl ml-[7rem] -mt-[8rem] mx-auto px-8 space-y-12 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} leading-relaxed text-lg`}>
          <section>
            <h2 className={`text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>1. Acceptance of Terms</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">
              By accessing or using the services of Synckraft Technologies Private Limited ("Company", "we", "our"), you agree to be legally bound by these Terms & Conditions. If you do not agree, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>2. Nature of Services</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We provide:</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Business automation solutions</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Digital platforms and tools</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Communication systems (including WhatsApp automation)</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Consulting and technology services</li>
            </ul>
            <p className="mt-4 italic text-[20px] leading-relaxed text-blue-600 font-light">All services are provided on a <strong>best-effort basis</strong>, subject to technical and operational limitations.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>3. User Responsibilities</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">You agree to:</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Provide accurate information</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Use services legally and ethically</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Not misuse automation tools for spam, fraud, or illegal activity</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Ensure compliance with applicable laws (including data protection laws)</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>4. Client Obligations</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">If you are a business client:</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>You are solely responsible for the data you provide</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>You must obtain <strong>proper consent</strong> from your customers before using automation</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>You remain the <strong>data controller</strong>; we act only as a <strong>data processor</strong></li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>5. WhatsApp & Communication Compliance</h2>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>You must comply with WhatsApp/Meta policies when using automation</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>We are not liable for account bans, restrictions, or penalties imposed by third-party platforms</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Any misuse of communication tools is strictly your responsibility</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>6. Payments & Pricing</h2>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>All fees are agreed upon before service delivery</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Prices may change without prior notice for future services</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Failure to pay may result in suspension or termination</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>7. Intellectual Property</h2>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>All systems, software, and frameworks developed by Synckraft remain our intellectual property instead otherwise agreed</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Unauthorized copying, resale, or distribution is strictly prohibited</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>8. Service Availability</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We do not guarantee:</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Uninterrupted service</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Error-free operation</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Compatibility with all systems</li>
            </ul>
            <p className="mt-4 text-[20px] leading-relaxed text-blue-600 font-light">Downtime may occur due to maintenance, upgrades, or external factors.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>9. Limitation of Liability</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>We are not liable for indirect, incidental, or consequential damages</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>We are not responsible for business losses, data loss, or missed opportunities</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Total liability shall not exceed the amount paid for services</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>10. Termination</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We reserve the right to: Suspend or terminate services at any time; Deny access in case of misuse or violation.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>11. Third-Party Services</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">Our services may rely on third-party platforms (e.g., WhatsApp, APIs, cloud providers). We are not responsible for their performance, policies, or disruptions.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>12. Confidentiality</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We maintain strict confidentiality of client data and business information unless disclosure is required by law.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>13. Governing Law</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">These Terms shall be governed by the laws of India. Jurisdiction: Maharashtra.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>14. Changes to Terms</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We may update these Terms at any time. Continued use of services implies acceptance.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>15. Contact</h2>
            <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
              <p className="font-bold text-blue-500 mb-2">Synckraft Technologies Private Limited</p>
              <p className="text-[20px] leading-relaxed text-blue-600 font-light">Email: grow@synckraft.in</p>
              <p className="text-[20px] leading-relaxed text-blue-600 font-light">Phone: +91 9867799655</p>
            </div>
          </section>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-slate-500">All Rights Reserved © Synckraft Technologies Private Limited</p>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
