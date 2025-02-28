import { useMemo } from 'react';
import { COMPANY_INFO } from '../constants/companyInfo';

export function useCanonicalUrl(section?: string) {
  return useMemo(() => {
    const baseUrl = COMPANY_INFO.url.replace(/\/$/, ''); // Remove trailing slash
    return section ? `${baseUrl}/#${section}` : baseUrl;
  }, [section]);
}