import { CALENDLY_LINKS } from '@/lib/constants';

export type ConsultingCalendlyKey = keyof typeof CALENDLY_LINKS;

/** Services page SKU ids—used for visuals + icon map. */
export const CONSULTING_SERVICE_IDS = [
  'strategy',
  'development',
  'infrastructure',
  'cost',
  'maintenance',
  'training',
] as const;

export type ConsultingServiceId = (typeof CONSULTING_SERVICE_IDS)[number];

export interface ConsultingService {
  id: ConsultingServiceId;
  title: string;
  /** One-line card hook—homepage / offerings tone. */
  tagline: string;
  problem: string;
  whatWeDo: string;
  outcome: string;
  /** Two terse “expert” assists—parity with tier agent strips. */
  expertNotes: [string, string];
  examples: string[];
  cta: string;
  calendly: ConsultingCalendlyKey;
  systems: string[];
  metrics: { label: string; value: string }[];
  accent: 'blue' | 'sky';
}

export const CONSULTING_SERVICES: ConsultingService[] = [
  {
    id: 'strategy',
    title: 'Technology strategy',
    tagline: 'Know what to build first—before vendors and timeline lock in.',
    problem:
      'When you don\'t know what to build first, which tools to use, or how to avoid expensive mistakes',
    whatWeDo: 'We build your technology roadmap and specifications',
    outcome:
      'So you have a clear blueprint—exact features to build, tools to use, timeline to follow, and budget to plan—before you spend a dollar.',
    expertNotes: ['Impact-first backlog.', 'Estimator-ready specs.'],
    examples: [
      'What to automate first',
      'Tool compare: price + fit',
      'Plan · timeline · budget bands',
      'Stack-ranked priorities',
    ],
    cta: 'Build your roadmap',
    calendly: 'talkStrategy',
    metrics: [
      { label: 'Roadmaps built', value: '150+' },
      { label: 'Success rate', value: '94%' },
      { label: 'Avg. ROI', value: '3.2×' },
    ],
    systems: ['Analysis', 'Planning', 'Documentation', 'Reporting'],
    accent: 'blue',
  },
  {
    id: 'development',
    title: 'Custom software development',
    tagline: 'Apps and integrations that fit your workflows—not generic wrappers.',
    problem: 'When you need software built for your business—not generic tools that don\'t fit',
    whatWeDo: 'We build custom software that connects to your systems and automates your workflows',
    outcome:
      'So your team has software built for your processes—connects to CRM and email, automates routine work, and scales with you.',
    expertNotes: ['Integrations before screens.', 'Your sign-off before go-live.'],
    examples: [
      'One dashboard, many systems',
      'Manual work → running on its own',
      'Portals + CRM + payments',
      'Tools sharing data cleanly',
    ],
    cta: 'Build your software',
    calendly: 'startConversation',
    metrics: [
      { label: 'Apps built', value: '200+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Client satisfaction', value: '4.9/5' },
    ],
    systems: ['Development', 'Testing', 'Deployment', 'Support'],
    accent: 'sky',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & hosting',
    tagline: 'Fast, stable hosting with a cost ceiling you can plan around.',
    problem: 'When your site is slow, crashes, or costs too much to host',
    whatWeDo: 'We rebuild your hosting setup for speed, reliability, and cost',
    outcome:
      'So your site loads in under 2 seconds, stays online 99.99% of the time, and costs less to run.',
    expertNotes: ['Speed cap + spend cap first.', 'Runbooks—not hero calls.'],
    examples: ['Faster CDN + hosting', 'Autoscale under load', 'Trim hosting bills', 'TLS · firewall · backups'],
    cta: 'Fix your hosting',
    calendly: 'bookSession',
    metrics: [
      { label: 'Speed lift', value: '85%' },
      { label: 'Cost cut', value: '40%' },
      { label: 'Uptime', value: '99.99%' },
    ],
    systems: ['Cloud', 'CDN', 'Security', 'Monitoring'],
    accent: 'sky',
  },
  {
    id: 'cost',
    title: 'Software cost optimization',
    tagline: 'Trim unused seats and duplicate tools—keep what actually ships value.',
    problem: 'When you\'re paying for software you don\'t use, or overpaying for tools',
    whatWeDo: 'We find what you\'re wasting money on and replace it with cheaper alternatives',
    outcome:
      'So you save serious budget by canceling unused licenses and switching to tools that still cover the job.',
    expertNotes: ['Audit real logins.', 'Cheaper picks, same capability.'],
    examples: ['Cut ghost seats', 'Swap pricey tool', 'Collapse duplicates', 'Renegotiate renewals'],
    cta: 'Cut your costs',
    calendly: 'bookSession',
    metrics: [
      { label: 'Avg. savings', value: '$45K/yr' },
      { label: 'Licenses cut', value: '32%' },
      { label: 'Efficiency', value: '28%' },
    ],
    systems: ['Audit', 'Analysis', 'Optimization', 'Tracking'],
    accent: 'blue',
  },
  {
    id: 'maintenance',
    title: 'System maintenance',
    tagline: 'Stability upgrades without a full rebuild—fewer outages, faster screens.',
    problem: 'When your software is broken, slow, or outdated—but you can\'t rebuild it',
    whatWeDo: 'We fix bugs, speed things up, and update your systems',
    outcome:
      'So your software runs fast, stops breaking, stays updated, and keeps working without disrupting your team.',
    expertNotes: ['Fix root cause + guardrails.', 'Planned upgrades, no shocks.'],
    examples: ['Stop repeat crashes', 'Faster pages + DB', 'Fresh integrations', 'Pay down tech debt'],
    cta: 'Fix your systems',
    calendly: 'bookSession',
    metrics: [
      { label: 'Speed boost', value: '60%' },
      { label: 'Downtime cut', value: '75%' },
      { label: 'Health', value: '98%' },
    ],
    systems: ['Monitoring', 'Updates', 'Optimization', 'Support'],
    accent: 'sky',
  },
  {
    id: 'training',
    title: 'Implementation & training',
    tagline: 'Hands-on rollout so adoption sticks—docs and replayable walkthroughs.',
    problem: 'When we build software for you, and your team needs to learn it',
    whatWeDo: 'We train your team and create documentation so they can use it effectively',
    outcome:
      'So your team knows how to use the software, gets value from day one, and can onboard new hires themselves.',
    expertNotes: ['Role-focused labs.', 'Replayable onboarding clips.'],
    examples: ['Hands-on workshops', 'Docs + short videos', 'Launch-week support', 'Faster new-hire ramp'],
    cta: 'Train your team',
    calendly: 'bookSession',
    metrics: [
      { label: 'Teams trained', value: '500+' },
      { label: 'Adoption', value: '92%' },
      { label: 'ROI realized', value: '4.1×' },
    ],
    systems: ['Training', 'Documentation', 'Support', 'Optimization'],
    accent: 'blue',
  },
];
