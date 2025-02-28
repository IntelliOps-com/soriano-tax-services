import { LocalBusinessSchema } from '../schemas/LocalBusinessSchema';
import { ServiceSchema } from '../schemas/ServiceSchema';
import { FAQSchema } from '../schemas/FAQSchema';
import { OrganizationSchema } from '../schemas/OrganizationSchema';
import { BreadcrumbSchema } from '../schemas/BreadcrumbSchema';
import { CanonicalTag } from './CanonicalTag';
import { MetaTags } from './MetaTags';

interface SEOHeadProps {
  section?: string;
}

export function SEOHead({ section }: SEOHeadProps) {
  return (
    <>
      <CanonicalTag section={section} />
      <MetaTags section={section} />
      {/* Structured Data */}
      <OrganizationSchema />
      <LocalBusinessSchema />
      <ServiceSchema />
      <FAQSchema />
      <BreadcrumbSchema />
    </>
  );
}