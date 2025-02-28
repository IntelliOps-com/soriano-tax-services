import { Container } from '../ui/Container';
import { Award, Users, Clock, Building2 } from 'lucide-react';

const features = [
  {
    name: 'Years of Experience',
    description: 'Over 15 years serving individuals and businesses',
    icon: Clock,
  },
  {
    name: 'Professional Excellence',
    description: 'Dedicated team of certified tax professionals',
    icon: Award,
  },
  {
    name: 'Client-First Approach',
    description: 'Personalized solutions for your unique needs',
    icon: Users,
  },
  {
    name: 'Industry Expertise',
    description: 'Specialized knowledge across various sectors',
    icon: Building2,
  },
];

export function About() {
  return (
    <section id="about" className="py-20" aria-labelledby="about-heading">
      <Container>
        <div className="text-center">
          <h2 id="about-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Our Tax Services</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto" aria-label="company description">
            Soriano Tax Services has been providing expert tax and accounting services since 2009,
            building lasting relationships through integrity and exceptional service.
          </p>
        </div>

        <div className="mt-16" aria-label="key features">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
            {features.map((feature) => (
              <div key={feature.name} className="text-center" role="article">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white mx-auto">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900" aria-label={`feature: ${feature.name}`}>{feature.name}</h3>
                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}