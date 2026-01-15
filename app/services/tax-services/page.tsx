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
  Shield,
  TrendingUp,
  Building,
  Users,
  Calendar,
  DollarSign,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tax Services | ClearVue Strategies',
  description:
    'Expert tax preparation and planning services for individuals and businesses. Federal, state, and local tax compliance and strategic tax planning to maximize savings.',
};

const taxServices = [
  {
    icon: FileText,
    title: 'Tax Return Compliance',
    description: 'Preparation of individual and business federal and state tax returns. We leverage broad industry experience to address diverse client needs.',
  },
  {
    icon: Shield,
    title: 'Audit Representation',
    description: 'Expert representation during IRS audits, working to achieve favorable outcomes for taxpayers.',
  },
  {
    icon: TrendingUp,
    title: 'Federal Income Tax Planning',
    description: 'Strategic implementation that maximizes savings, increases profits, and manages cash flows for individuals and businesses.',
  },
  {
    icon: Building,
    title: 'State & Local Tax Planning',
    description: 'Comprehensive coverage including income tax, sales and use tax, property tax, and miscellaneous taxes.',
  },
  {
    icon: Users,
    title: 'Individual Tax Services',
    description: 'Identifying planning opportunities and providing objective guidance aligned with your long-term financial goals.',
  },
  {
    icon: Briefcase,
    title: 'Estate & Trust Tax Services',
    description: 'Planning using family limited partnerships, trusts, and charitable entities with referrals to independent estate attorneys.',
  },
];

const taxUpdates = [
  'Webinars on tax law changes',
  'Newsletter updates',
  'Website postings',
  'Face-to-face meetings',
  'Federal tax developments',
  'State tax developments',
  'International tax updates',
];

export default function TaxServicesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Tax Services"
        subtitle="Our Services"
        description="At ClearVue Strategies, we assist our tax clients through efficient compliance and effective planning to help them realize substantial savings."
        breadcrumbs={[
          { label: 'Services', href: '/#services' },
          { label: 'Tax Services', href: '/services/tax-services' },
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
                Expert Tax Preparation & Planning
              </h2>
              <p className="mt-6 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                Our tax services go beyond simple return preparation. We focus on
                identifying planning opportunities that align with your long-term
                financial goals, helping you minimize tax liability while staying
                fully compliant.
              </p>
              <p className="mt-4 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                With 40 years of experience, Paul Gorman, CPA brings deep expertise
                in both individual and business taxation, ensuring you receive
                personalized guidance tailored to your unique situation.
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
                  Stay Informed with Tax Updates
                </h3>
                <p className="mb-6" style={{ color: 'rgb(143, 154, 174)' }}>
                  We keep you informed about tax law changes and developments through:
                </p>
                <ul className="space-y-3">
                  {taxUpdates.map((item) => (
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

      {/* Services Grid */}
      <section className="py-20" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Comprehensive Coverage
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Our Tax Services
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {taxServices.map((service, index) => (
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

      {/* Pricing Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Transparent Pricing
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Tax Preparation Fees
              </h2>
              <p className="mx-auto mt-4 max-w-2xl" style={{ color: 'rgb(143, 154, 174)' }}>
                Fees vary based on the complexity of your tax situation. Schedule a free
                consultation for a personalized quote.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedSection delay={100}>
              <div
                className="rounded-xl p-8 text-center"
                style={{ backgroundColor: 'rgb(248, 251, 254)' }}
              >
                <div
                  className="text-sm font-medium"
                  style={{ color: 'rgb(143, 154, 174)' }}
                >
                  Basic Filing (Form 1040)
                </div>
                <div
                  className="mt-2 text-3xl font-bold"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  $200 - $400
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div
                className="rounded-xl p-8 text-center"
                style={{ backgroundColor: 'rgb(248, 251, 254)' }}
              >
                <div
                  className="text-sm font-medium"
                  style={{ color: 'rgb(143, 154, 174)' }}
                >
                  Itemized Deductions
                </div>
                <div
                  className="mt-2 text-3xl font-bold"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  $300 - $700
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div
                className="rounded-xl p-8 text-center"
                style={{ backgroundColor: 'rgb(248, 251, 254)' }}
              >
                <div
                  className="text-sm font-medium"
                  style={{ color: 'rgb(143, 154, 174)' }}
                >
                  Business/Rental Income
                </div>
                <div
                  className="mt-2 text-3xl font-bold"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  $800+
                </div>
              </div>
            </AnimatedSection>
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
                href="/services/financial-coaching"
                className="group flex items-center justify-between rounded-xl border bg-white p-6 transition-all hover:shadow-lg"
                style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}
              >
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    Financial Coaching
                  </h3>
                  <p className="mt-2" style={{ color: 'rgb(143, 154, 174)' }}>
                    Move from financial stress to calm, clarity, and confidence.
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
                Ready to Optimize Your Taxes?
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Schedule a free consultation to discuss how our tax services can help
                you minimize your tax burden and maximize your savings.
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
