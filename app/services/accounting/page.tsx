import { Metadata } from 'next';
import { PageLayout } from '@/components/clearvue/layout';
import { PageHero } from '@/components/clearvue/ui/PageHero';
import { Container } from '@/components/clearvue/ui/Container';
import { AnimatedSection } from '@/components/clearvue/ui/AnimatedSection';
import { Button } from '@/components/clearvue/ui/Button';
import {
  CheckCircle,
  FileText,
  Calculator,
  TrendingUp,
  ArrowRight,
  Building,
  Receipt,
  CreditCard,
  Users,
  Calendar,
  BarChart3,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accounting Services | ClearVue Strategies',
  description:
    'Comprehensive accounting services from general ledger management to financial statement preparation. ClearVue Strategies provides personalized accounting solutions.',
};

const coreServices = [
  { icon: Building, title: 'Bank Account Reconciliation', description: 'Accurate matching of bank records with your books' },
  { icon: Calculator, title: 'Fixed Asset Tracking', description: 'Depreciation management and asset lifecycle tracking' },
  { icon: Receipt, title: 'Accounts Receivable', description: 'Recording, reporting, and collections management' },
  { icon: CreditCard, title: 'Accounts Payable', description: 'Invoice processing and payment management' },
  { icon: Users, title: 'Payroll Entries', description: 'Complete payroll processing and recording' },
  { icon: Calendar, title: 'Month-End Closing', description: 'Adjusting entries and period close procedures' },
];

const reportingPackages = [
  'General ledger reports',
  'Income statements',
  'Balance sheets',
  'Cash flow statements',
  'Aging reports (receivables and payables)',
  'Reconciliation reports',
  'Customized reports based on your needs',
];

export default function AccountingServicesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Accounting Services"
        subtitle="Our Services"
        description="At ClearVue Strategies, we work side-by-side with our clients and tailor our services to fit their specific needs."
        breadcrumbs={[
          { label: 'Services', href: '/#services' },
          { label: 'Accounting', href: '/services/accounting' },
        ]}
      />

      {/* Overview Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Comprehensive Accounting Solutions
              </h2>
              <p className="mt-6 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                We combine personal attention with technical expertise, timely communication,
                and responsiveness to help you achieve your financial objectives. Our team
                maintains current knowledge of developments and technologies while providing
                industry insights and specialized skills.
              </p>
              <p className="mt-4 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                Our accounting solutions track revenue and expenses, providing current
                financial information about your business health. From data entry through
                financial reporting, we manage comprehensive accounting and bookkeeping
                functions tailored to your needs.
              </p>
              <div className="mt-8">
                <Button href="https://paulgorman.as.me/schedule/a24932e7" external>
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div
                className="rounded-2xl p-8"
                style={{ backgroundColor: 'rgb(248, 251, 254)' }}
              >
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  Financial Reporting Packages
                </h3>
                <ul className="space-y-4">
                  {reportingPackages.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 flex-shrink-0"
                        style={{ color: 'rgb(79, 122, 194)' }}
                      />
                      <span style={{ color: 'rgb(0, 23, 63)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Core Services Grid */}
      <section className="py-20" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                What We Offer
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Core Accounting Services
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div
                  className="h-full rounded-xl border p-6 transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgba(143, 154, 174, 0.3)',
                  }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: 'rgba(79, 122, 194, 0.1)' }}
                  >
                    <service.icon className="h-6 w-6" style={{ color: 'rgb(79, 122, 194)' }} />
                  </div>
                  <h3
                    className="mb-2 text-lg font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: 'rgb(143, 154, 174)' }}>{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Related Services
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedSection delay={100}>
              <Link
                href="/services/bookkeeping"
                className="group flex items-center justify-between rounded-xl border p-6 transition-all hover:shadow-lg"
                style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}
              >
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    Bookkeeping Support
                  </h3>
                  <p className="mt-2" style={{ color: 'rgb(143, 154, 174)' }}>
                    Stay organized with reliable bookkeeping support. QuickBooks ProAdvisor certified.
                  </p>
                </div>
                <ArrowRight
                  className="h-6 w-6 transition-transform group-hover:translate-x-2"
                  style={{ color: 'rgb(79, 122, 194)' }}
                />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Link
                href="/services/virtual-cfo"
                className="group flex items-center justify-between rounded-xl border p-6 transition-all hover:shadow-lg"
                style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}
              >
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    Virtual CFO Services
                  </h3>
                  <p className="mt-2" style={{ color: 'rgb(143, 154, 174)' }}>
                    Strategic financial advisory without the full-time executive cost.
                  </p>
                </div>
                <ArrowRight
                  className="h-6 w-6 transition-transform group-hover:translate-x-2"
                  style={{ color: 'rgb(79, 122, 194)' }}
                />
              </Link>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(0, 23, 63)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="text-center">
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(255, 255, 255)' }}
              >
                Ready to Streamline Your Accounting?
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Schedule a free consultation to discuss how our accounting services can help
                your business thrive.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="https://paulgorman.as.me/schedule/a24932e7" external>
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="tel:17145872086" variant="outline">
                  Call 1-714-587-2086
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageLayout>
  );
}
