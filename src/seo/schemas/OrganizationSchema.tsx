import { COMPANY_INFO } from '../constants/companyInfo';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${COMPANY_INFO.url}#organization`,
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.url,
    logo: COMPANY_INFO.logo,
    description: COMPANY_INFO.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.zip,
      addressCountry: COMPANY_INFO.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish'],
    },
    foundingDate: '2009',
    keywords: [
      'tax services',
      'tax preparation',
      'accounting services',
      'business tax',
      'individual tax',
      'tax planning',
      'Burbank tax services',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}