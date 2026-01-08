'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Users, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const services = [
    {
      icon: Brain,
      title: 'Strategic Consulting',
      description:
        'Navigate complex challenges with AI-powered insights and proven frameworks.',
      features: [
        'Market opportunity analysis',
        'Digital transformation roadmaps',
        'AI strategy development',
        'Competitive intelligence',
      ],
      color: 'blue',
    },
    {
      icon: Code,
      title: 'Product Development',
      description:
        'From concept to launch, we build products that solve real problems.',
      features: [
        'MVP development',
        'Technical architecture',
        'AI/ML integration',
        'Scalable infrastructure',
      ],
      color: 'sky',
    },
    {
      icon: Users,
      title: 'Organizational Development',
      description: 'Transform your teams with modern processes and tools.',
      features: [
        'Team capability building',
        'Process optimization',
        'Change management',
        'Leadership coaching',
      ],
      color: 'blue',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-32 pb-16">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.02] dark:opacity-[0.05]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10"
        >
          <motion.div
            variants={fadeInUp}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 dark:bg-blue-950/30">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-900 dark:text-blue-300">
                Services & Solutions
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              We Turn Complex Problems Into
              <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent dark:from-sky-400 dark:to-blue-400">
                Competitive Advantages
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
              Whether you need strategic clarity, technical expertise, or
              organizational transformation, we deliver custom solutions that
              actually work.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = {
                blue: 'bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400',
                sky:
                  'bg-sky-50 text-sky-600 dark:bg-sky-950/30 dark:text-sky-400',
              };

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses[service.color as keyof typeof colorClasses]}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>

                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        {/* Zap icon was removed, so this line is now unused */}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="https://calendly.com/grant-agentanalyticsai"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* How We Work Preview */}
      <section className="border-t border-gray-200 bg-gray-50 py-24 dark:border-gray-800 dark:bg-gray-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10"
        >
          <motion.div
            variants={fadeInUp}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Our Approach
            </h2>
            <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
              We follow a proven methodology that ensures results
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Users,
                title: 'Discover',
                desc: 'We deeply understand your landscape',
              },
              {
                icon: Sparkles,
                title: 'Design',
                desc: 'We shape bold strategies and custom tools',
              },
              {
                icon: ArrowRight,
                title: 'Deliver',
                desc: 'We build what matters, with long-term thinking',
              },
            ].map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm dark:bg-gray-800">
                    <StepIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-4xl px-6 text-center sm:px-8"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Ready to solve your hardest problems?
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Let&apos;s discuss how we can help transform your challenges into
            opportunities.
          </p>
          <Link
            href="https://calendly.com/grant-agentanalyticsai"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
