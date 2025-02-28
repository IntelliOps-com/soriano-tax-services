import { useMemo } from 'react';
import { COMPANY_INFO } from '../constants/companyInfo';

export interface MetaTagsConfig {
  title: string;
  description: string;
  keywords: string[];
  section?: string;
}

const DEFAULT_META = {
  title: 'Expert Tax Services | Soriano Tax Services',
  description: COMPANY_INFO.description,
  keywords: [
    'tax services',
    'tax preparation',
    'accounting services',
    'tax planning',
    'Burbank tax services',
    'income tax preparation',
    'small business tax services',
  ],
};

const SECTION_META: Record<string, MetaTagsConfig> = {
  about: {
    title: 'About Our Tax Services | Soriano Tax Services',
    description: 'Professional tax services with over 15 years of experience serving individuals and businesses. Learn about our expertise in tax preparation and planning.',
    keywords: ['tax expert', 'professional tax services', 'tax preparation experience', 'Burbank tax professional'],
    section: 'about',
  },
  services: {
    title: 'Tax & Accounting Services | Soriano Tax Services',
    description: 'Comprehensive tax and accounting services including individual tax preparation, business tax services, payroll processing, and specialized tax consulting.',
    keywords: ['tax preparation services', 'business tax services', 'payroll services', 'tax consulting'],
    section: 'services',
  },
  faq: {
    title: 'Tax Services FAQ | Soriano Tax Services',
    description: 'Find answers to common questions about our tax preparation services, business tax solutions, and specialized tax consulting services.',
    keywords: ['tax services FAQ', 'tax preparation questions', 'tax help', 'tax consultation'],
    section: 'faq',
  },
};

export function useMetaTags(currentSection?: string) {
  return useMemo(() => {
    // Only use section meta if the section exists in our config
    const meta = currentSection && SECTION_META[currentSection] 
      ? SECTION_META[currentSection] 
      : DEFAULT_META;

    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords.join(', '),
    };
  }, [currentSection]);
}