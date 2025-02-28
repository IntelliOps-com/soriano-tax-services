import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Image } from '../ui/Image';
import { useAnalytics } from '../../analytics/hooks/useAnalytics';
import { ANALYTICS_CATEGORIES, ANALYTICS_ACTIONS } from '../../analytics/constants';
import logo from '/src/assets/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { logEvent } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Get Started', href: '#get-started' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (itemName: string) => {
    logEvent({
      action: ANALYTICS_ACTIONS.CLICK,
      category: ANALYTICS_CATEGORIES.NAVIGATION,
      label: `Header Nav: ${itemName}`,
    });
  };

  return (
    <header
      className={`fixed w-full bg-white backdrop-blur-sm z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md h-16' : 'h-32'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div
            className="flex flex-col items-center cursor-pointer transition-all duration-300"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              logEvent({
                action: ANALYTICS_ACTIONS.CLICK,
                category: ANALYTICS_CATEGORIES.NAVIGATION,
                label: 'Logo: Back to Top',
              });
            }}
          >
            <div
              className={`transition-all duration-300 transform ${
                isScrolled
                  ? 'flex items-center gap-3'
                  : 'flex flex-col items-center gap-1'
              }`}
            >
              <Image
                src={logo}
                alt="Soriano Tax Services logo - Expert tax solutions"
                
                height={32}
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-8' : 'h-14'
                }`}
              />
              <span
                className={`font-semibold transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-lg'
                }`}
              >
                Soriano Tax Services
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.name);
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-gray-700 hover:text-teal-600 px-3 py-2 font-medium transition-colors ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.name);
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}