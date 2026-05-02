'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { ServicesBrandedGrid } from '@/components/services/ServicesBrandedGrid';
import { CALENDLY_LINKS } from '@/lib/constants';
import { useCalendly } from '@/hooks/useCalendly';
import { enterTransition } from '@/lib/motion';

export default function ServicesPage() {
  const { openCalendly } = useCalendly();

  return (
    <>
      <Section
        spacing="xl"
        className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-blue-50/50 pb-16 pt-28 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950/25 md:pb-20 md:pt-32"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(59,130,246,0.07),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_18%,rgba(59,130,246,0.12),transparent_50%)]"
          aria-hidden
        />

        <Container className="relative z-10 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={enterTransition(0)}
              className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-400 sm:text-[11px]"
            >
              Consulting & delivery
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={enterTransition(0.06)}
              className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Technology solutions that deliver
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={enterTransition(0.12)}
              className="mx-auto mt-6 max-w-xl text-sm text-neutral-600 dark:text-neutral-400 sm:text-base"
            >
              Six tracks—from strategy to rollout. Outcomes visible;{' '}
              <a href="/offerings" className="font-medium text-sky-600 underline-offset-4 hover:underline dark:text-sky-400">
                packaged builds
              </a>{' '}
              stay on Offerings.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={enterTransition(0.18)}
              className="mt-10 flex justify-center"
            >
              <Button
                variant="cta"
                size="lg"
                className="shadow-lg"
                onClick={() => openCalendly(CALENDLY_LINKS.bookSession)}
              >
                Start your technology journey
                <ArrowRight className="ml-2 size-5" aria-hidden />
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section spacing="xl" background="gray" className="relative">
        <Container className="relative z-10">
          <ServicesBrandedGrid />
        </Container>
      </Section>
    </>
  );
}
