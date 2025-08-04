import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export function ServicesHero() {
  return (
    <Section spacing="xl" background="dark" className="pt-32">
      <Container>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Comprehensive Consulting Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            We offer end-to-end consulting services that address the full spectrum of modern business challenges, 
            from strategic planning to digital transformation and organizational development.
          </p>
          <Button variant="primary" size="lg" className="group">
            Start a Conversation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </Section>
  );
} 