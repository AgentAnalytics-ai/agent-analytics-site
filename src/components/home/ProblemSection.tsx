'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { AlertCircle, TrendingDown, Clock, Zap } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Too many tools that don't talk to each other",
      description: 'Your sales team enters the same customer information in three different systems.',
    },
    {
      icon: TrendingDown,
      title: 'Manual work that should be automated',
      description: 'You spend Friday afternoons copying data from one spreadsheet to another.',
    },
    {
      icon: Clock,
      title: 'Data scattered across systems',
      description: 'Customer questions sit unanswered because they\'re buried in email.',
    },
    {
      icon: Zap,
      title: 'Hiring people to do work software should do',
      description: 'You hire someone just to move information between tools.',
    },
  ];

  const whyCurrentTools = [
    'They require constant setup and maintenance',
    'They don\'t understand your specific workflow',
    'They feel like chatbots, not real software',
    'They create more work instead of less',
  ];

  const aiProblems = [
    'They give generic answers, not real actions',
    'They don\'t connect to your actual systems',
    'They require technical knowledge to use',
    'They feel like demos, not real solutions',
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
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              What Problem This Solves
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Here's what businesses struggle with today—and why current solutions don't help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800/50 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">
                        {problem.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-neutral-800/50 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700"
            >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
              Why current tools don't help
            </h3>
              <ul className="space-y-3">
                {whyCurrentTools.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span className="text-neutral-600 dark:text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-neutral-800/50 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
                Why AI tools today still feel useless
              </h3>
              <ul className="space-y-3">
                {aiProblems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span className="text-neutral-600 dark:text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

