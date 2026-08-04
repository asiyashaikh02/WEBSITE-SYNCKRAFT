import React from 'react';
import { BlogPost } from '../../types';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  onSelectPost: (post: BlogPost) => void;
  isFeaturedCard?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  onSelectPost,
  isFeaturedCard = false,
}) => {
  if (isFeaturedCard) {
    return (
      <div
        onClick={() => onSelectPost(post)}
        className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center overflow-hidden"
      >
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#1D63FF] border border-blue-100">
              Featured Article
            </span>
            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {post.category}
            </span>
            {post.subCategory && (
              <span className="text-[11px] font-semibold text-slate-400">
                • {post.subCategory}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#1D63FF] transition-colors leading-tight">
            {post.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1D63FF] to-blue-700 text-white font-extrabold text-[10px] flex items-center justify-center shrink-0 border border-blue-400/20">
                {post.author.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
              </div>
              <span className="text-slate-900 font-bold">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#1D63FF] group-hover:gap-3 transition-all">
              <span>Read Full Deep Dive</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 h-64 sm:h-72 lg:h-full min-h-[220px] rounded-2xl overflow-hidden relative border border-slate-100 shadow-inner">
          <img
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onSelectPost(post)}
      className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full overflow-hidden"
    >
      <div className="space-y-4">
        {/* Cover Image */}
        <div className="w-full h-48 rounded-2xl overflow-hidden relative border border-slate-100">
          <img
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 text-[11px] font-bold text-slate-800 shadow-2xs">
            {post.category}
          </div>
        </div>

        {/* Title & Excerpt */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1D63FF] transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-2 line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-5 border-t border-slate-100 mt-5 space-y-3">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-700">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <span className="text-slate-400">{post.publishDate}</span>
          <span className="font-bold text-[#1D63FF] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
