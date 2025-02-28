import { Phone, Mail, MapPin } from 'lucide-react';
import { Image } from '../ui/Image';
import vertical_logo from '/src/assets/logo-vertical.png';
import { useBusinessHours } from '../../hooks/useBusinessHours';

export function Footer() {
  const { isActive, type } = useBusinessHours();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 id="business-hours-tax" className={`text-lg font-semibold ${type === 'tax' && isActive ? 'text-teal-400' : ''}`}>
              Tax Season
            </h3>
            <div className="space-y-1">
              <p>January 6 - April 30</p>
              <p className={type === 'tax' && isActive ? 'text-teal-400' : ''}>
                Mon - Sat: 10:00 AM - 8:00 PM PST
              </p>
            </div>
            <h3 id="business-hours" className={`text-lg font-semibold mt-8 ${type === 'regular' && isActive ? 'text-teal-400' : ''}`}>
              Regular Business Hours
            </h3>
            <div className="space-y-1">
              <p>May 1 - Dec 19</p>
              <p className={type === 'regular' && isActive ? 'text-teal-400' : ''}>
                Mon - Fri: 10:00 AM - 5:00 PM PST
              </p>
            </div>
          </div>
          <div>
            <h3 id="business-hours-holiday" className={`text-lg font-semibold ${type === 'holiday' ? 'text-teal-400' : ''}`}>
              Holidays (CLOSED)
            </h3>
            <div className="space-y-1">
              <p>December 20 - January 5</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a
                href="tel:818-441-2338"
                className="flex items-center hover:text-teal-400"
              >
                <Phone className="h-4 w-4 mr-2" />
                (818) 441-2338
              </a>
              <a
                href="mailto:contact@sorianotaxservices.com"
                className="flex items-center hover:text-teal-400"
              >
                <Mail className="h-4 w-4 mr-2" />
                contact@sorianotaxservices.com
              </a>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>
                  3500 W. Olive Ave
                  <br />
                  Suite 300
                  <br />
                  Burbank CA 91505
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400 flex flex-col items-center">
          <Image
            src={vertical_logo}
            alt="Soriano Tax Services vertical logo - Professional tax and accounting services since 2009"
            width={192}
            height={192}
            className="h-48 w-auto"
          />
          <p>
            © {new Date().getFullYear()} Soriano & Associates Inc. Income Tax
            Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
