'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import {
  ArrowRight,
  BarChart3,
  Zap,
  Globe,
  Sparkles,
  Target,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

export default function AboutPage() {
  const handleCalendlyClick = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/your-calendly-link',
      });
    }
  };

  return (
    <>
      <Section spacing="xl" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              Ready to Simplify Your Tech Stack?
            </h1>
            <p className="text-xl text-gray-700 dark:text-white mb-12 max-w-3xl mx-auto">
              Let's discuss how we can help you eliminate complexity and build intelligent systems that work for you.
            </p>
            
            <Button
              variant="cta"
              size="lg"
              withArrow
              onClick={handleCalendlyClick}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start a Conversation
            </Button>
          </div>
        </Container>
      </Section>

      <Section spacing="xl" background="gray">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Problem We Solve</h2>
                <p className="text-lg text-gray-600 dark:text-neutral-300 mb-8">
                  Disjointed tools, scattered platforms, and subscriptions that don't work together.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-xl p-6 border border-gray-200 dark:border-neutral-700 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Money wasted on tools</h3>
                    <p className="text-gray-600 dark:text-neutral-300">That don't integrate or deliver value.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-xl p-6 border border-gray-200 dark:border-neutral-700 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Teams struggling</h3>
                    <p className="text-gray-600 dark:text-neutral-300">With disconnected workflows and processes.</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-xl p-6 border border-gray-200 dark:border-neutral-700 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Complexity distracts</h3>
                    <p className="text-gray-600 dark:text-neutral-300">From core business objectives.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Solution</h2>
                <p className="text-lg text-gray-600 dark:text-neutral-300 mb-8">
                  We build agentic systems that think and act — deeply aligned with your business objectives.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/20 dark:to-purple-500/20 rounded-xl p-8 border border-blue-200 dark:border-blue-500/30 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Result</h3>
                  <p className="text-lg text-gray-700 dark:text-neutral-300 mb-6">
                    Businesses spending more time achieving their goals than managing their tools.
                  </p>
                  <blockquote className="text-xl text-blue-700 dark:text-blue-300 font-medium italic">
                    "Technology should work for you, not the other way around."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
