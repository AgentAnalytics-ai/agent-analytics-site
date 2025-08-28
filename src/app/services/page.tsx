'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
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
      title: 'Technology Strategy & Roadmapping',
      description: 'Identify the right technology opportunities and build realistic roadmaps that avoid common pitfalls.',
      features: [
        'Technology Opportunity Assessment',
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
      accent: 'border-l-blue-500',
    },
    {
      title: 'Custom Software Development',
      description: 'Build intelligent systems and software solutions that actually work for your business. No off-the-shelf compromises.',
      features: [
        'Custom Software Solutions',
        'Intelligent Automation',
        'System Integration',
        'API Development',
      ],
      benefits: [
        'Reduced operational costs',
        'Competitive advantage',
        'Scalable solutions',
      ],
      cta: 'Discuss Your Project',
      calendlyUrl: CALENDLY_LINKS.startConversation,
      accent: 'border-l-purple-500',
    },
    {
      title: 'Infrastructure & Hosting Solutions',
      description: 'Optimize your hosting infrastructure for performance, security, and cost-effectiveness.',
      features: [
        'Cloud Infrastructure Setup',
        'Performance Optimization',
        'Security Hardening',
        'Cost Optimization',
      ],
      benefits: [
        'Improved performance',
        'Enhanced security',
        'Reduced hosting costs',
      ],
      cta: 'Optimize Infrastructure',
      calendlyUrl: CALENDLY_LINKS.bookSession,
      accent: 'border-l-emerald-500',
    },
    {
      title: 'Software Cost Optimization',
      description: 'Reduce software licensing costs and optimize your technology spend without sacrificing functionality.',
      features: [
        'Software Audit & Analysis',
        'License Optimization',
        'Alternative Solutions',
        'Cost Reduction Strategies',
      ],
      benefits: [
        'Significant cost savings',
        'Better value for money',
        'Improved efficiency',
      ],
      cta: 'Reduce Software Costs',
      calendlyUrl: CALENDLY_LINKS.bookSession,
      accent: 'border-l-orange-500',
    },
    {
      title: 'System Improvement & Maintenance',
      description: 'Enhance existing systems, improve performance, and ensure long-term reliability.',
      features: [
        'Performance Optimization',
        'System Modernization',
        'Technical Debt Reduction',
        'Ongoing Maintenance',
      ],
      benefits: [
        'Improved system reliability',
        'Better user experience',
        'Reduced technical debt',
      ],
      cta: 'Improve Your Systems',
      calendlyUrl: CALENDLY_LINKS.bookSession,
      accent: 'border-l-indigo-500',
    },
    {
      title: 'Implementation & Training',
      description: 'Ensure your team can use new technologies effectively. From implementation to training for maximum ROI.',
      features: [
        'Implementation Support',
        'Team Training & Enablement',
        'Change Management',
        'Ongoing Optimization',
      ],
      benefits: [
        'Faster technology adoption',
        'Maximized ROI',
        'Sustainable transformation',
      ],
      cta: 'Start Implementation',
      calendlyUrl: CALENDLY_LINKS.bookSession,
      accent: 'border-l-green-500',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section
        spacing="xl"
        className="pt-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20"
      >
        {/* Background Animations */}
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
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
            >
              Technology Solutions That Deliver
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Strategic technology consulting, custom development, and optimization services that drive real business results.
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
                Start Your Technology Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section spacing="xl" background="white" className="relative">
        <Container className="relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end technology consulting, development, and optimization—tailored to your business needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className={`relative text-left hover:shadow-xl transition-all duration-300 group border-l-4 ${service.accent} bg-white hover:bg-gray-50 h-full`}>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          What We Deliver:
                        </h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-gray-600 text-sm"
                            >
                              <CheckCircle className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          Expected Outcomes:
                        </h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li
                              key={benefitIndex}
                              className="flex items-start text-gray-600 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
                        onClick={() => openCalendly(service.calendlyUrl)}
                      >
                        {service.cta}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
