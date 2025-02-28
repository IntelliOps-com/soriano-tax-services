import { COMPANY_INFO } from '../constants/companyInfo';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': COMPANY_INFO.url,
    name: COMPANY_INFO.name,
    image: COMPANY_INFO.logo,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.url,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3500 W. Olive Ave Suite 300',
      addressLocality: 'Burbank',
      addressRegion: 'CA',
      postalCode: '91505',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.1517,
      longitude: -118.3406,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        validFrom: '2024-05-01',
        validThrough: '2024-12-19',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        validFrom: '2024-01-06',
        validThrough: '2024-04-30',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      {
        '@type': 'State',
        name: 'California',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
    ],
    priceRange: '$$',
    hasMap: 'https://www.google.com/maps?q=3500+W.+Olive+Ave+Suite+300+Burbank+CA+91505',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}