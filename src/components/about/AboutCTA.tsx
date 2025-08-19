import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import Button from '../ui/Button';
import Link from 'next/link';

export function AboutCTA() {
  return (
    <Section spacing="xl" background="blue">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Tech Stack?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can help simplify your software systems
            and implement custom AI solutions that work for your business.
          </p>
          <Link href="/book">
            <Button variant="primary" size="lg">
              Book a Strategy Call
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
