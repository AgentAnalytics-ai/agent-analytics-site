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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
      <Container className="relative z-10">
        <div className="text-center">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="cta"
              size="lg"
              withArrow
              onClick={handleCalendlyClick}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {primaryCTA}
            </Button>
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = '/services')}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:border-slate-500"
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
