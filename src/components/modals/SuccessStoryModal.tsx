import React from 'react';
import { SuccessStory } from '../../types';
import { PrimaryButton, SecondaryButton } from '../ui/Button';
import {
  X,
  Star,
  Quote,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  ArrowRight,
  Download,
  Building2,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

interface SuccessStoryModalProps {
  story: SuccessStory | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenBookModal: () => void;
}

export const SuccessStoryModal: React.FC<SuccessStoryModalProps> = ({
  story,
  isOpen,
  onClose,
  onOpenBookModal,
}) => {
  if (!isOpen || !story) return null;

  const handleDownloadPdf = () => {
    alert(
      `Case Study PDF for ${story.company} is being prepared. Our team can also share the full technical specification during your discovery call.`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200/80 z-10 my-auto p-6 sm:p-10 space-y-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1D63FF] text-xs font-extrabold tracking-wide">
                <Building2 className="w-3.5 h-3.5" />
                {story.industry}
              </span>
              {story.source && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {story.source}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {story.company}
            </h2>
            <p className="text-sm font-semibold text-[#1D63FF]">
              Project: {story.project || 'Enterprise Digital Transformation'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-all cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Client Endorsement Callout */}
        <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/70 space-y-6 relative overflow-hidden">
          <Quote className="w-12 h-12 text-blue-100 absolute -top-2 -right-2 pointer-events-none" />

          <div className="flex items-center gap-1">
            {[...Array(story.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-bold text-slate-600 ml-2">
              5.0 Verified Executive Endorsement
            </span>
          </div>

          <p className="text-slate-800 text-base sm:text-lg italic font-normal leading-relaxed relative z-10">
            "{story.review}"
          </p>

          <div className="flex items-center gap-4 pt-2">
            {story.avatar ? (
              <img
                src={story.avatar}
                alt={story.clientName}
                className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-md border border-slate-200"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D63FF] to-blue-700 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md border border-blue-400/30">
                {story.company.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">
                {story.clientName}
              </h4>
              <p className="text-xs font-medium text-slate-500">
                {story.designation} • {story.company}
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Chips */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Measurable Business Impact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {story.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-blue-50/50 border border-blue-100/80 rounded-2xl p-4 text-center space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1D63FF]">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-slate-600">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-3">
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
              The Challenge
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {story.challenge}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-3">
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider">
              Synckraft Solution
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {story.solution}
            </p>
          </div>
        </div>

        {/* Deliverables & Business Results */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Key Operational Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {story.results.map((res, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-100"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800 leading-snug">
                  {res}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Before vs After comparison if available */}
        {story.beforeAfter && (
          <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              Transformation Blueprint (Before vs. After)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-semibold block uppercase">
                  Before Synckraft:
                </span>
                <p className="text-slate-300 font-normal leading-relaxed">
                  {story.beforeAfter.before}
                </p>
              </div>
              <div className="space-y-1 sm:border-l sm:border-slate-800 sm:pl-6">
                <span className="text-xs text-blue-400 font-bold block uppercase">
                  After Deployment:
                </span>
                <p className="text-white font-semibold leading-relaxed">
                  {story.beforeAfter.after}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack & Timeline */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
          {story.techStack && (
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-bold text-slate-500">Stack:</span>
              <div className="flex flex-wrap gap-1.5">
                {story.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {story.timeline && (
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Timeline: {story.timeline}</span>
            </div>
          )}
        </div>

        {/* Bottom CTA Actions */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <SecondaryButton
            onClick={handleDownloadPdf}
            icon={<Download className="w-4 h-4 text-slate-500" />}
          >
            Download PDF Summary
          </SecondaryButton>

          <PrimaryButton
            onClick={() => {
              onClose();
              onOpenBookModal();
            }}
          >
            Build Something Similar
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
