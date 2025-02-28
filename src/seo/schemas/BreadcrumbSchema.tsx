import { COMPANY_INFO } from '../constants/companyInfo';

export function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': COMPANY_INFO.url,
          name: 'Home',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': `${COMPANY_INFO.url}#about`,
          name: 'About',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@id': `${COMPANY_INFO.url}#services`,
          name: 'Services',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@id': `${COMPANY_INFO.url}#get-started`,
          name: 'Get Started',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@id': `${COMPANY_INFO.url}#faq`,
          name: 'FAQ',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}