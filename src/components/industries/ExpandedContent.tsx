import React from 'react';
import { motion } from 'motion/react';
import { IndustryItem } from './industryData';
import { IndustryImage } from './IndustryImage';
import { PrimaryButton } from '../ui/Button';
import { CheckCircle2, LucideIcon } from 'lucide-react';
import {
  HeartPulse,
  Building2,
  GraduationCap,
  Truck,
  Landmark,
  ShoppingBag,
} from 'lucide-react';

interface ExpandedContentProps {
  industry: IndustryItem;
  onOpenBookModal: (ctaName?: string) => void;
}

const getIcon = (iconName: string, colorClass: string) => {
  const cls = `w-5 h-5 ${colorClass}`;
  switch (iconName) {
    case 'HeartPulse':
      return <HeartPulse className={cls} />;
    case 'Building2':
      return <Building2 className={cls} />;
    case 'GraduationCap':
      return <GraduationCap className={cls} />;
    case 'Truck':
      return <Truck className={cls} />;
    case 'Landmark':
      return <Landmark className={cls} />;
    case 'ShoppingBag':
      return <ShoppingBag className={cls} />;
    default:
      return <Building2 className={cls} />;
  }
};

export const ExpandedContent: React.FC<ExpandedContentProps> = ({
  industry,
  onOpenBookModal,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 h-full flex flex-col justify-between overflow-y-auto no-scrollbar pr-1"
    >
      {/* Top Header: Icon, Name & Badge */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-2xl bg-white border ${industry.accentBorder} flex items-center justify-center shrink-0 shadow-2xs`}
          >
            {getIcon(industry.iconName, industry.accentText)}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {industry.name}
            </h3>
            <span
              className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${industry.badgeBg} mt-0.5`}
            >
              {industry.badge}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-3">
        {industry.description}
      </p>

      {/* Industry Image */}
      <div className="mb-4">
        <IndustryImage
          src={industry.image}
          alt={`${industry.name} solutions`}
          industryName={industry.name}
          accentBorder={industry.accentBorder}
        />
      </div>

      {/* Features List */}
      <div className="mb-4 space-y-2">
        <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 block">
          Key Capabilities:
        </span>
        <div className="grid grid-cols-2 gap-2">
          {industry.features.map((feature, idx) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
              className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white/70 backdrop-blur-xs px-2.5 py-1.5 rounded-xl border border-slate-200/60"
            >
              <CheckCircle2
                className={`w-4 h-4 shrink-0 ${industry.accentText}`}
              />
              <span className="truncate">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
        <PrimaryButton
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onOpenBookModal(industry.cta);
          }}
          className="w-full sm:w-auto"
        >
          {industry.cta}
        </PrimaryButton>
      </div>
    </motion.div>
  );
};
