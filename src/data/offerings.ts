import { CALENDLY_LINKS } from '@/lib/constants';

/** Display order on home + `/offerings`—marketing + campaign landings read side‑by‑side first. */
export const OFFERING_SLUGS = [
  'website',
  'landing-lab',
  'gtm-engine',
  'client-portal',
] as const;

export type OfferingSlug = (typeof OFFERING_SLUGS)[number];

export type CalendlyKey = keyof typeof CALENDLY_LINKS;

export interface OfferingKpi {
  label: string;
  value: string;
  hint?: string;
}

export interface OfferingStackItem {
  name: string;
  role: string;
}

export interface ProspectLine {
  left: string;
  right: string;
  tone?: 'positive' | 'neutral' | 'accent';
}

export interface AgentActivity {
  agent: string;
  action: string;
  time: string;
}

/** Faux app chrome inside the illustration—unique copy per offering */
export interface OfferingDashboardChrome {
  workspaceTitle: string;
  flavorLine: string;
  sessionLine: string;
  actionLeft: string;
  actionRight: string;
}

export interface Offering {
  slug: OfferingSlug;
  title: string;
  shortLabel: string;
  /** Shown on mock—what kind of surface this is (site vs portal vs landing vs app). */
  surfaceCue: string;
  /** Homepage four-tile card—plain “what you do here” for marketers. */
  heroActionLine: string;
  eyebrow: string;
  tierNote: string;
  /** Primary on-page narrative (keep tight—OG/social uses `prospectLine`) */
  summary: string;
  prospectLine: string;
  kpis: OfferingKpi[];
  stack: OfferingStackItem[];
  youGet: string[];
  included: string[];
  prospectFeed: { title: string; lines: ProspectLine[] };
  agentFeed?: { title: string; activities: AgentActivity[] };
  dashboardChrome: OfferingDashboardChrome;
  calendly: CalendlyKey;
}

export const OFFERINGS: Record<OfferingSlug, Offering> = {
  website: {
    slug: 'website',
    shortLabel: 'Marketing site',
    title: 'Marketing website',
    surfaceCue: 'Public website',
    heroActionLine: 'Write blog posts, tweak pages, hit publish—without paging engineering.',
    eyebrow: 'Public · marketing',
    tierNote: 'Speed, editable content, reporting wired in—scoped per sprint.',
    summary:
      'Fast, credible public site your team edits without ticketing devs.',
    prospectLine:
      'First-scroll trust: clarity, speed, edits from marketing, forms that tie to pipeline.',
    kpis: [
      { label: 'Speed', value: 'Feels instant' },
      { label: 'Launch', value: 'Approve first' },
      { label: 'Edits', value: 'Marketing-owned' },
      { label: 'Forms', value: 'See inquiries' },
    ],
    stack: [
      { name: 'Navigation', role: 'Findable structure for people + search.' },
      { name: 'Blocks', role: 'Repeated sections/forms—consistent, accessible.' },
      { name: 'Releases', role: 'No surprise go-lives.' },
      { name: 'Assists', role: 'Optional draft + checklist help.' },
    ],
    youGet: [
      'A polished public site that feels like you—not a patched-together template.',
      'Phone, tablet, desktop: one consistent look and readable type.',
      'Draft → get approval → publish—without waiting on engineering.',
      'Contact and demo forms plug into the inbox or CRM you already use.',
    ],
    included: [
      'Speed work scoped to agreed slices',
      'Link previews + basic search visibility',
      'Lead forms + light spam blocking',
      'Walkthrough so your team owns day-to-day edits',
    ],
    prospectFeed: {
      title: 'On your live site',
      lines: [
        { left: 'Homepage', right: 'First screen tells a clear story—you look established, not generic.', tone: 'neutral' },
        { left: 'Blog', right: 'Publish new posts from your portal; no dev queue.', tone: 'accent' },
        { left: 'Refresh', right: 'Swap copy, photos, and CTAs yourself—peek preview before go-live.', tone: 'positive' },
      ],
    },
    agentFeed: {
      title: 'Optional helpers',
      activities: [
        { agent: 'Draft', action: 'Starter headline ideas from your notes', time: '2m' },
        { agent: 'Review', action: 'Reminder if page title or snippet is blank', time: '1m' },
      ],
    },
    dashboardChrome: {
      workspaceTitle: 'Site overview',
      flavorLine: 'Homepage and blog—both updated from your portal.',
      sessionLine: 'Public visit · not signed in',
      actionLeft: 'Browse',
      actionRight: 'Contact',
    },
    calendly: 'talkStrategy',
  },

  'gtm-engine': {
    slug: 'gtm-engine',
    shortLabel: 'GTM engine',
    title: 'GTM engine · site + workspace',
    surfaceCue: 'Team app · site + inbox + CRM',
    heroActionLine:
      'Add products to the site, run email beside your leads, move deals—one signed-in workspace.',
    eyebrow: 'Site + signed-in workspace',
    tierNote:
      'Site plus admin surfaces—pipeline views, mail, roles. Often phased.',
    summary:
      'Public site plus signed-in workspace—approvals, modeled leads, and email in one product layer.',
    prospectLine:
      'Marketing runs as one system—not five tabs—with traceable pipelines and deliberate mail.',
    kpis: [
      { label: 'Surface', value: 'Site + admin' },
      { label: 'Data', value: 'One spine' },
      { label: 'Mail', value: 'Event-triggered' },
      { label: 'Access', value: 'Role-scoped' },
    ],
    stack: [
      { name: 'One layer', role: 'Marketing + ops share home base.' },
      { name: 'Automation', role: 'Follow-ups on policy, behind approvals.' },
      { name: 'Ops UI', role: 'Tables teams live in—not slideware.' },
    ],
    youGet: [
      'Marketing site plus signed-in workspace for marketing and ops.',
      'Content ships through approve-before-publish workflows.',
      'Leads modeled in one view—stage, owner, source.',
      'Outbound mail beside those records: receipts, nurture, launches.',
    ],
    included: [
      'Separated roles vs leadership scopes',
      'CRM/sheets/maps agreed up front',
      'Debug trail when something stalls',
      'Publish + rollback notes',
    ],
    prospectFeed: {
      title: 'What your team sees inside',
      lines: [
        { left: 'Content', right: 'What went live—is visible inside the workspace', tone: 'accent' },
        { left: 'Leads', right: 'Who contacted you, why, next step—all in rows you trust', tone: 'positive' },
        { left: 'Email', right: 'Follow-ups and sends live beside those same records', tone: 'neutral' },
      ],
    },
    agentFeed: {
      title: 'Outbound · queue',
      activities: [
        { agent: 'Tag', action: 'Suggest inbound labels', time: 'live' },
        { agent: 'Draft', action: 'Nurture first pass—queued', time: 'queue' },
      ],
    },
    dashboardChrome: {
      workspaceTitle: 'Growth workspace · preview',
      flavorLine: 'Same place for pipeline rows and outbound sends.',
      sessionLine: 'Signed in · rotates on sandbox timer',
      actionLeft: 'Inbox',
      actionRight: 'Records',
    },
    calendly: 'talkStrategy',
  },

  'landing-lab': {
    slug: 'landing-lab',
    shortLabel: 'Landing lab',
    title: 'Landing lab · campaign pages',
    surfaceCue: 'Campaign landing · one URL',
    heroActionLine: 'Ship a focused landing for each push—clean CTA and measurable results.',
    eyebrow: 'Campaign launches',
    tierNote: 'Repeatable sprint: landings + attribution—not one-offs.',
    summary:
      'Fast campaign pages—previews for stakeholders, clean measurement.',
    prospectLine:
      'Throughput: credible landings without babysitting brittle builders.',
    kpis: [
      { label: 'Ship', value: 'Days' },
      { label: 'Attribution', value: 'Named events' },
      { label: 'Reuse', value: 'Same scaffold' },
      { label: 'Review', value: 'Private links' },
    ],
    stack: [
      { name: 'Variants', role: 'Routes without blowing governance.' },
      { name: 'Blocks', role: 'Swap hero + proof quickly.' },
      { name: 'Previews', role: 'Stakeholders approve one URL.' },
    ],
    youGet: [
      'Landing pages cloned per brief—same backbone, swapped story.',
      'Password-style previews legal/founders can trust.',
      'Measurement hooks baked in—not “maybe it worked”.',
      'Playbook to repeat on the next spike.',
    ],
    included: [
      'Perf guardrails per template',
      'Baseline UX parity',
      'Embed slots for calendars/demos',
      'Clone checklist for ops',
    ],
    prospectFeed: {
      title: 'Sponsor-ready',
      lines: [
        { left: 'Window', right: 'Launch date you can call', tone: 'positive' },
        { left: 'Trust', right: 'On-brand, not stray template', tone: 'neutral' },
        { left: 'Next step', right: 'Obvious primary CTA', tone: 'accent' },
      ],
    },
    agentFeed: {
      title: 'Launch QA',
      activities: [
        { agent: 'Copy', action: 'Headline shells from brief', time: '1m' },
        { agent: 'Claims', action: 'Stray wording flagged', time: 'live' },
      ],
    },
    dashboardChrome: {
      workspaceTitle: 'Landing page · preview',
      flavorLine: 'Single URL shipped for the campaign.',
      sessionLine: 'Private preview · not indexed',
      actionLeft: 'Share link',
      actionRight: 'Go live',
    },
    calendly: 'startConversation',
  },

  'client-portal': {
    slug: 'client-portal',
    shortLabel: 'Client portal',
    title: 'Client portal · signed-in accounts',
    surfaceCue: 'Client portal · signed-in',
    heroActionLine: 'Clients log in for status, files, and invoices—fewer threads in your inbox.',
    eyebrow: 'Client sign-in · portal',
    tierNote: 'Files, billing, status—paired with fuller builds when needed.',
    summary:
      'Customers log in: status, files, billing, threading—fewer rogue inboxes.',
    prospectLine:
      'Operate like lightweight product—not PDF archaeology—assistants audited and overrideable.',
    kpis: [
      { label: 'Auth', value: 'Proper sessions' },
      { label: 'Auto', value: 'Approval-gated' },
      { label: 'Audit', value: 'Clear trails' },
      { label: 'Links', value: 'Clean bridges' },
    ],
    stack: [
      { name: 'Portal UX', role: 'Status, uploads, threads—purpose built.' },
      { name: 'Bridges', role: 'Thin gates to CRM/billing/chat.' },
      { name: 'Releases', role: 'Sandbox → prod rituals.' },
    ],
    youGet: [
      'Branded sign-in—not another email chain for files/status.',
      'Invoices + messages + approvals in alignment for client + team.',
      'Helpers draft/summarize; humans send.',
      'Only integrations you consciously open.',
    ],
    included: [
      'Auth threat model surfaced early',
      'Public-form abuse resistance where needed',
      'Support trail (“what ran?”)',
      'Adoption-oriented hand-off',
    ],
    prospectFeed: {
      title: 'Client-visible',
      lines: [
        { left: 'Status', right: 'Before “any update?” emails', tone: 'positive' },
        { left: 'Assist', right: 'Human sends', tone: 'accent' },
        { left: 'Access', right: 'Scoped folders + flows', tone: 'neutral' },
      ],
    },
    agentFeed: {
      title: 'Service queue',
      activities: [
        { agent: 'Intake', action: 'Clean ticket draft', time: 'live' },
        { agent: 'Answer', action: 'Approved-sources only', time: 'fast' },
      ],
    },
    dashboardChrome: {
      workspaceTitle: 'Client portal · preview',
      flavorLine: 'Files, invoices, and status behind one login.',
      sessionLine: 'Customer session · sample account',
      actionLeft: 'Account home',
      actionRight: 'Sign out',
    },
    calendly: 'bookSession',
  },
};
