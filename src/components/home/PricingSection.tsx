'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';

export function PricingSection() {
  const { openCalendly } = useCalendly();

  const tiers = [
    {
      name: 'Starter',
      price: '$15,000',
      description: 'AI added to one workflow',
      for: 'Small businesses with one workflow that needs automation.',
      features: [
        'One custom AI-powered application',
        'Connects to up to 3 of your existing tools',
        'Handles one specific business process',
        'Payment integration (money flows to your account)',
        'AI that understands context and learns your patterns',
        '3 months of support and updates',
      ],
      why: 'This is like hiring a developer for 2 months, but you get a complete solution that keeps working.',
      cta: 'Start with Starter',
    },
    {
      name: 'Growth',
      price: '$45,000',
      description: 'AI across multiple workflows',
      for: 'Growing businesses that need AI across multiple workflows.',
      features: [
        'Custom AI application that handles multiple processes',
        'Connects to up to 10 of your existing tools',
        'Handles 3-5 different workflows',
        'Payment integration with automated processing',
        'AI that makes decisions based on your business logic',
        '6 months of support and updates',
        'Training for your team',
      ],
      why: 'This replaces multiple tools and several hours of manual work per week. It pays for itself in saved time.',
      cta: 'Choose Growth',
      popular: true,
    },
    {
      name: 'Platform',
      price: '$120,000',
      description: 'AI becomes part of your product',
      for: 'Companies that want AI to become part of their product or operations.',
      features: [
        'Complete AI-powered platform built for your business',
        'Unlimited tool connections',
        'Handles your entire workflow',
        'Payment processing that scales with your business',
        'Advanced AI that thinks ahead and adapts automatically',
        '12 months of support and updates',
        'Ongoing optimization and new features',
        'Your team trained to maintain it',
      ],
      why: 'This is closer to hiring a small AI team than buying software. You get a system that grows with you.',
      cta: 'Build Platform',
    },
  ];

  const handleCalendlyClick = () => {
    openCalendly(CALENDLY_LINKS.talkStrategy);
  };

  return (
    <Section spacing="xl" background="white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              Pricing
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Extremely clear. No hourly rates. No "contact us." No hidden fees. Each tier must feel obvious.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                  tier.popular
                    ? 'border-blue-600 dark:border-blue-500 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/30 shadow-2xl scale-105'
                    : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/50 shadow-lg hover:shadow-xl'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                    {tier.name}
                  </h3>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {tier.description}
                  </div>
                  <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                    {tier.price}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    <strong className="text-neutral-900 dark:text-white">Who it's for:</strong> {tier.for}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                    What you get:
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    <strong className="text-neutral-900 dark:text-white">Why the price makes sense:</strong> {tier.why}
                  </p>
                </div>

                <Button
                  variant={tier.popular ? 'cta' : 'outline'}
                  size="lg"
                  onClick={handleCalendlyClick}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

