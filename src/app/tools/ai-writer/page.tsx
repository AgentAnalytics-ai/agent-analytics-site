import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PenTool, Sparkles, Zap, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Writer Tool - Agent Analytics',
  description: 'AI-powered writing assistant to help you create compelling content, strategies, and communications.',
  openGraph: {
    title: 'AI Writer Tool - Agent Analytics',
    description: 'AI-powered writing assistant to help you create compelling content, strategies, and communications.',
  },
};

export default function AIWriterPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Writing Assistant
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your ideas into compelling content with our AI-powered writing tool.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-2xl">
                  <PenTool className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Content Creation
              </h3>
              <p className="text-gray-600 mb-6">
                Generate blog posts, articles, and marketing copy that resonates with your audience.
              </p>
              <Button variant="primary" size="md" className="w-full">
                Start Writing
              </Button>
            </Card>

            <Card className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-100 rounded-2xl">
                  <Sparkles className="w-12 h-12 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Strategy Documents
              </h3>
              <p className="text-gray-600 mb-6">
                Create business plans, strategic frameworks, and executive summaries.
              </p>
              <Button variant="primary" size="md" className="w-full">
                Create Strategy
              </Button>
            </Card>

            <Card className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-100 rounded-2xl">
                  <Zap className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Communication
              </h3>
              <p className="text-gray-600 mb-6">
                Craft emails, presentations, and communications that drive action.
              </p>
              <Button variant="primary" size="md" className="w-full">
                Compose Message
              </Button>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button variant="secondary" size="lg">
              <Target className="mr-2 w-5 h-5" />
              Explore All Tools
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
