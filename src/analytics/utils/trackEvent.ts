import { AnalyticsEvent } from '../types';

declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

export function trackEvent({ action, category, label, value }: AnalyticsEvent) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}