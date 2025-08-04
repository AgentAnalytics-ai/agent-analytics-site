'use client'

import Image from 'next/image'
import Link from 'next/link'
import { clsx } from 'clsx'
import { useEffect, useState } from 'react'

interface LogoProps {
  variant?: 'full' | 'symbol' | 'footer' | 'blog' | 'watermark' | '404'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'navbar' | 'footer' | 'blog' | 'watermark' | '404'
  className?: string
  href?: string
  showLink?: boolean
}

export function Logo({ variant = 'full', size = 'md', showLink = true }: LogoProps) {
  const sizes = {
    sm: 'h-10',
    md: 'h-12', 
    lg: 'h-16',
    xl: 'h-20',
    navbar: 'h-12' // Increased to h-12 (50% bigger than current)
  };

  const LogoIcon = () => (
    <div className="flex items-center">
      {variant === 'full' ? (
        <Image
          src="/images/Agent Analytics Official Logo.png"
          alt="Agent Analytics"
          width={200} // Increased from 160
          height={48} // Increased from 40
          className="h-12 w-auto" // Increased to h-12
          priority
        />
      ) : (
        <Image
          src="/images/agent-analytics-logo.png"
          alt="Agent Analytics"
          width={48} // Increased from 40
          height={48} // Increased from 40
          className="h-12 w-12" // Increased to h-12
          priority
        />
      )}
    </div>
  );

  if (showLink) {
    return (
      <Link href="/" className="flex items-center">
        <LogoIcon />
      </Link>
    );
  }

  return <LogoIcon />;
} 