'use client';

import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';

const orbitDots = [
  { size: 320, left: '5%', top: '6%', delay: 0 },
  { size: 240, left: '65%', top: '12%', delay: 1.5 },
];

const serviceHighlights = [
  {
    title: 'Agentic Workflows',
    copy: 'Portals and web apps that act intelligently while keeping teams in control.',
  },
  {
    title: 'Operational Momentum',
    copy: 'Fast, confident releases with measurable clarity every step of the way.',
  },
  {
    title: 'Observability & Trust',
    copy: 'Live telemetry and dashboards that prove everything is under watch.',
  },
];

const metrics = [
  { label: 'Live Flow', value: '02.48s', detail: 'Response time' },
  { label: 'Workflow Confidence', value: '93%', detail: 'Autonomous tasks synced' },
  { label: 'Signal Span', value: '11.2k', detail: 'Ops per minute' },
];

export default function TestPage() {
  const { openCalendly } = useCalendly();

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 text-gray-900">
      {orbitDots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white/60 blur-[120px]"
          style={{ width: dot.size, height: dot.size, left: dot.left, top: dot.top }}
          animate={{ x: ['0%', '25%', '-20%', '0%'], opacity: [0.15, 0.5, 0.15], y: ['0%', '-8%', '8%', '0%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: dot.delay }}
        />
      ))}

      <Container className="relative z-10 flex min-h-screen flex-col justify-center px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="space-y-5">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Strategic Intelligence in Action
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 max-w-3xl">
              We build agentic websites, portals, and web apps that move with your business—clear, confident, and ready for elite operators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" className="px-10 py-3" onClick={() => openCalendly(CALENDLY_LINKS.talkStrategy)}>
                Say Yes, Let's Build
              </Button>
              <Button variant="outline" size="lg" className="px-10 py-3" onClick={() => (window.location.href = '/about')}>
                See the playbook
              </Button>
            </div>
          </div>

          <motion.div
            className="rounded-[40px] border border-white/60 bg-white/90 p-10 shadow-[0_45px_120px_rgba(15,23,42,0.18)] backdrop-blur-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="grid gap-6 md:grid-cols-3">
              {serviceHighlights.map(service => (
                <motion.div
                  key={service.title}
                  className="rounded-2xl bg-slate-50/70 p-6 shadow-[0_14px_30px_rgba(15,23,42,0.08)] border border-white/80"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500">{service.copy}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {metrics.map(metric => (
                <motion.div
                  key={metric.label}
                  className="rounded-3xl bg-slate-900/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.35)]"
                  animate={{ y: [0, -6, 0], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-2">{metric.label}</p>
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">{metric.detail}</p>
                  <div className="mt-3 h-1.5 rounded-full bg-white/20 overflow-hidden">
                    <motion.span
                      className="block h-full bg-gradient-to-r from-sky-400 to-blue-500"
                      animate={{ scaleX: [0.6, 1, 0.6] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

