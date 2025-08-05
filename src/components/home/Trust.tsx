import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Star, Quote } from 'lucide-react';

export function Trust() {
  const testimonials = [
    {
      quote: "Agent Analytics transformed our business strategy and helped us achieve 40% growth in just 18 months. Their insights were invaluable and their execution was flawless.",
      author: "Sarah Johnson",
      title: "CEO, TechCorp",
      company: "Fortune 500 Technology",
      rating: 5,
      avatar: "SJ"
    },
    {
      quote: "The team&apos;s expertise in product development and market analysis helped us launch our platform successfully and secure Series A funding. They&apos;re true strategic partners.",
      author: "Michael Chen",
      title: "Founder & CEO",
      company: "HealthTech Innovations",
      rating: 5,
      avatar: "MC"
    },
    {
      quote: "Working with Agent Analytics was a game-changer. Their strategic approach and execution excellence exceeded our expectations and delivered measurable results.",
      author: "Emily Rodriguez",
      title: "VP Strategy",
      company: "Global Retail Corp",
      rating: 5,
      avatar: "ER"
    }
  ];

  const clients = [
    'Fortune 500 Technology',
    'Global Healthcare Systems',
    'Retail Innovation Leaders',
    'Financial Services Corp',
    'Manufacturing Excellence',
    'Startup Accelerator'
  ];

  const awards = [
    'Top Consulting Firm 2024',
    'Excellence in Innovation',
    'Best Strategic Partner',
    'Digital Transformation Leader'
  ];

  return (
    <Section spacing="xl" background="gray" id="about">
      <Container>
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We&apos;ve partnered with organizations across industries to deliver 
            transformative results and lasting impact.
          </p>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <p className="text-center text-gray-500 mb-8 font-medium">Recognized for Excellence</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-20 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700 font-semibold text-sm text-center px-3">
                  {award}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <p className="text-center text-gray-500 mb-8 font-medium">Our clients include:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-16 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-gray-600 font-semibold text-sm text-center px-2">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-left hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-blue-200 mb-4" />
              
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats - Unique metrics only */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">$50M+</div>
            <div className="text-gray-600 font-medium">Revenue Generated</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">18</div>
            <div className="text-gray-600 font-medium">Months Avg. ROI</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Project Success Rate</div>
          </div>
        </div>
      </Container>
    </Section>
  );
} 