import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export function CompanyStory() {
  return (
    <Section spacing="xl" background="white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated" padding="xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              The Story Behind Agent Analytics Studio
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I founded Agent Analytics to solve a problem I saw everywhere — especially in businesses like mine: teams drowning in disjointed software, bouncing between platforms, tools, and subscriptions with no clear direction. The result? Wasted money, scattered systems, and a whole lot of unnecessary stress.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I wanted to build something different.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Agent Analytics exists to help people like me — founders, operators, and specialists — bring clarity to their tech stack. We guide businesses in simplifying, consolidating, and optimizing their software and AI workflows. Whether it's saving costs on unnecessary tools, designing a smart automation system, or developing a custom AI application that fits like a glove — we make technology work <em>for</em> you, not the other way around.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I built this as a Studio because I believe AI should be <strong>custom</strong> — not one-size-fits-all. Just like a studio tailors a song, design, or story to the artist, we tailor AI to your business and your goals.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                And yes, there's a meaning behind the name.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                <strong>Agent</strong> as in autonomous systems — the very AI agents that will shape the future of work. And <strong>Agent</strong> as in your partner and advocate in making technology a powerful asset, not a burden.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This is what we do. We help you simplify, focus, and build. With strategy, empathy, and the latest AI tools working on your side.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
} 