import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Calendar, ChevronRight } from 'lucide-react';
import { blogPostsData } from './Blog';
import { useTheme } from '../../components/ThemeProvider';

export default function BlogPost() {
  const { theme } = useTheme();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isDark = theme === 'dark';

  const post = blogPostsData.find(p => p.id === id);

  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <>
      <Helmet>
        <title>{post.title} | Synckraft Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <main className="pt-32 pb-24 min-h-screen">
        <article className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className={`inline-flex items-center gap-2 mb-10 text-sm font-bold uppercase tracking-widest hover:text-blue-500 transition-colors ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            <ArrowLeft size={16} /> Back to Hub
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm font-bold text-blue-500 mb-6 uppercase tracking-widest">
              <span>{post.category}</span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {post.title}
            </h1>
            
            <div className={`flex flex-wrap items-center gap-6 py-6 border-y ${isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'}`}>
              <div className="flex items-center gap-2">
                <User size={18} /> {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} /> {post.date}
              </div>
            </div>
          </header>

          <div className={`prose prose-lg max-w-none mb-16 ${isDark ? 'prose-invert prose-p:text-slate-300' : 'prose-p:text-slate-700'}`}>
            <p className="text-xl leading-relaxed mb-6 font-medium text-blue-500/80">
              {post.excerpt}
            </p>
            <p className="leading-loose">
              {post.content}
            </p>
            
            <div className="my-10 p-8 rounded-2xl bg-blue-600/5 border border-blue-500/20">
              <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Ready to Scale?</h3>
              <p className="mb-6">Integrate these strategic capabilities natively into your organization today using our dedicated ecosystem.</p>
              <a 
                href={post.ctaLink} 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                {post.ctaText} <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
