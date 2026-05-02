import type { ReactElement } from 'react';
import type { Offering, OfferingSlug } from '@/data/offerings';

const lineTone: Record<string, string> = {
  positive: 'border-l-sky-600 dark:border-l-sky-400',
  accent: 'border-l-sky-500 dark:border-l-sky-400',
  neutral: 'border-l-slate-300 dark:border-l-neutral-600',
};

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(' ');
}

function AgentAssistStrip({ offering, dense }: { offering: Offering; dense: boolean }) {
  if (!offering.agentFeed) return null;
  return (
    <div
      className={cx(
        'border-t border-slate-200 bg-slate-50/80 dark:border-neutral-700 dark:bg-neutral-900/40',
        dense ? 'px-3 py-2.5' : 'px-4 py-3',
      )}
    >
      <p
        className={cx(
          'font-semibold uppercase tracking-wider text-slate-500 dark:text-neutral-400',
          dense ? 'mb-1.5 text-[9px]' : 'mb-2 text-[10px]',
        )}
      >
        {offering.agentFeed.title}
      </p>
      <div className={cx('flex flex-col gap-1.5', dense && 'gap-1')}>
        {offering.agentFeed.activities.map((a, i) => (
          <div
            key={i}
            className={cx(
              'flex items-start justify-between gap-2 rounded-lg border border-slate-200/90 bg-white dark:border-neutral-600 dark:bg-neutral-950',
              dense ? 'px-2 py-1.5 text-[10px]' : 'px-2.5 py-2 text-[11px]',
            )}
          >
            <div className="min-w-0">
              <span className="font-semibold text-slate-800 dark:text-neutral-200">{a.agent}</span>
              <p className={cx('text-slate-600 dark:text-neutral-400', dense ? 'mt-0 leading-snug' : 'mt-0.5')}>
                {a.action}
              </p>
            </div>
            <span className="shrink-0 tabular-nums text-slate-400 dark:text-neutral-500">{a.time}</span>
          </div>
        ))}
      </div>
      <p className={cx('text-slate-500 dark:text-neutral-500', dense ? 'mt-1.5 text-[9px]' : 'mt-2 text-[10px]')}>
        Demo only—nothing goes live until your team approves.
      </p>
    </div>
  );
}

/** Browser chrome + page bands—matches homepage “marketing site” vignette. */
function SurfaceWebsite({ offering, dense }: { offering: Offering; dense: boolean }) {
  const p = dense ? 'p-3' : 'p-4';
  const barH = dense ? 'h-8' : 'h-9';
  return (
    <div className="rounded-xl border border-slate-300/90 bg-slate-100 p-1 shadow-inner dark:border-neutral-600 dark:bg-neutral-900/80">
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
        <div
          className={cx(
            'flex items-center gap-2 bg-[#101c37] px-3',
            barH,
          )}
        >
          <div className="flex gap-1" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-slate-500" />
            <span className="h-2 w-2 rounded-full bg-slate-500" />
            <span className="h-2 w-2 rounded-full bg-slate-500" />
          </div>
          <div className="min-w-0 flex-1 rounded bg-slate-900/60 px-2 py-1 text-[10px] text-slate-400 truncate dark:text-slate-500">
            yourbrand.com · {offering.dashboardChrome.actionLeft.toLowerCase()}
          </div>
        </div>
        <div className={cx(p, 'space-y-3')}>
          <div
            className={cx(
              'rounded-lg bg-gradient-to-br from-sky-100 via-sky-50 to-white ring-1 ring-sky-200/60 dark:from-sky-950/50 dark:via-neutral-950 dark:to-neutral-950 dark:ring-sky-900/40',
              dense ? 'h-10' : 'h-14',
            )}
          />
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-neutral-500">
              {offering.prospectFeed.title}
            </p>
            {offering.prospectFeed.lines.map((line, i) => (
              <div
                key={i}
                className={cx(
                  'border-l-4 bg-slate-50 py-2 pl-3 pr-2 dark:bg-neutral-900/60',
                  lineTone[line.tone ?? 'neutral'],
                )}
              >
                <p className="text-xs font-semibold text-slate-900 dark:text-neutral-100">{line.left}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-slate-600 dark:text-neutral-400">{line.right}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Inbox rail + mail card—matches GTM mini visual. */
function SurfaceGtm({ offering, dense }: { offering: Offering; dense: boolean }) {
  const lines = offering.prospectFeed.lines;
  return (
    <div className="rounded-xl border border-slate-300/90 bg-slate-50 p-1.5 dark:border-neutral-600 dark:bg-neutral-900/80">
      <div className="flex gap-2 overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
        <div
          className={cx(
            'w-[38%] shrink-0 border-r border-slate-200 bg-slate-50/90 dark:border-neutral-700 dark:bg-neutral-900/50',
            dense ? 'p-2' : 'p-2.5',
          )}
        >
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-slate-400 dark:text-neutral-500">
            Workspace
          </p>
          <ul className="space-y-1.5">
            {lines.map((line, i) => (
              <li
                key={i}
                className={cx(
                  'rounded-md border border-transparent px-2 py-1.5 text-[11px] font-medium text-slate-800 dark:text-neutral-200',
                  i === 0 && 'border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-950/40',
                  i !== 0 && 'text-slate-600 dark:text-neutral-400',
                )}
              >
                {line.left}
              </li>
            ))}
          </ul>
        </div>
        <div className={cx('min-w-0 flex-1 space-y-2', dense ? 'p-2' : 'p-2.5')}>
          <div className="rounded-lg border border-sky-200 bg-sky-50/80 p-2.5 shadow-sm dark:border-sky-800/60 dark:bg-sky-950/30">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-sky-800/80 dark:text-sky-300/90">
              Outbound
            </p>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full max-w-[85%] rounded-full bg-sky-300/70 dark:bg-sky-600/40" />
              <div className="h-1.5 w-full max-w-[65%] rounded-full bg-sky-200/80 dark:bg-sky-700/30" />
            </div>
            <p className="mt-2 text-[11px] leading-snug text-slate-700 dark:text-neutral-300">{lines[2]?.right ?? lines[0].right}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-2 dark:border-neutral-600 dark:bg-neutral-950">
            <p className="text-[10px] font-semibold text-slate-800 dark:text-neutral-200">{lines[1]?.left ?? 'Records'}</p>
            <p className="mt-1 text-[11px] leading-snug text-slate-600 dark:text-neutral-400">{lines[1]?.right}</p>
            <div className="mt-2 h-2 w-2/3 rounded bg-slate-200 dark:bg-neutral-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Phone-style frame + hero + CTA—matches landing lab vignette. */
function SurfaceLanding({ offering, dense }: { offering: Offering; dense: boolean }) {
  const lines = offering.prospectFeed.lines;
  return (
    <div className="flex justify-center">
      <div
        className={cx(
          'w-full max-w-[220px] rounded-[1.35rem] border-2 border-slate-300 bg-slate-100 p-1.5 shadow-md dark:border-neutral-600 dark:bg-neutral-800/80',
          !dense && 'sm:max-w-[240px]',
        )}
      >
        <div className="overflow-hidden rounded-[1.1rem] border border-slate-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
          <div className="h-2.5 bg-slate-200 dark:bg-neutral-800" aria-hidden />
          <div className={cx(dense ? 'space-y-2.5 px-3 py-3' : 'space-y-3 px-3.5 py-4')}>
            <div className="mx-auto h-1.5 w-16 rounded-full bg-slate-200 dark:bg-neutral-700" aria-hidden />
            <div className={cx('rounded-xl bg-gradient-to-b from-sky-100 to-sky-50 ring-1 ring-sky-200/70 dark:from-sky-950/70 dark:to-neutral-950 dark:ring-sky-900/40', dense ? 'h-16' : 'h-[4.25rem]')} />
            <ul className="space-y-1.5">
              {lines.map((line, i) => (
                <li key={i} className="text-[10px] leading-snug text-slate-600 dark:text-neutral-400">
                  <span className="font-semibold text-slate-900 dark:text-neutral-200">{line.left}.</span>{' '}
                  {line.right}
                </li>
              ))}
            </ul>
            <div className="flex justify-center pt-0.5">
              <div
                className={cx(
                  'rounded-full bg-sky-600 px-5 py-2 text-center text-[10px] font-semibold text-white shadow-sm dark:bg-sky-500',
                  dense && 'px-4 py-1.5',
                )}
              >
                {offering.dashboardChrome.actionRight}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Avatar + account panels—matches client portal vignette. */
function SurfacePortal({ offering, dense }: { offering: Offering; dense: boolean }) {
  const lines = offering.prospectFeed.lines;
  return (
    <div className="rounded-xl border border-slate-300/90 bg-slate-50 p-1.5 dark:border-neutral-600 dark:bg-neutral-900/80">
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
        <div className={cx('flex gap-3', dense ? 'p-3' : 'p-4')}>
          <div className="flex shrink-0 flex-col items-center gap-2">
            <div
              className={cx(
                'rounded-full bg-sky-100 ring-2 ring-sky-200 dark:bg-sky-950/60 dark:ring-sky-800',
                dense ? 'h-14 w-14' : 'h-16 w-16',
              )}
            >
              <div className="flex h-full items-center justify-center">
                <div className={cx('rounded-full bg-[#101c37]', dense ? 'h-7 w-7' : 'h-8 w-8')} aria-hidden />
              </div>
            </div>
            <span className="text-[9px] font-medium text-slate-500 dark:text-neutral-400">Account</span>
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-neutral-500">
              {offering.prospectFeed.title}
            </p>
            <div className="space-y-2">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 bg-slate-50/80 px-2.5 py-2 dark:border-neutral-700 dark:bg-neutral-900/50"
                >
                  <div className="h-1.5 w-12 rounded-full bg-sky-200/90 dark:bg-sky-900/60" />
                  <p className="mt-1.5 text-xs font-semibold text-slate-900 dark:text-neutral-100">{line.left}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-600 dark:text-neutral-400">{line.right}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SURFACE_BY_SLUG: Record<
  OfferingSlug,
  (props: { offering: Offering; dense: boolean }) => ReactElement
> = {
  website: SurfaceWebsite,
  'gtm-engine': SurfaceGtm,
  'landing-lab': SurfaceLanding,
  'client-portal': SurfacePortal,
};

export function OfferingMockBrandedSurface({ offering, dense }: { offering: Offering; dense: boolean }) {
  const Surface = SURFACE_BY_SLUG[offering.slug];
  return (
    <div className={cx(dense ? 'space-y-0' : 'space-y-0')}>
      <div className={dense ? 'p-3' : 'p-4'}>
        <Surface offering={offering} dense={dense} />
      </div>
      <AgentAssistStrip offering={offering} dense={dense} />
    </div>
  );
}
