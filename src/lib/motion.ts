/**
 * Shared motion language — one easing curve, consistent durations, and viewport
 * triggers so scroll reveals feel designed (not random defaults).
 */
export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export const motionDurations = {
  reveal: 0.52,
  item: 0.44,
  micro: 0.3,
} as const;

/** Slight early trigger + bottom bias = reads continuous after hero zoom */
export const motionViewport = {
  once: true,
  amount: 0.3,
  margin: '0px 0px -56px 0px',
} as const;

export type FadeUpOptions = { delay?: number; y?: number; duration?: number };

/** Standard section / block entrance */
export function fadeUpReveal(options: FadeUpOptions = {}) {
  const { delay = 0, y = 20, duration = motionDurations.reveal } = options;
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: motionViewport,
    transition: {
      duration,
      delay,
      ease: MOTION_EASE,
    },
  };
}

/** Grid / list stagger */
export function fadeUpStagger(index: number, baseDelay = 0, stagger = 0.085) {
  return fadeUpReveal({ delay: baseDelay + index * stagger, y: 18 });
}

export const collapseTransition = {
  duration: motionDurations.micro,
  ease: MOTION_EASE,
} as const;

/** Page hero / above-the-fold sequences (not scroll-triggered) */
export function enterTransition(delay = 0) {
  return {
    duration: motionDurations.reveal,
    delay,
    ease: MOTION_EASE,
  };
}

/** Staggered `variants` container (location pages, dense grids) */
export function motionStaggerContainer(opts?: {
  staggerChildren?: number;
  delayChildren?: number;
}) {
  const staggerChildren = opts?.staggerChildren ?? 0.1;
  const delayChildren = opts?.delayChildren ?? 0.2;
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren, delayChildren },
    },
  };
}

/** Child variant paired with `motionStaggerContainer` */
export function motionStaggerItem(opts?: { y?: number }) {
  const y = opts?.y ?? 24;
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionDurations.reveal,
        ease: MOTION_EASE,
      },
    },
  };
}
