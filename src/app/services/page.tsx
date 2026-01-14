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
  problem: string;
  whatWeDo: string;
  outcome: string;
  icon: LucideIcon;
  color: string;
  metrics: {
    label: string;
    value: string;
  }[];
  examples: string[];
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
      title: 'Technology Strategy',
      problem: 'When you don\'t know what to build first, which tools to use, or how to avoid expensive mistakes',
      whatWeDo: 'We build your technology roadmap and specifications',
      outcome: 'So you have a clear blueprint—exact features to build, tools to use, timeline to follow, and budget to plan—before you spend a dollar.',
      icon: Target,
      color: 'blue',
      metrics: [
        { label: 'Roadmaps Built', value: '150+' },
        { label: 'Success Rate', value: '94%' },
        { label: 'Avg. ROI', value: '3.2x' },
      ],
      examples: [
        'You need automation, we map out which workflows to automate first and how',
        'You\'re choosing tools, we build comparison docs showing exact costs and tradeoffs',
        'You\'re planning a project, we deliver specs with features, timeline, and budget',
        'You\'re stuck on priorities, we rank opportunities by impact and effort',
      ],
      cta: 'Build Your Roadmap',
      calendlyUrl: CALENDLY_LINKS.talkStrategy,
      systems: ['Analysis', 'Planning', 'Documentation', 'Reporting'],
    },
    {
      id: 'development',
      title: 'Custom Software Development',
      problem: 'When you need software built for your business—not generic tools that don\'t fit',
      whatWeDo: 'We build custom software that connects to your systems and automates your workflows',
      outcome: 'So your team has software built for your processes—connects to CRM and email, automates routine work, and scales with you.',
      icon: Code,
      color: 'sky',
      metrics: [
        { label: 'Apps Built', value: '200+' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Client Satisfaction', value: '4.9/5' },
      ],
      examples: [
        'Your team needs a dashboard, we build it pulling data from 5 systems into one view',
        'Your process is manual, we automate it so it runs automatically',
        'You need client portals, we build them connected to your CRM and payments',
        'You need integrations, we connect your tools so data flows automatically',
      ],
      cta: 'Build Your Software',
      calendlyUrl: CALENDLY_LINKS.startConversation,
      systems: ['Development', 'Testing', 'Deployment', 'Support'],
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & Hosting',
      problem: 'When your site is slow, crashes, or costs too much to host',
      whatWeDo: 'We rebuild your hosting setup for speed, reliability, and cost',
      outcome: 'So your site loads in under 2 seconds, stays online 99.99% of the time, and costs 40% less.',
      icon: Server,
      color: 'sky',
      metrics: [
        { label: 'Speed Improvement', value: '85%' },
        { label: 'Cost Reduction', value: '40%' },
        { label: 'Uptime', value: '99.99%' },
      ],
      examples: [
        'Your site loads slow, we move it to faster servers and CDNs—loads in 1-2 seconds',
        'Your site crashes, we set up auto-scaling and monitoring—stays online',
        'You\'re overpaying, we optimize hosting and cut costs by thousands per year',
        'You need security, we add SSL, firewalls, and backups—protected 24/7',
      ],
      cta: 'Fix Your Hosting',
      calendlyUrl: CALENDLY_LINKS.bookSession,
      systems: ['Cloud', 'CDN', 'Security', 'Monitoring'],
    },
    {
      id: 'cost',
      title: 'Software Cost Optimization',
      problem: 'When you\'re paying for software you don\'t use, or overpaying for tools',
      whatWeDo: 'We find what you\'re wasting money on and replace it with cheaper alternatives',
      outcome: 'So you save tens of thousands per year by canceling unused licenses and switching to cheaper tools that work just as well.',
      icon: DollarSign,
      color: 'blue',
      metrics: [
        { label: 'Avg. Savings', value: '$45K/yr' },
        { label: 'Licenses Cut', value: '32%' },
        { label: 'Efficiency Gain', value: '28%' },
      ],
      examples: [
        'You pay for 50 licenses, only use 30—we cancel the unused ones, save $24K/year',
        'You pay $200/user/month for Tool A—we switch you to Tool B at $50/user/month, same features',
        'You use 5 tools that do the same thing—we consolidate to 2, save $18K/year',
        'You\'re overpaying vendors—we negotiate better rates, save $15K/year',
      ],
      cta: 'Cut Your Costs',
      calendlyUrl: CALENDLY_LINKS.bookSession,
      systems: ['Audit', 'Analysis', 'Optimization', 'Tracking'],
    },
    {
      id: 'maintenance',
      title: 'System Maintenance',
      problem: 'When your software is broken, slow, or outdated—but you can\'t rebuild it',
      whatWeDo: 'We fix bugs, speed things up, and update your systems',
      outcome: 'So your software runs fast, stops breaking, stays updated, and keeps working without disrupting your team.',
      icon: Settings,
      color: 'sky',
      metrics: [
        { label: 'Speed Boost', value: '60%' },
        { label: 'Downtime Cut', value: '75%' },
        { label: 'System Health', value: '98%' },
      ],
      examples: [
        'Your app crashes daily—we fix the bugs, add error handling, it stays online',
        'Your pages load slow—we optimize code and database, they load 3x faster',
        'Your system won\'t work with new tools—we update integrations, everything connects',
        'You have tech debt—we refactor the messy code, future changes are easy',
      ],
      cta: 'Fix Your Systems',
      calendlyUrl: CALENDLY_LINKS.bookSession,
      systems: ['Monitoring', 'Updates', 'Optimization', 'Support'],
    },
    {
      id: 'training',
      title: 'Implementation & Training',
      problem: 'When we build software for you, and your team needs to learn it',
      whatWeDo: 'We train your team and create documentation so they can use it effectively',
      outcome: 'So your team knows how to use the software, gets value from day one, and can train new people themselves.',
      icon: GraduationCap,
      color: 'blue',
      metrics: [
        { label: 'Teams Trained', value: '500+' },
        { label: 'Adoption Rate', value: '92%' },
        { label: 'ROI Realized', value: '4.1x' },
      ],
      examples: [
        'We build software, we run training sessions showing your team exactly how to use it',
        'Your team has questions, we create documentation and videos they can reference',
        'You\'re rolling out new software, we help with the launch and answer questions',
        'New team members join, they read our docs and are productive in days, not months',
      ],
      cta: 'Train Your Team',
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
              Services
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Technology strategy, custom software development, infrastructure optimization, cost reduction, system maintenance, and team training.
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
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">Active</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto" style={{ height: '0px', minHeight: '0px' }}>
                {/* Problem Statement */}
                <div className="mb-6 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">
                    When You Need
                  </div>
                  <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {currentService.problem}
                  </p>
                </div>

                {/* What We Do */}
                <div className="mb-6 p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide mb-2">
                    What We Do
                  </div>
                  <p className="text-base text-neutral-900 dark:text-white leading-relaxed">
                    {currentService.whatWeDo}
                  </p>
                </div>

                {/* Outcome */}
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30 border-2 border-sky-200 dark:border-sky-900/50">
                  <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wide mb-2">
                    So You Get
                  </div>
                  <p className="text-base font-medium text-neutral-900 dark:text-white leading-relaxed">
                    {currentService.outcome}
                  </p>
                </div>

                {/* Examples */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wide">
                    Examples
                  </div>
                  <div className="space-y-2">
                    {currentService.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start gap-3 px-3 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                        <CheckCircle className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {example}
                        </span>
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
                      <div className="w-2 h-2 bg-sky-500 rounded-full" />
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
