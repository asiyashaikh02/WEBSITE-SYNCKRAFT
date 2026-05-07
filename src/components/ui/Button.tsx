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
  'aria-label'?: string;
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
  type = 'button',
  'aria-label': ariaLabel,
}) => {
  const base = [
    'inline-flex items-center justify-center gap-2.5',
    'font-semibold rounded-full select-none',
    'transition-all duration-200 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
    fullWidth ? 'w-full' : '',
    className,
  ].join(' ');

  const sizes: Record<string, string> = {
    sm: 'px-5 py-2.5 text-[13px] tracking-[0.01em]',
    md: 'px-7 py-3.5 text-[14px] tracking-[0.01em]',
    lg: 'px-9 py-4 text-[15px] tracking-[0.01em]',
  };

  const variants: Record<string, string> = {
    primary: [
      'bg-gradient-to-b from-blue-500 to-blue-700 text-white',
      'shadow-[0_1px_2px_rgba(0,0,0,0.12),0_4px_16px_rgba(37,99,235,0.28)]',
      'hover:from-blue-400 hover:to-blue-600',
      'hover:shadow-[0_2px_4px_rgba(0,0,0,0.12),0_8px_24px_rgba(37,99,235,0.36)]',
      'hover:-translate-y-px',
      'active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.12),0_2px_8px_rgba(37,99,235,0.20)] active:scale-[0.99]',
    ].join(' '),

    secondary: [
      'bg-slate-900 text-white',
      'shadow-[0_1px_2px_rgba(0,0,0,0.16),0_4px_16px_rgba(15,23,42,0.20)]',
      'hover:bg-blue-600',
      'hover:shadow-[0_2px_4px_rgba(0,0,0,0.12),0_8px_24px_rgba(37,99,235,0.28)]',
      'hover:-translate-y-px',
      'active:translate-y-0 active:scale-[0.99]',
    ].join(' '),

    outline: [
      'bg-white border border-slate-200 text-slate-700',
      'shadow-[0_1px_2px_rgba(0,0,0,0.04)]',
      'hover:border-slate-300 hover:bg-slate-50/80',
      'hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]',
      'hover:-translate-y-px',
      'active:translate-y-0 active:scale-[0.99]',
    ].join(' '),

    ghost: [
      'bg-transparent text-slate-600',
      'hover:bg-slate-100/80 hover:text-slate-900',
      'active:scale-[0.99]',
    ].join(' '),
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]}`;

  const content = (
    <>
      {icon && iconPosition === 'left'  && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return <Link to={to} className={cls} aria-label={ariaLabel}>{content}</Link>;
  }

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} aria-label={ariaLabel}>
      {content}
    </button>
  );
};

export const PrimaryButton:   React.FC<Omit<ButtonProps, 'variant'>> = (p) => <Button {...p} variant="primary" />;
export const SecondaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (p) => <Button {...p} variant="secondary" />;
export const OutlineButton:   React.FC<Omit<ButtonProps, 'variant'>> = (p) => <Button {...p} variant="outline" />;
