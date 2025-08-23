'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { Container } from '../ui/Container';
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';
import { Logo } from '../ui/Logo';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Social', href: '/roundtable' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollState({
        isScrolled: scrollY > 20,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [isMobileMenuOpen]);

  const handleCalendlyClick = () => {
    window.open(CALENDLY_LINKS.bookSession, '_blank', 'noopener,noreferrer');
  };

  if (!mounted) return null;

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrollState.isScrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 shadow-xl'
          : 'bg-transparent'
      )}
    >
      <Container>
        {/* Logo Section - Above Navigation */}
        <motion.div
          className="flex justify-center py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo variant="full" size="navbar" withDarkBackground={true} />
        </motion.div>

        {/* Navigation Section - Below Logo */}
        <nav className="flex items-center justify-between h-16">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-800 dark:text-neutral-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            
            {/* CTA Button */}
            <button
              onClick={handleCalendlyClick}
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Book a Session →
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-800 dark:text-neutral-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800"
          >
            <Container>
              <div className="py-6 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-800 dark:text-neutral-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={handleCalendlyClick}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300"
                >
                  Book a Session →
                </button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
