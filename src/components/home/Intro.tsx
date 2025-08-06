import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { CheckCircle, Award, Users } from 'lucide-react';

export function Intro() {
  const stats = [
    {
      number: '40%',
      label: 'Average Growth',
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: '18',
      label: 'Months to ROI',
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: '$50M+',
      label: 'Revenue Generated',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            We&apos;re not just consultants—we&apos;re your growth partners
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            With over a decade of experience in AI implementation and business
            transformation, we&apos;ve helped companies achieve remarkable
            results through strategic technology adoption.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
