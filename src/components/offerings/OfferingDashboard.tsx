import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { Offering } from '@/data/offerings';
import { MockDashboardPanel } from '@/components/offerings/MockDashboardPanel';
import { CALENDLY_LINKS } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function OfferingDashboard({ offering }: { offering: Offering }) {
  const calUrl = CALENDLY_LINKS[offering.calendly];

  return (
    <>
      <Section spacing="sm" background="gray" className="pt-8 pb-6 md:pt-10">
        <Container>
          <Link
            href="/offerings"
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:underline dark:text-sky-400"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            All offerings
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400/90">
            {offering.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
            {offering.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            {offering.summary}
          </p>
          <p className="mt-5 max-w-2xl text-sm text-neutral-500 dark:text-neutral-500">
            {offering.tierNote}{' '}
            <Link
              href="/client-offerings-2026.html"
              className="inline-flex items-center gap-1 font-medium text-sky-600 hover:underline dark:text-sky-400"
            >
              Client overview
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </p>
        </Container>
      </Section>

      <Section spacing="md" background="white" className="pb-6 pt-10">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offering.kpis.map((k) => (
              <Card key={k.label} padding="md" variant="elevated" className="!p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {k.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                  {k.value}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="gray">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                What you get
              </h2>
              <ol className="mb-10 space-y-3">
                {offering.youGet.map((line, i) => (
                  <li key={line} className="flex gap-3">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white shadow-sm ring-2 ring-sky-100 dark:bg-sky-500 dark:ring-sky-900/40"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-[15px] leading-snug text-neutral-800 dark:text-neutral-200">
                      {line}
                    </span>
                  </li>
                ))}
              </ol>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Delivery checklist
              </h3>
              <ul className="space-y-2.5">
                {offering.included.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:sticky lg:top-28">
              <MockDashboardPanel offering={offering} />
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 text-center font-semibold text-white shadow-lg transition-all hover:from-sky-600 hover:to-blue-700"
                >
                  Book this track
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-neutral-300 px-8 py-4 text-center font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-100 dark:hover:bg-neutral-800/50"
                >
                  Message first
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="white">
        <Container>
          <h2 className="mb-6 font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            How we deliver
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {offering.stack.map((item) => (
              <Card
                key={item.name}
                variant="outlined"
                padding="md"
                className="!p-5 border-neutral-200 dark:border-neutral-700"
              >
                <p className="text-sm font-bold text-neutral-900 dark:text-neutral-50">{item.name}</p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{item.role}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
