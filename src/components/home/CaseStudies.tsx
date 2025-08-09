import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import Button from '../ui/Button';
import { ArrowRight, Star, TrendingUp, Users, DollarSign } from 'lucide-react';

export function CaseStudies() {
  const caseStudies = [
    {
      title: 'SpecIQ',
      subtitle: 'AI-Powered Market Intelligence Platform',
      description:
        'Developed a revolutionary market intelligence platform that leverages advanced AI and machine learning to provide real-time insights, competitive analysis, and predictive analytics for Fortune 500 companies.',
      results: [
        {
          metric: '40%',
          label: 'increase in market share',
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          metric: '60%',
          label: 'reduction in research time',
          icon: <Users className="w-4 h-4" />,
        },
        {
          metric: '$2M+',
          label: 'in new revenue generated',
          icon: <DollarSign className="w-4 h-4" />,
        },
      ],
      category: 'Product Development',
      featured: true,
      technologies: ['AI/ML', 'React', 'Python', 'AWS'],
      client: 'Fortune 500 Technology Company',
    },
    {
      title: 'Global Retail Transformation',
      subtitle: 'Digital-First Customer Experience',
      description:
        'Led a comprehensive digital transformation for a 500-store retail chain, modernizing operations and creating a seamless omnichannel experience that revolutionized customer engagement.',
      results: [
        {
          metric: '25%',
          label: 'increase in online sales',
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          metric: '30%',
          label: 'improvement in customer satisfaction',
          icon: <Users className="w-4 h-4" />,
        },
        {
          metric: '50%',
          label: 'reduction in operational costs',
          icon: <DollarSign className="w-4 h-4" />,
        },
      ],
      category: 'Digital Transformation',
      featured: false,
      technologies: ['Cloud Architecture', 'Mobile Apps', 'Analytics', 'IoT'],
      client: 'Global Retail Chain',
    },
    {
      title: 'Healthcare Innovation Platform',
      subtitle: 'Strategic Growth & Market Entry',
      description:
        'Developed and executed a comprehensive growth strategy for a healthcare technology startup, including market entry, partnership development, and Series B funding strategy.',
      results: [
        {
          metric: '300%',
          label: 'user growth achieved',
          icon: <Users className="w-4 h-4" />,
        },
        {
          metric: '15',
          label: 'strategic partnerships formed',
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          metric: '$25M',
          label: 'Series B funding secured',
          icon: <DollarSign className="w-4 h-4" />,
        },
      ],
      category: 'Strategic Consulting',
      featured: false,
      technologies: ['Healthcare Tech', 'Compliance', 'Analytics', 'Mobile'],
      client: 'Healthcare Technology Startup',
    },
  ];

  return (
    <Section spacing="xl" background="white" id="work">
      <Container>
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Transformative Results
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we&apos;ve helped organizations achieve breakthrough
            results through strategic consulting and innovative product
            development.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className={`${study.featured ? 'border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl' : 'hover:shadow-xl transition-shadow'} relative overflow-hidden`}
            >
              {study.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 fill-current" />
                  Featured Case Study
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {study.client}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>

                  <p className="text-xl text-blue-600 font-semibold mb-6">
                    {study.subtitle}
                  </p>

                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {study.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Technologies & Solutions:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="bg-white p-4 rounded-lg border border-gray-200"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {result.icon}
                          <span className="text-2xl font-bold text-blue-600">
                            {result.metric}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="secondary" size="lg" className="group">
                    View Full Case Study
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-gray-400 mb-4">
                        {study.title}
                      </div>
                      <div className="text-gray-500 text-lg">
                        Interactive Case Study
                      </div>
                      {study.featured && (
                        <div className="mt-4">
                          <div className="inline-flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                            <Star className="w-4 h-4 fill-current" />
                            Featured Project
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="primary" size="lg" className="group">
            View All Case Studies
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
