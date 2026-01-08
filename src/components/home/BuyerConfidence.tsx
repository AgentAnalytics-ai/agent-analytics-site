'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { ChevronDown, CheckCircle } from 'lucide-react';

export function BuyerConfidence() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      question: 'Will this break?',
      answer: 'No. We build it to last. You get the code, the documentation, and support. If something breaks, we fix it. After the support period, your team can maintain it, or we can help.',
    },
    {
      question: 'Will this be slow?',
      answer: 'No. We build fast, modern software. It runs in your browser, connects to your systems, and responds instantly. The AI works in the background, so your team doesn\'t wait.',
    },
    {
      question: 'Will I outgrow this?',
      answer: 'No. We build it to scale. Start with one workflow, add more later. The system grows with your business. When you need new features, we add them.',
    },
    {
      question: 'Is this safe?',
      answer: 'Yes. Your data stays in your systems. We connect to what you already use. We follow security best practices. You control access. Nothing leaves your environment unless you want it to. We don\'t train our AI on your data—it learns from your patterns but your information stays private.',
    },
    {
      question: 'Can I control what it does?',
      answer: 'Yes. You can see everything it\'s doing. You can change how it works. You can tell it to stop. You can override any decision. It\'s powerful, but you\'re in charge.',
    },
    {
      question: 'What about payments?',
      answer: 'Yes. We integrate Stripe (or your payment processor) securely. Money flows directly into your account. We don\'t touch your money. We just make sure the software handles it correctly.',
    },
    {
      question: 'What if I don\'t like it?',
      answer: 'You own the code. You can modify it, hire someone else to work on it, or stop using it. There\'s no lock-in.',
    },
    {
      question: 'What if my needs change?',
      answer: 'We build it to be flexible. When your business changes, the software adapts. We can add features, connect new tools, or change workflows as needed.',
    },
    {
      question: 'Is this technology proven?',
      answer: 'Yes. Our AI features are already powering systems in production. This isn\'t beta software—it\'s the technology that will define how businesses use AI in 2026 and beyond. You\'re getting it now, before it becomes standard.',
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section spacing="xl" background="white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              Buyer Confidence
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Direct answers to the questions that matter. No technical jargon allowed.
            </p>
          </motion.div>

          <div className="space-y-4">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white dark:bg-neutral-800/50 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

