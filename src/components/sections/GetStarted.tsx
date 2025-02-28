import { Container } from '../ui/Container';
import { TimelineStep } from '../ui/TimelineStep';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { ONBOARDING_STEPS } from '../../utils/constants';
import { useAnalytics } from '../../analytics/hooks/useAnalytics';
import { ANALYTICS_CATEGORIES, ANALYTICS_ACTIONS } from '../../analytics/constants';

export function GetStarted() {
  const { logEvent } = useAnalytics();

  const handleConsultationClick = () => {
    logEvent({
      action: ANALYTICS_ACTIONS.CLICK,
      category: ANALYTICS_CATEGORIES.CONVERSION,
      label: 'Schedule Consultation',
    });
    window.open(
      'https://calendly.com/sorianotaxservices/30-minute',
      '_blank'
    );
  };

  return (
    <section id="get-started" className="py-20" aria-labelledby="get-started-heading">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="get-started-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get Started Today
          </h2>
          <p className="mt-4 text-xl text-gray-600" aria-label="onboarding process description">
            Your journey to financial clarity begins here. Follow these simple
            steps to get started with our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto" role="list" aria-label="onboarding steps">
          {ONBOARDING_STEPS.map((step, index) => (
            <TimelineStep
              key={step.title}
              step={step}
              isLast={index === ONBOARDING_STEPS.length - 1}
            />
          ))}

          <div className="mt-12 text-center" aria-label="schedule consultation">
            <Button
              size="lg"
              onClick={handleConsultationClick}
              aria-label="Schedule a consultation"
            >
              Schedule Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
