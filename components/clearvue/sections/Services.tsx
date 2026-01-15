'use client';

import Link from 'next/link';
import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Accounting Services',
    description:
      'Comprehensive accounting covering general ledger management to financial statement preparation.',
    href: '/services/accounting',
  },
  {
    title: 'Bookkeeping Support',
    description:
      'Stay organized with reliable bookkeeping support. QuickBooks ProAdvisor certified.',
    href: '/services/bookkeeping',
  },
  {
    title: 'Tax Services',
    description:
      'Expert tax preparation and forward-looking tax planning to optimize your deductions.',
    href: '/services/tax-services',
  },
  {
    title: 'Financial Coaching',
    description:
      'Move from financial stress to calm, clarity, and confidence.',
    href: '/services/financial-coaching',
  },
  {
    title: 'Virtual CFO Services',
    description:
      'Strategic financial advisory without the full-time executive cost.',
    href: '/services/virtual-cfo',
  },
  {
    title: 'Imago Facilitation',
    description:
      'Relationship-focused facilitation for individuals, dyads, and teams.',
    href: '/services/imago-facilitation',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
      <Container size="wide">
        {/* Header - Framer Style */}
        <div className="mb-16">
          <AnimatedSection>
            <div
              className="mb-4 text-base font-medium"
              style={{ color: 'rgb(79, 122, 194)' }}
            >
              Our Services
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2
              className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
              style={{ color: 'rgb(0, 23, 63)' }}
            >
              Comprehensive Financial Solutions
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p
              className="mt-4 max-w-2xl text-lg"
              style={{ color: 'rgb(143, 154, 174)' }}
            >
              Discover a range of personalized services designed for you. Our dedication ensures your financial peace of mind.
            </p>
          </AnimatedSection>
        </div>

        {/* Services List - Framer Style */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Link
                href={service.href}
                className="group flex items-center justify-between border-b py-8 transition-all hover:px-4"
                style={{ borderColor: 'rgb(143, 154, 174)' }}
              >
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold md:text-2xl lg:text-3xl"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mt-2 max-w-lg text-base"
                    style={{ color: 'rgb(143, 154, 174)' }}
                  >
                    {service.description}
                  </p>
                </div>
                {/* Circular Arrow Button - Framer Style */}
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-all group-hover:scale-110"
                  style={{
                    backgroundColor: 'rgb(79, 122, 194)',
                  }}
                >
                  <ArrowUpRight className="h-5 w-5" style={{ color: 'rgb(255, 255, 255)' }} />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Pricing Info - Framer Style */}
        <AnimatedSection delay={700}>
          <div
            className="mt-20 rounded-2xl p-8 md:p-12"
            style={{ backgroundColor: 'rgba(233, 237, 241, 0.4)' }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div
                  className="mb-2 text-base font-medium"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  Transparent Pricing
                </div>
                <h3
                  className="text-2xl font-bold md:text-3xl"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  Fair and Clear Service Fees
                </h3>
                <p
                  className="mt-4 text-base"
                  style={{ color: 'rgb(143, 154, 174)' }}
                >
                  Our prices vary based on complexity. Schedule a free consultation for a personalized quote tailored to your needs.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                >
                  <div
                    className="text-sm font-medium"
                    style={{ color: 'rgb(143, 154, 174)' }}
                  >
                    Basic Tax Filing
                  </div>
                  <div
                    className="mt-2 text-2xl font-bold"
                    style={{ color: 'rgb(79, 122, 194)' }}
                  >
                    $200 - $400
                  </div>
                </div>
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                >
                  <div
                    className="text-sm font-medium"
                    style={{ color: 'rgb(143, 154, 174)' }}
                  >
                    Itemized Returns
                  </div>
                  <div
                    className="mt-2 text-2xl font-bold"
                    style={{ color: 'rgb(79, 122, 194)' }}
                  >
                    $300 - $700
                  </div>
                </div>
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                >
                  <div
                    className="text-sm font-medium"
                    style={{ color: 'rgb(143, 154, 174)' }}
                  >
                    Business/Rental
                  </div>
                  <div
                    className="mt-2 text-2xl font-bold"
                    style={{ color: 'rgb(79, 122, 194)' }}
                  >
                    $800+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
