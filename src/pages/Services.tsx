import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Bot, LineChart, Globe, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const theme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';

  const services = [
    {
      title: "AI & Automation Logic",
      desc: "Implement intelligent autonomous pipelines to replace repetitive tasks, saving thousands of labor hours.",
      icon: Bot,
      features: ["Workflow Automation", "AI Chatbots & Voicebots", "Predictive Analytics"]
    },
    {
      title: "Bespoke SaaS Development",
      desc: "Custom-built web platforms designed to handle institutional scale and complex user workflows.",
      icon: Code,
      features: ["React/Node Architectures", "Secure Database Design", "Multi-tenant Systems"]
    },
    {
      title: "Digital Infrastructure",
      desc: "Bulletproof cloud hosting, cybersecurity hardening, and performance CI/CD pipelines.",
      icon: Globe,
      features: ["AWS/GCP Deployment", "Kubernetes Scaling", "24/7 Threat Monitoring"]
    },
    {
      title: "Growth Engineering",
      desc: "SEO-first frontends and highly optimal funnels designed to capture and convert market traffic.",
      icon: LineChart,
      features: ["Technical SEO", "Conversion Rate Optimization", "Performance Marketing integrations"]
    }
  ];

  return (
    <div className={`pt-24 pb-32 min-h-screen ${theme === 'dark' ? 'bg-[#080809]' : 'bg-slate-50'}`}>
      <Helmet>
        <title>Services | Synckraft AI & Automation</title>
        <meta name="description" content="Custom SaaS development, AI Automation, and Digital Infrastructure services by Synckraft." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">What We Do</span>
          <h1 className={`text-5xl md:text-7xl font-black mt-4 mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Core <span className="text-blue-500">Services.</span>
          </h1>
          <p className={`text-xl font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            Enterprise-grade digital construction. If it needs to be scalable, secure, and smart—we build it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className={`group p-10 rounded-[3rem] border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${theme === 'dark' ? 'bg-[#111112] border-white/5 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-500/30'}`}>
              <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-8">
                <service.icon size={32} />
              </div>
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h2>
              <p className={`text-lg leading-relaxed mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{service.desc}</p>
              
              <ul className="space-y-3 mb-10">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className={`flex items-center gap-3 text-sm font-semibold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="inline-flex items-center gap-3 text-blue-500 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                Discuss Requirements <ArrowUpRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
