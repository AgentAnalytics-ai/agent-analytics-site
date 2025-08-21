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
        title="Ready to Simplify Your Tech Stack?"
        subtitle="Let's discuss how we can help you eliminate complexity and build intelligent systems that work for you."
        primaryCTA="Start a Conversation"
        secondaryCTA=""
      />

      <Section spacing="xl" background="gray">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Agent Analytics
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              We're a consulting studio that quietly powers modern enterprises with custom strategy, technology, and internal tools.
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
