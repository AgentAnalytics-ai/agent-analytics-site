'use client';

import { useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import Button from '../ui/Button';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  MapPin,
  CheckCircle,
} from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    timeline: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log('=== FORM SUBMISSION START ===');
      console.log('Form data:', formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      const result = await response.json();
      console.log('Response data:', result);

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message. Please try again.');
      }

      console.log('=== FORM SUBMISSION SUCCESS ===');
      setIsSubmitted(true);

      // Reset form after 5 seconds (increased from 3)
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
          timeline: '',
          budget: '',
        });
      }, 5000); // Increased timeout
    } catch (error) {
      console.error('=== FORM SUBMISSION ERROR ===');
      console.error('Error:', error);
      setError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessageChange = (value: string) => {
    setFormData(prev => ({ ...prev, message: value }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
  };

  const handleTimelineSelect = (timeline: string) => {
    setFormData(prev => ({ ...prev, timeline }));
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData(prev => ({ ...prev, budget }));
  };

  const services = [
    { value: 'ai-strategy', label: 'AI Strategy & Roadmapping' },
    { value: 'custom-development', label: 'Custom AI Development' },
    { value: 'implementation', label: 'AI Implementation & Training' },
    { value: 'consultation', label: 'General Consultation' },
    { value: 'other', label: 'Other' },
  ];

  const timelines = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-plus-months', label: '6+ months' },
    { value: 'exploring', label: 'Just exploring' },
  ];

  const budgets = [
    { value: 'under-10k', label: 'Under $10k' },
    { value: '10k-25k', label: '$10k - $25k' },
    { value: '25k-50k', label: '$25k - $50k' },
    { value: '50k-100k', label: '$50k - $100k' },
    { value: '100k-plus', label: '$100k+' },
    { value: 'undecided', label: 'Undecided' },
  ];

  return (
    <Section spacing="xl" background="gray" className="relative overflow-hidden">
      {/* Background Animations */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_50%)]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-600/8 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/20 dark:bg-slate-600/8 rounded-full blur-3xl"
        animate={{ 
          x: [0, -25, 0],
          y: [0, 30, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your challenge and we&apos;ll craft a strategic
              solution tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Ready to start your AI transformation? Let&apos;s discuss how we
                can help you achieve your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-blue-600">hello@agentanalyticsai.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-blue-600">Remote-First</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-8">
                {isSubmitted ? (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thanks for reaching out. We&apos;ll get back to you within 24
                      hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800">{error}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={e => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={e => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={e => handleInputChange('company', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={e => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={e => handleServiceSelect(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Describe Your Challenge *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Describe the problem you're trying to solve and what you hope to achieve..."
                        value={formData.message}
                        onChange={e => handleMessageChange(e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          value={formData.timeline}
                          onChange={e => handleTimelineSelect(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map(timeline => (
                            <option key={timeline.value} value={timeline.value}>
                              {timeline.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={e => handleBudgetSelect(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select budget</option>
                          {budgets.map(budget => (
                            <option key={budget.value} value={budget.value}>
                              {budget.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
