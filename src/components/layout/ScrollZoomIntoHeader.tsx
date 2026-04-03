'use client';

import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Opening scroll: content scales slightly toward the header / logo (first ~520px).
 * Disabled when the user prefers reduced motion — scroll-linked zoom is decorative.
 */
const SCROLL_RANGE: [number, number] = [0, 520];
const SCALE_RANGE: [number, number] = [1, 0.88];
const Y_RANGE: [number, number] = [0, -24];

export function ScrollZoomIntoHeader({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const staticScale: [number, number] = [1, 1];
  const staticY: [number, number] = [0, 0];

  const scale = useTransform(
    scrollY,
    SCROLL_RANGE,
    prefersReducedMotion ? staticScale : SCALE_RANGE
  );
  const y = useTransform(scrollY, SCROLL_RANGE, prefersReducedMotion ? staticY : Y_RANGE);

  return (
    <motion.div
      style={{
        scale,
        y,
        transformOrigin: '50% 0%',
      }}
      className={prefersReducedMotion ? undefined : 'will-change-transform'}
    >
      {children}
    </motion.div>
  );
}
