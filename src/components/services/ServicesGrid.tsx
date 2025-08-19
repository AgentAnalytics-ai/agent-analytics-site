import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import Button from '../ui/Button';
import {
  TrendingUp,
  Code,
  Zap,
  BarChart3,
  Users,
  Target,
  CheckCircle,
} from 'lucide-react';

export function ServicesGrid() {
  const services = [
    {
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
      title: 'Strategic Consulting',
      description:
        'Data-driven insights and strategic frameworks to help you make informed decisions and achieve sustainable competitive advantage.',
      features: [
        'Market Analysis & Intelligence',
        'Competitive Strategy',
        'Growth & Expansion Planning',
        'Performance Optimization',
      ],
      benefits: [
        '15-40% revenue growth',
        'Improved market positioning',
        'Risk mitigation strategies',
      ],
      cta: 'Learn More',
    },
    {
      icon: <Code className="w-10 h-10 text-purple-600" />,
      title: 'Product Development',
      description:
        'End-to-end product development from concept to launch, with a focus on user experience, market fit, and scalable architecture.',
      features: [
        'Product Strategy & Roadmap',
        'UX/UI Design Excellence',
        'Technical Architecture',
        'Agile Development & Delivery',
      ],
      benefits: [
        'Faster time to market',
        'Higher user adoption',
        'Reduced development costs',
      ],
      cta: 'View Portfolio',
    },
    {
      icon: <Zap className="w-10 h-10 text-indigo-600" />,
      title: 'Digital Transformation',
      description:
        'Comprehensive digital transformation programs that modernize operations, enhance customer experience, and create competitive advantages.',
      features: [
        'Process Optimization',
        'Technology Integration',
        'Change Management',
        'Digital Culture Building',
      ],
      benefits: [
        '30-50% efficiency gains',
        'Enhanced customer experience',
        'Future-ready operations',
      ],
      cta: 'Get Started',
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: 'Organizational Development',
      description:
        "Transform your organization's capabilities, culture, and leadership to drive sustainable growth and innovation.",
      features: [
        'Leadership Development',
        'Culture Transformation',
        'Change Management',
        'Talent Strategy',
      ],
      benefits: [
        'Improved employee engagement',
        'Enhanced leadership effectiveness',
        'Sustainable change adoption',
      ],
      cta: 'Explore Solutions',
    },
    {
      icon: <Target className="w-10 h-10 text-red-600" />,
      title: 'Market Entry & Expansion',
      description:
        'Strategic guidance for entering new markets, expanding globally, and scaling operations effectively.',
      features: [
        'Market Entry Strategy',
        'International Expansion',
        'Partnership Development',
        'Risk Assessment',
      ],
      benefits: [
        'Successful market penetration',
        'Reduced entry risks',
        'Accelerated growth',
      ],
      cta: 'Start Planning',
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-orange-600" />,
      title: 'Performance Optimization',
      description:
        'Data-driven optimization of business processes, operations, and performance to maximize efficiency and profitability.',
      features: [
        'Process Analysis',
        'Performance Metrics',
        'Optimization Strategies',
        'Implementation Support',
      ],
      benefits: [
        '20-35% cost reduction',
        'Improved operational efficiency',
        'Enhanced profitability',
      ],
      cta: 'Optimize Now',
    },
  ];

  return (
    <Section spacing="xl" background="gray" id="services">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-left hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-start mb-6">
                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  What We Deliver:
                </h4>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-gray-900 mb-3">
                  Expected Outcomes:
                </h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start text-gray-600"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="secondary"
                size="md"
                className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
              >
                {service.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
