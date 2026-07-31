import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'emerald' | 'slate';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-blue-50 border-blue-100 text-[#1D63FF]',
    emerald: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    slate: 'bg-slate-100 border-slate-200 text-slate-700',
  }[variant];

  return (
    <div
      className={`inline-block px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide shadow-2xs ${variantStyles} ${className}`}
    >
      {children}
    </div>
  );
};
