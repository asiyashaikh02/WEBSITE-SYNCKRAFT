import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPostsData } from '../pages/blog/Blog';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export const BlogSection: React.FC<ThemeProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`py-24 ${isDark ? 'bg-[#0A0A0B]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h4 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Knowledge Base</h4>
          <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Insights & Automation Guides
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <div key={post.id} className={`group p-8 rounded-[2.5rem] border transition-transform transition-shadow duration-300 flex flex-col reveal elev-1 hover:-translate-y-2 ${
              isDark ? 'bg-[#111112] border-white/5 hover:border-blue-500/30 shadow-blue-500/5' : 'bg-white border-slate-200 hover:border-blue-500/30'
            }`}>
              <div className="mb-6 flex gap-3 text-xs font-bold uppercase tracking-widest text-blue-500">
                <span>{post.category}</span>
              </div>
              <h3 className={`text-2xl font-bold mb-4 line-clamp-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{post.title}</h3>
              <p className={`text-sm leading-relaxed mb-8 flex-grow ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{post.excerpt}</p>
              
              <div className="mt-auto pt-6 border-t border-slate-500/20 flex items-center justify-between">
                <span className={`text-xs font-semibold flex items-center gap-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  <Calendar size={14} /> {post.date}
                </span>
                <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <Link to="/blog" className="inline-flex items-center gap-2 bg-blue-600 border border-blue-500/50 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-blue-500/30 hover:bg-blue-500 transition-all hover:-translate-y-1">
            View All Insights <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
