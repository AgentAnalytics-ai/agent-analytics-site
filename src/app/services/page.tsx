'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Brain,
  Code,
  Zap,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const { openCalendly } = useCalendly();

  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Roadmapping',
      description: 'Identify the right AI opportunities and build realistic roadmaps that avoid common pitfalls.',
      features: [
        'AI Opportunity Assessment',
        'Strategic Roadmap Development',
        'Technology Stack Selection',
        'ROI Analysis & Planning',
      ],
      benefits: [
        'Clear implementation path',
        'Avoid costly mistakes',
        'Measurable outcomes',
      ],
      cta: 'Book Strategy Session',
      calendlyUrl: CALENDLY_LINKS.talkStrategy,
      gradient: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    },
    {
      icon: Code,
      title: 'Custom AI Development',
      description: 'Build intelligent systems that actually work for your business. No off-the-shelf solutions.',
      features: [
        'Custom AI Models',
        'Intelligent Automation',
        'Predictive Analytics',
        'Integration Development',
      ],
      benefits: [
        'Reduced operational costs',
        'Competitive advantage',
        'Scalable solutions',
      ],
      cta: 'Discuss Your Project',
      calendlyUrl: CALENDLY_LINKS.startConversation,
      gradient: 'from-purple-500 to-pink-600',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'AI Implementation & Training',
      description: 'Ensure your team can use AI effectively. From implementation to training for maximum ROI.',
      features: [
        'Implementation Support',
        'Team Training & Enablement',
        'Change Management',
        'Ongoing Optimization',
      ],
      benefits: [
        'Faster AI adoption',
        'Maximized ROI',
        'Sustainable transformation',
      ],
      cta: 'Start Implementation',
      calendlyUrl: CALENDLY_LINKS.bookSession,
      gradient: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    },
  ];

  return (
    <>
      {/* Hero Section - Match Home Page Style */}
      <Section
        spacing="xl"
        className="pt-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20"
      >
        {/* Background Animations - Same as Home Page */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_50%)]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-600/8 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-10 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl"
          animate={{ 
            x: [0, -25, 0],
            y: [0, 30, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-sky-300/15 to-blue-500/15 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        <Container className="relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
            >
              Your AI Transformation Partner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Strategic thinking and custom AI that delivers real results. No generic advice, no off-the-shelf solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <Button
                variant="primary"
                size="lg"
                className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl"
                onClick={() => openCalendly(CALENDLY_LINKS.bookSession)}
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section spacing="xl" background="gray" className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"></div>
        <Container className="relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              What I Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end AI consulting, development, and enablement—tailored to your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="relative text-left hover:shadow-2xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:-translate-y-2 h-full">
                    <div
                      className={`p-4 rounded-2xl ${service.iconBg} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-900 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-2"></div>
                        What We Deliver:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-gray-600 group-hover:text-gray-700 transition-colors"
                          >
                            <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-1 h-4 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-2"></div>
                        Expected Outcomes:
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-start text-gray-600 group-hover:text-gray-700 transition-colors"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                            <span className="text-sm font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <Button
                        variant="secondary"
                        size="md"
                        className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-blue-500/25 border-0 text-white transition-all duration-300 group-hover:scale-105`}
                        onClick={() => openCalendly(service.calendlyUrl)}
                      >
                        {service.cta}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" background="gray" className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_50%)]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <Container className="relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's discuss how AI can revolutionize your business. Strategic solutions tailored to your unique challenges.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl"
              onClick={() => openCalendly(CALENDLY_LINKS.bookSession)}
            >
              Start Your AI Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
