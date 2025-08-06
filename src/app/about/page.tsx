'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
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
  return (
    <>
      {/* Hero Section */}
      <Section
        spacing="xl"
        background="dark"
        className="pt-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        <Container className="relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-emerald-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
              The Story Behind Agent Analytics Studio
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              We help you simplify, focus, and build. With strategy, empathy,
              and the latest AI and analytics tools always working behind the
              scenes — for you.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Problem Statement */}
      <Section spacing="xl" background="white">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Problem We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Disjointed tools, scattered platforms, and subscriptions that
              don&apos;t work together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Wasted Resources',
                description:
                  'Money spent on tools that don&apos;t integrate or deliver value.',
                color: 'emerald',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Operational Friction',
                description:
                  'Teams struggling with disconnected workflows and processes.',
                color: 'blue',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Unnecessary Stress',
                description:
                  'Complexity that distracts from core business objectives.',
                color: 'emerald',
              },
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Card
                  variant="elevated"
                  padding="lg"
                  className="h-full hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-200 hover:border-emerald-200 bg-white/50 backdrop-blur-sm"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r from-${problem.color}-500 to-${problem.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    <div className="text-white">{problem.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Professional result section */}
          <motion.div
            className="text-center bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-12 border border-emerald-200/50 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The Result
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Businesses spending more time managing their tools than achieving
              their goals.
            </p>
            <div className="bg-white rounded-2xl p-6 border border-emerald-200/50 shadow-sm">
              <p className="text-lg text-gray-700 italic">
                &quot;Technology should work for you, not the other way
                around.&quot;
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" background="white" className="relative">
        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Ready to Simplify Your Tech Stack?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help you eliminate complexity and
              build intelligent systems that work for you.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 shadow-lg hover:shadow-cyan-500/25"
              onClick={() =>
                (window.location.href =
                  'https://calendly.com/grant-agentanalyticsai')
              }
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
