import { SERVICES } from '../../utils/constants';
import { COMPANY_INFO } from '../constants/companyInfo';

export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'AccountingService',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url,
      availableLanguage: ['English', 'Spanish'],
    },
    serviceType: 'Tax Services',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    availabilityStarts: '2024-01-06T10:00',
    availabilityEnds: '2024-12-19T17:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tax Services',
      itemListElement: SERVICES.map((category, index) => ({
        '@type': 'OfferCatalog',
        name: category.title,
        itemListElement: category.items.map((service, serviceIndex) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service,
            provider: {
              '@type': 'AccountingService',
              name: COMPANY_INFO.name,
            },
            serviceType: category.title,
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: COMPANY_INFO.url,
              serviceLocation: {
                '@type': 'Place',
                name: COMPANY_INFO.name,
                address: COMPANY_INFO.address,
              },
            },
          },
          position: serviceIndex + 1,
        })),
        position: index + 1,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}