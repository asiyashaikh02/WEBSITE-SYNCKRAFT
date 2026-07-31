import React from 'react';
import { ArrowRight, Loader2, LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showIcon?: boolean;
  icon?: LucideIcon | React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  showIcon = true,
  icon,
  iconPosition = 'right',
  className = '',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'h-10 px-5 text-xs font-bold gap-2',
    md: 'h-12 px-7 text-sm sm:text-base font-bold gap-2.5',
    lg: 'h-14 px-9 text-base font-bold gap-3',
  }[size];

  const renderIcon = () => {
    if (isLoading) {
      return <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />;
    }
    if (icon) {
      if (typeof icon === 'function') {
        const IconComponent = icon as LucideIcon;
        return <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />;
      }
      return icon;
    }
    if (showIcon) {
      return <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />;
    }
    return null;
  };

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`group bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full font-bold inline-flex items-center justify-center shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap ${
        fullWidth ? 'w-full' : ''
      } ${sizeClasses} ${className}`}
    >
      {iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {iconPosition === 'right' && renderIcon()}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  showIcon = false,
  icon,
  iconPosition = 'right',
  className = '',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'h-10 px-5 text-xs font-bold gap-2',
    md: 'h-12 px-7 text-sm sm:text-base font-bold gap-2.5',
    lg: 'h-14 px-9 text-base font-bold gap-3',
  }[size];

  const renderIcon = () => {
    if (isLoading) {
      return <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-slate-500" />;
    }
    if (icon) {
      if (typeof icon === 'function') {
        const IconComponent = icon as LucideIcon;
        return <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />;
      }
      return icon;
    }
    if (showIcon) {
      return <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />;
    }
    return null;
  };

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`group bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-blue-400 text-slate-800 rounded-full font-bold inline-flex items-center justify-center shadow-2xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap ${
        fullWidth ? 'w-full' : ''
      } ${sizeClasses} ${className}`}
    >
      {iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {iconPosition === 'right' && renderIcon()}
    </button>
  );
};

