'use client';

import { useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import Button from '../ui/Button';
import { Card } from '../ui/Card';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from 'lucide-react';
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
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [useCase, setUseCase] = useState<UseCaseCategory | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      use_case_confidence: useCase?.confidence || 0,
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
        throw new Error(
          result.error ||
            'Oops! Couldn&apos;t reach us. Please email us directly at contact@agentanalyticsai.com'
        );
      }

      setIsSubmitted(true);

      // Track successful form submission
      posthog.capture('form_submitted', {
        form_type: 'contact',
        service: formData.service,
        use_case_category: useCase?.category || 'unknown',
        use_case_confidence: useCase?.confidence || 0,
        response_time: Date.now() - (window.formStartTime || 0),
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
          budget: '',
        });
      }, 3000);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Oops! Couldn&apos;t reach us. Please email us directly at contact@agentanalyticsai.com'
      );

      // Track form submission error
      posthog.capture('form_submission_error', {
        form_type: 'contact',
        error_message: error instanceof Error ? error.message : 'Unknown error',
        use_case_category: useCase?.category || 'unknown',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChallengeChange = (value: string) => {
    setFormData(prev => ({ ...prev, challenge: value }));
    
    // Detect use case from challenge text
    const detectedUseCase = detectUseCase(value);
    setUseCase(detectedUseCase);
    
    // Track use case detection
    if (detectedUseCase) {
      posthog.capture('use_case_detected', {
        category: detectedUseCase.category,
        confidence: detectedUseCase.confidence,
        keywords: detectedUseCase.keywords,
      });
    }
  };

  const handleFormFocus = () => {
    if (!window.formStartTime) {
      window.formStartTime = Date.now();
    }
    
    posthog.capture('form_started', {
      form_type: 'contact',
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      details: 'hello@agent-analytics.com',
      description: 'We&apos;ll respond within 24 hours',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Available Mon-Fri, 9AM-6PM EST',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      details: 'Remote-First',
      description: 'Serving clients globally',
    },
  ];

  if (isSubmitted) {
    return (
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for reaching out. We&apos;ll get back to you within 24
              hours with a personalized response.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let&apos;s Start Your AI Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your challenge and we&apos;ll craft a strategic
              solution tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <form onSubmit={handleSubmit} onFocus={handleFormFocus}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={e =>
                            setFormData(prev => ({ ...prev, name: e.target.value }))
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={e =>
                            setFormData(prev => ({ ...prev, email: e.target.value }))
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={e =>
                            setFormData(prev => ({ ...prev, company: e.target.value }))
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={e =>
                            setFormData(prev => ({ ...prev, phone: e.target.value }))
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={e =>
                          setFormData(prev => ({ ...prev, service: e.target.value }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-strategy">AI Strategy & Consulting</option>
                        <option value="ai-implementation">AI Implementation</option>
                        <option value="custom-development">Custom AI Development</option>
                        <option value="data-analytics">Data Analytics & Insights</option>
                        <option value="process-automation">Process Automation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="challenge"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Describe Your Challenge *
                      </label>
                      <textarea
                        id="challenge"
                        name="challenge"
                        required
                        rows={4}
                        value={formData.challenge}
                        onChange={e => handleChallengeChange(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about the problem you're trying to solve, your current situation, and what you hope to achieve..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="timeline"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={e =>
                            setFormData(prev => ({ ...prev, timeline: e.target.value }))
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (1-3 months)</option>
                          <option value="short-term">Short-term (3-6 months)</option>
                          <option value="medium-term">Medium-term (6-12 months)</option>
                          <option value="long-term">Long-term (12+ months)</option>
                          <option value="exploring">Just exploring options</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={e =>
                            setFormData(prev => ({ ...prev, budget: e.target.value }))
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-50k">Under $50K</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k-250k">$100K - $250K</option>
                          <option value="250k-500k">$250K - $500K</option>
                          <option value="500k-plus">$500K+</option>
                          <option value="undecided">Undecided</option>
                        </select>
                      </div>
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700">{error}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Agent Analytics?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Strategic Approach
                      </h4>
                      <p className="text-gray-600">
                        We don&apos;t just implement AI—we align it with your
                        business strategy for maximum impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Proven Results
                      </h4>
                      <p className="text-gray-600">
                        Our clients see an average of 40% growth and achieve ROI
                        within 18 months.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        End-to-End Support
                      </h4>
                      <p className="text-gray-600">
                        From strategy to implementation to ongoing optimization,
                        we&apos;re with you every step.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">
                  Need Immediate Help?
                </h4>
                <p className="text-blue-800 mb-4">
                  For urgent inquiries or to schedule a consultation, reach out
                  directly:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-blue-800">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>hello@agent-analytics.com</span>
                  </div>
                  <div className="flex items-center text-blue-800">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
