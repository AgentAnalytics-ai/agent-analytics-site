'use client';

import React, { useState, useMemo } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import {
  ArrowRight,
  CheckCircle,
  Target,
  Code,
  Server,
  DollarSign,
  Settings,
  GraduationCap,
  TrendingUp,
  ArrowUpRight,
  Globe,
  Database,
  BarChart3,
  Shield,
  Zap,
  Users,
  Mail,
  FileText,
  Activity,
  CreditCard,
  LucideIcon,
} from 'lucide-react';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
  benefits: string[];
  cta: string;
  calendlyUrl: string;
  systems: string[];
}

export default function ServicesPage() {
  const { openCalendly } = useCalendly();
  const [selectedService, setSelectedService] = useState<string>('strategy');

  const services: Service[] = useMemo(() => [
    {
      id: 'strategy',
      title: 'Technology Strategy & Roadmapping',
      description: 'Identify the right technology opportunities and build realistic roadmaps that avoid common pitfalls.',
      icon: Target,
      color: 'blue',
      metrics: [
        { label: 'Projects Delivered', value: '150+' },
        { label: 'Success Rate', value: '94%' },
        { label: 'Avg. ROI', value: '3.2x' },
      ],
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
      systems: ['Analysis', 'Planning', 'Documentation', 'Reporting'],
    },
    {
      id: 'development',
      title: 'Custom Software Development',
      description: 'Build intelligent systems and software solutions that actually work for your business. No off-the-shelf compromises.',
      icon: Code,
      color: 'sky',
      metrics: [
        { label: 'Apps Built', value: '200+' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Client Satisfaction', value: '4.9/5' },
      ],
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
      systems: ['Development', 'Testing', 'Deployment', 'Support'],
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & Hosting Solutions',
      description: 'Optimize your hosting infrastructure for performance, security, and cost-effectiveness.',
      icon: Server,
      color: 'emerald',
      metrics: [
        { label: 'Performance Gain', value: '85%' },
        { label: 'Cost Reduction', value: '40%' },
        { label: 'Uptime', value: '99.99%' },
      ],
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
      systems: ['Cloud', 'CDN', 'Security', 'Monitoring'],
    },
    {
      id: 'cost',
      title: 'Software Cost Optimization',
      description: 'Reduce software licensing costs and optimize your technology spend without sacrificing functionality.',
      icon: DollarSign,
      color: 'amber',
      metrics: [
        { label: 'Avg. Savings', value: '$45K/yr' },
        { label: 'License Reduction', value: '32%' },
        { label: 'Efficiency Gain', value: '28%' },
      ],
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
      systems: ['Audit', 'Analysis', 'Optimization', 'Tracking'],
    },
    {
      id: 'maintenance',
      title: 'System Improvement & Maintenance',
      description: 'Enhance existing systems, improve performance, and ensure long-term reliability.',
      icon: Settings,
      color: 'indigo',
      metrics: [
        { label: 'Performance Boost', value: '60%' },
        { label: 'Downtime Reduction', value: '75%' },
        { label: 'System Health', value: '98%' },
      ],
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
      systems: ['Monitoring', 'Updates', 'Optimization', 'Support'],
    },
    {
      id: 'training',
      title: 'Implementation & Training',
      description: 'Ensure your team can use new technologies effectively. From implementation to training for maximum ROI.',
      icon: GraduationCap,
      color: 'purple',
      metrics: [
        { label: 'Teams Trained', value: '500+' },
        { label: 'Adoption Rate', value: '92%' },
        { label: 'ROI Realized', value: '4.1x' },
      ],
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
      systems: ['Training', 'Documentation', 'Support', 'Optimization'],
    },
  ], []);

  const currentService = services.find(s => s.id === selectedService) || services[0];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-950/20',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-900/30',
        iconBg: 'bg-blue-100 dark:bg-blue-900/30',
        chart: 'rgb(59, 130, 246)',
      },
      sky: {
        bg: 'bg-sky-50 dark:bg-sky-950/20',
        text: 'text-sky-600 dark:text-sky-400',
        border: 'border-sky-200 dark:border-sky-900/30',
        iconBg: 'bg-sky-100 dark:bg-sky-900/30',
        chart: 'rgb(14, 165, 233)',
      },
      emerald: {
        bg: 'bg-emerald-50 dark:bg-emerald-950/20',
        text: 'text-emerald-600 dark:text-emerald-400',
        border: 'border-emerald-200 dark:border-emerald-900/30',
        iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
        chart: 'rgb(16, 185, 129)',
      },
      amber: {
        bg: 'bg-amber-50 dark:bg-amber-950/20',
        text: 'text-amber-600 dark:text-amber-400',
        border: 'border-amber-200 dark:border-amber-900/30',
        iconBg: 'bg-amber-100 dark:bg-amber-900/30',
        chart: 'rgb(245, 158, 11)',
      },
      indigo: {
        bg: 'bg-indigo-50 dark:bg-indigo-950/20',
        text: 'text-indigo-600 dark:text-indigo-400',
        border: 'border-indigo-200 dark:border-indigo-900/30',
        iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
        chart: 'rgb(99, 102, 241)',
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-950/20',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-900/30',
        iconBg: 'bg-purple-100 dark:bg-purple-900/30',
        chart: 'rgb(168, 85, 247)',
      },
    };
    return colors[color] || colors.blue;
  };

  const systemIcons: Record<string, React.ReactNode> = {
    'Analysis': <BarChart3 className="w-5 h-5" />,
    'Planning': <Target className="w-5 h-5" />,
    'Documentation': <FileText className="w-5 h-5" />,
    'Reporting': <BarChart3 className="w-5 h-5" />,
    'Development': <Code className="w-5 h-5" />,
    'Testing': <Shield className="w-5 h-5" />,
    'Deployment': <Globe className="w-5 h-5" />,
    'Support': <Users className="w-5 h-5" />,
    'Cloud': <Globe className="w-5 h-5" />,
    'CDN': <Activity className="w-5 h-5" />,
    'Security': <Shield className="w-5 h-5" />,
    'Monitoring': <Activity className="w-5 h-5" />,
    'Audit': <FileText className="w-5 h-5" />,
    'Optimization': <Zap className="w-5 h-5" />,
    'Tracking': <BarChart3 className="w-5 h-5" />,
    'Updates': <Zap className="w-5 h-5" />,
    'Training': <GraduationCap className="w-5 h-5" />,
  };

  return (
    <>
      {/* Hero Section */}
      <Section
        spacing="xl"
        className="pt-32 relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-blue-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-blue-900/20"
      >
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-8 leading-tight tracking-tight"
            >
              Technology Solutions That Deliver
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed"
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

      {/* Services Dashboard */}
      <Section spacing="xl" background="gray" className="relative">
        <Container className="relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
              Comprehensive Technology Services
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              End-to-end technology consulting, development, and optimization—tailored to your business needs.
            </p>
          </motion.div>

          {/* Service Selector Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-1"
          >
            {services.map((service) => {
              const Icon = service.icon;
              const isSelected = selectedService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-6 py-3 font-semibold text-sm tracking-wide transition-all duration-200 flex items-center gap-2 border-b-2 ${
                    isSelected
                      ? `border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100`
                      : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {service.title.split(' ')[0]} {service.title.split(' ')[1]}
                </button>
              );
            })}
          </motion.div>

          {/* Service Dashboard */}
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-3 gap-6 mb-8"
          >
            {/* Main Dashboard View */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden flex flex-col"
              style={{ height: '600px', maxHeight: '600px', minHeight: '600px' }}
            >
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getColorClasses(currentService.color).iconBg}`}>
                      <currentService.icon className={`w-5 h-5 ${getColorClasses(currentService.color).text}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {currentService.title}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {currentService.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">Active</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto" style={{ height: '0px', minHeight: '0px' }}>
                {/* Performance Badge */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Optimized • Proven Results</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {currentService.metrics.map((metric, idx) => {
                    const colors = getColorClasses(currentService.color);
                    return (
                      <div key={idx} className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{metric.label}</div>
                        <div className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{metric.value}</div>
                        <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                          <ArrowUpRight className="w-3 h-3" />
                          <span>Optimized</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* What We Deliver */}
                <div className="bg-white dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden mb-4">
                  <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">What We Deliver</h4>
                  </div>
                  <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
                    {currentService.features.map((feature, idx) => (
                      <div key={idx} className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                        <CheckCircle className={`w-4 h-4 ${getColorClasses(currentService.color).text} flex-shrink-0`} />
                        <span className="text-sm text-neutral-900 dark:text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expected Outcomes */}
                <div className="bg-white dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                  <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Expected Outcomes</h4>
                  </div>
                  <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
                    {currentService.benefits.map((benefit, idx) => (
                      <div key={idx} className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                        <span className="text-sm text-neutral-900 dark:text-white">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connected Systems */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden flex flex-col"
              style={{ height: '600px', maxHeight: '600px', minHeight: '600px' }}
            >
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex-shrink-0">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  Service Components
                </h3>
              </div>
              <div className="flex-1 p-6 space-y-4 overflow-y-auto" style={{ height: '0px', minHeight: '0px' }}>
                {currentService.systems.map((system, index) => (
                  <div key={system} className="space-y-2 flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 ${getColorClasses(currentService.color).iconBg} rounded-lg`}>
                          <div className={getColorClasses(currentService.color).text}>
                            {systemIcons[system] || <Activity className="w-5 h-5" />}
                          </div>
                        </div>
                        <span className="font-medium text-neutral-900 dark:text-white">{system}</span>
                      </div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <div 
                          style={{ background: getColorClasses(currentService.color).chart, width: '100%' }}
                          className="h-full rounded-full"
                        />
                      </div>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">100%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl"
              onClick={() => openCalendly(currentService.calendlyUrl)}
            >
              {currentService.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
