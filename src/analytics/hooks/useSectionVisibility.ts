import { useEffect } from 'react';
import { useAnalytics } from './useAnalytics';
import { ANALYTICS_CATEGORIES, ANALYTICS_ACTIONS } from '../constants';

export function useSectionVisibility(section?: string) {
  const { logEvent } = useAnalytics();

  useEffect(() => {
    if (!section) return;

    logEvent({
      action: ANALYTICS_ACTIONS.VIEW,
      category: ANALYTICS_CATEGORIES.ENGAGEMENT,
      label: `Section View: ${section}`,
    });
  }, [section, logEvent]);

  return section;
}