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
}

export function Logo({
  variant = 'full',
  size = 'md',
  className,
  href = '/',
  showLink = true,
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-12', // Increased from h-8
    md: 'h-20', // Increased from h-14
    lg: 'h-24', // Increased from h-20
    xl: 'h-28', // Increased from h-24
    navbar: 'h-24', // Increased from h-16 - much bigger in nav
    footer: 'h-20', // Increased from h-12
    blog: 'h-16', // Increased from h-10
    watermark: 'h-56', // Increased from h-40
    '404': 'h-40', // Increased from h-32
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

  if (!showLink) {
    return logoContent;
  }

  return (
    <Link href={href} className="inline-block hover:opacity-90 transition-opacity duration-200">
      {logoContent}
    </Link>
  );
}
