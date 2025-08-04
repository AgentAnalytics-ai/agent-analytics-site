import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

export default function StyleGuide() {
  return (
    <>
      <Section spacing="xl" background="white">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Design System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive guide to our design tokens, components, and patterns.
            </p>
          </div>

          {/* Typography */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Typography</h2>
            <div className="space-y-4">
              <div>
                <h1 className="text-6xl font-bold text-gray-900">Heading 1 (6xl)</h1>
                <p className="text-sm text-gray-500 mt-2">Font: Inter, Weight: 900</p>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-gray-900">Heading 2 (5xl)</h2>
                <p className="text-sm text-gray-500 mt-2">Font: Inter, Weight: 700</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900">Heading 3 (4xl)</h3>
                <p className="text-sm text-gray-500 mt-2">Font: Inter, Weight: 600</p>
              </div>
              <div>
                <h4 className="text-3xl font-semibold text-gray-900">Heading 4 (3xl)</h4>
                <p className="text-sm text-gray-500 mt-2">Font: Inter, Weight: 600</p>
              </div>
              <div>
                <p className="text-xl text-gray-600">Body Large (xl)</p>
                <p className="text-sm text-gray-500 mt-2">Font: Inter, Weight: 400</p>
              </div>
              <div>
                <p className="text-lg text-gray-600">Body Medium (lg)</p>
                <p className="text-sm text-gray-500 mt-2">Font: Inter, Weight: 400</p>
              </div>
              <div>
                <p className="text-base text-gray-600">Body Small (base)</p>
                <p className="text-sm text-gray-500 mt-2">Font: Inter, Weight: 400</p>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Color Palette</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="w-full h-24 bg-blue-600 rounded-lg mb-2"></div>
                <p className="font-semibold text-gray-900">Primary Blue</p>
                <p className="text-sm text-gray-500">#3B82F6</p>
              </div>
              <div>
                <div className="w-full h-24 bg-gray-900 rounded-lg mb-2"></div>
                <p className="font-semibold text-gray-900">Primary Dark</p>
                <p className="text-sm text-gray-500">#0F172A</p>
              </div>
              <div>
                <div className="w-full h-24 bg-gray-100 rounded-lg mb-2"></div>
                <p className="font-semibold text-gray-900">Light Gray</p>
                <p className="text-sm text-gray-500">#F1F5F9</p>
              </div>
              <div>
                <div className="w-full h-24 bg-gray-600 rounded-lg mb-2"></div>
                <p className="font-semibold text-gray-900">Medium Gray</p>
                <p className="text-sm text-gray-500">#4B5563</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Buttons</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="sm">Small Primary</Button>
                  <Button variant="primary" size="md">Medium Primary</Button>
                  <Button variant="primary" size="lg">Large Primary</Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Secondary Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" size="sm">Small Secondary</Button>
                  <Button variant="secondary" size="md">Medium Secondary</Button>
                  <Button variant="secondary" size="lg">Large Secondary</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Default Card</h3>
                <p className="text-gray-600">This is a standard card with default padding and hover effects.</p>
              </Card>
              <Card padding="sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Padding</h3>
                <p className="text-gray-600">Card with small padding for compact layouts.</p>
              </Card>
              <Card padding="lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Large Padding</h3>
                <p className="text-gray-600">Card with large padding for spacious layouts.</p>
              </Card>
            </div>
          </div>

          {/* Spacing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Spacing Scale</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded mr-4"></div>
                <span className="text-gray-900">4px (1rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-600 rounded mr-4"></div>
                <span className="text-gray-900">6px (1.5rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded mr-4"></div>
                <span className="text-gray-900">8px (2rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded mr-4"></div>
                <span className="text-gray-900">12px (3rem)</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-600 rounded mr-4"></div>
                <span className="text-gray-900">16px (4rem)</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
} 