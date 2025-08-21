'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const features = [
  {
    title: 'Enterprise Security',
    description: 'Built on Microsoft Azure with enterprise-grade security and compliance.',
    icon: '🛡️',
  },
  {
    title: 'Team Integration',
    description: 'Seamlessly integrate with your existing workflows and team structures.',
    icon: '🤝',
  },
  {
    title: 'Global Scale',
    description: 'Deploy solutions that scale with your business across multiple regions.',
    icon: '🌍',
  },
  {
    title: 'Proven Results',
    description: 'Track record of delivering measurable ROI and business transformation.',
    icon: '📈',
  },
  {
    title: 'Continuous Optimization',
    description: 'Ongoing analytics and refinement to maximize performance.',
    icon: '⚡',
  },
];

export default function WhoWeAre() {
  return (
    <Section spacing="xl" background="gray">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose Agent Analytics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            We're a consulting studio that quietly powers modern enterprises with custom strategy, technology, and internal tools. Built for scale, security, and results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/70"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-neutral-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:bg-neutral-800/70"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-neutral-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
