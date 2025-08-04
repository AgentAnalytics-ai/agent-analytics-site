'use client';

import { useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { detectUseCase, UseCaseCategory } from '@/lib/useCaseDetection';
import { posthog } from '@/components/analytics/Analytics';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    challenge: '',
    timeline: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [useCase, setUseCase] = useState<UseCaseCategory | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Track form submission attempt
    posthog.capture('form_submission_attempted', {
      form_type: 'contact',
      service: formData.service,
      has_company: !!formData.company,
      has_phone: !!formData.phone,
      has_timeline: !!formData.timeline,
      has_budget: !!formData.budget,
      use_case_category: useCase?.category || 'unknown',
      use_case_confidence: useCase?.confidence || 0
    });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Oops! Couldn\'t reach us. Please email us directly at contact@agentanalyticsai.com');
      }

      console.log('Form submitted successfully:', result);
      setIsSubmitted(true);
      
      // Track successful form submission
      posthog.capture('form_submitted', {
        form_type: 'contact',
        service: formData.service,
        use_case_category: useCase?.category || 'unknown',
        use_case_confidence: useCase?.confidence || 0,
        response_time: Date.now() - (window as any).formStartTime || 0
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          challenge: '',
          timeline: '',
          budget: ''
        });
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error instanceof Error ? error.message : 'Oops! Couldn\'t reach us. Please email us directly at contact@agentanalyticsai.com');
      
      // Track form submission error
      posthog.capture('form_submission_error', {
        form_type: 'contact',
        error_message: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChallengeChange = (value: string) => {
    setFormData({ ...formData, challenge: value });
    
    if (value.length > 20) {
      const detected = detectUseCase(value, formData.service);
      setUseCase(detected);
      
      // Track use case detection
      if (detected && detected.confidence > 0.3) {
        posthog.capture('use_case_detected', {
          category: detected.category,
          confidence: detected.confidence,
          service: formData.service
        });
      }
    } else {
      setUseCase(null);
    }
  };

  // Track form start time
  const handleFormFocus = () => {
    if (!(window as any).formStartTime) {
      (window as any).formStartTime = Date.now();
      posthog.capture('form_started', {
        form_type: 'contact'
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@agent-analytics.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Remote-First",
      description: "Serving clients globally"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 hours",
      description: "Quick turnaround on all inquiries"
    }
  ];

  const services = [
    "Strategic Consulting",
    "Product Development", 
    "Digital Transformation",
    "Organizational Development",
    "Market Entry & Expansion",
    "Performance Optimization",
    "Other"
  ];

  const timelines = [
    "Immediate (1-2 weeks)",
    "Soon (1-2 months)", 
    "Planning (3-6 months)",
    "Future (6+ months)"
  ];

  const budgets = [
    "$10K - $25K",
    "$25K - $50K",
    "$50K - $100K", 
    "$100K+",
    "Not sure yet"
  ];

  if (isSubmitted) {
    return (
      <Section spacing="xl" background="dark" className="pt-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Message sent successfully!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We've received your message and will get back to you within 24 hours. 
              We're excited to learn more about your project!
            </p>
            <Button variant="primary" size="lg" onClick={() => window.location.href = '/'}>
              Back to Home
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section spacing="xl" background="gray">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Tell us about your project
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6" onFocus={handleFormFocus}>
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your challenge *
                </label>
                <textarea
                  value={formData.challenge}
                  onChange={(e) => handleChallengeChange(e.target.value)}
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about the problem you're trying to solve..."
                  required
                />
                
                {useCase && useCase.confidence > 0.3 && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-900 mb-2">
                      💡 We think this might be a {useCase.category} challenge
                    </h4>
                    <div className="text-sm text-blue-800">
                      <p className="mb-2">
                        <strong>Suggested services:</strong> {useCase.suggestedServices.join(', ')}
                      </p>
                      <p>
                        <strong>Next steps:</strong> {useCase.nextSteps[0]}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline...</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select budget...</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in touch
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {info.title}
                        </h3>
                        <p className="text-gray-900 font-medium">
                          {info.details}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What happens next?
              </h3>
              <ol className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                  <span>We'll review your message within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                  <span>Schedule a free consultation call to discuss your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                  <span>Receive a customized proposal tailored to your challenge</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
} 