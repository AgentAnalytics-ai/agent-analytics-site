import Link from 'next/link';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import type { OfferingSlug } from '@/data/offerings';
import { OFFERING_SLUGS, OFFERINGS } from '@/data/offerings';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { PACKAGE_ICONS } from '@/lib/offeringIcons';
import { PackageMiniVisual } from '@/components/home/PackageMiniVisual';

export function OfferingsHub() {
  return (
    <>
      <Section spacing="lg" background="gray" className="pb-10 pt-10 md:pt-14">
        <Container>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-800 dark:text-sky-300">
            <LayoutGrid className="h-4 w-4" aria-hidden />
            Four packages
          </div>
          <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
            Start with your public site—add launches, workspace, or a portal only when this work truly needs them.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            Same four lanes everywhere on the site—including the hero. Each tile below opens previews, checklist,
            delivery stack,{' '}
            <span className="text-neutral-500 dark:text-neutral-500">optional expert assists</span>
            —and linking out is always explicit. Bundled wording (no budgets) lives on the{' '}
            <Link href="/client-offerings-2026.html" className="font-medium text-sky-600 hover:underline dark:text-sky-400">
              client overview
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section spacing="xl" background="white" className="pb-24">
        <Container>
          {/*
            Soft radial behind the grid—same vocabulary as homepage hero pedestal (feathers to white ground).
          */}
          <div
            className="rounded-[2rem] bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(224,242,254,0.35)_0%,rgba(250,250,250,1)_62%,rgba(250,250,250,1)_100%)] px-2 py-8 sm:p-8 md:p-10
              dark:bg-[radial-gradient(ellipse_95%_70%_at_50%_-5%,rgba(56,189,248,0.08)_0%,transparent_55%)]"
          >
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 md:gap-7 lg:gap-8">
              {OFFERING_SLUGS.map((slug) => (
                <OfferingHubCard key={slug} slug={slug} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function OfferingHubCard({ slug }: { slug: OfferingSlug }) {
  const o = OFFERINGS[slug];
  const Icon = PACKAGE_ICONS[slug];

  return (
    <Link href={`/offerings/${slug}`} className="group block h-full">
      <Card
        variant="elevated"
        padding="lg"
        className="relative h-full overflow-hidden border border-neutral-200/90 !p-0 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.03] transition-all duration-300 dark:border-neutral-700 dark:bg-neutral-950 dark:ring-white/[0.05]
          group-hover:border-sky-300/65 group-hover:shadow-xl group-hover:shadow-sky-500/5 dark:group-hover:border-sky-600/35"
      >
        {/* Browser-style chrome • matches hero vignette + mock previews */}
        <div className="flex items-center justify-between gap-3 bg-[#101c37] px-4 py-2.5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex shrink-0 gap-1" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-slate-500/90" />
              <span className="h-2 w-2 rounded-full bg-slate-500/90" />
              <span className="h-2 w-2 rounded-full bg-slate-500/90" />
            </span>
            <span className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-sky-200/95">
              {o.surfaceCue}
            </span>
          </div>
          <span className="inline-flex shrink-0 rounded-md border border-white/15 bg-white/10 p-1.5 text-sky-300">
            <Icon className="size-4" aria-hidden />
          </span>
        </div>

        {/* Mini vignette ribbon—ties to homepage tiles */}
        <div className="border-b border-neutral-100 bg-gradient-to-b from-sky-50/80 to-white px-4 py-3 dark:border-neutral-800 dark:from-sky-950/30 dark:to-neutral-950">
          <PackageMiniVisual slug={slug} />
        </div>

        <div className="p-7 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
              {o.eyebrow}
            </span>
            <ArrowRight
              className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-sky-500"
              aria-hidden
            />
          </div>
          <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            {o.shortLabel}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-3">{o.summary}</p>
          <p className="mt-6 rounded-xl bg-gradient-to-br from-sky-50/90 to-neutral-50/80 px-3.5 py-3 text-sm leading-snug text-neutral-700 ring-1 ring-sky-200/35 dark:from-sky-950/25 dark:to-neutral-900/60 dark:text-neutral-300 dark:ring-sky-900/30">
            <span className="block text-[11px] font-semibold uppercase tracking-wide text-sky-700/90 dark:text-sky-400/95">
              First unlock
            </span>
            <span className="mt-1.5 block font-semibold text-neutral-900 dark:text-neutral-50">{o.youGet[0]}</span>
          </p>
        </div>
      </Card>
    </Link>
  );
}
