import React from 'react';
import { PrimaryButton } from './ui/Button';

interface CTABannerProps {
  onOpenBookModal: (ctaName?: string) => void;
  eyebrow?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  subtext?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  onOpenBookModal,
  eyebrow = 'READY TO TRANSFORM?',
  headingPrefix = "Let's Build Something",
  headingHighlight = 'Amazing Together.',
  subtext = 'Talk to our experts and take the first step towards transforming your business.',
}) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 my-16">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#03092B] via-[#081B6D] to-[#01288B] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-blue-900/40">
        {/* Subtle background glow & mesh lines */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block text-xs font-bold tracking-widest text-blue-300 uppercase">
              {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {headingPrefix}{' '}
              <span className="text-[#38BDF8]">{headingHighlight}</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between space-y-6">
            <p className="text-blue-100/90 text-sm sm:text-base lg:text-right max-w-md leading-relaxed font-normal">
              {subtext}
            </p>

            <PrimaryButton
              onClick={() => onOpenBookModal('Book a Strategy Call')}
            >
              Book a Strategy Call
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};
