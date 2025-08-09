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
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20',
    navbar: 'h-12',
    footer: 'h-10',
    blog: 'h-8',
    watermark: 'h-32',
    '404': 'h-24',
  };

  const logoContent = (
    <div className={clsx('relative', sizeClasses[size], className)}>
      {variant === 'full' ? (
        <Image
          src="/images/agent-analytics-logo.png"
          alt="Agent Analytics"
          width={200}
          height={48}
          className="h-full w-auto"
          priority
        />
      ) : (
        <Image
          src="/images/Agent Analytics Official Logo.png"
          alt="Agent Analytics"
          width={48}
          height={48}
          className="h-full w-auto"
          priority
        />
      )}
    </div>
  );

  if (!showLink) {
    return logoContent;
  }

  return (
    <Link href={href} className="inline-block">
      {logoContent}
    </Link>
  );
}
