'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Multi-dollar feel: as you scroll, the page content zooms *into* the header/logo
 * (scale down with origin at top), so the camera feels like it's pushing toward
 * the brand. Works best on the first ~400–600px of scroll.
 */
const SCROLL_RANGE: [number, number] = [0, 520];
const SCALE_RANGE: [number, number] = [1, 0.88];
const Y_RANGE: [number, number] = [0, -24]; // slight pull up as we zoom in

export function ScrollZoomIntoHeader({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, SCROLL_RANGE, SCALE_RANGE);
  const y = useTransform(scrollY, SCROLL_RANGE, Y_RANGE);

  return (
    <motion.div
      style={{
        scale,
        y,
        transformOrigin: '50% 0%', // zoom toward the top (logo/header)
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
