import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  type = 'button'
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-3 font-semibold rounded-full
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-600 to-blue-700 text-white
      shadow-lg shadow-blue-600/25
      hover:shadow-xl hover:shadow-blue-600/30
      hover:-translate-y-0.5 hover:scale-[1.02]
      active:scale-[0.98] active:translate-y-0
    `,
    secondary: `
      bg-slate-900 text-white
      shadow-lg shadow-slate-900/25
      hover:shadow-xl hover:shadow-slate-900/30
      hover:-translate-y-0.5 hover:scale-[1.02]
      hover:bg-blue-600
      active:scale-[0.98] active:translate-y-0
    `,
    outline: `
      bg-white border-2 border-slate-200 text-slate-700
      shadow-sm
      hover:bg-slate-50 hover:border-slate-300
      hover:shadow-md hover:-translate-y-0.5
      active:scale-[0.98] active:translate-y-0
    `,
    ghost: `
      bg-transparent text-slate-600
      hover:bg-slate-50 hover:text-slate-900
      hover:-translate-y-0.5
      active:scale-[0.98] active:translate-y-0
    `
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

// Legacy button components for backward compatibility
export const PrimaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button {...props} variant="primary" />
);

export const SecondaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button {...props} variant="secondary" />
);

export const OutlineButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button {...props} variant="outline" />
);