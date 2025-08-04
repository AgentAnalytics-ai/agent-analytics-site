import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Card({ 
  children, 
  className, 
  variant = 'default',
  padding = 'lg'
}: CardProps) {
  const variants = {
    default: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm',
    elevated: 'bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-200',
    outlined: 'bg-transparent border-2 border-gray-200 dark:border-gray-700'
  };

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6', 
    lg: 'p-8',
    xl: 'p-12'
  };

  return (
    <div
      className={clsx(
        'rounded-2xl transition-all duration-200',
        variants[variant],
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
} 