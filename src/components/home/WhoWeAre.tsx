'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Globe, Award, TrendingUp } from 'lucide-react';

export default function WhoWeAre() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const capabilities = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Built on Microsoft Azure with enterprise-grade security and compliance.',
    },
    {
      icon: Users,
      title: 'Team Integration',
      description:
        'Seamlessly integrate with your existing workflows and team structures.',
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description:
        'Deploy solutions that scale with your business across multiple regions.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description:
        'Track record of delivering measurable ROI and business transformation.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Optimization',
      description: 'Ongoing analytics and refinement to maximize performance.',
    },
  ];

  return (
    <section className="relative bg-gray-950 py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Why Choose Agent Analytics
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-200">
              We&apos;re a consulting studio that quietly powers modern
              enterprises with custom strategy, technology, and internal tools.
              Built for scale, security, and results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
          >
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative flex flex-col items-center text-center h-full min-h-[220px] p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-gray-700"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-500">
                    {capability.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300 flex-1 group-hover:text-gray-200 transition-colors duration-500">
                    {capability.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
