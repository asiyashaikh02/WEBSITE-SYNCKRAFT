import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


interface PageProps {
  theme: 'dark' | 'light';
}

const RefundPolicy: React.FC<PageProps> = ({ theme }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={`pt-24 min-h-screen ${theme === 'dark' ? 'bg-[#0A0A0B] text-white' : 'bg-white text-slate-900'}`}>
      <Helmet>
        <title>Refund Policy | Synckraft Technologies</title>
        <meta name="description" content="Read the Refund Policy of Synckraft Technologies Private Limited to understand our terms regarding non-refundability and service-based work." />
      </Helmet>
      <main className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <h1 className={`text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Refund <br />
            <span className="text-blue-600 italic font-light">Policy.</span>
          </h1>
          
            <div>
              <p className="text-blue-500 font-bold text-[2rem] uppercase tracking-widest">Synckraft Technologies Private Limited</p>
              <p className="text-slate-500 text-sm font-mono">CIN: U62020MH2026PTC467409</p>
            </div>
        </div>

        <div className={`max-w-4xl ml-[7rem] -mt-[8rem] mx-auto px-8 space-y-12 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} leading-relaxed text-lg`}>
          <section>
            <h2 className={`text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>1. General Policy</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">
              All payments made to Synckraft Technologies Private Limited are <strong>non-refundable</strong>, unless explicitly stated otherwise in a written agreement.
            </p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>2. Service-Based Work</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">Due to the nature of our services (automation, consulting, and digital systems):</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Work begins immediately after confirmation</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Resources are allocated upon payment</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Time and effort invested are non-recoverable</li>
            </ul>
            <p className="mt-4 italic text-[20px] leading-relaxed text-blue-600 font-light">Hence, refunds are not applicable once work has started.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>3. Exceptions</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">Refunds may be considered only if:</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>The Company fails to initiate the agreed service</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>A duplicate payment is made</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>A billing error occurs</li>
            </ul>
            <p className="mt-4 italic text-[20px] leading-relaxed text-blue-600 font-light">All such cases are subject to internal review and approval.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>4. Subscription Services</h2>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Subscription fees are non-refundable</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Cancellation will stop future billing but does not trigger refunds</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>5. Third-Party Costs</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">Payments for third-party tools, APIs, and domain registration are strictly <strong>non-refundable</strong> as these are external costs incurred on your behalf.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>6. Contact Us</h2>
            <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
              <p className="font-bold text-blue-500 mb-2">Synckraft Technologies Private Limited</p>
              <p className="text-[20px] leading-relaxed text-blue-600 font-light">Email: grow@synckraft.in</p>
              <p className="text-[20px] leading-relaxed text-blue-600 font-light">Phone: +91 9867799655</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RefundPolicy;
