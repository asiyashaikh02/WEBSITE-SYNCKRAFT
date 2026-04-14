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
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-slate-950/95" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 12%, rgba(56,189,248,0.06), transparent 28%), radial-gradient(circle at 82% 18%, rgba(168,85,247,0.05), transparent 26%), radial-gradient(circle at 55% 85%, rgba(14,165,233,0.04), transparent 35%)",
          mixBlendMode: "screen",
          opacity: 0.5,
        }}
      />
      <div className="hero-glow opacity-50" />
      <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-cyan-500/8 blur-3xl" />
      <div className="absolute right-8 top-40 h-56 w-56 rounded-full bg-fuchsia-500/8 blur-3xl" />

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
              className="group rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(56,189,248,0.15)] hover:border-cyan-500/30"
            >
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${(post as any).gradient || 'from-blue-500 to-purple-500'} opacity-20 group-hover:opacity-30 transition-opacity`} />
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
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider mb-4 text-slate-500">
                  <span className="flex items-center gap-1"><Clock size={14} /> {(post as any).readTime || '5 min'}</span>
                  <span className="flex items-center gap-1"><User size={14} /> Synckraft</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm mb-6 text-slate-400">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-500 transition-colors cursor-pointer"
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
