import { useMetaTags } from '../hooks/useMetaTags';
import { COMPANY_INFO } from '../constants/companyInfo';

interface MetaTagsProps {
  section?: string;
}

export function MetaTags({ section }: MetaTagsProps) {
  const meta = useMetaTags(section);

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={COMPANY_INFO.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={COMPANY_INFO.logo} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={COMPANY_INFO.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={COMPANY_INFO.logo} />

      {/* Additional Meta Tags */}
      <meta name="author" content={COMPANY_INFO.name} />
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Burbank" />
      <link rel="canonical" href={`${COMPANY_INFO.url}${section ? `#${section}` : ''}`} />
    </>
  );
}