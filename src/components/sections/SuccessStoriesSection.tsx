import React, { useState, useRef, useEffect } from 'react';
import { SUCCESS_STORIES_DATA } from '../../data/websiteData';
import { SuccessStory } from '../../types';
import { SuccessStoryModal } from '../modals/SuccessStoryModal';
import {
  Star,
  Quote,
  ShieldCheck,
  ArrowRight,
  Building2,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';

interface SuccessStoriesSectionProps {
  title?: string;
  subtitle?: string;
  onOpenBookModal?: () => void;
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({
  title = 'Success Stories',
  subtitle = 'Real businesses. Real software. Real business outcomes.',
  onOpenBookModal,
}) => {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-slide effect when not paused
  useEffect(() => {
    if (isPaused || isModalOpen) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SUCCESS_STORIES_DATA.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isPaused, isModalOpen]);

  const handleOpenStoryModal = (story: SuccessStory) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const activeStory = SUCCESS_STORIES_DATA[currentIndex];

  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1D63FF] text-xs font-semibold tracking-wide shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#1D63FF]" />
          VERIFIED CLIENT OUTCOMES
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>

      {/* Featured Large Horizontal Story Card (Responsive Container) */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-blue-200/90 transition-all duration-300 space-y-8 relative overflow-hidden"
      >
        {/* Top Badges & Source Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1D63FF] text-xs font-bold tracking-wide">
              <Building2 className="w-3.5 h-3.5" />
              {activeStory.industry}
            </span>
            <span className="text-xs font-black tracking-widest text-slate-400 uppercase">
              {activeStory.company}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-800 text-xs font-bold">
            <div className="flex items-center gap-0.5">
              {[...Array(activeStory.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>5.0 Google Rating</span>
          </div>
        </div>

        {/* Core 3-Column Story Structure (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT SIDE: Client & Company Identity (3 cols) */}
          <div className="lg:col-span-3 space-y-5 lg:border-r lg:border-slate-100 lg:pr-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Client Partner
              </span>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#0052FF] via-[#1D63FF] to-[#3B82F6] text-white font-extrabold text-lg flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 border border-blue-400/30">
                  {(() => {
                    const words = (activeStory.company || '').trim().split(/\s+/);
                    return words.length >= 2
                      ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
                      : (activeStory.company || '').slice(0, 2).toUpperCase();
                  })()}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {activeStory.clientName}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">
                    {activeStory.designation}
                  </p>
                  <p className="text-xs font-bold text-[#1D63FF] mt-0.5">
                    {activeStory.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Source Tag */}
            {activeStory.source && (
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {activeStory.source}
                </span>
              </div>
            )}
          </div>

          {/* CENTER: Challenge, Solution & Result Chips (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:border-r lg:border-slate-100 lg:pr-6">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Business Challenge
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {activeStory.challenge}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D63FF] block mb-1">
                  Our Solution
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {activeStory.solution}
                </p>
              </div>
            </div>

            {/* Statistic Chips */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Business Outcomes
              </span>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {activeStory.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/90 border border-slate-100 rounded-2xl p-2.5 sm:p-3 text-center space-y-0.5 hover:bg-blue-50/50 hover:border-blue-100 transition-all"
                  >
                    <div className="text-sm sm:text-base font-extrabold text-[#1D63FF]">
                      {metric.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-500 leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Client Testimonial Quote (4 cols) */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Client Review
              </span>
              <div className="relative pl-4 border-l-2 border-[#1D63FF]">
                <Quote className="w-6 h-6 text-blue-100 absolute -top-1 -left-3 pointer-events-none" />
                <p className="text-sm sm:text-base text-slate-800 font-normal italic leading-relaxed relative z-10">
                  "{activeStory.review}"
                </p>
              </div>
            </div>

            <div className="pt-3">
              <p className="text-xs font-bold text-slate-900">
                — {activeStory.clientName}
              </p>
              <p className="text-[11px] font-medium text-slate-500">
                {activeStory.designation}, {activeStory.company}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM: Primary & Secondary CTAs */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>Story {currentIndex + 1} of {SUCCESS_STORIES_DATA.length} • Verified Outcome</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => handleOpenStoryModal(activeStory)}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-blue-400 rounded-full px-6 py-3 text-xs sm:text-sm font-bold transition-all shadow-2xs inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Full Case Study</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </button>

            {onOpenBookModal && (
              <button
                onClick={onOpenBookModal}
                className="w-full sm:w-auto bg-[#1D63FF] hover:bg-[#0052FF] text-white rounded-full px-7 py-3 text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Build Something Similar</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Full Success Story Modal */}
      <SuccessStoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenBookModal={onOpenBookModal || (() => {})}
      />
    </section>
  );
};
