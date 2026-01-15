import { Metadata } from 'next';
import { PageLayout } from '@/components/clearvue/layout';
import { PageHero } from '@/components/clearvue/ui/PageHero';
import { Container } from '@/components/clearvue/ui/Container';
import { AnimatedSection } from '@/components/clearvue/ui/AnimatedSection';
import { Button } from '@/components/clearvue/ui/Button';
import {
  ArrowRight,
  FileSpreadsheet,
  ClipboardList,
  Mail,
  ExternalLink,
  Calculator,
  HelpCircle,
  Shield,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Resources | ClearVue Strategies',
  description: 'Access preparation tools, worksheets, and resources for your financial consultation with ClearVue Strategies.',
};

const quickLinks = [
  {
    icon: Calculator,
    title: 'Financial Calculators',
    description: 'Plan your financial future with our easy-to-use calculators',
    href: 'https://www.calculator.net/',
    external: true,
  },
  {
    icon: HelpCircle,
    title: 'FAQs',
    description: 'Find answers to common questions',
    href: '/faqs',
    external: false,
  },
  {
    icon: Shield,
    title: 'Privacy Policy',
    description: 'Learn how we protect your information',
    href: '/privacy-policy',
    external: false,
  },
  {
    icon: Phone,
    title: 'Contact Us',
    description: 'Get in touch with our team',
    href: '/#contact',
    external: false,
  },
];

export default function ClientResourcesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Client Resources"
        subtitle="Preparation Tools"
        description="Access worksheets and resources to help you prepare for your financial consultation."
        breadcrumbs={[
          { label: 'Client Resources', href: '/client-resources' },
        ]}
      />

      {/* Preparation Materials Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Clarity Session Preparation
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Prepare for Your Session
              </h2>
              <p className="mt-6 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                To help us serve you better, please complete the preparation materials
                before your Clarity (Discovery) Session. These tools help you organize
                your financial information and allow us to make the most of our time together.
              </p>

              <div className="mt-8 space-y-4">
                <h3
                  className="text-lg font-bold"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  Instructions:
                </h3>
                <ol className="list-inside list-decimal space-y-3" style={{ color: 'rgb(143, 154, 174)' }}>
                  <li>Download and complete the worksheet (Google Sheets or Excel)</li>
                  <li>Fill out the online questionnaire (automatically submitted upon completion)</li>
                  <li>Send the completed worksheet to info@clearvuestrategies.net at least 48 hours before your session</li>
                </ol>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="space-y-6">
                {/* Worksheet Downloads */}
                <div
                  className="rounded-xl border p-6"
                  style={{
                    backgroundColor: 'rgb(248, 251, 254)',
                    borderColor: 'rgba(143, 154, 174, 0.3)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: 'rgba(79, 122, 194, 0.1)' }}
                    >
                      <FileSpreadsheet className="h-6 w-6" style={{ color: 'rgb(79, 122, 194)' }} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: 'rgb(0, 23, 63)' }}
                      >
                        Financial Worksheet
                      </h3>
                      <p className="mt-1 text-sm" style={{ color: 'rgb(143, 154, 174)' }}>
                        Downloadable worksheet to capture your financial details
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a
                          href="https://docs.google.com/spreadsheets"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-all hover:opacity-90"
                          style={{
                            backgroundColor: 'rgb(79, 122, 194)',
                            color: 'rgb(255, 255, 255)',
                          }}
                        >
                          Google Sheets
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                        <a
                          href="mailto:info@clearvuestrategies.net?subject=Excel Worksheet Request"
                          className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium transition-all hover:bg-gray-50"
                          style={{
                            borderColor: 'rgb(79, 122, 194)',
                            color: 'rgb(79, 122, 194)',
                          }}
                        >
                          Request Excel
                          <Mail className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Online Questionnaire */}
                <div
                  className="rounded-xl border p-6"
                  style={{
                    backgroundColor: 'rgb(248, 251, 254)',
                    borderColor: 'rgba(143, 154, 174, 0.3)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: 'rgba(79, 122, 194, 0.1)' }}
                    >
                      <ClipboardList className="h-6 w-6" style={{ color: 'rgb(79, 122, 194)' }} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: 'rgb(0, 23, 63)' }}
                      >
                        Online Questionnaire
                      </h3>
                      <p className="mt-1 text-sm" style={{ color: 'rgb(143, 154, 174)' }}>
                        Interactive questionnaire that adapts based on your responses
                      </p>
                      <div className="mt-4">
                        <Button href="https://paulgorman.as.me/schedule/a24932e7" external size="sm">
                          Start Questionnaire
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Disclaimer */}
          <AnimatedSection delay={400}>
            <div
              className="mt-12 rounded-lg border-l-4 p-4"
              style={{
                borderColor: 'rgb(79, 122, 194)',
                backgroundColor: 'rgb(248, 251, 254)',
              }}
            >
              <p className="text-sm" style={{ color: 'rgb(143, 154, 174)' }}>
                <strong>Disclaimer:</strong> These tools are provided for educational and
                planning purposes only. They are not a substitute for professional tax,
                legal, or financial advice specific to your situation.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Quick Links Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Quick Links
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link, index) => (
              <AnimatedSection key={link.title} delay={index * 100}>
                <Link
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="group flex h-full flex-col rounded-xl border bg-white p-6 transition-all hover:shadow-lg"
                  style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: 'rgba(79, 122, 194, 0.1)' }}
                  >
                    <link.icon className="h-6 w-6" style={{ color: 'rgb(79, 122, 194)' }} />
                  </div>
                  <h3
                    className="font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {link.title}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: 'rgb(143, 154, 174)' }}>
                    {link.description}
                  </p>
                  <div className="mt-auto flex items-center pt-4 text-sm font-medium" style={{ color: 'rgb(79, 122, 194)' }}>
                    {link.external ? 'Visit' : 'View'}
                    {link.external ? (
                      <ExternalLink className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Portal Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(0, 23, 63)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="text-center">
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(255, 255, 255)' }}
              >
                Existing Clients
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Access your secure client portal to view documents and communicate
                with our team.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  href="https://www.icfiles.com/app/login.asp?customstyle=clearvue"
                  external
                >
                  Client Portal Login
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button href="tel:17145872086" variant="outline">
                  Call for Support
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageLayout>
  );
}
