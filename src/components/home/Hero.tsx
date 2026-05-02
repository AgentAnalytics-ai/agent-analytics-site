'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { MOTION_EASE } from '@/lib/motion';
import { Check } from 'lucide-react';
import { HeroInteractivePanel } from './HeroInteractivePanel';
import { Container } from '../ui/Container';
import Button from '../ui/Button';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';

/** Export from Nano Banana (or similar) as WebP; enable with NEXT_PUBLIC_SHOW_HERO_AMBIENT=true */
const HERO_AMBIENT_SRC = '/images/hero/ambient.webp';
const showHeroAmbient = process.env.NEXT_PUBLIC_SHOW_HERO_AMBIENT === 'true';

const TRUST_POINTS = [
  'Portals, workflows, and custom software—not generic chat wrappers',
  'Connected to your real systems and data',
  'Built for operators who need it live in production',
] as const;

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  eyebrow = 'Software that runs your operations',
}: {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
  eyebrow?: string;
}) {
  const { openCalendly } = useCalendly();
  const reduceMotion = useReducedMotion();

  const handleCalendlyClick = () => {
    openCalendly(CALENDLY_LINKS.talkStrategy);
  };

  const orbTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 10, repeat: Infinity, ease: MOTION_EASE };
  const driftTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 14, repeat: Infinity, ease: MOTION_EASE };
  const driftSlow = reduceMotion
    ? { duration: 0 }
    : { duration: 18, repeat: Infinity, ease: MOTION_EASE };

  return (
    <section className="relative min-h-[min(100dvh,56rem)] flex items-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-blue-50/50 py-16 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950/25 md:py-24">
      {showHeroAmbient ? (
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden dark:block"
          aria-hidden
        >
          <Image
            src={HERO_AMBIENT_SRC}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-900/70 to-neutral-950/85"
            aria-hidden
          />
        </div>
      ) : null}

      <motion.div
        className={`absolute inset-0 z-0 pointer-events-none ${showHeroAmbient ? 'dark:opacity-40' : ''}`}
        initial={false}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 h-72 w-[min(100vw,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-200/40 via-sky-100/30 to-transparent blur-3xl dark:from-blue-500/15 dark:via-sky-500/10 dark:to-transparent"
          animate={
            reduceMotion
              ? { opacity: 0.28, scale: 1 }
              : { opacity: [0.18, 0.28, 0.18], scale: [1, 1.05, 1] }
          }
          transition={orbTransition}
        />
        <motion.div
          className="absolute left-[-6rem] top-20 h-64 w-64 rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-500/12"
          animate={reduceMotion ? { x: 0, y: 0 } : { x: [0, 12, 0], y: [0, -8, 0] }}
          transition={driftTransition}
        />
        <motion.div
          className="absolute right-[-5rem] top-36 h-56 w-56 rounded-full bg-sky-200/28 blur-3xl dark:bg-sky-500/10"
          animate={reduceMotion ? { x: 0, y: 0 } : { x: [0, -14, 0], y: [0, 10, 0] }}
          transition={driftSlow}
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.35] dark:opacity-[0.5] motion-reduce:opacity-25"
        aria-hidden
      />

      <Container className="relative z-10 max-w-7xl">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-x-14 lg:gap-y-10">
          <div className="mx-auto max-w-xl text-center sm:max-w-2xl lg:mx-0 lg:max-w-none lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: MOTION_EASE }}
              className="font-display mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400"
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: MOTION_EASE }}
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-[3.35rem]"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06, ease: MOTION_EASE }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 lg:mx-0 lg:max-w-[34rem]"
            >
              {subtitle}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: MOTION_EASE }}
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 text-left text-sm text-neutral-600 dark:text-neutral-400 sm:mx-0 sm:max-w-md"
            >
              {TRUST_POINTS.map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-sky-500 dark:text-sky-400"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14, ease: MOTION_EASE }}
              className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:justify-start"
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="cta"
                  size="lg"
                  withArrow
                  onClick={handleCalendlyClick}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-shadow duration-300 hover:from-sky-600 hover:to-blue-700 hover:shadow-xl sm:w-auto"
                >
                  {primaryCTA}
                </Button>
              </motion.div>
              {secondaryCTA ? (
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/services"
                    className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-neutral-300 bg-transparent px-10 py-5 text-lg font-semibold tracking-wide text-neutral-700 transition-all duration-300 hover:scale-105 hover:bg-neutral-50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-800/50 sm:w-auto"
                  >
                    {secondaryCTA}
                  </Link>
                </motion.div>
              ) : null}
            </motion.div>
          </div>

          <div className="relative mx-auto flex w-full max-w-xl justify-center sm:max-w-2xl lg:mx-0 lg:w-full lg:max-w-[min(44rem,calc(100vw-3rem))] lg:justify-self-stretch xl:max-w-none">
            {/*
              No vertical rule—air + gap carries separation.
              Radial wash feathered to neutral-50 (page ground) reads “soft glow,” not a box.
            */}
            <div
              className="relative w-full rounded-[2rem] p-6 sm:p-8 md:p-9
                bg-[radial-gradient(ellipse_105%_95%_at_94%_35%,rgba(125,211,252,0.38)_0%,rgba(239,246,255,0.42)_42%,rgba(250,250,250,1)_74%,rgba(250,250,250,1)_100%)]
                dark:bg-[radial-gradient(ellipse_100%_90%_at_94%_32%,rgba(56,189,248,0.11)_0%,rgba(59,130,246,0.05)_38%,transparent_76%)]"
            >
              <HeroInteractivePanel />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
