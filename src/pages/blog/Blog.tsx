import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../../components/CTA';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export const blogPostsData = [
  {
    id: 'ai-automation-real-estate',
    title: 'AI Automation for Real Estate',
    excerpt: 'Discover how artificial intelligence is transforming predictive property valuation and massively accelerating deal closures.',
    date: 'April 10, 2026',
    author: 'Synckraft Engineering',
    category: 'Real Estate',
    ctaLink: '/services#real-estate',
    ctaText: 'Explore Real Estate Solutions',
    content: "Real Estate is one of the most data-heavy industries globally. By leveraging artificial intelligence to automate lead qualification, agencies are now securing buyers 3x faster while drastically reducing overhead. Learn how the Synckraft Real Estate OS plugs directly into existing CRMs to intelligently convert inbound traffic without human intervention."
  },
  {
    id: 'restaurant-automation-system',
    title: 'Restaurant Automation System Guide',
    excerpt: 'An inside look at how predictive inventory sequencing and POS AI are saving modern chains millions in annual spoilage.',
    date: 'April 12, 2026',
    author: 'Synckraft Engineering',
    category: 'Restaurants',
    ctaLink: '/services#restaurant',
    ctaText: 'Explore Restaurant Solutions',
    content: "Spoilage. High turnover. Margin compression. Restaurants deal with immense operational friction. By deploying automated inventory monitoring and AI-driven dynamic pricing structures across POS pipelines, modern chains ensure maximum profitability natively. Synckraft's Restaurant OS seamlessly eliminates this friction."
  },
  {
    id: 'healthcare-automation-explained',
    title: 'Healthcare Automation Explained',
    excerpt: 'How institutions are eradicating costly no-show rates and modernizing fragmented EMR data ecosystems.',
    date: 'April 14, 2026',
    author: 'Synckraft Engineering',
    category: 'Healthcare',
    ctaLink: '/services#healthcare',
    ctaText: 'Explore Healthcare Solutions',
    content: "The modern healthcare facility loses millions annually simply from scheduling attrition and fragmented data architectures. The Synckraft Healthcare OS acts as a secure intermediary layer, dynamically routing patient flows perfectly and establishing airtight automated confirmation systems."
  }
];

export default function Blog({ theme }: ThemeProps) {
  const isDark = theme === 'dark';

  return (
    <>
      <Helmet>
        <title>Insights & Automation Guides | Synckraft Blog</title>
        <meta name="description" content="Read our latest guides on AI Automation operations, Business OS deployments, and industry-specific scaling models." />
      </Helmet>

      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Synckraft <span className="text-blue-500">Knowledge Hub</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Latest insights, engineering blueprints, and strategic roadmaps for scaling automation across core industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.map((post) => (
              <article key={post.id} className={`flex flex-col p-8 rounded-3xl border transition-all hover:-translate-y-2 ${isDark ? 'bg-[#111112] border-white/10 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-500/30 shadow-xl shadow-slate-200/50'}`}>
                <div className="mb-6 flex gap-3 text-xs font-bold uppercase tracking-widest text-blue-500">
                  <span>{post.category}</span>
                </div>
                <h3 className={`text-2xl font-bold mb-4 line-clamp-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {post.title}
                </h3>
                <p className={`mb-8 flex-grow ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-500/20">
                  <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    <Calendar size={14} /> {post.date}
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-blue-500 font-bold hover:text-blue-400 flex items-center gap-1 transition-all">
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <CTA theme={theme} />
        </div>
      </main>
    </>
  );
}
