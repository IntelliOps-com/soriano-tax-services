import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ArrowRight, Clock, Users } from 'lucide-react';
import { Image } from '../ui/Image';
import building from '/src/assets/building.jpeg';

function StatCard({ icon: Icon, value, label }: { icon: any, value: string, label: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-teal-50 rounded-lg">
        <Icon className="h-6 w-6 text-teal-600" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-300">{label}</div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src={building}
          alt="Soriano Tax Services modern office building in Burbank, California"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager" // Override lazy loading for hero image
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/40"></div>
      </div>

      <Container className="relative py-20 mt-8">
        <div className="w-full max-w-[45%] min-[400px]:min-w-[400px] max-[400px]:max-w-full">
          <div>
            <section className="relative z-10 max-[400px]:text-center" aria-label="hero">
              <h1 className="text-6xl font-extrabold text-white tracking-tight max-[400px]:text-5xl">
                <span className="block">Your Trusted</span>
                <span className="block">Partner in</span>
                <span className="text-teal-400">Tax Excellence</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-200 max-[400px]:text-base" aria-label="tax services description">
                Helping individuals and small businesses nationwide with expert tax planning solutions since 2009.

              </p>
              
              <nav className="mt-8 flex flex-col sm:flex-row gap-4 max-[400px]:items-center" aria-label="primary navigation">
                <Button size="lg" onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="max-[639px]:hidden">
                  Explore Services
                </Button>
              </nav>

              <div className="mt-12 grid grid-cols-2 max-[400px]:grid-cols-1 gap-8 max-[400px]:justify-items-center" aria-label="company statistics">
                <StatCard icon={Clock} value="15+" label="Years Experience" />
                <StatCard icon={Users} value="10,000+" label="Clients Served" />
              </div>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}