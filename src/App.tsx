import { SEOHead } from './seo/components/SEOHead';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { FAQ } from './components/sections/FAQ';
import { GetStarted } from './components/sections/GetStarted';
import { useEffect, useState } from 'react';
import { useSectionVisibility } from './analytics/hooks/useSectionVisibility';
import { usePerformanceMetrics } from './analytics/hooks/usePerformanceMetrics';

function App() {
  const [currentSection, setCurrentSection] = useState<string>();
  useSectionVisibility(currentSection);
  usePerformanceMetrics();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setCurrentSection(id);
            // Update URL without triggering navigation
            const newUrl = id ? `${window.location.pathname}#${id}` : window.location.pathname;
            window.history.replaceState(null, '', newUrl);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead section={currentSection} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <Hero />
          <About />
          <Services />
          <GetStarted />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;