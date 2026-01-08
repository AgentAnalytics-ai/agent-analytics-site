'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { ChevronDown, X, Brain, CreditCard, Shield, Users, CheckCircle } from 'lucide-react';

export function DifferentiationSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      icon: X,
      title: 'This is not consulting',
      description: 'We don\'t write reports and leave. We build software that works.',
    },
    {
      icon: Brain,
      title: 'Our AI thinks ahead',
      description: 'It doesn\'t just follow instructions—it understands context, learns patterns, and makes decisions based on your business logic. Most companies won\'t have access to this level of intelligence until 2027. You get it now.',
    },
    {
      icon: Shield,
      title: 'You own it completely',
      description: 'We build once, you own forever. No monthly fees for the software itself. You pay for the build, then it\'s yours.',
    },
    {
      icon: CheckCircle,
      title: 'Is this safe?',
      description: 'Yes. Your data stays in your systems. We connect to what you already use. We follow security best practices. You control access. Nothing leaves your environment unless you want it to. We don\'t train our AI on your data—it learns from your patterns but your information stays private.',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section spacing="lg" background="white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
              Why This Is Different & Buyer Confidence
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Direct answers to what makes us different and the questions that matter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="bg-white dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-4 flex items-start justify-between text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="p-1.5 rounded bg-neutral-100 dark:bg-neutral-800 flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                      </div>
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white pr-3 tracking-tight leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-500 dark:text-neutral-400 flex-shrink-0 transition-transform duration-200 mt-0.5 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4">
                          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-8">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
