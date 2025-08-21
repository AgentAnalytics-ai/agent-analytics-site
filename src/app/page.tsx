import Hero from '../components/home/Hero';
import WhoWeAre from '../components/home/WhoWeAre';
import { LeadForm } from '../components/home/LeadForm';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';

export default function Home() {
  return (
    <>
      <Hero
        title="Strategic Intelligence in Action"
        subtitle="We design agentic systems that think, act, and align with your business. These aren't off-the-shelf tools — they're adaptive solutions built to understand and execute."
        primaryCTA="Let's Talk Strategy"
        secondaryCTA="Explore Solutions"
      />

      <Section spacing="xl" background="gray">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Stop managing tools. Start achieving results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Strategic Focus</h3>
              <p className="text-neutral-300">We solve your biggest challenges with custom AI solutions that actually work.</p>
            </div>
            
            <div className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
              <p className="text-neutral-300">Work seamlessly with your existing team and processes.</p>
            </div>
            
            <div className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Solutions</h3>
              <p className="text-neutral-300">Build once, scale everywhere. Solutions that grow with your business.</p>
            </div>
          </div>
        </Container>
      </Section>

      <LeadForm />
    </>
  );
}
