import React from 'react';
import { Service3DIllustration } from '../illustrations/Service3DIllustration';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export interface UnifiedCapabilityCardProps {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  highlights: string[];
  badge?: string;
  ctaText?: string;
  onOpenBookModal: () => void;
}

export const UnifiedCapabilityCard: React.FC<UnifiedCapabilityCardProps> = ({
  id,
  title,
  description,
  problemSolved,
  highlights,
  badge,
  ctaText = 'Discuss Service Scope',
  onOpenBookModal,
}) => {
  return (
    <div
      onClick={onOpenBookModal}
      className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-9 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full min-h-[530px] sm:min-h-[570px] relative overflow-hidden"
    >
      <div className="space-y-5 sm:space-y-6">
        {/* Optional Badge */}
        {badge && (
          <div className="flex justify-start">
            <span className="text-[11px] font-bold text-[#1D63FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-100/80">
              {badge}
            </span>
          </div>
        )}

        {/* 1. Illustration */}
        <div className="w-full h-32 sm:h-36 flex items-center justify-center py-2">
          <Service3DIllustration type={id} />
        </div>

        {/* 2. Title */}
        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#1D63FF] transition-colors leading-snug">
          {title}
        </h3>

        {/* 3. Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-2 min-h-[2.5rem]">
          {description}
        </p>

        {/* 4. Problem Solved Badge */}
        {problemSolved && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-200/50 text-[11px] text-amber-900 leading-snug">
            <span className="font-extrabold text-amber-800">Problem Solved: </span>
            <span className="font-medium text-slate-700">{problemSolved}</span>
          </div>
        )}

        {/* 5. 3 Key Highlights */}
        <div className="pt-3 border-t border-slate-100/80 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            3 Key Highlights
          </span>
          <ul className="space-y-2.5">
            {highlights.slice(0, 3).map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold leading-snug"
              >
                <div className="w-4 h-4 rounded-full bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="pt-7 border-t border-slate-100/80 mt-7">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenBookModal();
          }}
          className="w-full py-1 text-xs sm:text-sm font-extrabold text-[#2563EB] group-hover:text-[#1D4ED8] inline-flex items-center justify-between transition-all cursor-pointer"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
