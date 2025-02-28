import { useCanonicalUrl } from '../hooks/useCanonicalUrl';

interface CanonicalTagProps {
  section?: string;
}

export function CanonicalTag({ section }: CanonicalTagProps) {
  const canonicalUrl = useCanonicalUrl(section);
  
  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}