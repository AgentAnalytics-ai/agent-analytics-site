'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { fadeUpReveal, fadeUpStagger } from '@/lib/motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import {
  Globe,
  FileText,
  Zap,
  Brain,
  Users,
  CreditCard,
  TrendingUp,
  Activity,
  Clock,
  LucideIcon,
} from 'lucide-react';
import { OFFERINGS, type OfferingSlug } from '@/data/offerings';

/**
 * One lane = one job-to-be-done. Cards use a hook only; the panel carries fit, outcome, and plays—no shared sentences between layers.
 */
interface ShowcaseLane {
  id: string;
  category: string;
  /** Picker-only line—must not repeat `fit` or `outcome`. */
  cardHook: string;
  /** Full “where this applies” copy—only in the detail panel. */
  fit: string;
  /** Operating result—complementary grammar to `fit`, not a restatement. */
  outcome: string;
  /** Consultant-style guardrail: how we’d scope or sequence this. */
  deliveryNote: string;
  /** Right column: one-line “why this snapshot exists.” */
  previewCaption: string;
  /** Map delivery pattern → packaged offering pages (context is unique; link labels come from `OFFERINGS`). */
  offeringRefs: readonly { slug: OfferingSlug; context: string }[];
  icon: LucideIcon;
  connections: string[];
  /** Concrete micro-plays; avoid echoing `outcome` verbatim. */
  plays: string[];
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

  const lanes: ShowcaseLane[] = [
    {
      id: 'portals',
      category: 'Client portals',
      cardHook: 'Contracts, invoices, tickets—one signed-in lane.',
      fit: 'Renewals and receipts are living in email instead of governed access.',
      outcome: 'Self‑serve workflows; signatures and billing events reconcile cleanly.',
      deliveryNote: 'Ship identity · audit trails · roles before pixel polish.',
      previewCaption: 'Sample throughput only.',
      offeringRefs: [
        { slug: 'client-portal', context: 'Primary quote for authenticated client tools.' },
        { slug: 'website', context: 'Public capture often runs beside the portal sprint.' },
      ],
      icon: FileText,
      connections: ['CRM', 'Payments', 'Identity', 'Storage'],
      plays: ['Countersign kicks billing + CRM.', 'Billing updates without tickets.', 'SLA case visible to the client'],
    },
    {
      id: 'sales',
      category: 'Pipeline & RevOps',
      cardHook: 'Stages, transcripts, handoffs—without spreadsheet theater.',
      fit: 'Pipeline truth is split across CRM, calendar, and notes.',
      outcome: 'Instrumented exits; forecasts earn the number.',
      deliveryNote: 'Measure aging before branching nurture automation.',
      previewCaption: 'Sample motion only.',
      offeringRefs: [
        { slug: 'landing-lab', context: 'Campaign landings + measurement.' },
        { slug: 'gtm-engine', context: 'Handoffs beside the cockpit.' },
      ],
      icon: Zap,
      connections: ['CRM', 'Email', 'Calendar', 'Dialer API'],
      plays: ['Form → scored owner in SLA.', 'Transcript feeds implementation.', 'Demo no‑show branches itself'],
    },
    {
      id: 'applications',
      category: 'Websites & custom apps',
      cardHook: 'Public pages + authenticated tools sharing one backbone.',
      fit: 'Marketers need velocity; ops need guarded workflows.',
      outcome: 'One design system · typed integrations · sane releases.',
      deliveryNote: 'Split marketer blocks from application logic.',
      previewCaption: 'Sample health snapshot.',
      offeringRefs: [
        { slug: 'website', context: 'Public marketing surfaces.' },
        { slug: 'client-portal', context: 'Signed-in tooling & vendor rooms.' },
      ],
      icon: Globe,
      connections: ['Edge CDN', 'APIs', 'Auth', 'Analytics'],
      plays: ['Structural authoring vs hardened shell.', 'Schema‑checked forms.', 'Flags carve releases by cohort'],
    },
    {
      id: 'agents',
      category: 'Workflow agents',
      cardHook: 'Triage · route · summarize—humans approve the brittle paths.',
      fit: 'Repetitive work leaks across consoles; noise hides real escalation.',
      outcome: 'Clean queues · receipts · rollback when outliers spike.',
      deliveryNote: 'SLA + checkpoints first—widen autonomy with proof.',
      previewCaption: 'Sample runs · illustrative.',
      offeringRefs: [
        { slug: 'gtm-engine', context: 'Queues + approvals with the cockpit.' },
        { slug: 'landing-lab', context: 'Fast iterate loops beside landings.' },
      ],
      icon: Brain,
      connections: ['Mailbox', 'Queue', 'Vector store', 'Webhooks'],
      plays: ['Classify + page only above threshold.', 'Idempotent retries with alerts.', 'Playbooks promote after approvals'],
    },
  ];

  const currentLane = lanes.find((p) => p.id === selectedProduct) || lanes[0];

  /** Lightweight “bam”—two twitching numbers + two feed lines only. */
  useEffect(() => {
    function pulse() {
      if (selectedProduct === 'portals') {
        setDashboardData({
          n1: Math.floor(Math.random() * 42) + 158,
          n2: Math.floor(Math.random() * 14) + 33,
          feed: [
            { title: 'Countersign posted', meta: 'Invoice run queued', tag: 'now' },
            { title: 'SLA case visible', meta: 'Client · renewal block', tag: '2m' },
          ],
        });
      } else if (selectedProduct === 'sales') {
        setDashboardData({
          n1: Math.floor(Math.random() * 28) + 128,
          n2: Math.floor(Math.random() * 7) + 21,
          feed: [
            { title: 'Demo → implementation', meta: 'Transcript + scope packet', tag: 'now' },
            { title: 'Stage exit met', meta: 'Qualified → technical win', tag: '6m' },
          ],
        });
      } else if (selectedProduct === 'applications') {
        setDashboardData({
          n1: Math.floor(Math.random() * 4) + 97,
          n2: Math.floor(Math.random() * 4) + 11,
          feed: [
            { title: 'Edge deploy', meta: 'Marketing rail · cache warm', tag: 'now' },
            { title: 'Auth path trace', meta: 'Tenant session · clean', tag: '4m' },
          ],
        });
      } else {
        setDashboardData({
          n1: Math.floor(Math.random() * 220) + 880,
          n2: Math.floor(Math.random() * 5) + 11,
          feed: [
            { title: 'Sync replay OK', meta: 'CRM → billing · idempotent', tag: 'now' },
            { title: 'Human checkpoint', meta: 'Above SLA · flagged', tag: '1m' },
          ],
        });
      }
    }
    pulse();
    const interval = setInterval(pulse, 2600);
    return () => clearInterval(interval);
  }, [selectedProduct]);

  const renderMomentumPulse = () => {
    const d = dashboardData as {
      n1?: number;
      n2?: number;
      feed?: { title: string; meta: string; tag: string }[];
    };

    const stat = (
      label: string,
      value: number | string,
      Icon: LucideIcon,
      sub?: string,
    ) => (
      <motion.div
        variants={itemVariants}
        className="rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm ring-1 ring-black/[0.02] dark:border-neutral-800 dark:bg-neutral-950 dark:ring-white/[0.05]"
      >
        <Icon className="mb-2 size-4 text-sky-500/70 dark:text-sky-400/80" aria-hidden />
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500">{label}</p>
        <motion.p
          key={String(value)}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          className="mt-2 font-display text-2xl font-bold tabular-nums tracking-tight text-neutral-900 dark:text-white md:text-[1.75rem]"
        >
          {value}
          {sub ?? ''}
        </motion.p>
      </motion.div>
    );

    const feedItems = (d.feed ?? []).slice(0, 2);

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex h-full min-h-[240px] flex-col p-5 md:p-6"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
          {currentLane.previewCaption}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {selectedProduct === 'portals' && (
            <>
              {stat('Active sessions', d.n1 ?? 172, Users)}
              {stat('Payments cleared', d.n2 ?? 38, CreditCard)}
            </>
          )}
          {selectedProduct === 'sales' && (
            <>
              {stat('Touches today', d.n1 ?? 142, Zap)}
              {stat('Handshake ready', d.n2 ?? 26, TrendingUp, '%')}
            </>
          )}
          {selectedProduct === 'applications' && (
            <>
              {stat('Route health', d.n1 ?? 98, Activity, '%')}
              {stat('Shipped this mo.', d.n2 ?? 12, Globe)}
            </>
          )}
          {selectedProduct === 'agents' && (
            <>
              {stat('Runs today', d.n1 ?? 1040, Activity)}
              {stat('Queued for human', d.n2 ?? 14, Brain)}
            </>
          )}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-5 rounded-2xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50/80 p-3.5 dark:border-neutral-800 dark:from-neutral-950 dark:to-neutral-900/80"
        >
          <div className="mb-2.5 flex items-center justify-between gap-2 border-b border-neutral-100 pb-2 dark:border-neutral-800">
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500">
              Live-ish
            </span>
          </div>
          <div className="space-y-2.5">
            {feedItems.map((row) => (
              <div key={row.title + row.meta} className="flex items-center justify-between gap-2 rounded-lg bg-white/80 px-2.5 py-2 dark:bg-neutral-950/60">
                <div className="min-w-0">
                  <p className="text-xs font-semibold leading-tight text-neutral-900 dark:text-white">{row.title}</p>
                  <p className="truncate text-[10px] text-neutral-500 dark:text-neutral-400">{row.meta}</p>
                </div>
                <span className="shrink-0 rounded-md bg-sky-500/10 px-2 py-0.5 font-mono text-[10px] font-medium tabular-nums text-sky-700 dark:bg-sky-500/15 dark:text-sky-400">
                  {row.tag}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
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
          <motion.div {...fadeUpReveal()} className="mb-10 text-center md:mb-14">
            <p className="mx-auto mb-3 font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-400 sm:text-[11px]">
              Delivery snapshot
            </p>
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
              Four lanes<span className="text-neutral-500 dark:text-neutral-400">—see the pulse.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-neutral-600 dark:text-neutral-400 md:text-base">
              Tap a lane. Left = story. Right = motion. Packaging stays on Offerings—not here.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Link
                href="/offerings"
                className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-neutral-800 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-sky-600 dark:hover:text-sky-400"
              >
                Open Offerings
              </Link>
              <Link
                href="/client-offerings-2026.html"
                className="inline-flex rounded-full border border-transparent bg-neutral-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
              >
                Client overview
              </Link>
            </div>
          </motion.div>

          {/* Dashboard Container */}
          <div ref={containerRef} className="relative">
            {/* Main Dashboard Card */}
            <motion.div
              {...fadeUpReveal({ delay: 0.12, y: 24 })}
              className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-2xl shadow-neutral-900/[0.06] ring-1 ring-black/[0.03] dark:border-neutral-800/80 dark:bg-neutral-900 dark:shadow-neutral-950/50 dark:ring-white/[0.05]"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#101c37] px-5 py-3.5 md:px-8">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="flex shrink-0 gap-1" aria-hidden>
                    <span className="size-2 rounded-full bg-slate-500/90" />
                    <span className="size-2 rounded-full bg-slate-500/90" />
                    <span className="size-2 rounded-full bg-slate-500/90" />
                  </span>
                  <span className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-sky-200/95">
                    Agent Analytics · build preview
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-sky-200/70">
                  <Clock className="size-3 opacity-80" aria-hidden />
                  Sample
                </div>
              </div>

              {/* Product Cards Grid */}
              <div className="bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(224,242,254,0.45)_0%,transparent_55%)] p-5 dark:bg-[radial-gradient(ellipse_90%_50%_at_50%_-15%,rgba(56,189,248,0.07)_0%,transparent_50%)] md:p-8">
                <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                  {lanes.map((lane, index) => {
                    const Icon = lane.icon;
                    const isHovered = hoveredProduct === lane.id;
                    const isSelected = selectedProduct === lane.id;

                    return (
                      <motion.button
                        key={lane.id}
                        {...fadeUpStagger(index, 0.06, 0.095)}
                        onMouseEnter={() => setHoveredProduct(lane.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        onClick={() => setSelectedProduct(lane.id)}
                        className="relative group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded-2xl"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02, y: -4 }}
                          whileTap={{ scale: 0.98 }}
                            className={`
                            relative rounded-2xl border-2 p-4 transition-all duration-300 ease-out sm:p-5
                            ${isSelected 
                              ? 'border-[#101c37] bg-[#101c37] shadow-lg shadow-slate-900/25 dark:border-sky-500/40 dark:bg-neutral-950 dark:shadow-sky-950/40 dark:ring-1 dark:ring-sky-500/20' 
                              : 'border-neutral-200/90 bg-white/95 dark:border-neutral-800 dark:bg-neutral-900/70 hover:border-sky-300/60 dark:hover:border-sky-700/50'
                            }
                          `}
                        >
                          <div className="relative z-10">
                            <motion.div
                              animate={{ 
                                scale: isHovered || isSelected ? 1.08 : 1,
                                rotate: isHovered ? [0, -5, 5, 0] : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className={`mb-2.5 inline-flex rounded-xl p-2.5 ${
                                isSelected 
                                  ? 'bg-white/15 dark:bg-sky-950/50' 
                                  : 'bg-sky-50 dark:bg-sky-950/40'
                              }`}
                            >
                              <Icon className={`size-5 ${
                                isSelected 
                                  ? 'text-white dark:text-sky-300' 
                                  : 'text-sky-600 dark:text-sky-400'
                              }`} />
                            </motion.div>

                            <h3 className={`font-display text-sm font-bold leading-snug tracking-tight sm:text-base ${
                              isSelected 
                                ? 'text-white dark:text-white' 
                                : 'text-neutral-900 dark:text-white'
                            }`}>
                              {lane.category}
                            </h3>
                            <p className={`mt-1.5 line-clamp-1 text-[11px] leading-snug sm:line-clamp-2 ${
                              isSelected 
                                ? 'text-white/75 dark:text-neutral-400' 
                                : 'text-neutral-500 dark:text-neutral-400'
                            }`}>
                              {lane.cardHook}
                            </p>
                          </div>

                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="absolute right-3 top-3 size-2.5 rounded-full bg-white shadow-lg ring-2 ring-white/40 dark:bg-sky-400 dark:ring-sky-400/50"
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
                    <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-lg shadow-neutral-900/[0.04] dark:border-neutral-800/70 dark:bg-neutral-950">
                      <div className="grid gap-0 md:grid-cols-2 md:divide-x md:divide-neutral-200/80 dark:md:divide-neutral-800/80">
                        {/* Pulse first on phones */}
                        <div className="order-1 md:order-2 border-b border-neutral-200/80 bg-gradient-to-b from-neutral-50 to-neutral-50/30 dark:border-neutral-800/80 dark:from-neutral-900/95 dark:to-neutral-950 md:border-b-0">
                          {renderMomentumPulse()}
                        </div>

                        <div className="order-2 space-y-5 p-6 md:order-1 md:p-8">
                          <div className="flex items-start gap-3">
                            <div className="rounded-2xl bg-[#101c37] p-3 shadow-inner ring-2 ring-black/10 dark:ring-white/15">
                              <currentLane.icon className="size-6 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-2xl">
                                {currentLane.category}
                              </h3>
                              <p className="mt-1 text-xs leading-snug text-sky-700 dark:text-sky-400/90">{currentLane.deliveryNote}</p>
                            </div>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-900/50">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-400 dark:text-neutral-500">
                                Fits when
                              </p>
                              <p className="mt-2 text-sm font-medium leading-snug text-neutral-800 dark:text-neutral-200">{currentLane.fit}</p>
                            </div>
                            <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/90 to-white p-4 dark:border-sky-900/35 dark:from-sky-950/20 dark:to-neutral-950">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-600 dark:text-sky-400">
                                Outcome
                              </p>
                              <p className="mt-2 text-sm font-semibold leading-snug text-neutral-900 dark:text-white">{currentLane.outcome}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500">
                              Scoped on Offerings
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {currentLane.offeringRefs.map((ref) => (
                                <Link
                                  key={ref.slug}
                                  href={`/offerings/${ref.slug}`}
                                  title={ref.context}
                                  className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#101c37] shadow-sm transition hover:border-sky-300 hover:bg-sky-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-sky-200 dark:hover:border-sky-600 dark:hover:bg-sky-950/40"
                                >
                                  {OFFERINGS[ref.slug].shortLabel}
                                  <span className="text-neutral-400 dark:text-neutral-500" aria-hidden>
                                    →
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500">
                              Moves
                            </p>
                            <ul className="space-y-1.5">
                              {currentLane.plays.map((play) => (
                                <li key={play} className="flex gap-2 text-sm leading-snug text-neutral-700 dark:text-neutral-300">
                                  <span className="mt-2 inline-block size-1 shrink-0 rounded-full bg-sky-400" aria-hidden />
                                  <span>{play}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                            {currentLane.connections.map((connection) => (
                              <span
                                key={connection}
                                className="rounded-md bg-neutral-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-neutral-600 dark:bg-neutral-800/80 dark:text-neutral-400"
                              >
                                {connection}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <details className="group border-t border-white/10 bg-[#101c37] px-5 py-4 md:px-8">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-200/90 outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                          <span>Same rail across every package · optional technical sketch</span>
                          <span className="text-sky-300/70 transition group-open:rotate-180">▼</span>
                        </summary>
                        <div className="mt-4 overflow-x-auto">
                          <div className="mb-4 flex min-w-[260px] flex-wrap items-center justify-center gap-x-1 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-sky-100/90 md:justify-start md:gap-x-2">
                            {(['Ingest', 'Scrub', 'Playbook', 'Human gate', 'CRM / webhook'] as const).map((step, i, arr) => (
                              <span key={step} className="flex flex-wrap items-center gap-x-2">
                                <span className="whitespace-nowrap rounded-lg border border-white/15 bg-white/10 px-2.5 py-1">{step}</span>
                                {i < arr.length - 1 ? <span aria-hidden className="text-white/35">→</span> : null}
                              </span>
                            ))}
                          </div>
                          <p className="mb-3 max-w-prose text-xs leading-relaxed text-sky-100/65">
                            Surfaces swap; receipts and gates don&apos;t.&nbsp;
                            <Link href="/offerings" className="font-semibold text-white underline underline-offset-2 hover:text-sky-200">
                              Packages
                            </Link>
                            {' —pick lanes there.'}
                          </p>
                          <pre className="overflow-x-auto rounded-xl border border-white/15 bg-black/25 p-3 font-mono text-[10px] leading-relaxed text-sky-50/95" tabIndex={0}>
                            {`handle(signal, surface):
  scrub(signal)
  route = playbook.for(surface, YOU)
  if !route.allows(signal): return HOLD
  dispatch(route.hooks); return receipt(signal.id)`}
                          </pre>
                        </div>
                      </details>
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
