'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import Button from '../ui/Button';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-blue-50/50 dark:from-neutral-900 dark:via-neutral-800 dark:to-blue-900/20">
      {/* Layer 1 — Ambient background: center radial glow + slow drift (architectural, not decorative) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={{
          opacity: 1,
        }}
      >
        {/* Center glow — primary depth */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-[min(100vw,42rem)] h-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-200/50 via-sky-100/40 to-transparent dark:from-blue-500/20 dark:via-sky-500/15 dark:to-transparent blur-3xl"
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Subtle side drifts — slow, layered */}
        <motion.div
          className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-blue-200/40 dark:bg-blue-500/15 blur-3xl"
          animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[-6rem] top-40 h-64 w-64 rounded-full bg-sky-200/30 dark:bg-sky-500/15 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 16, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Very subtle grid — texture, not distraction */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        animate={{ x: [0, -24, 0], y: [0, -24, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />

      <Container className="relative z-10">
        <div className="text-center">
          {/* Main headline — 0.3s, first */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-6 md:mb-8 leading-[1.1] tracking-tight max-w-4xl mx-auto"
          >
            {title}
          </motion.h1>

          {/* Subtitle — +0.1s delay, slightly softer opacity */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-snug"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons — last, with hover lift */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="cta"
                size="lg"
                withArrow
                onClick={handleCalendlyClick}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto"
              >
                {primaryCTA}
              </Button>
            </motion.div>
            {secondaryCTA && (
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => (window.location.href = '/services')}
                  className="border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:border-neutral-400 dark:hover:border-neutral-500 w-full sm:w-auto"
                >
                  {secondaryCTA}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
