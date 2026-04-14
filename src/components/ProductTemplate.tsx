import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, CheckCircle2, ChevronRight, Activity, Zap } from 'lucide-react';

interface Feature {
  title: string;
  desc: string;
}

interface ProductTemplateProps {
  seoTitle: string;
  seoDescription: string;
  title: string;
  subtitle: string;
  problems: string[];
  features: Feature[];
  useCases: string[];
  industryLink: string;
  industryName: string;
  theme?: 'dark' | 'light';
}

export const ProductTemplate: React.FC<ProductTemplateProps> = ({
  seoTitle,
  seoDescription,
  title,
  subtitle,
  problems,
  features,
  useCases,
  industryLink,
  industryName,
  theme = 'dark'
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen pt-24 pb-32 ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-slate-50'}`}>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold tracking-widest uppercase mb-8 border border-blue-500/20">
          <Activity size={16} className="animate-pulse" />
          {subtitle}
        </div>
        <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h1>
        <p className={`text-xl font-light max-w-3xl mx-auto leading-relaxed mb-12 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
          The definitive architectural upgrade for modern {industryName.toLowerCase()} operations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/book-demo" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-transform hover:-translate-y-1">
            Book Demo <ArrowRight size={20} />
          </Link>
          <Link to={industryLink} className={`px-8 py-4 border rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 ${theme === 'dark' ? 'border-white/20 text-white hover:bg-white/5' : 'border-slate-300 text-slate-800 hover:bg-slate-100'}`}>
            Explore Industry Funnel <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Problems Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className={`p-10 rounded-[3rem] border ${theme === 'dark' ? 'bg-[#111112] border-red-500/20' : 'bg-white border-red-200'}`}>
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-6">
              <AlertTriangle size={32} />
            </div>
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Operational Bottlenecks</h2>
            <p className={`mt-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>The cost of relying on legacy, disjointed systems.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((prob, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                <p className={`font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{prob}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Core Operating Features</h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Built natively into the Synckraft ecosystem.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div key={i} className={`p-8 rounded-[2rem] border transition-all hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 ${theme === 'dark' ? 'bg-[#111112] border-white/5' : 'bg-white border-slate-200'}`}>
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{feat.title}</h3>
              <p className={`leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-4xl mx-auto px-8 mb-32">
        <div className={`p-10 rounded-[3rem] border relative overflow-hidden ${theme === 'dark' ? 'bg-[#111112] border-white/5' : 'bg-white border-slate-200'}`}>
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
           <h2 className={`text-3xl font-bold mb-10 text-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Engineered specifically for</h2>
           <div className="grid sm:grid-cols-2 gap-4">
             {useCases.map((uc, i) => (
               <div key={i} className="flex items-center gap-4">
                 <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={24} />
                 <span className={`font-bold text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{uc}</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-8 text-center pb-12">
        <Link to={industryLink} className="inline-flex items-center gap-3 text-blue-500 font-bold uppercase tracking-widest hover:gap-5 transition-all text-sm">
          Return to {industryName} Specialization <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};
