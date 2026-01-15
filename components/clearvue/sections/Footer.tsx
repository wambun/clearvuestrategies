'use client';

import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  services: [
    { label: 'Accounting Services', href: '/services/accounting', internal: true },
    { label: 'Bookkeeping', href: '/services/bookkeeping', internal: true },
    { label: 'Tax Services', href: '/services/tax-services', internal: true },
    { label: 'Financial Coaching', href: '/services/financial-coaching', internal: true },
    { label: 'Virtual CFO', href: '/services/virtual-cfo', internal: true },
    { label: 'Imago Facilitation', href: '/services/imago-facilitation', internal: true },
  ],
  resources: [
    { label: 'Client Resources', href: '/client-resources', internal: true },
    { label: 'FAQs', href: '/faqs', internal: true },
    { label: 'Privacy Policy', href: '/privacy-policy', internal: true },
    { label: 'IRS Tax Resources', href: 'https://www.irs.gov/' },
  ],
  quickLinks: [
    { label: 'Free Consultation', href: 'https://paulgorman.as.me/schedule/a24932e7' },
    { label: 'Client Portal', href: 'https://www.icfiles.com/app/login.asp?customstyle=clearvue' },
    { label: 'Why Choose Us', href: '/our-firm/why-choose-us', internal: true },
    { label: 'Testimonials', href: '/our-firm/testimonials', internal: true },
  ],
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
      {/* Top Section - CTA Banner */}
      <div className="py-16" style={{ borderTop: '1px solid rgb(143, 154, 174)' }}>
        <Container size="wide">
          <AnimatedSection>
            <h2
              className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight md:text-3xl lg:text-4xl"
              style={{ color: 'rgb(0, 23, 63)' }}
            >
              Maximize Your Financial Potential – Contact Our Expert CPA Today
            </h2>
          </AnimatedSection>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container size="wide">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Connect With Us */}
          <AnimatedSection>
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: 'rgba(233, 237, 241, 0.4)' }}
            >
              <div
                className="mb-2 text-sm font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Connect With Us
              </div>
              <h4
                className="text-lg font-bold"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Have questions or need expert accounting assistance?
              </h4>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center rounded-[5px] px-5 py-2.5 text-sm font-medium transition-all hover:opacity-90"
                style={{
                  backgroundColor: 'rgb(79, 122, 194)',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                Get in Touch
              </a>
            </div>
          </AnimatedSection>

          {/* Services Links */}
          <AnimatedSection delay={100}>
            <div
              className="text-sm font-medium"
              style={{ color: 'rgb(79, 122, 194)' }}
            >
              Services
            </div>
            <nav className="mt-4 flex flex-col gap-3">
              {footerLinks.services.map((link) =>
                link.internal ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-opacity hover:opacity-70"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-70"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </AnimatedSection>

          {/* Resources Links */}
          <AnimatedSection delay={200}>
            <div
              className="text-sm font-medium"
              style={{ color: 'rgb(79, 122, 194)' }}
            >
              Resources
            </div>
            <nav className="mt-4 flex flex-col gap-3">
              {footerLinks.resources.map((link) =>
                link.internal ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-opacity hover:opacity-70"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-opacity hover:opacity-70"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" style={{ color: 'rgb(143, 154, 174)' }} />
                  </a>
                )
              )}
            </nav>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection delay={300}>
            <div
              className="text-sm font-medium"
              style={{ color: 'rgb(79, 122, 194)' }}
            >
              Quick Links
            </div>
            <nav className="mt-4 flex flex-col gap-3">
              {footerLinks.quickLinks.map((link) =>
                link.internal ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-opacity hover:opacity-70"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-opacity hover:opacity-70"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" style={{ color: 'rgb(143, 154, 174)' }} />
                  </a>
                )
              )}
            </nav>

            <div className="mt-8">
              <div
                className="text-sm font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Contact
              </div>
              <div className="mt-4 space-y-2">
                <a
                  href="tel:17145872086"
                  className="block transition-opacity hover:opacity-70"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  1-714-587-2086
                </a>
                <a
                  href="mailto:info@clearvuestrategies.net"
                  className="block transition-opacity hover:opacity-70"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  info@clearvuestrategies.net
                </a>
                <p style={{ color: 'rgb(143, 154, 174)' }}>
                  15852 Plymouth Ln<br />
                  Huntington Beach, CA 92647
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row"
          style={{ borderTop: '1px solid rgb(143, 154, 174)' }}
        >
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
            <Link href="/" className="flex items-center">
              <img
                src="/static/images/clearvue-logo.gif"
                alt="ClearVue Strategies"
                className="h-12 w-auto md:h-14"
              />
            </Link>
            <span style={{ color: 'rgb(143, 154, 174)' }}>
              © {new Date().getFullYear()} ClearVue Strategies P.C. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: 'rgb(143, 154, 174)' }}
            >
              Contact
            </a>
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: 'rgb(79, 122, 194)' }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" style={{ color: 'rgb(255, 255, 255)' }} />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
