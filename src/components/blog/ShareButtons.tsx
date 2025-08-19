'use client';

import React, { useState, useEffect } from 'react';
import { Share2, Copy, Linkedin, Twitter, Mail, Check } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopy = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.error('Error sharing: ', err);
      }
    }
  };

  const handleLinkedInShare = () => {
    if (typeof window !== 'undefined') {
      const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      window.open(linkedInUrl, '_blank');
    }
  };

  const handleTwitterShare = () => {
    if (typeof window !== 'undefined') {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
      window.open(twitterUrl, '_blank');
    }
  };

  const handleEmailShare = () => {
    if (typeof window !== 'undefined') {
      const subject = encodeURIComponent(title);
      const body = encodeURIComponent(`Check out this article: ${title}\n\n${url}`);
      window.open(`mailto:?subject=${subject}&body=${body}`);
    }
  };

  // Don&apos;t render anything until mounted to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      
      {typeof navigator !== 'undefined' && 'share' in navigator && (
        <button
          onClick={handleNativeShare}
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Share using native share"
        >
          <Share2 className="w-5 h-5" />
        </button>
      )}

      <button
        onClick={handleLinkedInShare}
        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </button>

      <button
        onClick={handleTwitterShare}
        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-5 h-5" />
      </button>

      <button
        onClick={handleEmailShare}
        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="Share via email"
      >
        <Mail className="w-5 h-5" />
      </button>

      <button
        onClick={handleCopy}
        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="Copy link"
      >
        {isCopied ? (
          <Check className="w-5 h-5 text-green-600" />
        ) : (
          <Copy className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
