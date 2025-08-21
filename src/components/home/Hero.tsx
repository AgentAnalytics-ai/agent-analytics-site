'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleCalendlyClick = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/your-calendly-link',
      });
    }
  };

  return (
    <Section spacing="xl" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-sm font-medium text-neutral-300 mb-8"
          >
            Strategic Intelligence
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="cta"
              size="lg"
              withArrow
              onClick={handleCalendlyClick}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
            >
              {primaryCTA}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = '/services')}
              className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-500"
            >
              {secondaryCTA}
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* How We Work Section */}
      <Container className="mt-24">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/70"
          >
            <h3 className="text-xl font-semibold text-white mb-3">We build what matters.</h3>
            <p className="text-neutral-300">Tailored solutions for your unique challenges—no templates, no shortcuts.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/70"
          >
            <h3 className="text-xl font-semibold text-white mb-3">We bring clarity.</h3>
            <p className="text-neutral-300">Clear strategies that cut through complexity and guide your next steps.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/70"
          >
            <h3 className="text-xl font-semibold text-white mb-3">We deliver fast.</h3>
            <p className="text-neutral-300">Rapid results without sacrificing quality—moving from insight to impact in weeks.</p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
