'use client';

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          challenge: formData.get('message'),
          company: '',
          phone: '',
          service: '',
          timeline: '',
          budget: ''
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section spacing="xl" background="gray">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Tell us what&apos;s keeping you up at night.
          </h2>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
              <p className="text-emerald-800 dark:text-emerald-200">
                Thanks! We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-800 dark:text-red-200">
                Something went wrong. Please try again or contact us directly.
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <textarea
                name="message"
                placeholder="Describe your challenge..."
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                rows={4}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              variant="cta" 
              size="lg" 
              withArrow={true}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            We&apos;ll follow up within 24 hours.
          </p>
        </div>
      </Container>
    </Section>
  );
} 