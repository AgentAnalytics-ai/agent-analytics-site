'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { ArrowRight, Search, Palette, Rocket, Sparkles } from 'lucide-react';

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Move useInView hook to top level
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Discover',
      description: 'We deeply listen and understand your landscape.',
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200',
      shadowColor: 'shadow-emerald-500/20',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design',
      description: 'We shape bold strategies and custom tools.',
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      shadowColor: 'shadow-purple-500/20',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Deliver',
      description: 'We build what matters, with long-term thinking.',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      shadowColor: 'shadow-orange-500/20',
    },
  ];

  return (
    <Section
      spacing="xl"
      background="dark"
      className="relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <Container className="relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
            How We Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our proven process delivers results through strategic thinking and
            intelligent execution.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Animated progress line */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-orange-500 transform -translate-y-1/2 hidden lg:block rounded-full overflow-hidden"
            style={{
              scaleX: scrollYProgress,
              transformOrigin: 'left',
            }}
          >
            <div className="h-full bg-gradient-to-r from-emerald-400 via-purple-400 to-orange-400 animate-pulse"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Step number with glow effect */}
                <motion.div
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-lg font-bold text-white shadow-lg ${step.shadowColor} border-4 border-white/20 backdrop-blur-sm`}
                  >
                    {index + 1}
                  </div>
                </motion.div>

                {/* Main card with glassmorphism */}
                <motion.div
                  className="relative"
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card
                    variant="elevated"
                    padding="xl"
                    className={`relative bg-white/95 backdrop-blur-xl border ${step.borderColor} hover:border-opacity-60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/20 overflow-hidden`}
                  >
                    {/* Animated background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with enhanced styling */}
                      <div className="flex justify-center mb-8">
                        <motion.div
                          className={`p-6 bg-gradient-to-r ${step.gradient} rounded-2xl shadow-lg ${step.shadowColor} border border-white/20 group-hover:scale-110 transition-all duration-500`}
                          whileHover={{ rotate: 5 }}
                        >
                          <div className="text-white">{step.icon}</div>
                        </motion.div>
                      </div>

                      {/* Text content */}
                      <div className="text-center">
                        <h3
                          className={`text-3xl font-bold mb-6 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent group-hover:text-gray-900 transition-colors duration-500`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg font-medium group-hover:text-gray-900 transition-colors duration-500">
                          {step.description}
                        </p>
                      </div>

                      {/* Hover effect indicator */}
                      <motion.div
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ x: 20 }}
                        whileHover={{ x: 0 }}
                      >
                        <ArrowRight
                          className={`w-6 h-6 text-${step.color}-500`}
                        />
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>

                {/* Connecting arrow for desktop */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  >
                    <div className="w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full relative group-hover:from-emerald-400 group-hover:to-purple-400 transition-all duration-500">
                      <motion.div
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-400 border-t-4 border-t-transparent border-b-4 border-b-transparent group-hover:border-l-purple-400 transition-all duration-500"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
