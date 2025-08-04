'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ArrowRight, ChevronRight, Sparkles, Brain, Target, Zap } from 'lucide-react'
import { clsx } from 'clsx'
import { Container } from '../ui/Container'
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';
import { Logo } from '../ui/Logo'

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" }
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    scrollProgress: 0,
    isScrollingUp: false
  })
  const lastScrollY = useRef(0)
  const [mounted, setMounted] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Scroll detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let rafId: number
    const updateScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      setScrollState({
        isScrolled: scrollY > 20,
        scrollProgress: Math.min(scrollY / maxScroll, 1),
        isScrollingUp: scrollY < lastScrollY.current
      })
      lastScrollY.current = scrollY
    }
    const handleScroll = () => { rafId = requestAnimationFrame(updateScroll) }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Prevent body scroll on mobile menu
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { 
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '' 
      }
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  // Magnetic CTA
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3
    setMousePosition({ x, y })
  }
  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 })

  const openCalendlyPopup = () => {
    // Wait a bit for Calendly to load, then open popup
    setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).Calendly) {
        (window as any).Calendly.initPopupWidget({
          url: 'https://calendly.com/grant-agentanalyticsai?background_color=f8fafc&text_color=1e293b&primary_color=059669'
        });
      } else {
        // Fallback to redirect if Calendly isn't loaded
        window.location.href = 'https://calendly.com/grant-agentanalyticsai';
      }
    }, 100);
  };

  const logoScale = scrollState.isScrolled ? 0.88 : 1

  return (
    <>
      {mounted ? (
        <motion.nav
          className={clsx(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            // Always dark background for consistent logo visibility
            scrollState.isScrolled
              ? "bg-gray-950/95 backdrop-blur-lg shadow-lg border-b border-gray-800"
              : "bg-gray-950/90 backdrop-blur-md"
          )}
          style={{
            '--scroll-progress': scrollState.scrollProgress,
            '--nav-height': scrollState.isScrolled ? '64px' : '80px'
          } as React.CSSProperties}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          aria-label="Main navigation"
        >
          <Container>
            <div className="flex items-center justify-between h-20">
              {/* Enhanced Logo */}
              <motion.div
                animate={{ scale: logoScale }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex items-center h-full p-2"
              >
                <Logo variant="full" size="navbar" showLink={true} />
              </motion.div>
              
              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center space-x-8">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative px-3 py-2 text-gray-100 font-medium tracking-wide transition-all duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/50 group"
                    tabIndex={0}
                    aria-label={item.label}
                  >
                    <span className="transition-all group-hover:font-semibold">{item.label}</span>
                    <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-100 rounded transition-all duration-300 origin-center" style={{ transform: "translateX(-50%)" }} />
                  </Link>
                ))}
                <DarkModeToggle />
              </div>
              
              {/* CTA */}
              <motion.button
                animate={{ x: mousePosition.x, y: mousePosition.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => window.location.href = 'https://calendly.com/grant-agentanalyticsai'}
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:scale-105 active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 shadow-sm hover:shadow-xl hover:shadow-blue-600/25"
                whileHover={{ boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.4)", scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Book a Strategy Session"
              >
                <span className="relative z-10">Book a Session</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              {/* Enhanced Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-200 hover:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400/50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </Container>
        </motion.nav>
      ) : (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-lg shadow-lg border-b border-gray-800">
          {/* Static version without animations */}
          <Container>
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center h-full p-2">
                <Logo variant="full" size="navbar" showLink={true} />
              </div>
              {/* ... rest of static navigation */}
            </div>
          </Container>
        </nav>
      )}
      
      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex-1 pt-20">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="block py-4 text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-lg px-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      tabIndex={0}
                      aria-label={item.label}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
                <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openCalendlyPopup();
                    }}
                    className="w-full px-6 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                    aria-label="Book a Strategy Session"
                  >
                    Book a Session
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 