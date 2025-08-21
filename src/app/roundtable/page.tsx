'use client'; // Add this at the top

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function SocialMixerPage() {
  const handleCalendlyClick = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/d/cs46-ps2-3cq/agent-analytics-social-mixer-september',
      });
    }
  };

  return (
    <>
      <Section spacing="xl" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Clean Header - No Emojis */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Agent Analytics Social Mixer
              </h1>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                Monthly networking meets social energy! Connect with AI leaders, share insights, and build meaningful relationships in a relaxed, vibrant atmosphere.
              </p>
            </div>
            
            {/* Event Details - Clean Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Monthly Social</h3>
                <p className="text-neutral-300">Every Thursday at 5:15 PM</p>
              </div>
              
              <div className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">The Social Capital</h3>
                <p className="text-neutral-300">Oklahoma City</p>
              </div>
              
              <div className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Network & Connect</h3>
                <p className="text-neutral-300">AI leaders & innovators</p>
              </div>
              
              <div className="bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">2 Hours of Fun</h3>
                <p className="text-neutral-300">Networking & socializing</p>
              </div>
            </div>

            {/* Professional Special Offer */}
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">First Time? You're Special!</h3>
              <p className="text-neutral-300">
                Attend your first mixer and we'll add you to our exclusive email list for future events, early access, and insider insights.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg" 
                withArrow
                onClick={handleCalendlyClick}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                RSVP for Next Mixer
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
