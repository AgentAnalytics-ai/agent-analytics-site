'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { 
  Globe, 
  FileText, 
  Zap, 
  Brain,
  CheckCircle2,
  Users,
  Mail,
  CreditCard,
  BarChart3,
  TrendingUp,
  ArrowRight,
  Database,
  Activity,
  Clock,
  Shield,
  MessageSquare,
  Plug,
  LucideIcon
} from 'lucide-react';

interface Product {
  id: string;
  problem: string;
  solution: string;
  outcome: string;
  icon: LucideIcon;
  connections: string[];
  scenarios: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 100,
      damping: 15,
    },
  },
};

export function VisualShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string>('portals');
  const [dashboardData, setDashboardData] = useState<any>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const products: Product[] = [
    {
      id: 'portals',
      problem: 'When your clients need 24/7 access to documents, payments, account management, and support—without overwhelming your team',
      solution: 'We build business portals',
      outcome: 'So clients serve themselves, payments process automatically, documents stay organized, and your team focuses on high-value work instead of routine requests.',
      icon: FileText,
      connections: ['CRM', 'Email', 'Payments', 'Storage'],
      scenarios: [
        'Client accesses contract, signs digitally, payment processes automatically',
        'Client downloads invoices, views payment history, updates billing info',
        'Client submits support ticket, gets instant response, tracks resolution',
        'Client accesses training materials, completes courses, gets certified',
        'Client views analytics dashboard, tracks usage, manages team access',
      ],
    },
    {
      id: 'sales',
      problem: 'When leads pile up in your inbox, deals stall in spreadsheets, and your sales team spends more time on data entry than closing',
      solution: 'We build sales automation',
      outcome: 'So leads qualify themselves, emails send at the right moment, deals move through pipeline automatically, and your team closes more with less effort.',
      icon: Zap,
      connections: ['CRM', 'Email', 'Payments', 'API'],
      scenarios: [
        'Lead fills form, gets instantly qualified, receives personalized sequence',
        'Sales call happens, transcript automatically flows to implementation team',
        'Deal closes, implementation gets everything they need automatically, no handoff gaps',
        'Sales and implementation stay aligned through automatically synced notes and transcripts',
        'Lead opens email, gets scored, moves to demo, calendar books automatically',
      ],
    },
    {
      id: 'applications',
      problem: 'When you need a website or custom software that integrates with your existing tools, adapts to your workflows, and scales with your business',
      solution: 'We build websites and web applications',
      outcome: 'So you have a website or application built exactly for your needs—connects to all your systems, automates your workflows, and grows with you.',
      icon: Globe,
      connections: ['Database', 'API', 'CDN', 'Analytics'],
      scenarios: [
        'You need a website, we build it fast and modern, connects to your tools',
        'Team logs in, sees personalized dashboard, workflows adapt to their role',
        'Data syncs from 10+ systems in real-time, team works with single source of truth',
        'Workflow automates: client submits form, system processes, team gets notified',
        'Business grows, website scales automatically, performance stays fast',
      ],
    },
    {
      id: 'agents',
      problem: 'When routine work piles up, data moves manually between systems, and important signals get missed in the noise',
      solution: 'We build AI agents',
      outcome: 'So routine work happens automatically, data flows between systems seamlessly, patterns get learned, anomalies get flagged, and you stay in control.',
      icon: Brain,
      connections: ['All Systems', 'Workflows', 'Data'],
      scenarios: [
        'Email arrives, agent analyzes urgency, routes to right person, flags if critical',
        'Data needs to move, agent moves it automatically, logs action, notifies if issues',
        'Pattern emerges, agent learns it, applies automatically, gets smarter over time',
        'Anomaly detected, agent flags it, suggests action, learns from your response',
        'Routine task repeats, agent automates it, frees your time, handles exceptions',
      ],
    },
  ];

  const currentProduct = products.find(p => p.id === selectedProduct) || products[0];

  // Advanced dashboard data with realistic scenarios
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    if (selectedProduct === 'portals') {
      const interval = setInterval(() => {
        setDashboardData({
          activeUsers: Math.floor(Math.random() * 50) + 150,
          documentsAccessed: Math.floor(Math.random() * 25) + 45,
          paymentsProcessed: Math.floor(Math.random() * 18) + 32,
          recentActivity: [
            { action: 'Contract signed', client: 'Acme Corp', amount: '$45,000', time: 'Just now' },
            { action: 'Payment processed', client: 'TechStart Inc', amount: '$12,500', time: '1 min ago' },
            { action: 'Document accessed', client: 'Global Solutions', amount: null, time: '2 min ago' },
          ],
        });
      }, 3000);
      intervals.push(interval);
    } else if (selectedProduct === 'sales') {
      const interval = setInterval(() => {
        setDashboardData({
          leadsToday: Math.floor(Math.random() * 35) + 120,
          converted: Math.floor(Math.random() * 12) + 25,
          revenue: Math.floor(Math.random() * 60000) + 75000,
          transcriptsToday: Math.floor(Math.random() * 10) + 20,
          pipeline: [
            { stage: 'Qualified', count: Math.floor(Math.random() * 20) + 48, value: Math.floor(Math.random() * 200000) + 350000 },
            { stage: 'Demo', count: Math.floor(Math.random() * 15) + 32, value: Math.floor(Math.random() * 150000) + 250000 },
            { stage: 'Closing', count: Math.floor(Math.random() * 10) + 18, value: Math.floor(Math.random() * 100000) + 180000 },
          ],
          recentDeals: [
            { company: 'StartupXYZ', stage: 'Demo', value: '$45K', rep: 'Sarah M.' },
            { company: 'EnterpriseCo', stage: 'Closing', value: '$120K', rep: 'Mike T.' },
          ],
        });
      }, 2500);
      intervals.push(interval);
    } else if (selectedProduct === 'applications') {
      const interval = setInterval(() => {
        setDashboardData({
          activeUsers: Math.floor(Math.random() * 45) + 185,
          tasksCompleted: Math.floor(Math.random() * 120) + 450,
          dataSynced: Math.floor(Math.random() * 600) + 1200,
          systemHealth: Math.floor(Math.random() * 5) + 98,
          deployments: Math.floor(Math.random() * 5) + 12,
        });
      }, 3000);
      intervals.push(interval);
    } else if (selectedProduct === 'agents') {
      const interval = setInterval(() => {
        setDashboardData({
          tasksAutomated: Math.floor(Math.random() * 250) + 850,
          patternsLearned: Math.floor(Math.random() * 6) + 12,
          dataMoved: Math.floor(Math.random() * 1200) + 2800,
          actions: [
            { type: 'Data moved', detail: 'CRM → Email system', time: 'Just now' },
            { type: 'Pattern learned', detail: 'Urgent email detection', time: '2 min ago' },
            { type: 'Anomaly flagged', detail: 'Unusual payment pattern', time: '5 min ago' },
          ],
        });
      }, 2000);
      intervals.push(interval);
    }

    return () => intervals.forEach(clearInterval);
  }, [selectedProduct]);

  const renderDashboard = () => {
    if (selectedProduct === 'portals') {
      return (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="h-full p-6 space-y-4"
        >
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Active Users', value: dashboardData.activeUsers || 187, icon: Users },
              { label: 'Documents', value: dashboardData.documentsAccessed || 52, icon: FileText },
              { label: 'Payments', value: dashboardData.paymentsProcessed || 38, icon: CreditCard },
            ].map((metric, idx) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <metric.icon className="w-4 h-4 text-neutral-400 dark:text-neutral-500 mb-2" />
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{metric.label}</div>
                <motion.div 
                  key={metric.value}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="text-2xl font-bold text-neutral-900 dark:text-white"
                >
                  {metric.value}
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center gap-2">
              <Activity className="w-3 h-3" />
              Recent Activity
            </div>
            <div className="space-y-3">
              {(dashboardData.recentActivity || []).map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2 last:border-0 last:pb-0"
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium text-neutral-900 dark:text-white">{item.action}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{item.client}</div>
                  </div>
                  <div className="text-right">
                    {item.amount && <div className="text-sm font-semibold text-sky-600 dark:text-sky-400">{item.amount}</div>}
                    <div className="text-xs text-neutral-400">{item.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      );
    } else if (selectedProduct === 'sales') {
      return (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="h-full p-6 space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Leads Today', value: dashboardData.leadsToday || 142, trend: '+12%', icon: TrendingUp },
              { label: 'Revenue', value: `$${((dashboardData.revenue || 78000) / 1000).toFixed(0)}K`, trend: '+28%', icon: CreditCard },
            ].map((metric, idx) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <metric.icon className="w-4 h-4 text-neutral-400 mb-2" />
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{metric.label}</div>
                <div className="flex items-baseline gap-2">
                  <motion.div 
                    key={metric.value}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-neutral-900 dark:text-white"
                  >
                    {metric.value}
                  </motion.div>
                  <span className="text-xs text-sky-600 dark:text-sky-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {metric.trend}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center gap-2">
              <MessageSquare className="w-3 h-3" />
              Sales Transcripts
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600 dark:text-neutral-400">Today</span>
                <span className="text-xs font-semibold text-neutral-900 dark:text-white">{dashboardData.transcriptsToday || 24}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600 dark:text-neutral-400">Auto-synced to Implementation</span>
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-sky-500 rounded-full"
                  />
                  <span className="text-xs text-sky-600 dark:text-sky-400">Live</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center gap-2">
              <Plug className="w-3 h-3" />
              API Connections
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600 dark:text-neutral-400">Active Integrations</span>
                <span className="text-xs font-semibold text-neutral-900 dark:text-white">8/8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600 dark:text-neutral-400">Data Sync</span>
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-sky-500 rounded-full"
                  />
                  <span className="text-xs text-sky-600 dark:text-sky-400">Real-time</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    } else if (selectedProduct === 'applications') {
      return (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="h-full p-6 space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Active Users', value: dashboardData.activeUsers || 195, icon: Users },
              { label: 'Tasks Today', value: dashboardData.tasksCompleted || 487, icon: Activity },
            ].map((metric, idx) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <metric.icon className="w-4 h-4 text-neutral-400 dark:text-neutral-500 mb-2" />
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{metric.label}</div>
                <motion.div 
                  key={metric.value}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="text-2xl font-bold text-neutral-900 dark:text-white"
                >
                  {metric.value}
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center gap-2">
              <Shield className="w-3 h-3" />
              System Status
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600 dark:text-neutral-400">Data Sync</span>
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-sky-500 rounded-full"
                  />
                  <span className="text-xs text-sky-600 dark:text-sky-400">Live</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600 dark:text-neutral-400">API Connections</span>
                <span className="text-xs font-medium text-neutral-900 dark:text-white">12/12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600 dark:text-neutral-400">System Health</span>
                <span className="text-xs font-medium text-sky-600 dark:text-sky-400">{dashboardData.systemHealth || 98}%</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center gap-2">
              <Activity className="w-3 h-3" />
              Deployments
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600 dark:text-neutral-400">This Month</span>
                <span className="text-xs font-semibold text-neutral-900 dark:text-white">{dashboardData.deployments || 12}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600 dark:text-neutral-400">Status</span>
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-sky-500 rounded-full"
                  />
                  <span className="text-xs text-sky-600 dark:text-sky-400">Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    } else if (selectedProduct === 'agents') {
      return (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="h-full p-6 space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Tasks Automated', value: dashboardData.tasksAutomated || 892, icon: Activity },
              { label: 'Patterns Learned', value: dashboardData.patternsLearned || 14, icon: Brain },
            ].map((metric, idx) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <metric.icon className="w-4 h-4 text-neutral-400 dark:text-neutral-500 mb-2" />
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{metric.label}</div>
                <motion.div 
                  key={metric.value}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="text-2xl font-bold text-neutral-900 dark:text-white"
                >
                  {metric.value}
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-3 flex items-center gap-2">
              <Brain className="w-3 h-3" />
              Recent Actions
            </div>
            <div className="space-y-2">
              {(dashboardData.actions || []).map((action: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-2 text-xs"
                >
                  <Activity className="w-3 h-3 text-sky-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-neutral-900 dark:text-white font-medium">{action.type}</div>
                    <div className="text-neutral-500 dark:text-neutral-400">{action.detail}</div>
                  </div>
                  <div className="text-neutral-400 text-xs">{action.time}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      );
    }
    return null;
  };

  return (
    <Section spacing="xl" background="gray" className="relative overflow-hidden">
      {/* Dynamic gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.1), transparent 70%)`,
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              What We Actually Build.<br />
              <span className="text-neutral-600 dark:text-neutral-400 font-light">And Why It Matters.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Four systems that solve real problems. Not features. Not complexity. Just software that works.
            </p>
          </motion.div>

          {/* Dashboard Container */}
          <div ref={containerRef} className="relative">
            {/* Main Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 25 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl shadow-neutral-900/5 dark:shadow-neutral-950/50 overflow-hidden backdrop-blur-sm"
            >
              {/* Dashboard Header */}
              <div className="px-6 md:px-8 py-5 border-b border-neutral-200/60 dark:border-neutral-800/60 bg-gradient-to-r from-neutral-50/80 via-white to-neutral-50/80 dark:from-neutral-900/80 via-neutral-900 dark:to-neutral-900/80 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2.5 h-2.5 bg-sky-500 rounded-full shadow-lg shadow-sky-500/50"
                    />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Live Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <Clock className="w-3 h-3" />
                    Real-time
                  </div>
                </div>
              </div>

              {/* Product Cards Grid */}
              <div className="p-6 md:p-8 bg-neutral-50/50 dark:bg-neutral-900/30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {products.map((product, index) => {
                    const Icon = product.icon;
                    const isHovered = hoveredProduct === product.id;
                    const isSelected = selectedProduct === product.id;

                    return (
                      <motion.button
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
                        onMouseEnter={() => setHoveredProduct(product.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        onClick={() => setSelectedProduct(product.id)}
                        className="relative group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded-2xl"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02, y: -4 }}
                          whileTap={{ scale: 0.98 }}
                          className={`
                            relative p-5 rounded-2xl border-2 transition-all duration-300 ease-out backdrop-blur-sm
                            ${isSelected 
                              ? 'border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 shadow-xl shadow-neutral-900/20 dark:shadow-neutral-100/10' 
                              : 'border-neutral-200/80 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-900/60 hover:border-sky-200 dark:hover:border-sky-900/50 hover:shadow-lg hover:shadow-sky-500/5'
                            }
                          `}
                        >
                          <div className="relative z-10">
                            <motion.div
                              animate={{ 
                                scale: isHovered || isSelected ? 1.1 : 1,
                                rotate: isHovered ? [0, -5, 5, 0] : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className={`inline-flex p-2.5 rounded-lg mb-3 ${
                                isSelected 
                                  ? 'bg-white dark:bg-neutral-900' 
                                  : 'bg-neutral-100 dark:bg-neutral-800'
                              }`}
                            >
                              <Icon className={`w-5 h-5 ${
                                isSelected 
                                  ? 'text-neutral-900 dark:text-neutral-900' 
                                  : 'text-neutral-700 dark:text-neutral-300'
                              }`} />
                            </motion.div>

                            <h3 className={`text-base font-bold mb-1.5 tracking-tight leading-tight ${
                              isSelected 
                                ? 'text-white dark:text-neutral-900' 
                                : 'text-neutral-900 dark:text-white'
                            }`}>
                              {product.solution}
                            </h3>
                            <p className={`text-xs leading-relaxed line-clamp-2 ${
                              isSelected 
                                ? 'text-white/70 dark:text-neutral-700' 
                                : 'text-neutral-600 dark:text-neutral-400'
                            }`}>
                              {product.problem.split(' ').slice(0, 9).join(' ')}...
                            </p>
                          </div>

                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="absolute top-3 right-3 w-2.5 h-2.5 bg-white dark:bg-neutral-900 rounded-full shadow-lg"
                            />
                          )}
                        </motion.div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Detailed View with Real Dashboard */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProduct}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 30 }}
                    className="relative"
                  >
                    <div className="rounded-2xl overflow-hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border border-neutral-200/60 dark:border-neutral-800/60 shadow-xl shadow-neutral-900/5 dark:shadow-neutral-950/30">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Left: Content */}
                        <div className="p-6 md:p-8 space-y-6">
                          <div className="flex items-center gap-3">
                            <motion.div 
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="p-3 rounded-xl bg-neutral-900 dark:bg-neutral-100"
                            >
                              <currentProduct.icon className="w-6 h-6 text-white dark:text-neutral-900" />
                            </motion.div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                {currentProduct.solution}
                              </h3>
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">
                              When You Need
                            </div>
                            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                              {currentProduct.problem}
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30 border-2 border-sky-200 dark:border-sky-900/50">
                            <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wide mb-2">
                              So You Get
                            </div>
                            <p className="text-base font-medium text-neutral-900 dark:text-white leading-relaxed">
                              {currentProduct.outcome}
                            </p>
                          </div>

                          <div>
                            <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wide">
                              Real Scenarios
                            </div>
                            <div className="space-y-2">
                              {currentProduct.scenarios.map((scenario, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex items-start gap-3 px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    {scenario}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3">
                              Connects To
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {currentProduct.connections.map((connection, idx) => (
                                <motion.div
                                  key={connection}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05, type: 'spring' }}
                                  whileHover={{ scale: 1.05 }}
                                  className="px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-400"
                                >
                                  {connection}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right: Real Dashboard */}
                        <div className="bg-gradient-to-br from-neutral-50/80 to-neutral-100/40 dark:from-neutral-900/40 dark:to-neutral-900/60 border-l border-neutral-200/60 dark:border-neutral-800/60 p-6 backdrop-blur-sm" style={{ minHeight: '500px' }}>
                          {renderDashboard()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
