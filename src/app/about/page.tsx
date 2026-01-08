'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';
import {
  ArrowRight,
  Globe,
  Users,
  Target,
  Zap,
  Heart,
  Building2,
  Languages,
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
      {/* Hero Section - Business Language Studio */}
      <Section
        spacing="xl"
        className="pt-32 relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-blue-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-blue-900/20"
      >
        {/* Background Animations */}
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
          className="absolute top-40 right-10 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-full blur-xl"
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
            {/* Studio Positioning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                <Languages className="w-4 h-4" />
                We Speak Your Language
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-8 leading-tight tracking-tight"
            >
              Every Business Has
              <br />
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Its Own Language
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              We're a consulting studio that understands each organization is unique. 
              Like cities, every business has its own culture, challenges, and way of operating. 
              We help you navigate your tech debt and transformation in your own language.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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

      {/* The Studio Approach */}
      <Section spacing="xl" background="gray" className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-blue-50/30 to-neutral-50"></div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                Why a Studio?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                Studios understand that every project is unique. We don't apply 
                cookie-cutter solutions—we learn your business, speak your language, 
                and craft solutions that fit your culture.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Languages className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">Cultural Translation</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">We understand your business culture and speak your language.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">Custom Solutions</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">Every engagement is tailored to your unique challenges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">Tech Debt Navigation</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">We help you understand and resolve your technical challenges.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">Our Approach</h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                We work like a creative studio—immersing ourselves in your world, 
                understanding your challenges, and crafting solutions that feel natural to your organization.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">The Studio Method</h4>
                <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                  Learn → Understand → Craft → Implement. We become fluent in your 
                  business language before proposing solutions.
                </p>
                <blockquote className="text-lg text-blue-700 font-medium italic">
                  &quot;Every business is a unique ecosystem. We learn to speak its language.&quot;
                </blockquote>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* What We Help With */}
      <Section spacing="xl" className="relative">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              We Help You Navigate
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              The complex landscape of modern business technology and transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tech Debt Resolution',
                description: "Identify, understand, and systematically resolve technical debt that's holding you back.",
                icon: Zap,
              },
              {
                title: 'Cultural Transformation',
                description: 'Help your team embrace new technologies while preserving what makes your business unique.',
                icon: Users,
              },
              {
                title: 'Strategic Alignment',
                description: 'Ensure your technology investments align with your business objectives and culture.',
                icon: Target,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
