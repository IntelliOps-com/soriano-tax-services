import { useCallback } from 'react';
import { trackEvent } from '../utils/trackEvent';
import { trackPageView } from '../utils/trackPageView';
import { AnalyticsEvent, PageView, UserInteraction } from '../types';

export function useAnalytics() {
  const logEvent = useCallback((event: AnalyticsEvent) => {
    trackEvent(event);
  }, []);

  const logPageView = useCallback((pageView: PageView) => {
    trackPageView(pageView);
  }, []);

  const logInteraction = useCallback((interaction: UserInteraction) => {
    trackEvent({
      action: interaction.type,
      category: 'User Interaction',
      label: interaction.element,
      value: typeof interaction.value === 'number' ? interaction.value : undefined,
    });
  }, []);

  return {
    logEvent,
    logPageView,
    logInteraction,
  };
}