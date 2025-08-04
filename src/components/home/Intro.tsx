import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

export function Intro() {
  const stats = [
    { number: '40%', label: 'Average Growth', icon: <Target className="w-6 h-6" /> },
    { number: '18', label: 'Months to ROI', icon: <Award className="w-6 h-6" /> },
    { number: '$50M+', label: 'Revenue Generated', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Users className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: 'Our Mission',
      description: 'To empower organizations with the strategic insights and digital capabilities they need to thrive in an increasingly complex and competitive landscape.',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Our Approach',
      description: 'We blend rigorous analysis with creative problem-solving, leveraging data, technology, and human-centered design to create sustainable solutions.',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Our Values',
      description: 'Excellence, integrity, innovation, and partnership drive everything we do. We\'re committed to delivering exceptional value while building lasting relationships.',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <Section spacing="xl" background="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Agent Analytics
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              We are{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Strategic Partners
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A premium consulting and product studio that combines strategic thinking 
              with cutting-edge technology to solve complex business challenges.
            </p>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our team of experts brings together decades of experience from top-tier 
              consulting firms, technology companies, and innovative startups to deliver 
              transformative solutions that drive real business impact.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="text-blue-600">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div key={index} className={`p-8 rounded-2xl border-2 ${value.bgColor} ${value.borderColor} hover:shadow-lg transition-shadow`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
} 