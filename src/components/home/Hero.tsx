'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import Button from '../ui/Button';

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
  const handleCalendlyClick = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/your-calendly-link',
      });
    }
  };

  return (
    <Section spacing="xl" className="relative min-h-screen flex items-center">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed"
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
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {primaryCTA}
            </Button>
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = '/services')}
                className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-500"
              >
                {secondaryCTA}
              </Button>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
