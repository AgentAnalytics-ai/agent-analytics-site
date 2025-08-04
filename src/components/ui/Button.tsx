'use client'

import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  withArrow?: boolean;
  animate?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  withArrow = false,
  animate = true,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95',
    secondary: 'bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 focus:ring-gray-500/50 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700',
    outline: 'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500/50 hover:scale-105 active:scale-95',
    ghost: 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500/50 hover:scale-105 active:scale-95 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800',
    cta: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95 font-semibold'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm font-medium',
    md: 'px-6 py-3 text-base font-medium',
    lg: 'px-8 py-4 text-lg font-semibold',
    xl: 'px-10 py-5 text-xl font-semibold'
  };

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <svg 
          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      )}
    </>
  );

  if (animate) {
    return (
      <motion.button
        className={clsx(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        {...props}
      >
        {buttonContent}
      </motion.button>
    );
  }

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {buttonContent}
    </button>
  );
} 