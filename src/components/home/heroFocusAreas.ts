import type { LucideIcon } from 'lucide-react';
import { FileText, Zap, Globe, Brain } from 'lucide-react';

export type HeroFocusId = 'portals' | 'sales' | 'applications' | 'agents';

export interface HeroFocusArea {
  id: HeroFocusId;
  tabLabel: string;
  tabSublabel: string;
  icon: LucideIcon;
  snapshotLabel: string;
  /** One line: “you might be here if…” */
  empathy: string;
  headline: string;
  subline: string;
  metrics: readonly { label: string; value: string }[];
  barHeights: readonly number[];
  activity: readonly { title: string; meta: string }[];
}

export const HERO_FOCUS_AREAS: readonly HeroFocusArea[] = [
  {
    id: 'portals',
    tabLabel: 'Client hubs',
    tabSublabel: 'Self-serve delivery',
    icon: FileText,
    snapshotLabel: 'Live delivery snapshot',
    empathy:
      'Customers and partners still email your team for files, billing, and status—because there’s no clear place to help themselves.',
    headline: 'One front door for customers and partners',
    subline:
      'Portals for documents, payments, and answers so routine requests don’t land on your inbox.',
    metrics: [
      { label: 'Active sessions', value: '154' },
      { label: 'Items delivered', value: '56' },
      { label: 'Payments cleared', value: '34' },
    ],
    barHeights: [42, 68, 52, 82, 58, 76, 48, 71],
    activity: [
      { title: 'Agreement executed', meta: 'Enterprise client · 2m ago' },
      { title: 'Inbound settled', meta: 'Renewal · 6m ago' },
    ],
  },
  {
    id: 'sales',
    tabLabel: 'Sales & pipeline',
    tabSublabel: 'Lead to close',
    icon: Zap,
    snapshotLabel: 'Pipeline snapshot',
    empathy:
      'Deals stall when follow-up, qualification, and handoffs live in inboxes and spreadsheets—not in one trusted flow.',
    headline: 'Pipeline that keeps moving—less admin, fewer dropped deals',
    subline:
      'Sequences, routing, and CRM updates matched to how your team actually sells, so nothing falls through the cracks.',
    metrics: [
      { label: 'Touches logged', value: '128' },
      { label: 'Meetings booked', value: '34' },
      { label: 'Open pipeline (sample)', value: '$780K' },
    ],
    barHeights: [55, 48, 72, 44, 88, 52, 67, 61],
    activity: [
      { title: 'Stage advanced', meta: 'Strategic account · Just now' },
      { title: 'Sequence triggered', meta: 'Inbound lead · 4m ago' },
    ],
  },
  {
    id: 'applications',
    tabLabel: 'Custom software',
    tabSublabel: 'Web, tools, buyer journeys',
    icon: Globe,
    snapshotLabel: 'Product snapshot',
    empathy:
      'You’re bridging generic SaaS, slide decks, and PDFs while the real process lives in side threads and one-off demos.',
    headline: 'Built-for-you sites, tools, and guided buyer experiences',
    subline:
      'Public sites, internal apps, and—when you want it—interactive proposals or demo flows that go beyond a static deck, all connected to your stack.',
    metrics: [
      { label: 'Weekly actives', value: '1.2K' },
      { label: 'Workflow runs', value: '486' },
      { label: 'Uptime', value: '99.98%' },
    ],
    barHeights: [48, 58, 44, 70, 52, 66, 74, 56],
    activity: [
      { title: 'Deployment promoted', meta: 'Production · 12m ago' },
      { title: 'Integration sync', meta: 'ERP bridge · 18m ago' },
    ],
  },
  {
    id: 'agents',
    tabLabel: 'AI & automation',
    tabSublabel: 'Across your tools',
    icon: Brain,
    snapshotLabel: 'Automation snapshot',
    empathy:
      'Strong operators still lose hours moving data between systems, triaging the same inbox patterns, and catching exceptions by hand.',
    headline: 'Repeatable work automated—people stay on judgment calls',
    subline:
      'Agents and workflows across the tools you already use; your team stays in the loop for policy, nuance, and relationships.',
    metrics: [
      { label: 'Playbooks run', value: '2.8K' },
      { label: 'Exceptions surfaced', value: '19' },
      { label: 'Systems linked', value: '12' },
    ],
    barHeights: [62, 54, 78, 46, 70, 58, 84, 50],
    activity: [
      { title: 'Cross-system transfer', meta: 'CRM → finance · Just now' },
      { title: 'Policy check flagged', meta: 'Procurement · 3m ago' },
    ],
  },
] as const;

export const DEFAULT_HERO_FOCUS_ID: HeroFocusId = 'portals';
