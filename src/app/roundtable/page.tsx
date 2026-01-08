'use client';

import React, { useState, useMemo } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProfessionalRoundtableForm } from '@/components/social/ProfessionalRoundtableForm';
import { 
  Globe, ShoppingCart, FileText, Brain, Shield, Monitor, Zap, Database, CreditCard, Mail, Users, BarChart3,
  LucideIcon
} from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Capability {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  features: Feature[];
}

export default function RoundtablePage(): JSX.Element {
  const [selectedCapability, setSelectedCapability] = useState<string>('website');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const capabilities: Capability[] = useMemo(() => [
    {
      id: 'website',
      title: 'Website',
      tagline: 'Fast, modern web applications',
      icon: Globe,
      features: [
        {
          icon: Monitor,
          title: 'Fast, modern web app',
          description: 'Your team uses it every day. They log in, see a dashboard, click buttons, get results.',
        },
        {
          icon: Brain,
          title: 'AI assistant that learns',
          description: 'It watches your workflows, understands context, learns patterns, and takes action when needed.',
        },
        {
          icon: Database,
          title: 'Connects to your real systems',
          description: 'Your CRM, email, databases, and tools—everything works together.',
        },
        {
          icon: Shield,
          title: 'You own it completely',
          description: 'We build it, you run it. No monthly subscriptions. No vendor lock-in. It\'s yours.',
        },
      ],
    },
    {
      id: 'portal',
      title: 'Client Portal',
      tagline: 'Business portals for your team',
      icon: FileText,
      features: [
        {
          icon: Mail,
          title: 'Automatically email out of it',
          description: 'Emails are sent automatically based on triggers, workflows, and client actions.',
        },
        {
          icon: BarChart3,
          title: 'Track areas and metrics',
          description: 'Monitor client activity, engagement, and key performance indicators in real-time.',
        },
        {
          icon: Users,
          title: 'Client self-service',
          description: 'Clients can access documents, make payments, and manage their accounts independently.',
        },
        {
          icon: Database,
          title: 'Connects to your CRM',
          description: 'Integrates seamlessly with your CRM, email, databases, and existing business tools.',
        },
      ],
    },
    {
      id: 'gtm',
      title: 'GTM Sales Engine',
      tagline: 'Go-to-market automation',
      icon: Zap,
      features: [
        {
          icon: Database,
          title: 'Connects to your CRM',
          description: 'Automatically syncs leads, contacts, and deals with your CRM system.',
        },
        {
          icon: Users,
          title: 'Create universities',
          description: 'Build educational portals and training systems for your customers and team.',
        },
        {
          icon: BarChart3,
          title: 'Track areas and conversions',
          description: 'Monitor lead sources, conversion funnels, and sales performance across all channels.',
        },
        {
          icon: Mail,
          title: 'Automated email sequences',
          description: 'Automatically send targeted emails based on lead behavior and engagement.',
        },
        {
          icon: CreditCard,
          title: 'Handles payments automatically',
          description: 'Money flows directly into your account. No manual invoicing. No delays.',
        },
        {
          icon: Brain,
          title: 'AI learns your patterns',
          description: 'Recognizes urgent emails, moves data automatically, and flags unusual activity.',
        },
      ],
    },
    {
      id: 'agents',
      title: 'AI Agents',
      tagline: 'Intelligent automation systems',
      icon: Brain,
      features: [
        {
          icon: Brain,
          title: 'AI assistant that learns',
          description: 'It watches your workflows, understands context, learns patterns, and takes action when needed.',
        },
        {
          icon: Zap,
          title: 'Feels like software, not a chatbot',
          description: 'The AI works in the background, getting smarter every day. No chat interface needed.',
        },
        {
          icon: Database,
          title: 'Moves data automatically',
          description: 'When data needs to move between systems, it moves it automatically.',
        },
        {
          icon: Shield,
          title: 'You own it completely',
          description: 'We build it, you run it. No monthly subscriptions. No vendor lock-in. It\'s yours.',
        },
      ],
    },
  ], []);

  const currentCapability = capabilities.find(cap => cap.id === selectedCapability) || capabilities[0];

  return (
    <Section
      spacing="xl"
      className="pt-24 md:pt-32 relative overflow-hidden bg-white dark:bg-neutral-950 min-h-screen"
    >
      <Container className="relative z-10">
        {/* Hero */}
        <motion.div 
          style={{ opacity }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight"
          >
            What We Actually Build
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"
          >
            You get software that works—not a chatbot, not consulting, not complexity. Just real software that solves your problems.
          </motion.p>
        </motion.div>

        {/* Capability Selector - Simple Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            const isSelected = selectedCapability === capability.id;
            return (
              <button
                key={capability.id}
                onClick={() => setSelectedCapability(capability.id)}
                className={`px-6 py-3 font-semibold text-sm rounded-xl transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {capability.title}
              </button>
            );
          })}
        </motion.div>

        {/* Features Grid - Clean Format */}
        <motion.div
          key={selectedCapability}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {currentCapability.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                      <Icon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="relative p-10 md:p-12 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-neutral-900 dark:bg-neutral-100 mb-5">
                <Shield className="w-6 h-6 text-white dark:text-neutral-900" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
                Join Our Professional Network
              </h2>
              <p className="text-base text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                Connect with technology leaders, share insights, and build meaningful business relationships.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <ProfessionalRoundtableForm />
        </motion.div>
      </Container>
    </Section>
  );
}
