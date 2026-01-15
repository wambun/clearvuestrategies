'use client';

import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Shield, Award, Clock, CheckCircle, Star } from 'lucide-react';

const credentials = [
  {
    icon: Shield,
    title: 'Licensed CPA',
    description: 'State of California',
    highlight: 'CPA #12345',
  },
  {
    icon: Award,
    title: 'QuickBooks ProAdvisor',
    description: 'Certified Expert',
    highlight: 'Elite Status',
    badge: '/static/images/quickbooks-proadvisor-badge.png',
  },
  {
    icon: Clock,
    title: '40+ Years',
    description: 'Professional Experience',
    highlight: 'Since 1984',
  },
  {
    icon: Star,
    title: '1,000+ Clients',
    description: 'Served Successfully',
    highlight: 'Trusted Partner',
  },
];

const certifications = [
  'California State Board of Accountancy',
  'American Institute of CPAs (AICPA)',
  'California Society of CPAs',
  'Certified Imago Professional Facilitator',
];

export function TrustBadges() {
  return (
    <section className="py-16" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
      <Container size="wide">
        <AnimatedSection>
          <div className="mb-10 text-center">
            <div
              className="mb-3 text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'rgb(79, 122, 194)' }}
            >
              Credentials & Certifications
            </div>
            <h2
              className="text-2xl font-bold md:text-3xl"
              style={{ color: 'rgb(0, 23, 63)' }}
            >
              Trust Built on Professional Excellence
            </h2>
          </div>
        </AnimatedSection>

        {/* Main Credentials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <div
                className="relative flex flex-col items-center rounded-2xl border p-6 text-center transition-all hover:shadow-lg"
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderColor: 'rgba(79, 122, 194, 0.2)',
                }}
              >
                {/* Icon or Badge */}
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(79, 122, 194, 0.1)' }}
                >
                  {item.badge ? (
                    <img
                      src={item.badge}
                      alt={item.title}
                      className="h-12 w-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <item.icon
                    className={`h-8 w-8 ${item.badge ? 'hidden' : ''}`}
                    style={{ color: 'rgb(79, 122, 194)' }}
                  />
                </div>

                {/* Content */}
                <h3
                  className="mb-1 text-lg font-bold"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="mb-2 text-sm"
                  style={{ color: 'rgb(143, 154, 174)' }}
                >
                  {item.description}
                </p>
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: 'rgba(79, 122, 194, 0.1)',
                    color: 'rgb(79, 122, 194)',
                  }}
                >
                  {item.highlight}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications List */}
        <AnimatedSection delay={500}>
          <div
            className="mt-10 rounded-2xl p-6"
            style={{ backgroundColor: 'rgb(255, 255, 255)' }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <span
                className="text-sm font-semibold"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Member & Certified:
              </span>
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2">
                  <CheckCircle
                    className="h-4 w-4"
                    style={{ color: 'rgb(79, 122, 194)' }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: 'rgb(143, 154, 174)' }}
                  >
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* QuickBooks ProAdvisor Banner */}
        <AnimatedSection delay={600}>
          <div
            className="mt-8 flex flex-col items-center justify-between gap-6 rounded-2xl p-8 md:flex-row"
            style={{
              background: 'linear-gradient(135deg, rgb(0, 23, 63) 0%, rgb(79, 122, 194) 100%)',
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                  fill="white"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  QuickBooks ProAdvisor Certified
                </h3>
                <p className="text-white/70">
                  Expert assistance with QuickBooks setup, training, and optimization
                </p>
              </div>
            </div>
            <a
              href="https://paulgorman.as.me/schedule/a24932e7"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-lg px-6 py-3 font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgb(0, 23, 63)',
              }}
            >
              Get QuickBooks Help
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
