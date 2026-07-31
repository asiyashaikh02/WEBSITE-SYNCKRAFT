import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} space-y-3 ${className}`}>
      {badge && (
        <span className="text-xs font-bold uppercase tracking-widest text-[#1D63FF]">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
