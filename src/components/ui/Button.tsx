'use client';

import React from 'react';
import { clsx } from 'clsx';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  withExternalLink?: boolean;
  children: React.ReactNode;
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  withExternalLink = false,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95 tracking-wide';
  
  const variants = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-500 shadow-lg hover:shadow-xl border border-neutral-700',
    secondary: 'bg-white text-neutral-900 border-2 border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 focus:ring-neutral-500 shadow-md hover:shadow-lg',
    accent: 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 focus:ring-sky-500 shadow-lg hover:shadow-xl',
    ghost: 'text-neutral-300 hover:text-white hover:bg-neutral-800/50 focus:ring-neutral-500',
    outline: 'bg-transparent text-neutral-300 border-2 border-neutral-600 hover:bg-neutral-800 hover:border-neutral-500 focus:ring-neutral-500',
    cta: 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 focus:ring-sky-500 shadow-lg hover:shadow-xl',
  };
  
  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
      {withExternalLink && <ExternalLink className="ml-2 h-4 w-4" />}
    </button>
  );
}

export default Button;
export { Button };
