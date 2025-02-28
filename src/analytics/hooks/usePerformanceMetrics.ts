import { useEffect } from 'react';
import { useAnalytics } from './useAnalytics';
import { ANALYTICS_CATEGORIES } from '../constants';
import { trackWebVitals } from '../utils/trackWebVitals';

export function usePerformanceMetrics() {
  const { logEvent } = useAnalytics();

  useEffect(() => {
    // Track Web Vitals
    trackWebVitals((metric) => {
      logEvent({
        action: 'web_vital',
        category: ANALYTICS_CATEGORIES.PERFORMANCE,
        label: metric.name,
        value: Math.round(metric.value),
      });
    });

    // Track Page Load Time
    window.addEventListener('load', () => {
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigationTiming) {
        // Time to First Byte (TTFB)
        logEvent({
          action: 'ttfb',
          category: ANALYTICS_CATEGORIES.PERFORMANCE,
          label: 'Time to First Byte',
          value: Math.round(navigationTiming.responseStart),
        });

        // DOM Load Time
        logEvent({
          action: 'dom_load',
          category: ANALYTICS_CATEGORIES.PERFORMANCE,
          label: 'DOM Load Time',
          value: Math.round(navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart),
        });

        // Total Page Load Time
        logEvent({
          action: 'page_load',
          category: ANALYTICS_CATEGORIES.PERFORMANCE,
          label: 'Total Page Load Time',
          value: Math.round(navigationTiming.loadEventEnd - navigationTiming.startTime),
        });
      }
    });

    // Track Resource Load Performance
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          logEvent({
            action: 'resource_timing',
            category: ANALYTICS_CATEGORIES.PERFORMANCE,
            label: `Resource: ${new URL(resourceEntry.name).pathname}`,
            value: Math.round(resourceEntry.duration),
          });
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => observer.disconnect();
  }, [logEvent]);
}