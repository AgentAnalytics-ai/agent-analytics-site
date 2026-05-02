'use client';

import { useId } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { OFFERING_SLUGS, OFFERINGS, type OfferingSlug } from '@/data/offerings';
import { enterTransition } from '@/lib/motion';
import { PackageMiniVisual } from './PackageMiniVisual';
import { PACKAGE_ICONS } from '@/lib/offeringIcons';
import { Bot } from 'lucide-react';

/** Homepage: all four packages visible—mini visual + plain action line; whole tile links to the SKU page. */
export function HeroInteractivePanel() {
  const uid = useId();
  const listId = `${uid}-four-packages`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={enterTransition(0.12)}
      className="relative mx-auto w-full max-w-xl sm:max-w-2xl lg:mx-0 lg:ml-auto lg:max-w-[min(42rem,calc(100vw-3rem))] xl:max-w-[44rem]"
    >
      <div className="relative rounded-2xl border border-neutral-200/95 bg-white/95 px-5 py-5 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.03] backdrop-blur-sm sm:px-6 sm:py-6 dark:border-neutral-700 dark:bg-neutral-950/92 dark:ring-white/[0.05] dark:shadow-[0_28px_64px_-32px_rgba(0,0,0,0.65)]">
        <header className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-neutral-100 pb-4 dark:border-neutral-800">
          <div>
            <p
              id={`${uid}-legend`}
              className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-400 sm:text-[11px]"
            >
              Packages
            </p>
            <p className="mt-1 max-w-[16rem] text-[12px] leading-snug text-neutral-500 dark:text-neutral-400">
              Same four surfaces as <span className="text-neutral-700 dark:text-neutral-300">Offerings</span>—open any tile for the live preview.
            </p>
          </div>
          <Link
            href="/offerings"
            className="shrink-0 rounded-lg px-2 py-1 text-[12px] font-semibold text-sky-600 transition-colors hover:bg-sky-50 hover:text-sky-700 dark:text-sky-400 dark:hover:bg-sky-950/50 dark:hover:text-sky-300"
          >
            View all →
          </Link>
        </header>

        <ul
          id={listId}
          aria-labelledby={`${uid}-legend`}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3"
        >
          {OFFERING_SLUGS.map((slug) => (
            <li key={slug}>
              <PackageTile slug={slug} />
            </li>
          ))}
        </ul>

        <footer
          id={`${uid}-expert`}
          className="mt-5 flex flex-col gap-2 border-t border-neutral-100 pt-4 text-[11px] leading-relaxed text-neutral-500 dark:border-neutral-800 dark:text-neutral-400 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4"
        >
          <p className="flex min-w-0 items-start gap-2 sm:max-w-[85%]">
            <Bot className="mt-0.5 size-3.5 shrink-0 text-sky-500 dark:text-sky-400" aria-hidden />
            <span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">Expert assists</span>
              {' — '}Draft and check help; nothing customer-facing ships without your sign-off.
            </span>
          </p>
          <p className="flex shrink-0 flex-wrap gap-x-3 gap-y-1 pl-[1.375rem] sm:justify-end sm:pl-0">
            <Link href="/services" className="font-medium text-sky-600 underline-offset-4 hover:underline dark:text-sky-400">
              Services
            </Link>
            <Link href="/client-offerings-2026.html" className="font-medium text-sky-600 underline-offset-4 hover:underline dark:text-sky-400">
              Client overview
            </Link>
          </p>
        </footer>
      </div>
    </motion.div>
  );
}

function PackageTile({ slug }: { slug: OfferingSlug }) {
  const offering = OFFERINGS[slug];
  const Icon = PACKAGE_ICONS[slug];

  return (
    <Link
      href={`/offerings/${slug}`}
      className="group flex h-full flex-col rounded-xl border border-neutral-200/95 bg-neutral-50/50 p-3.5 outline-none ring-sky-500/0 transition-all duration-200 hover:-translate-y-px hover:border-sky-200/90 hover:bg-white hover:shadow-md focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:border-neutral-600/90 dark:bg-neutral-900/50 dark:hover:border-sky-700/70 dark:hover:bg-neutral-900 dark:focus-visible:ring-offset-neutral-950 sm:p-4"
    >
      <PackageMiniVisual slug={slug} />
      <div className="mt-3 flex min-w-0 items-start gap-2.5">
        <span className="mt-0.5 inline-flex shrink-0 rounded-lg border border-neutral-200/90 bg-white p-1.5 text-sky-600 shadow-sm dark:border-neutral-600 dark:bg-neutral-900 dark:text-sky-400">
          <Icon className="size-[0.9375rem]" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-xs font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-[13px]">
            {offering.shortLabel}
          </p>
          <p className="mt-1.5 line-clamp-3 text-[11px] leading-snug text-neutral-600 dark:text-neutral-400 sm:text-[12px] sm:leading-relaxed">
            {offering.heroActionLine}
          </p>
        </div>
      </div>
    </Link>
  );
}
