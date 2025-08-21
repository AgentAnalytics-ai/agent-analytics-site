'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const steps = [
  {
    title: 'We build what matters.',
    description: 'Tailored solutions for your unique challenges—no templates, no shortcuts.',
  },
  {
    title: 'We bring clarity.',
    description: 'Clear strategies that cut through complexity and guide your next steps.',
  },
  {
    title: 'We deliver fast.',
    description: 'Rapid results without sacrificing quality—moving from insight to impact in weeks.',
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
                <div className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/70">
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
