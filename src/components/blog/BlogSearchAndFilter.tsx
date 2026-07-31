import React from 'react';
import { BLOG_CATEGORIES, POPULAR_TAGS } from '../../data/blogData';
import { Search, X, Filter, Tag, Layers } from 'lucide-react';

interface BlogSearchAndFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedSubCategory: string;
  setSelectedSubCategory: (subCat: string) => void;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  onReset: () => void;
}

export const BlogSearchAndFilter: React.FC<BlogSearchAndFilterProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  selectedTag,
  setSelectedTag,
  onReset,
}) => {
  const activeCategoryObj = BLOG_CATEGORIES.find(
    (c) => c.name === selectedCategory
  );

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedSubCategory !== '' ||
    selectedTag !== '';

  return (
    <div className="space-y-6 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
      {/* 1. Search Bar */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search engineering blogs, AI guides, WhatsApp API, PropTech, POS..."
          className="w-full bg-slate-50/80 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm pl-11 pr-10 py-3.5 rounded-2xl focus:outline-hidden focus:border-[#1D63FF] focus:ring-1 focus:ring-[#1D63FF] transition-all font-medium"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 2. Primary Category Pills */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-500">
            <Layers className="w-3.5 h-3.5 text-[#1D63FF]" />
            <span>Categories</span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="text-xs font-bold text-[#1D63FF] hover:underline flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap sm:flex-nowrap">
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedSubCategory('');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-[#1D63FF] text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
            }`}
          >
            All Categories
          </button>

          {BLOG_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setSelectedSubCategory('');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#1D63FF] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Subcategories (if selected category has subcategories) */}
      {activeCategoryObj && activeCategoryObj.subCategories && activeCategoryObj.subCategories.length > 0 && (
        <div className="pt-3 border-t border-slate-100 space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Sub-Categories in {activeCategoryObj.name}:
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setSelectedSubCategory('')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                selectedSubCategory === ''
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              All Subcategories
            </button>
            {activeCategoryObj.subCategories.map((sub) => {
              const isSubActive = selectedSubCategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                    isSubActive
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Popular Tags Chips */}
      <div className="pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
          <Tag className="w-3.5 h-3.5 text-blue-500" />
          <span>Filter by Industry Tag</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {POPULAR_TAGS.map((tag) => {
            const isTagActive = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(isTagActive ? '' : tag)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer border ${
                  isTagActive
                    ? 'bg-blue-50 border-blue-300 text-[#1D63FF] font-bold shadow-2xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
