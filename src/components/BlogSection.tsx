import React from 'react';
import { ArrowRight, Clock, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post, idx) => (
            <motion.article 
              key={post.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`group rounded-3xl overflow-hidden border ${isDark ? 'bg-[#111112] border-white/5' : 'bg-white border-slate-200'} shadow-xl transition-all hover:-translate-y-2`}
            >
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient || 'from-blue-500 to-purple-500'} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    post.category === 'Automation' 
                      ? 'bg-blue-500/20 text-blue-500'
                      : post.category === 'Engineering'
                      ? 'bg-purple-500/20 text-purple-500'
                      : 'bg-emerald-500/20 text-emerald-500'
                  }`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className={`flex items-center gap-4 text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime || '5 min'}</span>
                  <span className="flex items-center gap-1"><User size={14} /> Synckraft</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500 transition-colors`}>
                  {post.title}
                </h3>
                <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className={`inline-flex items-center gap-2 text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'} hover:text-blue-500 transition-colors cursor-pointer`}
                >
                  Read Article <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
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
