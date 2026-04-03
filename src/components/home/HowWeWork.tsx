'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpReveal, fadeUpStagger } from '@/lib/motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const steps = [
  {
    title: 'We connect to your data and tools.',
    description:
      'CRM, email, databases, billing—integrated so software reflects how work really flows.',
  },
  {
    title: 'We embed intelligence in the workflow—not beside it.',
    description:
      'Routing, drafting, and checks follow rules you approve. Context comes from your systems, not a generic chat window.',
  },
  {
    title: 'You get actions, automation, and ownership.',
    description:
      'Production-ready software you can run, extend, and stand behind—focused on outcomes, not demos.',
  },
];

export default function HowWeWork() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUpReveal()} className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              Process
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
              How we work
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              From your existing stack to shipped software—in clear, accountable steps.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div key={step.title} {...fadeUpStagger(index)} className="text-center">
                <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800/50 dark:hover:border-neutral-600 dark:hover:bg-neutral-800/70">
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                    {step.title}
                  </h3>
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
