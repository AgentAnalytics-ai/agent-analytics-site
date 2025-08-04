import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Target, Users, Rocket } from 'lucide-react';

export function Values() {
  const values = [
    {
      title: "Strategic Precision",
      description: "Every solution is crafted with surgical precision, targeting your specific business challenges with data-driven insights and proven methodologies.",
      icon: <Target className="h-10 w-10 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
    },
    {
      title: "Client Partnership", 
      description: "We don't just deliver solutions—we become an extension of your team, building lasting relationships that drive sustained success and growth.",
      icon: <Users className="h-10 w-10 text-indigo-600 dark:text-indigo-400" strokeWidth={1.5} />
    },
    {
      title: "Innovation Velocity",
      description: "We accelerate your transformation with cutting-edge AI and technology, turning complex challenges into competitive advantages at speed.",
      icon: <Rocket className="h-10 w-10 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
    }
  ];

  return (
    <Section spacing="xl" background="gray">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} variant="elevated" padding="lg" className="text-center group hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-gray-50 dark:bg-gray-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30 transition-colors duration-300">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
} 