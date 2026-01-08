'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { 
  Brain, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Activity,
  Database,
  CreditCard,
  Mail,
  Users,
  ArrowUpRight,
  Globe,
  Building2,
  ShoppingCart,
  BarChart3,
  Settings,
  FileText,
  Rss,
  MessageSquare,
  BookOpen,
  PenTool,
  Calendar,
  Video,
  Award
} from 'lucide-react';

interface ActivityItem {
  id: number;
  type: 'payment' | 'sync' | 'deploy' | 'email' | 'api' | 'learn' | 'flag' | 'invoice';
  timestamp: string;
}

interface DashboardExample {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  metrics: {
    label: string;
    value: string;
    trend: number[];
  }[];
  activities: string[];
  systems: string[];
  additionalFeatures: {
    icon: React.ReactNode;
    title: string;
  }[];
}

export function AISDKDashboard() {
  const [isActive, setIsActive] = useState(true);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [selectedExample, setSelectedExample] = useState<string>('website');
  const activityContainerRef = useRef<HTMLDivElement>(null);

  const activityTypes: ActivityItem['type'][] = ['payment', 'sync', 'deploy', 'email', 'api', 'learn', 'flag', 'invoice'];

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      const newActivity: ActivityItem = {
        id: Date.now(),
        type: activityTypes[Math.floor(Math.random() * activityTypes.length)],
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };

      setActivities((prev) => {
        const updated = [newActivity, ...prev].slice(0, 6);
        setTimeout(() => {
          if (activityContainerRef.current) {
            activityContainerRef.current.scrollTop = 0;
          }
        }, 50);
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isActive]);

  const dashboardExamples: DashboardExample[] = useMemo(() => [
    {
      id: 'website',
      title: 'Website Build',
      description: 'Custom web application with modern UI',
      icon: <Globe className="w-5 h-5" />,
      color: 'blue',
      metrics: [
        { label: 'Uptime', value: '99.9%', trend: [99.5, 99.7, 99.8, 99.9] },
        { label: 'Page Load', value: '0.8s', trend: [1.2, 1.0, 0.9, 0.8] },
        { label: 'Visitors', value: '12.4K', trend: [11000, 11500, 12000, 12400] },
      ],
      activities: ['Deployment completed', 'Performance optimized', 'SSL renewed'],
      systems: ['Hosting', 'CDN', 'Analytics', 'Backup'],
      additionalFeatures: [
        { icon: <Rss className="w-4 h-4" />, title: 'Automated AI Blogs' },
        { icon: <MessageSquare className="w-4 h-4" />, title: 'Forums & Communities' },
        { icon: <BookOpen className="w-4 h-4" />, title: 'Knowledge Bases' },
        { icon: <PenTool className="w-4 h-4" />, title: 'Content Management' },
      ],
    },
    {
      id: 'portal',
      title: 'Business Portal',
      description: 'Custom portal for your team operations',
      icon: <Building2 className="w-5 h-5" />,
      color: 'purple',
      metrics: [
        { label: 'Active Users', value: '234', trend: [200, 210, 220, 234] },
        { label: 'Tasks Today', value: '1.2K', trend: [1000, 1050, 1100, 1200] },
        { label: 'Efficiency', value: '87%', trend: [80, 83, 85, 87] },
      ],
      activities: ['User logged in', 'Task completed', 'Report generated'],
      systems: ['CRM', 'Database', 'Email', 'Storage'],
      additionalFeatures: [
        { icon: <Calendar className="w-4 h-4" />, title: 'Team Scheduling' },
        { icon: <FileText className="w-4 h-4" />, title: 'Document Management' },
        { icon: <BarChart3 className="w-4 h-4" />, title: 'Analytics Dashboard' },
        { icon: <Users className="w-4 h-4" />, title: 'Collaboration Tools' },
      ],
    },
    {
      id: 'gtm',
      title: 'GTM Sales Engine',
      description: 'Go-to-market automation portal',
      icon: <ShoppingCart className="w-5 h-5" />,
      color: 'green',
      metrics: [
        { label: 'Leads', value: '456', trend: [400, 420, 440, 456] },
        { label: 'Conversion', value: '23%', trend: [18, 20, 21, 23] },
        { label: 'Revenue', value: '$127K', trend: [100000, 110000, 120000, 127000] },
      ],
      activities: ['Lead captured', 'Qualified', 'Converted', 'Payment processed'],
      systems: ['Stripe', 'CRM', 'Email', 'Analytics'],
      additionalFeatures: [
        { icon: <BookOpen className="w-4 h-4" />, title: 'Customer Universities' },
        { icon: <Video className="w-4 h-4" />, title: 'Training Portals' },
        { icon: <Mail className="w-4 h-4" />, title: 'Email Automation' },
        { icon: <Award className="w-4 h-4" />, title: 'Certification Systems' },
      ],
    },
    {
      id: 'client',
      title: 'Client Portal',
      description: 'Self-service portal for your clients',
      icon: <Users className="w-5 h-5" />,
      color: 'orange',
      metrics: [
        { label: 'Active Clients', value: '89', trend: [80, 83, 86, 89] },
        { label: 'Support Tickets', value: '12', trend: [20, 18, 15, 12] },
        { label: 'Satisfaction', value: '4.8/5', trend: [4.5, 4.6, 4.7, 4.8] },
      ],
      activities: ['Client logged in', 'Document accessed', 'Payment made'],
      systems: ['Auth', 'Payments', 'Documents', 'Support'],
      additionalFeatures: [
        { icon: <FileText className="w-4 h-4" />, title: 'Document Portal' },
        { icon: <CreditCard className="w-4 h-4" />, title: 'Payment Gateway' },
        { icon: <MessageSquare className="w-4 h-4" />, title: 'Support Tickets' },
        { icon: <BarChart3 className="w-4 h-4" />, title: 'Usage Analytics' },
      ],
    },
  ], []);

  const currentExample = dashboardExamples.find(ex => ex.id === selectedExample) || dashboardExamples[0];

  const getActivityConfig = (type: ActivityItem['type']) => {
    const configs = {
      payment: { icon: CreditCard, color: 'green', label: 'Payment' },
      sync: { icon: Database, color: 'blue', label: 'Sync' },
      deploy: { icon: Globe, color: 'purple', label: 'Deploy' },
      email: { icon: Mail, color: 'orange', label: 'Email' },
      api: { icon: Activity, color: 'indigo', label: 'API' },
      learn: { icon: Brain, color: 'pink', label: 'Learn' },
      flag: { icon: Activity, color: 'yellow', label: 'Flag' },
      invoice: { icon: Zap, color: 'cyan', label: 'Invoice' },
    };
    return configs[type];
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-950/20',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-900/30',
        iconBg: 'bg-blue-100 dark:bg-blue-900/30',
        chart: 'rgb(59, 130, 246)',
        button: 'bg-blue-600 hover:bg-blue-700',
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-950/20',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-900/30',
        iconBg: 'bg-purple-100 dark:bg-purple-900/30',
        chart: 'rgb(168, 85, 247)',
        button: 'bg-purple-600 hover:bg-purple-700',
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-950/20',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-900/30',
        iconBg: 'bg-green-100 dark:bg-green-900/30',
        chart: 'rgb(34, 197, 94)',
        button: 'bg-green-600 hover:bg-green-700',
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-950/20',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-900/30',
        iconBg: 'bg-orange-100 dark:bg-orange-900/30',
        chart: 'rgb(249, 115, 22)',
        button: 'bg-orange-600 hover:bg-orange-700',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <Section spacing="xl" background="gray">
      <Container>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              Enterprise Technology
              <span className="text-neutral-700 dark:text-neutral-300 font-light block">Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade solutions built for your business—seamless performance your clients can rely on
            </p>
          </motion.div>

          {/* Example Selector Tabs - Corporate Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-1"
          >
            {dashboardExamples.map((example) => {
              const isSelected = selectedExample === example.id;
              return (
                <button
                  key={example.id}
                  onClick={() => setSelectedExample(example.id)}
                  className={`px-6 py-3 font-semibold text-sm tracking-wide transition-all duration-200 flex items-center gap-2 border-b-2 ${
                    isSelected
                      ? `border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100`
                      : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                  }`}
                >
                  <span className={isSelected ? 'opacity-100' : 'opacity-60'}>
                    {React.cloneElement(example.icon as React.ReactElement, { className: 'w-4 h-4' })}
                  </span>
                  {example.title}
                </button>
              );
            })}
          </motion.div>

          {/* Example Dashboard - Fixed Height */}
          <motion.div
            key={selectedExample}
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
                    <div className={`p-2 rounded-lg ${getColorClasses(currentExample.color).iconBg}`}>
                      {currentExample.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {currentExample.title}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {currentExample.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">Active</span>
                  </div>
                </div>
              </div>
              
              {/* Real Dashboard Content */}
              <div className="flex-1 p-6 overflow-y-auto" style={{ height: '0px', minHeight: '0px' }}>
                {/* Performance Badge */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs font-medium text-green-700 dark:text-green-400">Instant Load • Zero Latency</span>
                  </div>
                </div>

                {/* Metrics Grid - Clean Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {currentExample.metrics.map((metric, idx) => {
                    const colors = getColorClasses(currentExample.color);
                    
                    return (
                      <div key={idx} className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{metric.label}</div>
                        <div className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{metric.value}</div>
                        <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                          <ArrowUpRight className="w-3 h-3" />
                          <span>Optimized</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Data Table - Real Dashboard Element */}
                <div className="bg-white dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden mb-4">
                  <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Recent Activity</h4>
                  </div>
                  <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
                    {['Item processed', 'Update completed', 'Sync successful'].map((item, idx) => (
                      <div key={idx} className="px-4 py-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-neutral-900 dark:text-white">{item}</span>
                        </div>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">Just now</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Connected Systems - Fixed Height */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden flex flex-col"
              style={{ height: '600px', maxHeight: '600px', minHeight: '600px' }}
            >
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex-shrink-0">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  Connected Systems
                </h3>
              </div>
              <div className="flex-1 p-6 space-y-4 overflow-y-auto" style={{ height: '0px', minHeight: '0px' }}>
                {currentExample.systems.map((system, index) => {
                  const systemIcons: Record<string, React.ReactNode> = {
                    'Hosting': <Globe className="w-5 h-5" />,
                    'CDN': <Activity className="w-5 h-5" />,
                    'Analytics': <BarChart3 className="w-5 h-5" />,
                    'Backup': <Database className="w-5 h-5" />,
                    'CRM': <Users className="w-5 h-5" />,
                    'Database': <Database className="w-5 h-5" />,
                    'Email': <Mail className="w-5 h-5" />,
                    'Storage': <FileText className="w-5 h-5" />,
                    'Stripe': <CreditCard className="w-5 h-5" />,
                    'Auth': <Settings className="w-5 h-5" />,
                    'Payments': <CreditCard className="w-5 h-5" />,
                    'Documents': <FileText className="w-5 h-5" />,
                    'Support': <Users className="w-5 h-5" />,
                  };
                  
                  return (
                    <div key={system} className="space-y-2 flex-shrink-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 ${getColorClasses(currentExample.color).iconBg} rounded-lg`}>
                            <div className={getColorClasses(currentExample.color).text}>
                              {systemIcons[system] || <Activity className="w-5 h-5" />}
                            </div>
                          </div>
                          <span className="font-medium text-neutral-900 dark:text-white">{system}</span>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                          <div 
                            style={{ background: getColorClasses(currentExample.color).chart, width: '100%' }}
                            className="h-full rounded-full"
                          />
                        </div>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">100%</span>
                      </div>
                    </div>
                  );
                })}
                
                {/* Additional Features Section */}
                {currentExample.additionalFeatures && currentExample.additionalFeatures.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3">
                      Additional Capabilities
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {currentExample.additionalFeatures.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                          <div className={`p-1 ${getColorClasses(currentExample.color).iconBg} rounded`}>
                            <div className={getColorClasses(currentExample.color).text}>
                              {feature.icon}
                            </div>
                          </div>
                          <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                            {feature.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
