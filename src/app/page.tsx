import Hero from '../components/home/Hero';
import { LeadForm } from '../components/home/LeadForm';
import { ProblemSection } from '../components/home/ProblemSection';
import { SolutionSection } from '../components/home/SolutionSection';
import { AISDKDashboard } from '../components/home/AISDKDashboard';
import { FutureTechSection } from '../components/home/FutureTechSection';
import HowWeWork from '../components/home/HowWeWork';
import { PricingSection } from '../components/home/PricingSection';
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

      <AISDKDashboard />
      <ProblemSection />
      <SolutionSection />
      <FutureTechSection />
      <HowWeWork />
      <PricingSection />
      <DifferentiationSection />
      <LeadForm />
    </>
  );
}
