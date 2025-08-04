'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TOCItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeading = (id: string) => {
    if (typeof window === 'undefined') return;
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <motion.nav
      className={`fixed top-24 right-8 w-64 max-h-[calc(100vh-8rem)] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-40 ${
        isVisible ? 'block' : 'hidden'
      }`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="font-semibold text-gray-900 mb-3">Table of Contents</h4>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                activeId === heading.id
                  ? 'text-blue-600 bg-blue-50 font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              style={{ paddingLeft: `${(heading.level - 2) * 12 + 8}px` }}
            >
              <div className="flex items-center gap-2">
                {heading.level > 2 && <ChevronRight className="w-3 h-3" />}
                {heading.text}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
} 