'use client';

import React, { useState, useEffect } from 'react';
import { Share2, Copy, Linkedin, Twitter, Mail, Check } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
  excerpt: string;
}

export function ShareButtons({ url, title, excerpt }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const shareData = {
    title,
    text: excerpt,
    url,
  };

  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing: ', err);
      }
    }
  };

  const shareToLinkedIn = () => {
    if (typeof window !== 'undefined') {
      const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      window.open(linkedInUrl, '_blank');
    }
  };

  const shareToTwitter = () => {
    if (typeof window !== 'undefined') {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
      window.open(twitterUrl, '_blank');
    }
  };

  const shareToEmail = () => {
    if (typeof window !== 'undefined') {
      const emailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${excerpt}\n\nRead more: ${url}`)}`;
      window.open(emailUrl);
    }
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 mr-2">Share:</span>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-100 rounded-lg animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 mr-2">Share:</span>
      
      <button
        onClick={handleCopy}
        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
        title="Copy link"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>

      <button
        onClick={shareToLinkedIn}
        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </button>

      <button
        onClick={shareToTwitter}
        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
        title="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </button>

      <button
        onClick={shareToEmail}
        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
        title="Share via email"
      >
        <Mail className="w-4 h-4" />
      </button>

      {typeof navigator !== 'undefined' && 'share' in navigator && (
        <button
          onClick={handleShare}
          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
          title="Share"
        >
          <Share2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
} 