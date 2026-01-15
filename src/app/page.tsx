'use client';

import React from 'react';
import Hero from '../components/home/Hero';
import { LeadForm } from '../components/home/LeadForm';
import { ProblemSection } from '../components/home/ProblemSection';
import { VisualShowcase } from '../components/home/VisualShowcase';
import { FutureTechSection } from '../components/home/FutureTechSection';
import HowWeWork from '../components/home/HowWeWork';
import { DifferentiationSection } from '../components/home/DifferentiationSection';
import { BuyerConfidence } from '../components/home/BuyerConfidence';

export default function Home() {
  return (
    <>
      <Hero
        title="We build modern software where AI actually does the work."
        subtitle="Turn your business processes into smart software that runs itself. No chatbots. No complexity. Just software that works."
        primaryCTA="Let's Build It"
        secondaryCTA="See How It Works"
      />

      {/* Text-heavy sections - NO zoom (distracting for reading) */}
      <ProblemSection />

      {/* Dashboard/KPI section - Uses whileInView for smooth, performant animations */}
      <VisualShowcase />

      {/* Text-heavy sections - NO zoom (distracting for reading) */}
      <FutureTechSection />
      <HowWeWork />
      <DifferentiationSection />

      <LeadForm />
    </>
  );
}
