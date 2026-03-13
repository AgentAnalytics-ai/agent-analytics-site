'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';
import { Logo } from '../ui/Logo';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Social', href: '/roundtable' },
  { label: 'Contact', href: '/contact' },
];

const SCROLL_THRESHOLD = 24;

// Stagger timing for scroll-in effect when glass state activates
const SCROLL_IN_DURATION = 0.32;
const SCROLL_IN_STAGGER = 0.04;
const SCROLL_IN_EASE = [0.22, 0.61, 0.36, 1];

// 2027-style: subtle "alive" motion (breathing), slow so it feels calm
const LOGO_BREATHE_DURATION = 5;
const LOGO_BREATHE_EASE = 'easeInOut';

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [playScrollIn, setPlayScrollIn] = useState(false);
  const [headerSlideY, setHeaderSlideY] = useState(0);
  const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null);
  const prevScrolled = useRef(false);

  // Active nav index from pathname (for sliding pill)
  const activeNavIndex = NAV_ITEMS.findIndex((item) => pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href)));
  const pillIndex = hoveredNavIndex ?? (activeNavIndex >= 0 ? activeNavIndex : null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger scroll-in animation only when crossing into glass state (false → true)
  useEffect(() => {
    if (scrolled && !prevScrolled.current) {
      setPlayScrollIn(true);
    }
    prevScrolled.current = scrolled;
  }, [scrolled]);

  useEffect(() => {
    if (!playScrollIn) {
      setHeaderSlideY(0);
      return;
    }
    setHeaderSlideY(-8);
    const frame = requestAnimationFrame(() => setHeaderSlideY(0));
    const t = setTimeout(() => setPlayScrollIn(false), 500);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(t);
    };
  }, [playScrollIn]);

  useEffect(() => {
    if (!mounted) return;
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [mounted]);

  const headerBg = scrolled
    ? isDark
      ? 'rgba(23,23,23,0.72)'
      : 'rgba(255,255,255,0.72)'
    : 'transparent';
  const borderColor = scrolled
    ? isDark
      ? 'rgba(38,38,38,0.9)'
      : 'rgba(226,232,240,0.8)'
    : 'transparent';
  const shadow = scrolled
    ? isDark
      ? '0 10px 30px rgba(0,0,0,0.25)'
      : '0 10px 30px rgba(15,23,42,0.06)'
    : '0 0 0 transparent';

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return null;

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: headerBg,
        borderBottomColor: borderColor,
        boxShadow: shadow,
        y: headerSlideY,
      }}
      transition={{
        duration: playScrollIn ? SCROLL_IN_DURATION : 0.25,
        ease: (playScrollIn ? SCROLL_IN_EASE : 'easeOut') as any,
      }}
      style={{
        backdropFilter: scrolled ? 'blur(14px)' : 'blur(0px)',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'blur(0px)',
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
    >
      <Container>
        {/* Logo — 2027 AI feel: scroll-in + breathing + hover/tap + subtle shimmer */}
        <motion.div
          key={playScrollIn ? 'scroll-in' : 'idle'}
          className="flex justify-center py-2 md:py-3"
          initial={playScrollIn ? { opacity: 0, y: -12 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: SCROLL_IN_DURATION,
            ease: SCROLL_IN_EASE as any,
            delay: 0,
          }}
        >
          <motion.a
            href="/"
            className="relative inline-block origin-center scale-90 md:scale-95 rounded-xl overflow-hidden"
            initial={false}
            animate={{
              scale: [1, 1.012, 1],
              opacity: 1,
            }}
            transition={{
              scale: {
                duration: LOGO_BREATHE_DURATION,
                repeat: Infinity,
                ease: LOGO_BREATHE_EASE,
              },
            }}
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Subtle sweep — "neural" hint, very low opacity */}
            <motion.span
              className="pointer-events-none absolute inset-0 z-10 rounded-xl overflow-hidden"
              aria-hidden
            >
              <motion.span
                className="absolute inset-y-0 w-1/2 opacity-[0.06] dark:opacity-[0.08]"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)',
                }}
                animate={{ x: ['0%', '200%'] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 6,
                  ease: 'easeInOut',
                }}
              />
            </motion.span>
            <span className="relative block">
              <Logo variant="full" size="navbar" withDarkBackground={true} showLink={false} />
            </span>
          </motion.a>
        </motion.div>

        {/* Nav — scroll-in + 2027 sliding pill on hover/active */}
        <nav className="flex items-center justify-center h-10 md:h-12">
          <div className="hidden md:flex items-center relative gap-1 rounded-full bg-neutral-100/80 dark:bg-neutral-800/50 px-1.5 py-1">
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={playScrollIn ? `scroll-in-${item.href}` : item.href}
                initial={
                  playScrollIn
                    ? { opacity: 0, y: -8 }
                    : { opacity: 1, y: 0 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: SCROLL_IN_DURATION,
                  ease: SCROLL_IN_EASE as any,
                  delay: playScrollIn ? SCROLL_IN_STAGGER * (index + 1) : 0,
                }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="relative z-10 block px-4 py-2 rounded-full text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  onMouseEnter={() => setHoveredNavIndex(index)}
                  onMouseLeave={() => setHoveredNavIndex(null)}
                >
                  {pillIndex === index && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 z-0 rounded-full bg-white dark:bg-neutral-700 shadow-sm dark:shadow-none border border-neutral-200/80 dark:border-neutral-600/50"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 dark:text-neutral-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Dark mode toggle - desktop */}
          <div className="hidden md:block ml-4">
            <DarkModeToggle />
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
            className="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
          >
            <Container>
              <div className="py-4 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-neutral-800 dark:text-neutral-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700">
                  <DarkModeToggle />
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
