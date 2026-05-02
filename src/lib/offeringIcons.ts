import type { LucideIcon } from 'lucide-react';
import { FileText, Globe, Rocket, Zap } from 'lucide-react';
import type { OfferingSlug } from '@/data/offerings';

/** Shared icons for homepage package tiles and offerings preview chrome. */
export const PACKAGE_ICONS: Record<OfferingSlug, LucideIcon> = {
  website: Globe,
  'gtm-engine': Zap,
  'landing-lab': Rocket,
  'client-portal': FileText,
};
