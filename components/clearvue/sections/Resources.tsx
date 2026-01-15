'use client';

import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection } from '../ui/AnimatedSection';
import {
  Calculator,
  FileText,
  Calendar,
  ExternalLink,
  Search,
  BookOpen,
  Link as LinkIcon,
  Newspaper,
  Clock,
  Users,
  Building,
  Receipt,
  Smile,
} from 'lucide-react';

const calculators = [
  { name: 'Retirement Calculator', href: 'https://www.calculator.net/retirement-calculator.html' },
  { name: 'Mortgage Calculator', href: 'https://www.calculator.net/mortgage-calculator.html' },
  { name: 'Loan Calculator', href: 'https://www.calculator.net/loan-calculator.html' },
  { name: 'Savings Calculator', href: 'https://www.calculator.net/savings-calculator.html' },
];

const taxResources = [
  {
    title: 'Track Your Refund',
    description: 'Check the status of your federal tax refund',
    href: 'https://www.irs.gov/refunds',
    icon: Search,
  },
  {
    title: 'Tax Calendar',
    description: 'Important tax dates and deadlines',
    href: 'https://www.irs.gov/filing/individuals/when-to-file',
    icon: Calendar,
  },
  {
    title: 'IRS Forms',
    description: 'Download official IRS tax forms',
    href: 'https://www.irs.gov/forms-instructions',
    icon: Newspaper,
  },
  {
    title: 'IRS Resources',
    description: 'Helpful IRS and government tax resources',
    href: 'https://www.irs.gov/',
    icon: LinkIcon,
  },
];

const lifeEvents = [
  {
    title: 'Personal Events',
    description: 'Marriage, divorce, birth of a child, and more',
    href: '#contact',
    icon: Users,
  },
  {
    title: 'Financial Events',
    description: 'Inheritance, large purchases, investments',
    href: '#contact',
    icon: Receipt,
  },
  {
    title: 'Business Events',
    description: 'Starting, expanding, or selling a business',
    href: '#contact',
    icon: Building,
  },
  {
    title: 'Tax Events',
    description: 'Audits, notices, and tax-related situations',
    href: '#contact',
    icon: FileText,
  },
];

const additionalResources = [
  {
    title: 'IRS Tax Guide',
    description: 'Comprehensive tax information from the IRS',
    href: 'https://www.irs.gov/publications/p17',
    icon: BookOpen,
  },
  {
    title: 'California FTB',
    description: 'California Franchise Tax Board resources',
    href: 'https://www.ftb.ca.gov/',
    icon: ExternalLink,
  },
  {
    title: 'QuickBooks Resources',
    description: 'Bookkeeping and accounting guides',
    href: 'https://quickbooks.intuit.com/r/bookkeeping/',
    icon: Smile,
  },
];

export function Resources() {
  return (
    <section id="resources" className="bg-[#F8FBFE] py-20 md:py-28">
      <Container size="wide">
        <SectionHeader
          label="News & Tools"
          title="Financial Resources & Tools"
          description="Access calculators, tax resources, and helpful information to support your financial journey."
        />

        {/* Calculators Section */}
        <AnimatedSection>
          <div className="mb-12 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 p-8 text-white md:p-10">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
              <div className="text-center md:text-left">
                <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                  <Calculator className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">Financial Calculators</h3>
                </div>
                <p className="text-white/80">
                  Plan your financial future with our easy-to-use calculators
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {calculators.map((calc) => (
                  <a
                    key={calc.name}
                    href={calc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all hover:bg-white/30"
                  >
                    {calc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tax Resources Grid */}
        <AnimatedSection delay={100}>
          <h3 className="mb-6 text-xl font-bold text-secondary-900">
            Tax Resources
          </h3>
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {taxResources.map((resource, index) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-primary-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                  <resource.icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-secondary-900">{resource.title}</h4>
                <p className="mt-1 text-sm text-gray-600">
                  {resource.description}
                </p>
                <div className="mt-auto flex items-center pt-4 text-sm font-medium text-primary-500">
                  Visit <ExternalLink className="ml-1 h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Life Events Section */}
        <AnimatedSection delay={200}>
          <h3 className="mb-6 text-xl font-bold text-secondary-900">
            Life Events & Financial Guidance
          </h3>
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lifeEvents.map((event) => (
              <a
                key={event.title}
                href={event.href}
                className="group flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-primary-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600 transition-colors group-hover:bg-secondary-900 group-hover:text-white">
                  <event.icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-secondary-900">{event.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{event.description}</p>
                <div className="mt-auto flex items-center pt-4 text-sm font-medium text-primary-500">
                  Contact Us <ExternalLink className="ml-1 h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Additional Resources */}
        <AnimatedSection delay={300}>
          <h3 className="mb-6 text-xl font-bold text-secondary-900">
            Additional Resources
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {additionalResources.map((resource, index) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-primary-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors group-hover:bg-primary-100 group-hover:text-primary-600">
                  <resource.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">
                    {resource.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {resource.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
