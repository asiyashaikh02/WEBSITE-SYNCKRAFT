import React, { useState } from 'react';
import { BlogPost } from '../../types';
import { BLOG_POSTS } from '../../data/blogData';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Send,
  HelpCircle,
  Copy,
  Linkedin,
  Twitter,
  MessageCircle,
  Code,
  FileText,
} from 'lucide-react';

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
  onOpenBookModal?: () => void;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({
  post,
  onBack,
  onSelectPost,
  onOpenBookModal,
}) => {
  const [copied, setCopied] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  // Find previous & next posts
  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost =
    currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  // Filter related posts (same category or shared tags, excluding current)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
  ).slice(0, 2);

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* 1. Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 flex-wrap font-medium">
        <button
          onClick={onBack}
          className="hover:text-[#1D63FF] transition-colors inline-flex items-center gap-1 font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Blog</span>
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        <span className="text-slate-600">{post.category}</span>
        {post.subCategory && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-600">{post.subCategory}</span>
          </>
        )}
        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        <span className="text-slate-900 font-semibold truncate max-w-[200px]">
          {post.title}
        </span>
      </nav>

      {/* 2. SEO Schema Preview Badge (Developer/Crawler Inspection Panel) */}
      {post.seo && (
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs space-y-2 text-slate-600 font-mono">
          <div className="flex items-center justify-between font-bold text-slate-900 font-sans">
            <span className="inline-flex items-center gap-1.5 text-[#1D63FF]">
              <FileText className="w-4 h-4" />
              SEO Article Schema & Open Graph Configured
            </span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-md font-sans font-bold uppercase">
              SEO Ready
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
            <div>
              <span className="font-bold text-slate-700">Meta Title:</span> {post.seo.metaTitle}
            </div>
            <div>
              <span className="font-bold text-slate-700">Canonical:</span> {post.seo.canonicalUrl}
            </div>
          </div>
        </div>
      )}

      {/* 3. Article Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-blue-50 text-[#1D63FF] border border-blue-100">
            {post.category}
          </span>
          {post.subCategory && (
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {post.subCategory}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author & Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1D63FF] to-blue-700 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs border border-blue-400/20">
              {post.author.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{post.author.name}</h4>
              <p className="text-xs font-semibold text-slate-500">{post.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{post.publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Hero Cover Image */}
      <div className="w-full h-72 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-md">
        <img
          src={post.coverImage}
          alt={post.title}
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 5. Main Content Grid (Table of Contents + Article Body) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
        {/* Left Sidebar: Share + Quick TOC */}
        <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-24 h-fit">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-4">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Share2 className="w-4 h-4 text-[#1D63FF]" />
              <span>Share Article</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#1D63FF] hover:border-blue-300 transition-all cursor-pointer"
                title="Copy Link"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#1D63FF] hover:border-blue-300 transition-all cursor-pointer"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#1D63FF] hover:border-blue-300 transition-all cursor-pointer"
                title="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#1D63FF] hover:border-blue-300 transition-all cursor-pointer"
                title="Share on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            {copied && <p className="text-[11px] text-emerald-600 font-bold">Link copied to clipboard!</p>}
          </div>

          {/* Tags */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
              Article Tags
            </span>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-9 space-y-8 text-slate-800 leading-relaxed text-base font-normal">
          {/* Formatted Content Body */}
          <div className="prose prose-slate max-w-none space-y-6">
            {post.content.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3
                    key={pIdx}
                    className="text-2xl font-extrabold text-slate-900 pt-4 pb-1 border-b border-slate-100"
                  >
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('```')) {
                const codeContent = paragraph.replace(/```[a-z]*/g, '').trim();
                return (
                  <div
                    key={pIdx}
                    className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs overflow-x-auto border border-slate-800 relative my-4"
                  >
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pb-2 mb-2 border-b border-slate-800 uppercase font-sans font-bold">
                      <span className="flex items-center gap-1.5 text-blue-400">
                        <Code className="w-3.5 h-3.5" /> TypeScript Engine Snippet
                      </span>
                      <span>Synckraft Architecture</span>
                    </div>
                    <pre>{codeContent}</pre>
                  </div>
                );
              }
              if (paragraph.startsWith('* ')) {
                const listItems = paragraph.split('\n');
                return (
                  <ul key={pIdx} className="space-y-2 my-3">
                    {listItems.map((li, liIdx) => (
                      <li key={liIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                        <span>{li.replace('* ', '')}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={pIdx} className="text-slate-700 font-normal leading-relaxed text-base">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* FAQs Accordion Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="pt-8 border-t border-slate-200/80 space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#1D63FF]" />
                <h3 className="text-xl font-bold text-slate-900">
                  Frequently Asked Questions (FAQ Schema)
                </h3>
              </div>
              <div className="space-y-3">
                {post.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5"
                  >
                    <h4 className="text-sm font-bold text-slate-900">
                      Q: {faq.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consultation Banner Callout inside Post */}
          {onOpenBookModal && (
            <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 space-y-4 my-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                  Consulting & Custom Builds
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Want to deploy this exact engineering pattern in your organization?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                  Our software engineers build tailored AI voice agents, custom ERPs, and real estate automation engines with full cloud deployment and guaranteed SLAs.
                </p>
                <button
                  onClick={onOpenBookModal}
                  className="mt-2 px-6 py-3 rounded-xl bg-[#1D63FF] hover:bg-blue-500 text-white font-bold text-sm transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
                >
                  <span>Book Engineering Discovery Call</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Previous & Next Post Nav */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-slate-200">
            {prevPost ? (
              <button
                onClick={() => onSelectPost(prevPost)}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left space-y-1 transition-all cursor-pointer group"
              >
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  ← Previous Article
                </span>
                <p className="text-xs font-bold text-slate-900 group-hover:text-[#1D63FF] transition-colors line-clamp-1">
                  {prevPost.title}
                </p>
              </button>
            ) : <div />}

            {nextPost && (
              <button
                onClick={() => onSelectPost(nextPost)}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-right space-y-1 transition-all cursor-pointer group"
              >
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Next Article →
                </span>
                <p className="text-xs font-bold text-slate-900 group-hover:text-[#1D63FF] transition-colors line-clamp-1">
                  {nextPost.title}
                </p>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 6. Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="pt-12 border-t border-slate-200 space-y-6">
          <h3 className="text-2xl font-extrabold text-slate-900">Related Deep Dives</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rPost) => (
              <div
                key={rPost.id}
                onClick={() => onSelectPost(rPost)}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 hover:shadow-lg transition-all cursor-pointer space-y-3 group"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1D63FF]">
                  {rPost.category}
                </span>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#1D63FF] transition-colors">
                  {rPost.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2">{rPost.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. Newsletter Subscription Box */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 text-center space-y-4">
        <div className="max-w-xl mx-auto space-y-2">
          <h3 className="text-2xl font-extrabold text-slate-900">
            Subscribe to Synckraft Engineering Insights
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Get early access to tech teardowns, AI benchmarks, and enterprise software engineering playbooks directly in your inbox.
          </p>
        </div>

        <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex items-center gap-2">
          <input
            type="email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            placeholder="Enter your work email"
            required
            className="flex-1 bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm px-4 py-3 rounded-xl focus:outline-hidden focus:border-[#1D63FF] font-medium"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-[#1D63FF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Subscribe</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {newsletterSubscribed && (
          <p className="text-xs text-emerald-600 font-bold">
            ✓ Thank you for subscribing! Check your inbox for confirmation.
          </p>
        )}
      </div>
    </article>
  );
};
