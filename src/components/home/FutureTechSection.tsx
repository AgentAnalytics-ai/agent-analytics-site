'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { 
  Sparkles, 
  Brain, 
  TrendingUp, 
  CheckCircle, 
  Shield,
  Settings
} from 'lucide-react';

export function FutureTechSection() {
  const capabilities = [
    {
      icon: Brain,
      title: 'Understands context, not just keywords',
      description: 'It knows the difference between "urgent customer request" and "routine inquiry" based on patterns it\'s learned from your business, not generic rules.',
    },
    {
      icon: TrendingUp,
      title: 'Learns your patterns automatically',
      description: 'After watching your workflows for a few days, it starts recognizing what you do, when you do it, and why. It gets smarter without you training it.',
    },
    {
      icon: Settings,
      title: 'Makes decisions based on your business logic',
      description: "It doesn't just follow instructions—it understands your priorities, your constraints, and your goals. It acts accordingly.",
    },
    {
      icon: Shield,
      title: 'Reliable and consistent',
      description: 'Unlike AI that works sometimes, ours is built for production. It does what it says it will do, every time. You can trust it with important tasks.',
    },
    {
      icon: Sparkles,
      title: 'Gets smarter over time, automatically',
      description: 'Every interaction makes it better at understanding your business. No retraining. No updates. It just improves.',
    },
    {
      icon: CheckCircle,
      title: "You're always in control",
      description: "You can see what it's doing, change how it works, or tell it to stop. It's powerful, but you're the one in charge.",
    },
  ];

  return (
    <Section spacing="xl" background="gray">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Built for 2026 and Beyond</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              We don't use yesterday's AI.<br />
              We build with tomorrow's intelligence.
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              While others are still teaching AI to follow basic rules, we build AI that understands context, learns patterns, and makes decisions like a human would—but faster and more consistently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-lg">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">
                        {capability.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              This isn't experimental technology.
            </h3>
            <p className="text-lg text-blue-50 mb-4">
              It's production-ready and built into every system we create. You get capabilities that most businesses won't have access to until 2027.
            </p>
            <p className="text-blue-100">
              Think of it like this: while others are buying AI that needs constant instruction, you're getting AI that learns, adapts, and thinks ahead—but always follows your lead.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

