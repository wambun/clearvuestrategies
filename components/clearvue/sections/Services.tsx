'use client';

import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceCard } from '../ui/ServiceCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import {
  Calculator,
  BookOpen,
  FileText,
  TrendingUp,
  Briefcase,
  Heart,
  Receipt,
  Settings,
} from 'lucide-react';

const services = [
  {
    title: 'Accounting Services',
    description:
      'Comprehensive accounting services covering general ledger management to financial statement preparation. We ensure your financial records are accurate and compliant.',
    icon: Calculator,
  },
  {
    title: 'Bookkeeping Support',
    description:
      'Stay organized with reliable bookkeeping support. We track your income and expenses, allowing you to focus on running your business. QuickBooks ProAdvisor certified.',
    icon: BookOpen,
  },
  {
    title: 'Tax Services',
    description:
      'Expert tax preparation and forward-looking tax planning. We navigate complex tax laws to optimize your deductions and ensure timely filing submission.',
    icon: FileText,
  },
  {
    title: 'Financial Coaching',
    description:
      'Move from financial stress and uncertainty to calm, clarity, and confidence. Uncover what shapes your financial life and align your money with your values.',
    icon: TrendingUp,
  },
  {
    title: 'Virtual CFO Services',
    description:
      'Strategic financial advisory and business financial management. Get executive-level financial guidance without the full-time executive cost.',
    icon: Briefcase,
  },
  {
    title: 'Imago Professional Facilitation',
    description:
      'Relationship-focused financial counseling that helps couples and partners align on financial goals and values for a harmonious financial future.',
    icon: Heart,
  },
];

const additionalServices = [
  {
    title: 'Software Implementation',
    description:
      'Get your business up and running quickly with expert QuickBooks setup and training.',
    icon: Settings,
  },
  {
    title: 'IRS Representation',
    description:
      'Professional representation for tax audits, notices, and IRS communications.',
    icon: Receipt,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <Container size="wide">
        <SectionHeader
          label="Our Services"
          title="Comprehensive Financial Solutions"
          description="Discover a range of personalized services designed for you. Our dedication ensures your financial peace of mind."
        />

        {/* Main Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

        {/* Additional Services */}
        <AnimatedSection delay={600}>
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary-50 to-white p-8 md:p-12">
            <h3 className="mb-6 text-center text-2xl font-bold text-secondary-900">
              Additional Services
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {additionalServices.map((service, index) => (
                <div
                  key={service.title}
                  className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <service.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900">
                      {service.title}
                    </h4>
                    <p className="mt-1 text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Service Pricing Info */}
        <AnimatedSection delay={700}>
          <div className="mt-12 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
            <h3 className="text-xl font-bold text-secondary-900">
              Transparent Pricing
            </h3>
            <div className="mt-4 grid gap-4 text-left sm:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="font-semibold text-secondary-900">
                  Basic Tax Filing (Form 1040)
                </div>
                <div className="text-2xl font-bold text-primary-500">
                  $200 - $400
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="font-semibold text-secondary-900">
                  Itemized Deductions
                </div>
                <div className="text-2xl font-bold text-primary-500">
                  $300 - $700
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="font-semibold text-secondary-900">
                  Business/Rental Properties
                </div>
                <div className="text-2xl font-bold text-primary-500">
                  $800 - $1,500
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              * Prices vary based on complexity. Schedule a free consultation
              for a personalized quote.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
