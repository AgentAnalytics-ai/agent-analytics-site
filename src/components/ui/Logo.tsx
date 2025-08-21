'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { clsx } from 'clsx';

interface LogoProps {
  variant?: 'full' | 'symbol' | 'footer' | 'blog' | 'watermark' | '404';
  size?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'navbar'
    | 'footer'
    | 'blog'
    | 'watermark'
    | '404';
  className?: string;
  href?: string;
  showLink?: boolean;
  withDarkBackground?: boolean; // New prop
}

export function Logo({
  variant = 'full',
  size = 'md',
  className,
  href = '/',
  showLink = true,
  withDarkBackground = false, // Default to false for backward compatibility
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-20',
    lg: 'h-24',
    xl: 'h-28',
    navbar: 'h-24',
    footer: 'h-20',
    blog: 'h-16',
    watermark: 'h-56',
    '404': 'h-40',
  };

  const logoContent = (
    <div className={clsx('relative', sizeClasses[size], className)}>
      {variant === 'full' ? (
        <Image
          src="/images/agent-analytics-logo.png"
          alt="Agent Analytics"
          width={300}
          height={96}
          className="h-full w-auto object-contain"
          priority
        />
      ) : (
        <Image
          src="/images/Agent Analytics Official Logo.png"
          alt="Agent Analytics"
          width={96}
          height={96}
          className="h-full w-auto object-contain"
          priority
        />
      )}
    </div>
  );

  // Wrap with dark background if requested
  const wrappedContent = withDarkBackground ? (
    <div className="bg-gray-900 dark:bg-gray-900 rounded-lg px-4 py-2 shadow-lg">
      {logoContent}
    </div>
  ) : (
    logoContent
  );

  if (!showLink) {
    return wrappedContent;
  }

  return (
    <Link href={href} className="inline-block hover:opacity-90 transition-opacity duration-200">
      {wrappedContent}
    </Link>
  );
}
