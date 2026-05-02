import type { Metadata } from 'next';
import { OfferingsHub } from '@/components/offerings/OfferingsHub';

export const metadata: Metadata = {
  title: 'Offerings · Agent Analytics',
  description:
    'Four packages—marketing site, campaign landings, GTM workspace, and client portal—with the same names as each live preview.',
  openGraph: {
    title: 'Offerings · Agent Analytics',
    description:
      'Site, landings, workspace, portal—what you get without confusing tier math.',
    url: 'https://agentanalytics.com/offerings',
    siteName: 'Agent Analytics',
  },
};

export default function OfferingsPage() {
  return <OfferingsHub />;
}
