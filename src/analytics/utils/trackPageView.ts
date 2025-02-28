import { PageView } from '../types';

export function trackPageView({ title, path, section }: PageView) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'page_view', {
    page_title: title,
    page_path: path,
    page_section: section,
  });
}