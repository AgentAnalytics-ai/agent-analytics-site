import Hero from '../components/home/Hero';
import WhoWeAre from '../components/home/WhoWeAre';
import HowWeWork from '../components/home/HowWeWork';
import { LeadForm } from '../components/home/LeadForm';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';

export default function Home() {
  return (
    <>
      <Hero
        title="Strategic Intelligence in Action"
        subtitle="We design agentic systems that think, act, and align with your business. These aren&apos;t off-the-shelf tools — they&apos;re adaptive solutions built to understand and execute."
        primaryCTA="Let&apos;s Talk Strategy"
        secondaryCTA="Explore Solutions"
      />

      <Section spacing="lg" background="gray">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Card variant="elevated" padding="lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                The Problem
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Organizations are overwhelmed by tools and frameworks. AI gets
                bolted on. Strategy stays abstract. Execution misfires. Results
                fall short.
              </p>
            </Card>

            <Card variant="elevated" padding="lg">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Approach
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We build agentic systems that think and act — deeply aligned
                with your business objectives. Every solution is strategic,
                integrated, and designed for intelligent execution.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <WhoWeAre />
      <HowWeWork />
      <LeadForm />
    </>
  );
}
