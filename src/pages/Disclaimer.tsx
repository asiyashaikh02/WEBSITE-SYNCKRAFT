import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


interface PageProps {
  theme: 'dark' | 'light';
}

const Disclaimer: React.FC<PageProps> = ({ theme }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={`pt-24 min-h-screen ${theme === 'dark' ? 'bg-[#0A0A0B] text-white' : 'bg-white text-slate-900'}`}>
      <Helmet>
        <title>Disclaimer | Synckraft Technologies</title>
        <meta name="description" content="Read the Disclaimer of Synckraft Technologies Private Limited regarding professional advice, automation risks, and liability limitations." />
      </Helmet>
      <main className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 mb-20">
          <h1 className={`text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Legal <br />
            <span className="text-blue-600 italic font-light">Disclaimer.</span>
          </h1>
          
            <div>
              <p className="text-blue-500 font-bold text-[2rem] uppercase tracking-widest">Synckraft Technologies Private Limited</p>
              <p className="text-slate-500 text-sm font-mono">CIN: U62020MH2026PTC467409</p>
            </div>
        </div>

        <div className={`max-w-4xl ml-[7rem] -mt-[8rem] mx-auto px-8 space-y-12 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} leading-relaxed text-lg`}>
          <section>
            <h2 className={`text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>1. General Disclaimer</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">The information and services provided by Synckraft Technologies Private Limited are for general business and operational purposes only. We make no guarantees regarding:</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Business outcomes</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Revenue generation</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Performance improvements</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>2. No Professional Advice</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">Our services do not constitute:</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Legal advice</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Financial advice</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Investment advice</li>
            </ul>
            <p className="mt-4 text-[20px] leading-relaxed text-blue-600 font-light">Users should consult qualified professionals before making decisions.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>3. Automation & Technology Risks</h2>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Automation tools depend on external systems and APIs</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Failures, delays, or errors may occur</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>We are not liable for disruptions caused by third-party platforms</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>4. WhatsApp & Communication Disclaimer</h2>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Use of WhatsApp automation is subject to Meta policies</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>We do not guarantee delivery rates or account safety</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Any penalties or bans are beyond our control</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>5. Limitation of Guarantees</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We do not guarantee:</p>
            <ul className="list-disc pl-5 space-y-1 text-[20px] leading-relaxed text-blue-600 font-light">
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>100% uptime</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Error-free performance</li>
              <li className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Compatibility across all devices or platforms</li>
            </ul>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>6. External Links</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">Our platform may contain links to third-party websites. We are not responsible for their content or policies.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>7. Use at Your Own Risk</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">All services are used at your own risk. You assume full responsibility for business decisions and outcomes.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>8. Changes</h2>
            <p className="text-[20px] leading-relaxed text-blue-600 font-light">We reserve the right to modify this Disclaimer at any time.</p>
          </section>

          <section>
            <h2 className={`-mt-[8rem] text-[35px] font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>9. Contact</h2>
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

export default Disclaimer;
