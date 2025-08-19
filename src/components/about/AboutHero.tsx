import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export function AboutHero() {
  return (
    <Section spacing="xl" background="dark" className="pt-32">
      <Container>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Why We Built Agent Analytics Studio
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            A smarter, calmer approach to AI and software systems for modern
            businesses.
          </p>
        </div>
      </Container>
    </Section>
  );
}
