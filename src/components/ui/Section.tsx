import React from 'react';
import { clsx } from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  background?: 'white' | 'gray' | 'blue' | 'dark';
  id?: string;
}

export function Section({
  children,
  className,
  spacing = 'lg',
  background = 'white',
  id,
}: SectionProps) {
  const spacingStyles = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24',
    '2xl': 'py-32',
  };

  const backgroundStyles = {
    white: 'bg-white dark:bg-gray-950',
    gray: 'bg-gray-50 dark:bg-gray-900',
    blue: 'bg-blue-50 dark:bg-blue-950/20',
    dark: 'bg-gray-950 dark:bg-black',
  };

  return (
    <section
      id={id}
      className={clsx(
        spacingStyles[spacing],
        backgroundStyles[background],
        className
      )}
    >
      {children}
    </section>
  );
}
