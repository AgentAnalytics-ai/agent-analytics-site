'use client';

import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Code,
  FileText,
  Globe,
  GraduationCap,
  Shield,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';
import { fadeUpReveal, fadeUpStagger } from '@/lib/motion';
import Button from '@/components/ui/Button';
import type { ConsultingService } from '@/data/consultingServices';
import { CONSULTING_SERVICES } from '@/data/consultingServices';
import { SERVICE_ICONS } from '@/lib/serviceIcons';
import { ServiceMiniVisual } from '@/components/services/ServiceMiniVisual';

function accentStyles(accent: ConsultingService['accent']) {
  if (accent === 'sky') {
    return {
      iconBg: 'bg-sky-50 dark:bg-sky-950/40',
      iconText: 'text-sky-600 dark:text-sky-400',
      bar: 'rgb(14, 165, 233)',
      chip: 'border-sky-100 bg-sky-50 text-sky-600 dark:border-sky-900/50 dark:bg-sky-950/40 dark:text-sky-400',
      outcomeBg:
        'border-sky-200/80 bg-gradient-to-br from-sky-50 to-white dark:border-sky-900/40 dark:from-sky-950/25 dark:to-neutral-950',
      outcomeLabel: 'text-sky-700 dark:text-sky-400',
    };
  }
  return {
    iconBg: 'bg-blue-50 dark:bg-blue-950/40',
    iconText: 'text-blue-600 dark:text-blue-400',
    bar: 'rgb(59, 130, 246)',
    chip: 'border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-950/50 dark:bg-blue-950/30 dark:text-blue-400',
    outcomeBg:
      'border-blue-200/80 bg-gradient-to-br from-blue-50 to-white dark:border-blue-900/40 dark:from-blue-950/25 dark:to-neutral-950',
    outcomeLabel: 'text-blue-700 dark:text-blue-400',
  };
}

const SYSTEM_ICONS: Record<string, LucideIcon> = {
  Analysis: BarChart3,
  Planning: Target,
  Documentation: FileText,
  Reporting: BarChart3,
  Development: Code,
  Testing: Shield,
  Deployment: Globe,
  Support: Users,
  Cloud: Globe,
  CDN: Activity,
  Security: Shield,
  Monitoring: Activity,
  Audit: FileText,
  Optimization: Zap,
  Tracking: BarChart3,
  Updates: Zap,
  Training: GraduationCap,
};

export function ServicesBrandedGrid() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <motion.div {...fadeUpReveal({ delay: 0.06, duration: 0.44 })} className="mb-10 text-center sm:mb-12">
        <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 sm:text-[11px]">
          Six tracks
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          Services
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-600 dark:text-neutral-400">
          Six ways we help—metrics on the surface, outcomes up front.
        </p>
      </motion.div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {CONSULTING_SERVICES.map((service, index) => (
          <li key={service.id}>
            <ServiceDashboardCard service={service} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceDashboardCard({ service, index }: { service: ConsultingService; index: number }) {
  const { openCalendly } = useCalendly();
  const Icon = SERVICE_ICONS[service.id];
  const a = accentStyles(service.accent);

  return (
    <motion.article
      {...fadeUpStagger(index, 0.08, 0.06)}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/[0.04] dark:border-neutral-700 dark:bg-neutral-900 dark:ring-white/[0.06]"
    >
      <div className="border-b border-slate-100 bg-slate-50/60 px-4 py-4 dark:border-neutral-800 dark:bg-neutral-900/50">
        <ServiceMiniVisual id={service.id} />
        <div className="mt-3 flex items-start gap-2.5">
          <span
            className={`mt-0.5 inline-flex shrink-0 rounded-lg border p-1.5 shadow-sm ${a.chip} dark:shadow-none`}
          >
            <Icon className="size-[0.9375rem]" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-sm font-semibold leading-snug text-neutral-900 dark:text-neutral-50">
              {service.title}
            </h3>
            <p className="mt-1.5 text-[11px] leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-[12px]">
              {service.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 py-4">
        <div className="grid grid-cols-3 gap-2">
          {service.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-slate-100 bg-slate-50/80 px-2 py-2 text-center dark:border-neutral-800 dark:bg-neutral-800/40"
            >
              <p className="text-[8px] font-semibold uppercase leading-tight tracking-wide text-slate-500 dark:text-neutral-500 sm:text-[9px]">
                {m.label}
              </p>
              <p className="mt-1 font-display text-xs font-semibold tabular-nums text-neutral-900 dark:text-neutral-100 sm:text-sm">
                {m.value}
              </p>
            </div>
          ))}
        </div>

        <div className={`rounded-xl border-2 px-3.5 py-3 ${a.outcomeBg}`}>
          <p className={`text-[9px] font-semibold uppercase tracking-[0.14em] ${a.outcomeLabel}`}>So you get</p>
          <p className="mt-2 text-[13px] font-medium leading-snug text-neutral-900 dark:text-neutral-100">{service.outcome}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <span className="sr-only">Delivery phases</span>
          {service.systems.map((sys) => {
            const SysIcon = SYSTEM_ICONS[sys] ?? Activity;
            return (
              <span
                key={sys}
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium text-neutral-800 dark:text-neutral-200 ${
                  service.accent === 'sky'
                    ? 'border-sky-100 bg-sky-50/70 dark:border-sky-900/40 dark:bg-sky-950/30'
                    : 'border-blue-100 bg-blue-50/70 dark:border-blue-900/40 dark:bg-blue-950/25'
                }`}
              >
                <SysIcon className={`size-3 shrink-0 ${a.iconText}`} aria-hidden />
                {sys}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-3 dark:border-neutral-800">
          <details className="group min-w-0 flex-1 rounded-lg border border-slate-200 bg-white dark:border-neutral-700 dark:bg-neutral-950/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-600 outline-none marker:content-none dark:text-neutral-400 [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-1.5">
                <Bot className="size-3.5 shrink-0 text-slate-400 dark:text-neutral-500" aria-hidden />
                Expert assists
              </span>
              <span className="whitespace-nowrap text-[10px] font-normal normal-case text-sky-600 group-open:hidden dark:text-sky-400">
                +
              </span>
              <span className="hidden whitespace-nowrap text-[10px] font-normal normal-case text-sky-600 group-open:inline dark:text-sky-400">
                −
              </span>
            </summary>
            <ul className="space-y-1.5 border-t border-slate-100 px-3 py-2.5 dark:border-neutral-800">
              {service.expertNotes.map((note, i) => (
                <li key={i} className="text-[11px] leading-snug text-slate-600 dark:text-neutral-400">
                  {note}
                </li>
              ))}
            </ul>
          </details>

          <details className="group min-w-0 flex-1 rounded-lg border border-slate-200 bg-white dark:border-neutral-700 dark:bg-neutral-950/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-600 outline-none marker:content-none dark:text-neutral-400 [&::-webkit-details-marker]:hidden">
              Examples
              <span className="text-[10px] font-normal normal-case text-sky-600 group-open:hidden dark:text-sky-400">
                +
              </span>
              <span className="hidden text-[10px] font-normal normal-case text-sky-600 group-open:inline dark:text-sky-400">
                −
              </span>
            </summary>
            <ul className="space-y-1.5 border-t border-slate-100 px-3 py-2.5 dark:border-neutral-800">
              {service.examples.map((ex) => (
                <li key={ex} className="flex gap-2 text-[11px] leading-snug text-slate-600 dark:text-neutral-400">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-sky-600 opacity-70 dark:text-sky-400" aria-hidden />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>

        <div className="mt-auto pt-0.5">
          <Button
            type="button"
            variant="primary"
            size="md"
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md hover:from-sky-600 hover:to-blue-700"
            onClick={() => openCalendly(CALENDLY_LINKS[service.calendly])}
          >
            {service.cta}
            <ArrowRight className="ml-2 size-4" aria-hidden />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}