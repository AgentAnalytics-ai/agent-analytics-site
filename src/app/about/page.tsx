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
  Sparkles,
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
      {/* Hero Section - Match Services Page Style */}
      <Section
        spacing="xl"
        background="dark"
        className="pt-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        <Container className="relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Strategic AI Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Ready to Simplify Your Tech Stack?
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Let's discuss how we can help you eliminate complexity and build intelligent systems that work for you.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 shadow-lg hover:shadow-cyan-500/25"
              onClick={handleCalendlyClick}
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
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
