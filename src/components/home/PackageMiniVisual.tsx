import type { OfferingSlug } from '@/data/offerings';

const box = 'mx-auto block h-[4.75rem] w-full max-w-[8.25rem]';

/** Tiny abstract vignettes—reads “browser / workspace / landing / portal” at a glance. */
export function PackageMiniVisual({ slug }: { slug: OfferingSlug }) {
  switch (slug) {
    case 'website':
      return (
        <svg className={box} viewBox="0 0 120 76" aria-hidden>
          <rect x="10" y="14" width="100" height="54" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="14" y="22" width="92" height="14" rx="4" fill="#101c37" />
          <circle cx="26" cy="29" r="3" fill="#64748b" />
          <circle cx="38" cy="29" r="3" fill="#64748b" />
          <rect x="18" y="42" width="72" height="8" rx="3" fill="#bae6fd" opacity="0.95" />
          <rect x="18" y="54" width="54" height="6" rx="3" fill="#e2e8f0" />
          <rect x="18" y="64" width="40" height="6" rx="3" fill="#e2e8f0" />
        </svg>
      );
    case 'gtm-engine':
      return (
        <svg className={box} viewBox="0 0 120 76" aria-hidden>
          <rect x="12" y="14" width="96" height="54" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          {/* inbox rail */}
          <rect x="18" y="22" width="38" height="42" rx="5" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x="24" y="30" width="26" height="6" rx="3" fill="#bae6fd" opacity="0.85" />
          <rect x="24" y="41" width="26" height="6" rx="3" fill="#e2e8f0" />
          <rect x="24" y="52" width="26" height="6" rx="3" fill="#e2e8f0" />
          {/* mail & rows */}
          <rect x="62" y="26" width="42" height="22" rx="6" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
          <path d="M71 33h24M71 38h18" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
          <rect x="62" y="54" width="42" height="12" rx="5" fill="#fff" stroke="#e2e8f0" strokeWidth="1.25" />
          <rect x="68" y="58" width="18" height="4" rx="2" fill="#94a3b8" opacity="0.65" />
        </svg>
      );
    case 'landing-lab':
      return (
        <svg className={box} viewBox="0 0 120 76" aria-hidden>
          <rect x="28" y="12" width="64" height="56" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="36" y="26" width="48" height="28" rx="8" fill="#bae6fd" opacity="0.82" />
          <rect x="42" y="56" width="36" height="14" rx="8" fill="#0284c7" opacity="0.9" />
          <rect x="48" y="61" width="24" height="5" rx="3" fill="#fff" opacity="0.92" />
          <rect x="44" y="18" width="32" height="5" rx="3" fill="#e2e8f0" />
        </svg>
      );
    case 'client-portal':
      return (
        <svg className={box} viewBox="0 0 120 76" aria-hidden>
          <rect x="22" y="14" width="76" height="52" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="42" cy="38" r="14" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="2" />
          <circle cx="42" cy="35" r="7" fill="#101c37" opacity="0.75" />
          <rect x="62" y="29" width="42" height="22" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1.25" />
          <rect x="67" y="34" width="26" height="6" rx="3" fill="#bae6fd" opacity="0.95" />
          <rect x="67" y="43" width="32" height="6" rx="3" fill="#e2e8f0" />
          <rect x="34" y="54" width="54" height="12" rx="8" fill="#022c22" opacity="0.06" />
        </svg>
      );
    default:
      return null;
  }
}
