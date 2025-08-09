'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Brain,
  Code,
  Zap,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Roadmapping',
      description:
        'We don&apos;t just analyze—we architect your AI future. I help you identify the right AI opportunities, build realistic roadmaps, and avoid the common pitfalls that derail AI initiatives.',
      features: [
        'AI Opportunity Assessment',
        'Strategic Roadmap Development',
        'Technology Stack Selection',
        'ROI Analysis & Planning',
      ],
      benefits: [
        'Clear AI implementation path',
        'Avoid costly mistakes',
        'Measurable business outcomes',
      ],
      cta: 'Book Strategy Session',
      href: 'https://calendly.com/grant-agentanalyticsai',
      gradient: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    },
    {
      icon: Code,
      title: 'Custom AI Development',
      description:
        'I build intelligent systems that actually work for your business. No off-the-shelf solutions—just custom AI that understands your unique challenges and delivers real results.',
      features: [
        'Custom AI Models',
        'Intelligent Automation',
        'Predictive Analytics',
        'Integration Development',
      ],
      benefits: [
        'Reduced operational costs',
        'Competitive advantage',
        'Scalable solutions',
      ],
      cta: 'Discuss Your Project',
      href: 'https://calendly.com/grant-agentanalyticsai',
      gradient: 'from-purple-500 to-pink-600',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'AI Implementation & Training',
      description:
        'I don&apos;t just build AI—I ensure your team can use it effectively. From implementation to training, I help you maximize ROI and drive adoption across your organization.',
      features: [
        'Implementation Support',
        'Team Training & Enablement',
        'Change Management',
        'Ongoing Optimization',
      ],
      benefits: [
        'Faster AI adoption',
        'Maximized ROI',
        'Sustainable transformation',
      ],
      cta: 'Start Implementation',
      href: 'https://calendly.com/grant-agentanalyticsai',
      gradient: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section
        spacing="xl"
        background="dark"
        className="pt-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        <Container className="relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-500/30 backdrop-blur-sm">
              <Lightbulb className="w-4 h-4" />
              AI Consulting That Actually Works
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Your AI Transformation Partner
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              I don&apos;t just consult on AI—I build intelligent systems that
              transform your business. We help you simplify, consolidate, and
              optimize your software and AI workflows. No generic advice, no
              off-the-shelf solutions. Just strategic thinking and custom AI
              that delivers real results.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 shadow-lg hover:shadow-cyan-500/25"
              onClick={() =>
                (window.location.href =
                  'https://calendly.com/grant-agentanalyticsai')
              }
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* My Story Section */}
      <Section spacing="xl" background="gray" className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"></div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Why I&apos;m Different
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I founded Agent Analytics to solve a problem I saw everywhere:
                teams overwhelmed by disjointed tools and scattered platforms.
                Most AI consultants give you generic advice and leave you to
                figure out the rest. I don&apos;t work that way.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Strategic + Hands-On
                    </h3>
                    <p className="text-gray-600 text-sm">
                      I don&apos;t just create roadmaps—I help you execute them
                      and build the actual AI solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Results-Focused
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Every AI solution I build is designed to deliver
                      measurable business outcomes, not just technical
                      achievements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Team-Centric
                    </h3>
                    <p className="text-gray-600 text-sm">
                      I ensure your team can actually use and benefit from the
                      AI systems we build together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Approach
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Understand Your Reality
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Deep dive into your business, challenges, and
                      opportunities
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Build Custom Solutions
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Design and develop AI that fits your specific needs
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Ensure Success
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Train your team and optimize for maximum impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section
        spacing="xl"
        background="gray"
        id="services"
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"></div>
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              What I Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end AI consulting, development, and enablement—tailored to
              your business and your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="relative text-left hover:shadow-2xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:-translate-y-2"
                >
                  <div
                    className={`p-4 rounded-2xl ${service.iconBg} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-900 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-2"></div>
                      What We Deliver:
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-gray-600 group-hover:text-gray-700 transition-colors"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-1 h-4 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-2"></div>
                      Expected Outcomes:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start text-gray-600 group-hover:text-gray-700 transition-colors"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                          <span className="text-sm font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="secondary"
                    size="md"
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-blue-500/25 border-0 text-white transition-all duration-300 group-hover:scale-105`}
                    onClick={() => (window.location.href = service.href)}
                  >
                    {service.cta}
                  </Button>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section
        spacing="xl"
        background="dark"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how AI can revolutionize your business. No
              generic advice—just strategic solutions tailored to your unique
              challenges.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 shadow-lg hover:shadow-cyan-500/25"
              onClick={() =>
                (window.location.href =
                  'https://calendly.com/grant-agentanalyticsai')
              }
            >
              Start Your AI Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
