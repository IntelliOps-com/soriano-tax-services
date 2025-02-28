import { COMPANY_INFO } from '../seo/constants/companyInfo';

export const SITEMAP_URLS = [
  {
    url: COMPANY_INFO.url,
    lastmod: '2024-03-20',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    url: `${COMPANY_INFO.url}#about`,
    lastmod: '2024-03-20',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: `${COMPANY_INFO.url}#services`,
    lastmod: '2024-03-20',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: `${COMPANY_INFO.url}#get-started`,
    lastmod: '2024-03-20',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    url: `${COMPANY_INFO.url}#faq`,
    lastmod: '2024-03-20',
    changefreq: 'monthly',
    priority: 0.7,
  },
] as const;