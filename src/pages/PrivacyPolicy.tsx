import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = ({ theme }: { theme: 'dark' | 'light' }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={`pt-24 min-h-screen ${theme === 'dark' ? 'bg-[#0A0A0B] text-white' : 'bg-white text-slate-900'}`}>
      <Helmet>
        <title>Privacy Policy | Synckraft Technologies</title>
        <meta name="description" content="Read the Privacy Policy of Synckraft Technologies Private Limited to understand how we collect, use, and protect your personal data." />
      </Helmet>
      <main className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <h1 className={`text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Privacy <br />
            <span className="text-blue-600 italic font-light">Policy.</span>
          </h1>
            <div>
              <p className="text-blue-500 font-bold text-[2rem] uppercase tracking-widest">Synckraft Technologies Private Limited</p>
              <p className="text-slate-500 text-sm font-mono">CIN: U62020MH2026PTC467409</p>
            </div>
        </div>

        <div className={`max-w-4xl ml-[7rem] -mt-[8rem] mx-auto px-8 space-y-12 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} leading-relaxed text-lg`}>
          <section>
            <h2 className={`text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>1. Introduction</h2>
            <p className='text-[20px] leading-relaxed text-blue-600 font-light'>
              Synckraft Technologies Private Limited ("Company", "we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, process, and safeguard your information when you use our services, website, or engage with us.
            </p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>2. Scope of Services</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We provide automation solutions, technology consulting, digital platforms, and business services to individuals and enterprises. Our services may include but are not limited to:</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Workflow automation</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Communication systems (including WhatsApp integrations)</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Data processing tools</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Platform-based services</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900' }`}>3. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>3.1 Personal Information</h3>
                <p className="text-[20px] leading-relaxed text-blue-600 font-light">We may collect: Name, Phone number, Email address, Business details, and any information voluntarily provided by you.</p>
              </div>
              <div>
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>3.2 Usage Data</h3>
                <p className="text-[20px] leading-relaxed text-blue-600 font-light">IP address, Device information, Browser type, Interaction data.</p>
              </div>
              <div>
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>3.3 Client Data</h3>
                <p className="text-[20px] leading-relaxed text-blue-600 font-light">For clients using our automation services, we may process customer data strictly on behalf of the client.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900' }`}>4. Use of Data</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We use collected data to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Provide and maintain our services</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Execute automation workflows</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Improve system performance</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Communicate with users and clients</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Ensure compliance with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>5. WhatsApp Communication</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">By using our services or submitting your contact details, you explicitly consent to receive communication via WhatsApp, including:</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Service updates</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Automation alerts</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Transactional messages</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Business-related notifications</li>
            </ul>
            <p className="mt-4 italic text-[20px] leading-relaxed text-blue-600 font-light">We do not send unsolicited spam. You may opt out at any time by contacting us.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>6. Data Processing & Automation</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">As part of our automation services: We may process customer data provided by our clients; We act as a <strong>data processor</strong>, while the client remains the <strong>data controller</strong>; Data is used strictly for intended automation workflows. We do not sell or misuse customer data.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>7. Customer Consent</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">By using our services, you confirm that: You have provided informed consent; You authorize Synckraft to process your data; If you are a business client, you confirm you have obtained consent from your customers.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>8. Data Sharing</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We do NOT sell personal data. However, we may share data with: Trusted service providers, Cloud infrastructure partners, Legal authorities when required.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>9. Data Security</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We implement industry-standard security measures including: Encryption, Access control, Secure infrastructure. However, no system is 100% secure.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>10. Data Retention</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We retain data only as long as necessary for: Service delivery, Legal compliance, Business operations.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>11. User Rights</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">You have the right to: Access your data, Request correction, Request deletion, Withdraw consent.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>12. Third-Party Services</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">Our platform may integrate with third-party services. We are not responsible for their privacy practices.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>13. Updates to Policy</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We reserve the right to update this Privacy Policy at any time. Changes will be reflected on this page.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>14. Contact</h2>
            <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
              <p className="font-bold text-blue-500 mb-2">Synckraft Technologies Private Limited</p>
              <p>Email: grow@synckraft.in</p>
              <p>Phone: +91 9867799655</p>
              <p>Address: 414, 4th Floor, Daga Plazzo, Opp. of Dmart, Camp, Biyani Square Amravati</p>
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

export default PrivacyPolicy;
