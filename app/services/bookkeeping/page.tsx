import { Metadata } from 'next';
import { PageLayout } from '@/components/clearvue/layout';
import { PageHero } from '@/components/clearvue/ui/PageHero';
import { Container } from '@/components/clearvue/ui/Container';
import { AnimatedSection } from '@/components/clearvue/ui/AnimatedSection';
import { Button } from '@/components/clearvue/ui/Button';
import {
  CheckCircle,
  ArrowRight,
  FileText,
  Receipt,
  CreditCard,
  Clock,
  BarChart3,
  Settings,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bookkeeping Services | ClearVue Strategies',
  description:
    'Professional bookkeeping services including general ledger preparation, accounts receivable/payable management, and QuickBooks setup. ClearVue Strategies is QuickBooks ProAdvisor certified.',
};

const bookkeepingServices = [
  'General ledger and financial statement preparation',
  'Adjusting journal entries',
  'Monthly, quarterly, or annual bookkeeping',
  'Accounting system setup for new businesses',
  'QuickBooks ProAdvisor certified support',
];

const receivablesServices = [
  { title: 'Sales Invoicing', description: 'Timely and accurate invoice generation' },
  { title: 'Direct Mailing', description: 'Statement and invoice distribution' },
  { title: 'Cash Receipts', description: 'Payment recording and application' },
  { title: 'Bank Reconciliation', description: 'Account balancing and verification' },
  { title: 'Cash Flow Analysis', description: 'Cash position monitoring and forecasting' },
  { title: 'Aging Reports', description: '30/60/90+ day aging analysis for collections' },
];

const payablesServices = [
  { title: 'Vendor Invoice Processing', description: 'Receipt and verification of vendor bills' },
  { title: 'Payment Processing', description: 'Timely payments to maintain relationships' },
  { title: 'General Ledger Recording', description: 'Accurate expense tracking and categorization' },
  { title: 'Aged Payables Analysis', description: 'Monitor outstanding obligations' },
  { title: 'Expense Accruals', description: 'Track unprocessed items for accurate reporting' },
];

export default function BookkeepingPage() {
  return (
    <PageLayout>
      <PageHero
        title="Bookkeeping Services"
        subtitle="Our Services"
        description="Stay organized with reliable bookkeeping support. We customize our services to match your specific needs."
        breadcrumbs={[
          { label: 'Services', href: '/#services' },
          { label: 'Bookkeeping', href: '/services/bookkeeping' },
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
                Professional Bookkeeping Support
              </h2>
              <p className="mt-6 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                ClearVue Strategies works closely with clients to customize services matching
                their specific needs. We combine personal attention with technical expertise
                and specialized knowledge, prioritizing timely communication and responsiveness
                to help you achieve your financial goals.
              </p>
              <p
                className="mt-4 text-lg font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                "Good financial information provided in a timely and accurate manner is
                essential to good management."
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
                  Bookkeeping Services Include
                </h3>
                <ul className="space-y-4">
                  {bookkeepingServices.map((item) => (
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

      {/* Accounts Receivable Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Accounts Receivable
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Manage Your Receivables Effectively
              </h2>
              <p className="mt-4 max-w-3xl text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                We handle sales invoicing, direct mailing, cash receipts, bank reconciliation,
                and cash flow analysis. Our aging reports display invoice dues at 30-day
                increments up to 90+ days, essential for effective collections management.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {receivablesServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div
                  className="h-full rounded-xl border p-6"
                  style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgba(143, 154, 174, 0.3)',
                  }}
                >
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

      {/* Accounts Payable Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Accounts Payable
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Streamline Your Payables Process
              </h2>
              <p className="mt-4 max-w-3xl text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                When you receive supplies or services before payment, these become Accounts
                Payable. We manage this process comprehensively, ensuring efficient accounts
                payable processes that benefit your cash position, supplier relationships,
                and credit ratings.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {payablesServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div
                  className="h-full rounded-xl border p-6"
                  style={{
                    backgroundColor: 'rgb(248, 251, 254)',
                    borderColor: 'rgba(143, 154, 174, 0.3)',
                  }}
                >
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
      <section className="py-20" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
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
                href="/services/accounting"
                className="group flex items-center justify-between rounded-xl border bg-white p-6 transition-all hover:shadow-lg"
                style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}
              >
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    Accounting Services
                  </h3>
                  <p className="mt-2" style={{ color: 'rgb(143, 154, 174)' }}>
                    Comprehensive accounting from general ledger management to financial statements.
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
                href="/services/tax-services"
                className="group flex items-center justify-between rounded-xl border bg-white p-6 transition-all hover:shadow-lg"
                style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}
              >
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    Tax Services
                  </h3>
                  <p className="mt-2" style={{ color: 'rgb(143, 154, 174)' }}>
                    Expert tax preparation and forward-looking tax planning.
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
                Ready to Get Organized?
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Schedule a free consultation to discuss how our bookkeeping services can
                help you stay on top of your finances.
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
