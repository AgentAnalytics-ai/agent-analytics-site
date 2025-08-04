import Image from 'next/image';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export function Team() {
  return (
    <Section spacing="xl" background="white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Founder
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The mind behind Agent Analytics Studio
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card variant="elevated" padding="xl" className="text-center">
            <Image 
              src="/images/Professional Photo.png" 
              alt="Grant Decker - Founder" 
              width={128} 
              height={128} 
              className="rounded-full mx-auto mb-6 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Grant Decker
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founder & Principal Consultant
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Strategic consultant with expertise in AI systems, organizational transformation, and digital innovation. Helping organizations navigate complex challenges with data-driven insights and proven methodologies.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
} 