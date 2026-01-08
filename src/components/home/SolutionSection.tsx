'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { 
  Monitor, 
  Brain, 
  Zap, 
  CheckCircle, 
  Database, 
  CreditCard,
  Shield 
} from 'lucide-react';

export function SolutionSection() {
  const features = [
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
      icon: CreditCard,
      title: 'Handles payments automatically',
      description: 'If you take payments, money flows directly into your account. No manual invoicing. No delays.',
    },
    {
      icon: Zap,
      title: 'Feels like software, not a chatbot',
      description: 'The AI works in the background, getting smarter every day. No chat interface needed.',
    },
    {
      icon: Shield,
      title: 'You own it completely',
      description: "We build it, you run it. No monthly subscriptions. No vendor lock-in. It's yours.",
    },
  ];

  const aiCapabilities = [
    'When a customer email comes in, it recognizes if it\'s urgent based on patterns it\'s learned',
    'When data needs to move between systems, it moves it automatically',
    'When a question gets asked repeatedly, it learns the answer and provides it',
    'When something unusual happens, it flags it for your attention',
  ];

  return (
    <Section spacing="xl" background="white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              What We Actually Build
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              You get software that works—not a chatbot, not consulting, not complexity. Just real software that solves your problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20 rounded-2xl p-8 mb-12 border border-blue-100 dark:border-blue-900/30"
          >
            <div className="flex items-start gap-4">
              <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
                  Your AI assistant lives inside the product
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                  Here's what that actually means:
                </p>
                <ul className="space-y-2">
                  {aiCapabilities.map((capability, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 dark:text-neutral-300">{capability}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-neutral-700 dark:text-neutral-300 mt-4">
                  <strong>It doesn't need constant training</strong>—it gets smarter on its own by watching how you work. But you're always in control. You can tell it to stop, change how it works, or override any decision it makes.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

