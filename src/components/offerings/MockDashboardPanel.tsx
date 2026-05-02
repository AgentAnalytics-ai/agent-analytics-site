import Image from 'next/image';
import type { Offering } from '@/data/offerings';
import { PACKAGE_ICONS } from '@/lib/offeringIcons';
import { OfferingMockBrandedSurface } from '@/components/offerings/OfferingMockBrandedSurface';

export type MockDashboardDensity = 'default' | 'compact';

/**
 * Offering detail preview: branded surface matches homepage package vignettes (browser / workspace / phone / portal).
 */
export function MockDashboardPanel({
  offering,
  density = 'default',
}: {
  offering: Offering;
  density?: MockDashboardDensity;
}) {
  const dense = density === 'compact';
  const Icon = PACKAGE_ICONS[offering.slug];

  return (
    <div
      className={
        dense
          ? 'relative overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-[0_16px_40px_-14px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.04] dark:bg-neutral-950 dark:border-neutral-700 dark:text-neutral-100 dark:ring-white/[0.06]'
          : 'relative overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-[0_24px_48px_-14px_rgba(15,23,42,0.1)] ring-1 ring-slate-900/[0.04] dark:bg-neutral-950 dark:border-neutral-700 dark:text-neutral-100 dark:ring-white/[0.06]'
      }
    >
      <header
        className={
          dense
            ? 'border-b border-slate-200 px-3 py-2.5 dark:border-neutral-700'
            : 'border-b border-slate-200 px-4 py-3 sm:py-3.5 dark:border-neutral-700'
        }
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
            <div
              className={
                dense
                  ? 'shrink-0 rounded-lg bg-[#101c37] px-2 py-1.5 ring-1 ring-white/10'
                  : 'shrink-0 rounded-lg bg-[#101c37] px-3 py-2 ring-1 ring-white/10'
              }
            >
              <Image
                src="/images/agent-analytics-logo.png"
                alt=""
                role="presentation"
                width={200}
                height={56}
                className={
                  dense
                    ? 'h-7 w-auto max-w-[6.5rem] object-contain object-left'
                    : 'h-8 w-auto max-w-[7.5rem] object-contain object-left sm:h-9 sm:max-w-[8rem]'
                }
                sizes="128px"
              />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={
                    dense
                      ? 'inline-flex rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
                      : 'inline-flex rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
                  }
                >
                  {offering.surfaceCue}
                </span>
                <span className="inline-flex rounded-lg border border-sky-100 bg-sky-50 p-1 text-sky-600 dark:border-sky-900/60 dark:bg-sky-950/50 dark:text-sky-400">
                  <Icon className={dense ? 'size-3.5' : 'size-[0.9375rem]'} aria-hidden />
                </span>
              </div>
              <p
                className={
                  dense
                    ? 'mt-0.5 truncate font-display text-[12px] font-semibold tracking-tight text-slate-900 dark:text-neutral-50'
                    : 'mt-1 font-display text-sm font-semibold tracking-tight text-slate-900 sm:text-[15px] dark:text-neutral-50'
                }
              >
                {offering.shortLabel}
              </p>
              <p className={dense ? 'mt-0 line-clamp-2 text-[10px] text-slate-500 dark:text-neutral-400' : 'mt-1 line-clamp-2 text-[11px] text-slate-500 sm:text-[12px] dark:text-neutral-400'}>
                {offering.dashboardChrome.flavorLine}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1.5">
            <p
              className={
                dense ? 'hidden text-[9px] text-slate-500 sm:block dark:text-neutral-400' : 'text-right text-[10px] text-slate-500 dark:text-neutral-400'
              }
            >
              {offering.dashboardChrome.sessionLine}
            </p>
            <div
              className="pointer-events-none inline-flex divide-x divide-slate-200 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 text-[10px] font-medium shadow-sm ring-1 ring-slate-900/[0.03] dark:divide-neutral-600 dark:border-neutral-600 dark:bg-neutral-800/90"
              aria-hidden
            >
              <span className="px-2 py-1.5 text-slate-700 dark:text-neutral-200">
                {offering.dashboardChrome.actionLeft}
              </span>
              <span className="border-l border-slate-200 px-2 py-1.5 text-slate-700 dark:border-neutral-600 dark:text-neutral-200">
                {offering.dashboardChrome.actionRight}
              </span>
            </div>
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[9px] font-medium text-slate-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
              Sample preview
            </span>
          </div>
        </div>
      </header>

      <OfferingMockBrandedSurface offering={offering} dense={dense} />
    </div>
  );
}
