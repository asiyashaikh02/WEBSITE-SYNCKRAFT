import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

const ventures = [
  {
    name: 'UNSTOPR',
    tag: 'AI & Automation Infrastructure',
    desc: 'Enterprise AI systems, WhatsApp API, CRM, and advanced business automation — powering modern operations at scale.',
    href: 'https://www.unstopr.com',
    color: 'border-blue-200 bg-blue-50/40',
    dot: 'bg-blue-500',
    hover: 'hover:border-blue-300 hover:shadow-blue-900/8',
  },
  {
    name: 'SOLVEIT INDIA',
    tag: 'Business Operations Infrastructure',
    desc: 'Enterprise assistance, process management, and core business support infrastructure for operational excellence.',
    href: 'https://www.solveitindia.com',
    color: 'border-emerald-200 bg-emerald-50/40',
    dot: 'bg-emerald-500',
    hover: 'hover:border-emerald-300 hover:shadow-emerald-900/8',
  },
  {
    name: 'SOLAROFT',
    tag: 'Green Energy & Solar Infrastructure',
    desc: 'Comprehensive solar plant operations, industrial maintenance, and energy efficiency optimization systems.',
    href: 'https://www.solaroft.com',
    color: 'border-amber-200 bg-amber-50/40',
    dot: 'bg-amber-500',
    hover: 'hover:border-amber-300 hover:shadow-amber-900/8',
  },
];

const values = [
  { title: 'Infrastructure Over Features', desc: 'We build foundational systems, not surface-level tools. Every platform is designed to run at institutional scale.' },
  { title: 'Ecosystem Over Products', desc: 'Our brands are interconnected ventures sharing a unified technological core — not isolated products.' },
  { title: 'Precision Over Speed', desc: 'We move deliberately. Every decision is engineered for longevity, not just speed to market.' },
  { title: 'Scale Over Scope', desc: 'We build for the largest possible operational scale from day one — not as an afterthought.' },
];

const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white page-enter">
      <Helmet>
        <title>About Synckraft | Enterprise Ecosystem Company</title>
        <meta name="description" content="Synckraft Technologies is the parent ecosystem company behind UNSTOPR, SOLVEIT INDIA, and SOLAROFT — specialized infrastructure brands built for enterprise scale." />
        <meta name="keywords" content="Synckraft Technologies, enterprise ecosystem company, infrastructure brands, UNSTOPR, SOLVEIT INDIA, SOLAROFT" />
        <meta property="og:title" content="About Synckraft Technologies | Enterprise Ecosystem Company" />
        <meta property="og:description" content="Parent company of UNSTOPR, SOLVEIT INDIA, and SOLAROFT — specialized infrastructure brands built for enterprise scale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synckraft.in/about" />
        <meta name="twitter:title" content="About Synckraft Technologies | Enterprise Ecosystem Company" />
        <meta name="twitter:description" content="Building specialized infrastructure brands for enterprise scale." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Synckraft Technologies",
            "url": "https://synckraft.in/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Synckraft Technologies Private Limited",
              "description": "Parent ecosystem company behind UNSTOPR, SOLVEIT INDIA, and SOLAROFT",
              "foundingDate": "2020",
              "url": "https://synckraft.in",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Maharashtra"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <div className="relative overflow-hidden pt-40 pb-24 bg-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-20%] left-[-10%] w-[55%] h-[55%] rounded-full bg-blue-50/60 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-slate-50/80 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="text-blue-600 font-bold uppercase tracking-[0.18em] text-[10px] mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            About Synckraft
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-tight text-slate-900 leading-[1.04] mb-8 max-w-4xl">
            We Build the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 animate-gradient-x">
              Infrastructure Layer.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            Synckraft is a technology holding company. We architect, launch, and scale specialized infrastructure brands — each built to dominate its domain at enterprise grade.
          </p>
        </div>
      </div>

      {/* Ecosystem brands */}
      <div className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              The Synckraft Ecosystem
            </h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">
              Three specialized brands. One unified infrastructure vision.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {ventures.map((v, i) => (
              <a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal group relative p-8 rounded-3xl border ${v.color} ${v.hover} hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 flex flex-col`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`w-2 h-2 rounded-full ${v.dot}`} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{v.tag}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {v.name}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed flex-grow">{v.desc}</p>
                <div className="flex items-center gap-1.5 mt-6 text-[12px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                  Visit Brand
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-blue-600 font-bold uppercase tracking-[0.18em] text-[10px] mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-7 leading-[1.1] tracking-tight">
                Built for Scale.<br />
                <span className="text-slate-400 font-light italic">Designed to Last.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-lg">
                We don't build products. We build infrastructure. The difference is permanence — systems that compound in value over time, not features that expire with trends.
              </p>
              <Button to="/ecosystem" variant="primary" size="md" icon={<ArrowUpRight size={16} />} iconPosition="right">
                Explore Our Ecosystem
              </Button>
            </div>
            <div className="reveal-right grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/60 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-400 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <h4 className="font-bold text-[14px] text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                    {v.title}
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal identity */}
      <div className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Legal Identity</h3>
              <div className="space-y-1.5 font-mono text-sm text-slate-500">
                <p><span className="text-blue-500 font-bold mr-3">Company</span>Synckraft Technologies Private Limited</p>
                <p><span className="text-blue-500 font-bold mr-3">CIN</span>U62020MH2026PTC467409</p>
                <p><span className="text-blue-500 font-bold mr-3">Location</span>Maharashtra, India</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary" size="sm">Partner With Us</Button>
              <Button to="/ecosystem" variant="outline" size="sm">View Ecosystem</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal">
          <p className="text-3xl md:text-5xl font-black leading-tight text-slate-900 mb-6">
            Synckraft is not a service company.<br />
            <span className="text-blue-600">It is a system built for scale.</span>
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 mt-8">
            All Rights Reserved © Synckraft Technologies Private Limited
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
