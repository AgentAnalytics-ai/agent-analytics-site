'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollZoomWrapperProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'moderate' | 'dramatic'; // Different intensity levels
  parallaxSpeed?: number; // Parallax movement speed
}

export function ScrollZoomWrapper({ 
  children, 
  className = '',
  intensity = 'moderate',
  parallaxSpeed = 1
}: ScrollZoomWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'], // Trigger earlier for smoother entry
  });

  // Intensity presets for different sections
  const intensityConfig = {
    subtle: { scaleRange: [0.92, 1, 0.95], opacityRange: [0.4, 1, 1, 0.5], yRange: [30, -30] },
    moderate: { scaleRange: [0.82, 1, 0.88], opacityRange: [0.3, 1, 1, 0.4], yRange: [60, -60] },
    dramatic: { scaleRange: [0.7, 1, 0.85], opacityRange: [0.2, 1, 1, 0.3], yRange: [80, -80] },
  };

  const config = intensityConfig[intensity];

  // Transform values with smooth curves
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], config.scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], config.opacityRange);
  const y = useTransform(scrollYProgress, [0, 1], config.yRange);

  // Apply spring physics for ultra-smooth motion
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothScale = useSpring(scale, springConfig);
  const smoothOpacity = useSpring(opacity, springConfig);
  const smoothY = useSpring(y, { ...springConfig, mass: 0.8 });

  // Apply parallax speed multiplier
  const parallaxY = useTransform(smoothY, (latest) => latest * parallaxSpeed);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ 
          scale: smoothScale,
          opacity: smoothOpacity,
          y: parallaxY,
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
