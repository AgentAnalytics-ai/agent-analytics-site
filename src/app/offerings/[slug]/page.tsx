import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OFFERING_SLUGS, OFFERINGS, type OfferingSlug } from '@/data/offerings';
import { OfferingDashboard } from '@/components/offerings/OfferingDashboard';

export function generateStaticParams(): { slug: OfferingSlug }[] {
  return OFFERING_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!OFFERING_SLUGS.includes(slug as OfferingSlug)) {
    return {};
  }
  const o = OFFERINGS[slug as OfferingSlug];
  const title = `${o.shortLabel} · Offerings`;
  return {
    title: `${title} · Agent Analytics`,
    description: o.summary,
    openGraph: {
      title: `${o.shortLabel} · Agent Analytics`,
      description: o.prospectLine,
      url: `https://agentanalytics.com/offerings/${slug}`,
      siteName: 'Agent Analytics',
    },
  };
}

export default async function OfferingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!OFFERING_SLUGS.includes(slug as OfferingSlug)) {
    notFound();
  }
  const offering = OFFERINGS[slug as OfferingSlug];
  return <OfferingDashboard offering={offering} />;
}
