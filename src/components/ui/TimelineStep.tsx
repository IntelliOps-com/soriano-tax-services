import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

interface TimelineStepProps {
  step: {
    title: string;
    description: string;
    action?: {
      label: string;
      href: string;
    };
    estimate?: string;
  };
  isLast: boolean;
}

export function TimelineStep({ step, isLast }: TimelineStepProps) {
  return (
    <div className="relative pb-12" role="listitem">
      {!isLast && (
        <div
          className="absolute left-6 top-5 -ml-px h-full w-0.5 bg-gradient-to-b from-teal-600 to-gray-200"
          aria-hidden="true"
        />
      )}
      <article className="relative flex items-start group">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 ring-8 ring-white group-hover:bg-teal-100 transition-colors">
          <CheckCircle2 className="h-6 w-6 text-teal-600" />
        </span>
        <div className="ml-6 min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-teal-600 transition-colors" aria-label={`Step: ${step.title}`}>
              {step.title}
            </h3>
            {step.estimate && (
              <span className="ml-4 text-sm text-gray-500" aria-label="estimated time">
                {step.estimate}
              </span>
            )}
          </div>
          <p className="mt-2 text-gray-600" aria-label={`${step.title} description`}>{step.description}</p>
          {step.action && (
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = step.action!.href}
                aria-label={step.action.label}
              >
                {step.action.label}
              </Button>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}