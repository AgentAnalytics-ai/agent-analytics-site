import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export function Credibility() {
  const stats = [
    { number: '95%', label: 'retention rate' },
    { number: 'Built IP', label: 'used by global leaders' },
    { number: '50+', label: 'strategy engagements' }
  ];

  return (
    <Section spacing="xl" background="dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
} 