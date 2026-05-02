import type { ConsultingServiceId } from '@/data/consultingServices';

const box = 'mx-auto block h-[4.75rem] w-full max-w-[8.25rem]';

/** Abstract vignettes keyed to each consulting track—palette matches offerings / hero tiles. */
export function ServiceMiniVisual({ id }: { id: ConsultingServiceId }) {
  switch (id) {
    case 'strategy':
      return (
        <svg className={box} viewBox="0 0 120 76" aria-hidden>
          <rect x="10" y="14" width="100" height="54" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="60" cy="40" r="18" fill="none" stroke="#bae6fd" strokeWidth="3" />
          <circle cx="60" cy="40" r="10" fill="none" stroke="#101c37" strokeWidth="2" opacity="0.35" />
          <path d="M28 58 L52 36 L68 48 L92 28" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          <circle cx="92" cy="28" r="3" fill="#0284c7" />
        </svg>
      );
    case 'development':
      return (
        <svg className={box} viewBox="0 0 120 76" aria-hidden>
          <rect x="10" y="14" width="100" height="54" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="14" y="22" width="92" height="14" rx="4" fill="#101c37" />
          <circle cx="26" cy="29" r="3" fill="#64748b" />
          <path d="M38 48 L32 54 L38 60" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          <path d="M82 48 L88 54 L82 60" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          <rect x="44" y="44" width="32" height="20" rx="4" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1.5" />
        </svg>
      );
    case 'infrastructure':
      return (
        <svg className={box} viewBox="0 0 120 76" aria-hidden>
          <rect x="12" y="16" width="96" height="48" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="20" y="24" width="80" height="10" rx="3" fill="#e2e8f0" />
          <rect x="20" y="40" width="36" height="18" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
          <rect x="64" y="40" width="36" height="18" rx="4" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
          <circle cx="38" cy="49" r="3" fill="#0284c7" opacity="0.7" />
          <circle cx="82" cy="49" r="3" fill="#0284c7" opacity="0.7" />
        </svg>
      );
    case 'cost':
      return (
        <svg className={box} viewBox="0 0 120 76" aria-hidden>
          <rect x="10" y="14" width="100" height="54" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="16" y="20" width="88" height="42" rx="6" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x="20" y="24" width="80" height="7" rx="3" fill="#101c37" opacity="0.9" />
          <path d="M69 33v25" stroke="#e2e8f0" strokeWidth="1.25" strokeLinecap="round" />
          {/* Line items */}
          <rect x="22" y="36" width="42" height="5" rx="2" fill="#bae6fd" opacity="0.95" />
          <rect x="22" y="44" width="36" height="4" rx="2" fill="#e2e8f0" />
          <rect x="22" y="51" width="40" height="4" rx="2" fill="#e2e8f0" />
          {/* Spend — tallest → shortest, feet on same baseline */}
          <rect x="74" y="33" width="8" height="22" rx="2" fill="#cbd5e1" />
          <rect x="85" y="39" width="8" height="16" rx="2" fill="#94a3b8" opacity="0.72" />
          <rect x="96" y="45" width="8" height="10" rx="2" fill="#0284c7" opacity="0.9" />
          <path d="M71 56h39" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'maintenance':
      return (
        <svg className={box} viewBox="0 0 120 76" aria-hidden>
          <rect x="12" y="18" width="96" height="44" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M26 52 L42 36 L54 46 L70 30 L94 54" fill="none" stroke="#bae6fd" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="78" cy="34" r="8" fill="none" stroke="#101c37" strokeWidth="2" opacity="0.5" />
          <path d="M74 34h8 M78 30v8" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'training':
      return (
        <svg className={box} viewBox="0 0 120 76" aria-hidden>
          <rect x="14" y="16" width="92" height="48" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="24" y="26" width="52" height="34" rx="5" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
          <polygon points="40,43 52,49 52,37" fill="#0284c7" opacity="0.85" />
          <rect x="68" y="30" width="30" height="4" rx="2" fill="#e2e8f0" />
          <rect x="68" y="40" width="24" height="4" rx="2" fill="#bae6fd" opacity="0.9" />
          <rect x="68" y="50" width="20" height="4" rx="2" fill="#e2e8f0" />
        </svg>
      );
    default:
      return null;
  }
}
