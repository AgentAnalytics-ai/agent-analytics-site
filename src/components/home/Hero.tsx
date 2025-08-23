'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import Button from '../ui/Button';
import { Logo } from '../ui/Logo';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Social', href: '/roundtable' },
  { label: 'Contact', href: '/contact' },
];

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
}) {
  const { openCalendly } = useCalendly();

  const handleCalendlyClick = () => {
    openCalendly(CALENDLY_LINKS.talkStrategy);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
      {/* Subtle background elements */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_50%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      
      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-600/8 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/20 dark:bg-slate-600/8 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <Container className="relative z-10">
        <div className="text-center pt-32 pb-20">
          {/* Large Centered Logo - Absolute Top */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="bg-gray-900 dark:bg-gray-900 rounded-3xl px-16 py-10 shadow-2xl inline-block">
              <Logo 
                variant="full" 
                size="xl" 
                showLink={false}
                className="mx-auto"
              />
            </div>
          </motion.div>

          {/* Sleek Navigation Underneath Logo */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <button
                  onClick={() => window.location.href = item.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium text-lg transition-all duration-300 relative group tracking-wide"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Main headline with premium typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-10 leading-tight tracking-tight"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {title}
          </motion.h1>

          {/* Subtitle with premium styling */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-neutral-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            {subtitle}
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              variant="cta"
              size="lg"
              withArrow
              onClick={handleCalendlyClick}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-10 py-5 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 tracking-wide"
            >
              {primaryCTA}
            </Button>
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = '/services')}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:border-slate-500 px-10 py-5 text-lg tracking-wide"
              >
                {secondaryCTA}
              </Button>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
