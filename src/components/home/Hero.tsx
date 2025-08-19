'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Brain, Target, Zap } from 'lucide-react';
import Button from '../ui/Button';
import { Container } from '../ui/Container';

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
}

export default function Hero({
  title = 'Strategic Intelligence in Action',
  subtitle = 'We design agentic systems that think, act, and align with your business. These aren&apos;t off-the-shelf tools — they&apos;re adaptive solutions built to understand and execute.',
  primaryCTA = 'Schedule a Call',
  secondaryCTA = 'Learn More',
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'We build what matters.',
      description:
        'Tailored solutions for your unique challenges—no templates, no shortcuts.',
      color: 'blue', // Changed from emerald
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'We bring clarity.',
      description:
        'Clear strategies that cut through complexity and guide your next steps.',
      color: 'blue', // Changed from purple
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'We deliver fast.',
      description:
        'Rapid results without sacrificing quality—moving from insight to impact in weeks.',
      color: 'blue', // Changed from orange
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Sophisticated background elements */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-20"
        style={{ y }}
      />
      <div className="absolute top-20 left-10 w-72 h-72 bg-slate-700/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-slate-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>

      <Container className="relative z-10 py-20">
        <div className="text-center mb-16">
          {/* Professional badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-4 h-4" />
            Strategic Intelligence
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ opacity }}
          >
            <span className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ opacity }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ opacity }}
          >
            <Button
              variant="cta"
              size="lg"
              withArrow={true}
              onClick={() =>
                (window.location.href =
                  'https://calendly.com/grant-agentanalyticsai')
              }
            >
              {primaryCTA}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = '/services')}
            >
              {secondaryCTA}
            </Button>
          </motion.div>
        </div>

        {/* Professional feature cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ opacity }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20">
                <div
                  className={`w-16 h-16 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-slate-200 transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
