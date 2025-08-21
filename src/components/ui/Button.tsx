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
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-500 shadow-lg hover:shadow-xl border border-neutral-700',
    secondary: 'bg-white text-neutral-900 border-2 border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 focus:ring-neutral-500 shadow-md hover:shadow-lg',
    accent: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl',
    ghost: 'text-neutral-300 hover:text-white hover:bg-neutral-800/50 focus:ring-neutral-500',
    outline: 'bg-transparent text-neutral-300 border-2 border-neutral-600 hover:bg-neutral-800 hover:border-neutral-500 focus:ring-neutral-500',
    cta: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 focus:ring-emerald-500 shadow-lg hover:shadow-xl',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
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
