'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpReveal, fadeUpStagger } from '@/lib/motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import {
  Brain,
  TrendingUp,
  CheckCircle,
  Shield,
  Settings,
  Plug,
} from 'lucide-react';

export function FutureTechSection() {
  const capabilities = [
    {
      icon: Plug,
      title: 'Runs against your real stack',
      description:
        'CRM, email, files, billing, support—automation and models read and write where your work already lives, not in a siloed chat toy.',
    },
    {
      icon: Brain,
      title: 'Rules + context you define',
      description:
        'Triage, routing, and drafting follow policies you approve. “Smart” means fewer wrong moves—not the model freelancing on brand or compliance.',
    },
    {
      icon: Settings,
      title: 'Workflow-shaped, not slide-shaped',
      description:
        'Steps, owners, handoffs, and exceptions are first-class. If it belongs in a process map, it belongs in software—not only in a deck.',
    },
    {
      icon: Shield,
      title: 'Observable and stoppable',
      description:
        'Logs, retries, and kill switches. You can see what ran, fix a bad path, and roll back—same bar you’d expect from any production system.',
    },
    {
      icon: TrendingUp,
      title: 'Improves with feedback loops',
      description:
        'When you correct an output or tweak a rule, that feeds the next run. Improvement is deliberate—not “it magically learns overnight.”',
    },
    {
      icon: CheckCircle,
      title: 'Humans on the decisions that matter',
      description:
        'Automation clears the queue; people stay on judgment, relationships, and edge cases. That’s the connection between “AI does the work” and trust.',
    },
  ];

  return (
    <Section spacing="xl" background="gray">
      <Container>
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUpReveal()} className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-sm font-medium text-white">
              <span>What “AI does the work” means here</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
              Embedded in operations—not bolted on as a chatbot
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-neutral-600 dark:text-neutral-400">
              After the problems above and the examples on the homepage, this is the through-line: software that moves work forward inside your
              systems, with controls you can stand behind.
            </p>
          </motion.div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  {...fadeUpStagger(index)}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-blue-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800/50 dark:hover:border-blue-600"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-blue-50 to-sky-50 p-2 dark:from-blue-900/20 dark:to-sky-900/20">
                      <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">
                        {capability.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            {...fadeUpReveal({ delay: 0.35 })}
            className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-8 text-center text-white"
          >
            <h3 className="mb-4 text-2xl font-bold">Shipped like any other critical system</h3>
            <p className="mb-4 text-lg text-blue-50">
              Same expectations as the portals and apps above: environments, monitoring, and a plan for who owns what when something breaks.
            </p>
            <p className="text-blue-100">
              No “wait until the model gets smarter.” You get behavior you can specify, review, and change—then we harden it for daily use.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
