'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const steps = [
  {
    title: 'We connect to your data and tools.',
    description: 'Your CRM, email, databases, and business tools—everything connects seamlessly.',
  },
  {
    title: 'We add AI that understands your workflows.',
    description: 'Intelligence that learns your patterns, understands context, and makes decisions based on your business logic.',
  },
  {
    title: 'You get answers, actions, and automation.',
    description: 'Real software that works. Payments flow to your account. Tasks happen automatically. You focus on growth.',
  },
];

export default function HowWeWork() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/70 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
