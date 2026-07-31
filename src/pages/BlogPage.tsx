import React, { useState, useMemo } from 'react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogData';
import { BlogSearchAndFilter } from '../components/blog/BlogSearchAndFilter';
import { BlogCard } from '../components/blog/BlogCard';
import { BlogPostDetail } from '../components/blog/BlogPostDetail';
import { BookOpen, Sparkles, Rss, ArrowRight } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookModal?: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onOpenBookModal,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Filter posts dynamically
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      // 1. Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(query);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(query);
        const matchesCategory = post.category.toLowerCase().includes(query);
        const matchesTags = post.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesExcerpt && !matchesCategory && !matchesTags) {
          return false;
        }
      }

      // 2. Main Category
      if (selectedCategory !== 'All' && post.category !== selectedCategory) {
        return false;
      }

      // 3. SubCategory
      if (selectedSubCategory !== '' && post.subCategory !== selectedSubCategory) {
        return false;
      }

      // 4. Tag
      if (selectedTag !== '' && !post.tags.includes(selectedTag)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedSubCategory, selectedTag]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSubCategory('');
    setSelectedTag('');
  };

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.isFeatured) || BLOG_POSTS[0];
  }, []);

  const popularPosts = useMemo(() => {
    return BLOG_POSTS.filter((p) => p.isPopular);
  }, []);

  // If viewing a detailed article
  if (selectedPost) {
    return (
      <BlogPostDetail
        post={selectedPost}
        onBack={() => {
          setSelectedPost(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectPost={(post) => {
          setSelectedPost(post);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBookModal={onOpenBookModal}
      />
    );
  }

  return (
    <div className="space-y-12 sm:space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1D63FF] text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Engineering & Industry Tech Journal</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Insights on Custom Software, AI & Digital Transformation
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Deep-dive architecture breakdowns, industry technology guides, and actionable business automation playbooks from Synckraft engineers.
        </p>
      </section>

      {/* Featured Article Spotlight */}
      {selectedCategory === 'All' && searchQuery === '' && selectedTag === '' && featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Editor's Featured Spotlight</span>
            </h2>
          </div>
          <BlogCard post={featuredPost} onSelectPost={setSelectedPost} isFeaturedCard={true} />
        </section>
      )}

      {/* Search & Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogSearchAndFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSubCategory={selectedSubCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          onReset={handleResetFilters}
        />
      </section>

      {/* Articles Listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Showing {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Rss className="w-3.5 h-3.5 text-[#1D63FF]" />
            <span>Updated Weekly</span>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} onSelectPost={setSelectedPost} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mx-auto text-xl">
              🔍
            </div>
            <h3 className="text-lg font-bold text-slate-900">No articles match your current search criteria</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Try searching for different keywords, resetting active tags, or selecting "All Categories".
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl bg-[#1D63FF] text-white text-xs font-bold hover:bg-blue-600 transition-all cursor-pointer shadow-xs inline-flex items-center gap-1.5"
            >
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </section>

      {/* Popular Articles Carousel / Grid */}
      {popularPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-200/80 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-slate-900">Popular Engineering Guides</h2>
            <span className="text-xs text-slate-400 font-semibold">Most read by industry leaders</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularPosts.slice(0, 3).map((pPost) => (
              <div
                key={pPost.id}
                onClick={() => setSelectedPost(pPost)}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 hover:shadow-lg transition-all cursor-pointer space-y-3 group"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span className="text-[#1D63FF] uppercase tracking-wider">{pPost.category}</span>
                  <span>{pPost.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1D63FF] transition-colors leading-snug">
                  {pPost.title}
                </h3>
                <span className="text-xs font-bold text-[#1D63FF] group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Categories & Subcategories Scalable Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-200/80 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900">Explore Content Directories</h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Browse our categorized archives designed for easy backend scalability and CMS topic routing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BLOG_CATEGORIES.map((cat) => {
            const count = BLOG_POSTS.filter((p) => p.category === cat.name).length;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setSelectedSubCategory('');
                  window.scrollTo({ top: 500, behavior: 'smooth' });
                }}
                className="bg-slate-50/80 hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-200 p-5 rounded-2xl text-left transition-all group cursor-pointer space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#1D63FF] transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[10px] font-extrabold bg-white border border-slate-200 px-2.5 py-0.5 rounded-full text-slate-600">
                    {count} {count === 1 ? 'post' : 'posts'}
                  </span>
                </div>
                {cat.description && <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{cat.description}</p>}
                {cat.subCategories && cat.subCategories.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-1">
                    {cat.subCategories.slice(0, 3).map((sub) => (
                      <span key={sub} className="text-[10px] px-2 py-0.5 rounded-md bg-white text-slate-500 font-medium border border-slate-100">
                        {sub}
                      </span>
                    ))}
                    {cat.subCategories.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-white text-slate-400 font-semibold">
                        +{cat.subCategories.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
