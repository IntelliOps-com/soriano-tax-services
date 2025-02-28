export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface PageView {
  title: string;
  path: string;
  section?: string;
}

export interface UserInteraction {
  type: 'click' | 'scroll' | 'hover';
  element: string;
  section?: string;
  value?: string | number;
}