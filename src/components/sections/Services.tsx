import { Container } from '../ui/Container';
import { SERVICES } from '../../utils/constants';
import { CheckCircle2 } from 'lucide-react';

function ServiceCard({ service }: { service: typeof SERVICES[0], index: number }) {
  return (
    <article className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden" role="article">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center" aria-label={`${service.title} services`}>
          {service.title}
        </h3>
        
        <ul className="space-y-3" aria-label={`${service.title} service list`}>
          {service.items.map((item) => (
            <li key={item} className="flex items-start group/item">
              <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 bg-stone-200" aria-labelledby="services-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="services-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Tax Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600" aria-label="services overview">
            Tailored services to help you and your business thrive
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="list" aria-label="tax services list">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}