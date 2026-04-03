'use client';

import React, { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MOTION_EASE, enterTransition } from '@/lib/motion';
import {
  DEFAULT_HERO_FOCUS_ID,
  HERO_FOCUS_AREAS,
  type HeroFocusArea,
  type HeroFocusId,
} from './heroFocusAreas';

function FocusPanelBody({ area }: { area: HeroFocusArea }) {
  const Icon = area.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: MOTION_EASE }}
      className="space-y-5"
    >
      <div className="rounded-2xl border border-sky-200/60 bg-sky-50/50 px-4 py-3 dark:border-sky-500/20 dark:bg-sky-950/30">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
          Might sound familiar
        </p>
        <p className="mt-1 text-sm leading-snug text-neutral-700 dark:text-neutral-200">
          {area.empathy}
        </p>
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2">
          <Icon className="size-4 text-sky-600 dark:text-sky-400" aria-hidden />
          <h3 className="font-display text-base font-semibold text-neutral-900 dark:text-white">
            {area.headline}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {area.subline}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {area.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-neutral-200/70 bg-white/60 p-3 dark:border-white/10 dark:bg-black/20"
          >
            <p className="text-[10px] font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              {m.label}
            </p>
            <p className="mt-1 font-display text-lg font-bold tabular-nums text-neutral-900 dark:text-white">
              {m.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex h-28 items-end gap-1.5 border-t border-neutral-200/70 pt-4 dark:border-white/10 sm:gap-2">
        {area.barHeights.map((h, i) => (
          <div key={i} className="flex min-h-0 flex-1 flex-col justify-end">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-sky-500/55 to-blue-400/20 dark:from-sky-500/40 dark:to-blue-500/15"
              style={{ height: `${h}%`, minHeight: '14%' }}
            />
          </div>
        ))}
      </div>

      <div className="space-y-2 border-t border-neutral-200/70 pt-4 dark:border-white/10">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Recent signals
        </p>
        <ul className="space-y-2">
          {area.activity.map((row) => (
            <li
              key={row.title}
              className="flex items-start justify-between gap-3 text-xs text-neutral-700 dark:text-neutral-300"
            >
              <span className="font-medium">{row.title}</span>
              <span className="shrink-0 text-neutral-500 dark:text-neutral-500">{row.meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function HeroInteractivePanel() {
  const uid = useId();
  const [activeId, setActiveId] = useState<HeroFocusId>(DEFAULT_HERO_FOCUS_ID);
  const active = HERO_FOCUS_AREAS.find((a) => a.id === activeId) ?? HERO_FOCUS_AREAS[0];
  const panelId = `${uid}-panel`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={enterTransition(0.12)}
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
    >
      <div
        className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-sky-400/25 via-sky-200/15 to-transparent blur-2xl dark:from-sky-500/15 dark:via-sky-600/10 dark:to-transparent"
        aria-hidden
      />

      <div
        className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-gradient-to-br from-white/80 via-white/50 to-sky-50/40 p-5 shadow-[0_24px_80px_-16px_rgba(14,165,233,0.22)] backdrop-blur-xl dark:border-white/10 dark:from-white/[0.09] dark:via-white/[0.04] dark:to-sky-950/25 dark:shadow-[0_24px_80px_-16px_rgba(0,0,0,0.55)] md:p-6"
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-400/25 blur-3xl dark:bg-sky-500/12"
          aria-hidden
        />

        <div className="mb-4 flex gap-1.5">
          <span className="size-2.5 rounded-full bg-neutral-300/90 dark:bg-white/20" />
          <span className="size-2.5 rounded-full bg-neutral-300/70 dark:bg-white/15" />
          <span className="size-2.5 rounded-full bg-neutral-300/50 dark:bg-white/10" />
        </div>

        <p
          id={`${uid}-legend`}
          className="mb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400"
        >
          Where we usually plug in
        </p>
        <p className="mb-4 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
          Quick preview—doesn&apos;t replace the full build story. Scroll for depth on each path.
        </p>

        <div
          role="tablist"
          aria-labelledby={`${uid}-legend`}
          className="mb-5 grid grid-cols-2 gap-2 lg:grid-cols-4"
        >
          {HERO_FOCUS_AREAS.map((area) => {
            const Icon = area.icon;
            const selected = area.id === activeId;
            return (
              <button
                key={area.id}
                type="button"
                role="tab"
                id={`${uid}-tab-${area.id}`}
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={0}
                onClick={() => setActiveId(area.id)}
                className={`flex flex-col items-start rounded-2xl border px-3 py-2.5 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 ${
                  selected
                    ? 'border-neutral-900 bg-neutral-900 text-white shadow-md dark:border-white dark:bg-white dark:text-neutral-900'
                    : 'border-neutral-200/90 bg-white/70 text-neutral-800 hover:border-sky-300/80 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:border-sky-500/30 dark:hover:bg-white/10'
                }`}
              >
                <Icon
                  className={`mb-1 size-4 shrink-0 ${selected ? 'text-sky-300 dark:text-sky-600' : 'text-sky-600 dark:text-sky-400'}`}
                  aria-hidden
                />
                <span className="font-display text-xs font-semibold leading-tight">{area.tabLabel}</span>
                <span
                  className={`mt-0.5 text-[10px] leading-tight ${selected ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-500 dark:text-neutral-400'}`}
                >
                  {area.tabSublabel}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mb-1 flex items-center justify-between gap-3">
          <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            {active.snapshotLabel}
          </p>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        <div
          role="tabpanel"
          id={panelId}
          aria-labelledby={`${uid}-tab-${activeId}`}
          className="min-h-[280px] sm:min-h-[300px]"
        >
          <AnimatePresence mode="wait">
            <FocusPanelBody key={active.id} area={active} />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
