type MetricName = 'CLS' | 'FID' | 'LCP' | 'FCP' | 'TTFB';

interface WebVitalsMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
}

type ReportHandler = (metric: WebVitalsMetric) => void;

function getRating(name: MetricName, value: number): WebVitalsMetric['rating'] {
  switch (name) {
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
    case 'FID':
      return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
    case 'TTFB':
      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
    default:
      return 'needs-improvement';
  }
}

export function trackWebVitals(onReport: ReportHandler): void {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      const metric = entry as PerformanceEntry & { value: number };
      const value = metric.value;
      const name = metric.name as MetricName;
      
      onReport({
        name,
        value,
        rating: getRating(name, value),
        delta: value,
      });
    });
  });

  // Observe performance entries
  observer.observe({ 
    entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] 
  });
}