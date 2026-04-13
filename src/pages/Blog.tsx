import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
  const theme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  
  const posts = [
    { cat: "AI Automation", title: "How Agents are Replacing Legacy CRM Workflows", date: "Oct 12, 2024", author: "Strategy Team" },
    { cat: "Business OS", title: "The Blueprint for a Scalable Real Estate Tech Stack", date: "Oct 05, 2024", author: "Tech Lab" },
    { cat: "Industry Automation", title: "Why Restaurants Need Predictive Inventory in 2025", date: "Sep 28, 2024", author: "Ops Team" },
    { cat: "Digital Transformation", title: "Migrating from SaaS to an Owned Business OS", date: "Sep 15, 2024", author: "Architecture" }
  ];

  return (
    <div className={`pt-24 pb-32 min-h-screen ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-white'}`}>
      <Helmet>
        <title>Insights & Engineering Blog | Synckraft</title>
        <meta name="description" content="Read the latest on AI Automation, Business Operating Systems, and Industry Transformation." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h1 className={`text-5xl md:text-7xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Knowledge <span className="text-blue-500">Hub.</span>
          </h1>
          <p className={`text-xl font-light max-w-2xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            Deep-dive methodologies, architecture breakdowns, and strategy frameworks for scaling your business with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <div key={i} className={`group cursor-pointer flex flex-col p-8 rounded-[2rem] border transition-all hover:-translate-y-2 hover:shadow-xl ${theme === 'dark' ? 'bg-[#111112] border-white/5 hover:border-blue-500/30' : 'bg-slate-50 border-slate-100 hover:border-blue-500/30'}`}>
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{post.cat}</span>
              <h2 className={`text-2xl md:text-3xl font-bold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{post.title}</h2>
              <div className={`flex items-center gap-6 mt-auto pt-6 border-t ${theme === 'dark' ? 'border-white/5 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <Calendar size={14} /> {post.date}
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <User size={14} /> {post.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
