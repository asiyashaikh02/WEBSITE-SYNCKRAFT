import React from 'react';
import { Product3DIllustration } from '../illustrations/Product3DIllustration';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLeadModal } from '../../context/LeadModalContext';

interface ComingSoonProductCardProps {
  compact?: boolean;
  onOpenBookModal: (ctaName?: string) => void;
}

export const ComingSoonProductCard: React.FC<ComingSoonProductCardProps> = ({
  compact = false,
  onOpenBookModal,
}) => {
  const { openLeadModal } = useLeadModal();
  const brandColor = '#1D63FF';

  if (compact) {
    return (
      <div
        onClick={() => onOpenBookModal()}
        className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full relative overflow-hidden"
      >
        <div className="space-y-3.5">
          {/* Top Header & Category Badge */}
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full border"
              style={{
                backgroundColor: `${brandColor}12`,
                color: brandColor,
                borderColor: `${brandColor}30`,
              }}
            >
              Coming Soon
            </span>
            <span className="text-[11px] font-bold text-slate-400">
              Synckraft Ecosystem
            </span>
          </div>

          {/* 1. Product 3D Illustration */}
          <div className="w-full h-24 sm:h-28 flex items-center justify-center py-1">
            <Product3DIllustration productId="coming-soon" brandColor={brandColor} />
          </div>

          {/* 2. Product Name & Tagline */}
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
              Shhh... Building Something Cool 🤫
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-0.5 tracking-tight line-clamp-1">
              Custom Software Development
            </p>
          </div>

          {/* 3. Description */}
          <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2">
            Need software built specifically for your business?
          </p>

          {/* 4. Co-Innovation Badge */}
          <div
            className="p-2.5 rounded-xl border text-[11px] leading-snug"
            style={{
              backgroundColor: `${brandColor}08`,
              borderColor: `${brandColor}25`,
            }}
          >
            <span className="font-extrabold" style={{ color: brandColor }}>
              Co-Innovation:{' '}
            </span>
            <span className="font-medium text-slate-700">Let's build it together.</span>
          </div>
        </div>

        {/* 5. Card Bottom CTAs */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-5 gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenBookModal();
            }}
            className="text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer group-hover:gap-2.5"
            style={{ color: brandColor }}
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenBookModal();
            }}
            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Inquire Now</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onOpenBookModal()}
      className="bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full relative overflow-hidden"
    >
      <div className="space-y-4">
        {/* Top Header & Category Badge */}
        <div className="flex items-center justify-between">
          <span
            className="text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full border"
            style={{
              backgroundColor: `${brandColor}12`,
              color: brandColor,
              borderColor: `${brandColor}30`,
            }}
          >
            Coming Soon
          </span>
          <span className="text-[11px] font-bold text-slate-400">
            Synckraft Ecosystem
          </span>
        </div>

        {/* 1. Product 3D Illustration */}
        <div className="w-full h-28 flex items-center justify-center py-1">
          <Product3DIllustration productId="coming-soon" brandColor={brandColor} />
        </div>

        {/* 2. Product Name & Tagline */}
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
            Shhh... Building Something Cool 🤫
          </h3>
          <p className="text-xs font-semibold text-slate-500 mt-0.5 tracking-tight">
            Custom Software Development
          </p>
        </div>

        {/* 3. Description */}
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-3">
          Need software built specifically for your industry?
        </p>

        {/* 4. Primary Outcome / Problem Solved Badge */}
        <div
          className="p-3 rounded-2xl border text-[11px] leading-snug"
          style={{
            backgroundColor: `${brandColor}08`,
            borderColor: `${brandColor}25`,
          }}
        >
          <span className="font-extrabold" style={{ color: brandColor }}>
            Co-Innovation:{' '}
          </span>
          <span className="font-medium text-slate-700">Let's build it together.</span>
        </div>

        {/* 5. Key Highlights */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Custom Build Scope
          </span>
          <ul className="space-y-2">
            {[
              'Tailored Industry-Specific Software',
              'Enterprise-Grade Security & Scale',
              'End-to-End Synckraft Integration',
            ].map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-snug">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    backgroundColor: `${brandColor}18`,
                    color: brandColor,
                  }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 6. Card Bottom CTAs */}
      <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6 gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            openLeadModal({
              ctaName: 'Inquire Custom Solution',
              formVariant: 'business',
            });
          }}
          className="text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer group-hover:gap-2.5"
          style={{ color: brandColor }}
        >
          <span>Contact Us</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            openLeadModal({
              ctaName: 'Inquire Custom Solution',
              formVariant: 'business',
            });
          }}
          className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer"
        >
          <span>Inquire Now</span>
        </button>
      </div>
    </div>
  );
};

