'use client';

import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowUp,
} from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  services: [
    {
      label: 'Accounting Services',
      href: 'https://www.clearvuestrategies.net/services/accounting/',
    },
    {
      label: 'Bookkeeping',
      href: 'https://www.clearvuestrategies.net/services/accounting/bookkeeping/',
    },
    {
      label: 'Tax Services',
      href: 'https://www.clearvuestrategies.net/services/tax-services/',
    },
    {
      label: 'Financial Coaching',
      href: 'https://www.clearvuestrategies.net/services/financial-coaching/',
    },
    {
      label: 'Virtual CFO',
      href: 'https://www.clearvuestrategies.net/services/virtual-cfo/',
    },
    {
      label: 'Imago Facilitation',
      href: 'https://www.clearvuestrategies.net/services/imago-facilitation/',
    },
    {
      label: 'Software Implementation',
      href: 'https://www.clearvuestrategies.net/services/accounting/software-implementation/',
    },
  ],
  resources: [
    {
      label: 'Financial Calculators',
      href: 'https://www.clearvuestrategies.net/news-tools/calculators/',
    },
    {
      label: 'Tax Blog',
      href: 'https://www.clearvuestrategies.net/blog/',
    },
    {
      label: 'Track Your Refund',
      href: 'https://www.clearvuestrategies.net/news-tools/track-your-refund/',
    },
    {
      label: 'Tax Calendar',
      href: 'https://www.clearvuestrategies.net/news-tools/tax-calendar/',
    },
    {
      label: 'Tax Links',
      href: 'https://www.clearvuestrategies.net/news-tools/tax-links/',
    },
    {
      label: 'Useful Links',
      href: 'https://www.clearvuestrategies.net/news-tools/useful-links/',
    },
    {
      label: 'Financial Glossary',
      href: 'https://www.clearvuestrategies.net/news-tools/financial-terms-glossary/',
    },
  ],
  lifeEvents: [
    {
      label: 'Personal Events',
      href: 'https://www.clearvuestrategies.net/news-tools/life-events/personal-events/',
    },
    {
      label: 'Financial Events',
      href: 'https://www.clearvuestrategies.net/news-tools/life-events/financial-events/',
    },
    {
      label: 'Business Events',
      href: 'https://www.clearvuestrategies.net/news-tools/life-events/business-events/',
    },
    {
      label: 'Tax Events',
      href: 'https://www.clearvuestrategies.net/news-tools/life-events/tax-events/',
    },
  ],
  company: [
    {
      label: 'About Us',
      href: '#about',
      internal: true,
    },
    {
      label: 'Why Choose Us',
      href: 'https://www.clearvuestrategies.net/our-firm/why-choose-us/',
    },
    {
      label: 'What Clients Say',
      href: 'https://www.clearvuestrategies.net/our-firm/what-our-clients-say/',
    },
    {
      label: 'Work With Us',
      href: 'https://www.clearvuestrategies.net/wwm/',
    },
    {
      label: 'Client Resources',
      href: 'https://www.clearvuestrategies.net/client-resources/',
    },
    {
      label: 'FAQs',
      href: 'https://www.clearvuestrategies.net/faqs/',
    },
    {
      label: 'Privacy Policy',
      href: 'https://www.clearvuestrategies.net/privacy-policy/',
    },
  ],
  contact: [
    {
      label: 'Contact Form',
      href: 'https://www.clearvuestrategies.net/contact-us/contact-form/',
    },
    {
      label: 'Free Consultation',
      href: 'https://paulgorman.as.me/schedule/a24932e7',
    },
    {
      label: 'Newsletter Signup',
      href: 'https://www.clearvuestrategies.net/newsletter-signup/',
    },
    {
      label: 'Client Portal',
      href: 'https://www.icfiles.com/app/login.asp?customstyle=clearvue',
    },
  ],
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function Footer() {
  return (
    <footer className="bg-secondary-900 pt-16 text-white">
      <Container size="wide">
        <div className="grid gap-8 pb-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <Link href="#home" className="inline-block">
                <span className="text-2xl font-bold">
                  Clear<span className="text-primary-400">Vue</span>
                </span>
                <span className="ml-2 text-sm font-medium text-gray-400">
                  Strategies
                </span>
              </Link>
              <p className="mt-4 text-gray-400">
                Your Trusted CPA Partner. Personalized accounting, tax services,
                and financial coaching with 40 years of expertise.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href="tel:17145872086"
                  className="flex items-center gap-3 text-gray-300 transition-colors hover:text-primary-400"
                >
                  <Phone className="h-5 w-5" />
                  <span>1-714-587-2086</span>
                </a>
                <a
                  href="mailto:info@clearvuestrategies.net"
                  className="flex items-center gap-3 text-gray-300 transition-colors hover:text-primary-400"
                >
                  <Mail className="h-5 w-5" />
                  <span>info@clearvuestrategies.net</span>
                </a>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                  <span>
                    15852 Plymouth Ln
                    <br />
                    Huntington Beach, CA 92647
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Services */}
          <div>
            <AnimatedSection delay={100}>
              <h4 className="mb-4 font-bold">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Resources */}
          <div>
            <AnimatedSection delay={200}>
              <h4 className="mb-4 font-bold">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Company */}
          <div>
            <AnimatedSection delay={300}>
              <h4 className="mb-4 font-bold">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    {'internal' in link && link.internal ? (
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Contact & Quick Links */}
          <div>
            <AnimatedSection delay={400}>
              <h4 className="mb-4 font-bold">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="mb-4 mt-8 font-bold">Life Events</h4>
              <ul className="space-y-2">
                {footerLinks.lifeEvents.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center text-sm text-gray-500 md:text-left">
              <p>
                © {new Date().getFullYear()} ClearVue Strategies P.C. All rights
                reserved.
              </p>
              <p className="mt-1">
                Serving Huntington Beach, CA | Nationwide & Worldwide
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.clearvuestrategies.net/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 transition-colors hover:text-primary-400"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="https://www.clearvuestrategies.net/faqs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 transition-colors hover:text-primary-400"
              >
                FAQs
              </a>
              <button
                onClick={scrollToTop}
                className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white transition-colors hover:bg-primary-600"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
