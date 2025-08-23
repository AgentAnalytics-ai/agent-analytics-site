'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';
import {
  ArrowRight,
  BarChart3,
  Zap,
  Globe,
  Target,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

export default function AboutPage() {
  const { openCalendly } = useCalendly();

  const handleCalendlyClick = () => {
    openCalendly(CALENDLY_LINKS.startConversation);
  };

  return (
    <>
      {/* Hero Section - Match Home Page Style */}
      <Section
        spacing="xl"
        className="pt-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20"
      >
        {/* Background Animations - Same as Home Page */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_50%)]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-600/8 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-10 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl"
          animate={{ 
            x: [0, -25, 0],
            y: [0, 30, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-sky-300/15 to-blue-500/15 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        <Container className="relative z-10">
          <div className="text-center">
            {/* Main headline - No more "Strategic AI Solutions" badge */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
            >
              Ready to Simplify Your Tech Stack?
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Let's discuss how we can help you eliminate complexity and build intelligent systems that work for you.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <Button
                variant="primary"
                size="lg"
                className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl"
                onClick={handleCalendlyClick}
              >
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Content Section - Match Services Page Style */}
      <Section spacing="xl" background="gray" className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"></div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                The Problem We Solve
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Disjointed tools, scattered platforms, and subscriptions that don't work together.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Money wasted on tools</h3>
                    <p className="text-gray-600 text-sm">That don't integrate or deliver value.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Teams struggling</h3>
                    <p className="text-gray-600 text-sm">With disconnected workflows and processes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Complexity distracts</h3>
                    <p className="text-gray-600 text-sm">From core business objectives.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
              <p className="text-lg text-gray-600 mb-6">
                We build agentic systems that think and act — deeply aligned with your business objectives.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">The Result</h4>
                <p className="text-gray-700 mb-4">
                  Businesses spending more time achieving their goals than managing their tools.
                </p>
                <blockquote className="text-lg text-blue-700 font-medium italic">
                  "Technology should work for you, not the other way around."
                </blockquote>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
