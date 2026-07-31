import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { IndustryItem } from './industryData';
import { ExpandedContent } from './ExpandedContent';
import {
  HeartPulse,
  Building2,
  GraduationCap,
  Truck,
  Landmark,
  ShoppingBag,
} from 'lucide-react';

interface IndustryCardProps {
  industry: IndustryItem;
  isActive: boolean;
  onSelect: () => void;
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

export const IndustryCard: React.FC<IndustryCardProps> = ({
  industry,
  isActive,
  onSelect,
  onOpenBookModal,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <motion.div
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      aria-label={`${industry.name} Industry Solutions, ${
        isActive ? 'expanded' : 'collapsed'
      }`}
      onMouseEnter={onSelect}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      layout={!shouldReduceMotion}
      transition={{
        type: 'spring',
        stiffness: 280,
        damping: 28,
        mass: 0.8,
      }}
      className={`relative rounded-[28px] overflow-hidden border transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
        isActive
          ? `flex-[3.5] lg:flex-[4] ${industry.accentBg} ${industry.accentBorder} shadow-xl p-6 lg:p-7 flex flex-col justify-between`
          : 'flex-[1] bg-slate-50/80 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md p-5 flex flex-col items-center justify-between'
      }`}
      style={{
        height: '660px',
      }}
    >
      {/* Background Soft Glow Effect when active */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: industry.glowColor }}
        />
      )}

      {/* EXPANDED STATE */}
      {isActive ? (
        <ExpandedContent
          industry={industry}
          onOpenBookModal={onOpenBookModal}
        />
      ) : (
        /* COLLAPSED STATE */
        <div className="h-full flex flex-col items-center justify-between py-2 w-full text-center">
          {/* Top Industry Icon */}
          <div
            className={`w-11 h-11 rounded-2xl bg-white border ${industry.accentBorder} flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover:scale-110`}
          >
            {getIcon(industry.iconName, industry.accentText)}
          </div>

          {/* Vertical Industry Name */}
          <div className="flex-1 flex items-center justify-center my-6">
            <span className="text-xs font-extrabold text-slate-700 tracking-wider uppercase whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
              {industry.name}
            </span>
          </div>

          {/* Bottom Indicator Pill */}
          <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#2563EB] transition-colors" />
        </div>
      )}
    </motion.div>
  );
};
