import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
}) => {
  const hoverClasses = hoverEffect
    ? 'hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer'
    : '';

  return (
    <div
      onClick={onClick}
      className={`bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};
