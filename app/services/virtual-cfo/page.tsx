import { Metadata } from 'next';
import { PageLayout } from '@/components/clearvue/layout';
import { PageHero } from '@/components/clearvue/ui/PageHero';
import { Container } from '@/components/clearvue/ui/Container';
import { AnimatedSection } from '@/components/clearvue/ui/AnimatedSection';
import { Button } from '@/components/clearvue/ui/Button';
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Shield,
  DollarSign,
  Target,
  FileText,
  Settings,
  RefreshCw,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Virtual CFO Services | ClearVue Strategies',
  description:
    'Strategic financial leadership for your business without the full-time executive cost. Expert CFO services including financial planning, cash flow management, and business strategy.',
};

const cfoServices = [
  {
    icon: Target,
    title: 'Strategic Financial Planning',
    description: 'Comprehensive budgets, forecasts, and long-term strategies aligned with your business goals.',
  },
  {
    icon: DollarSign,
    title: 'Cash Flow & Financial Management',
    description: 'Monitoring cash flow, expense management, and internal control review.',
  },
  {
    icon: BarChart3,
    title: 'Financial Reporting & Analysis',
    description: 'Real-time insights through detailed reports for data-driven decisions.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Identification and mitigation of financial risks to protect your business.',
  },
  {
    icon: TrendingUp,
    title: 'Cost Control & Profitability',
    description: 'Revenue and expense analysis to improve efficiency and margins.',
  },
];

const benefits = [
  'Tailored financial strategies customized to your business needs',
  'Proactive performance management through continuous metric monitoring',
  'Cost-effective expertise without full-time overhead',
  'Enhanced decision-making through clear financial reporting',
  'Strategic guidance from 40+ years of experience',
];

const processSteps = [
  {
    step: '01',
    title: 'Assessment',
    description: 'Comprehensive review of your current financial processes and goals',
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Development of strategic roadmap with key objectives',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Implementation and ongoing monitoring with regular reporting',
  },
  {
    step: '04',
    title: 'Continuous Improvement',
    description: 'Periodic reviews and refinement of strategies',
  },
];

export default function VirtualCFOPage() {
  return (
    <PageLayout>
      <PageHero
        title="Virtual CFO Services"
        subtitle="Strategic Financial Leadership"
        description="Expert financial guidance on a flexible, cost-effective basis to support your business growth and operational optimization."
        breadcrumbs={[
          { label: 'Services', href: '/#services' },
          { label: 'Virtual CFO', href: '/services/virtual-cfo' },
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
                CFO Expertise Without the Full-Time Cost
              </h2>
              <p className="mt-6 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                ClearVue Strategies offers tailored Virtual CFO services that deliver
                expert financial guidance on a flexible, cost-effective basis. We work
                with timely communication and responsiveness to help you achieve your
                financial objectives.
              </p>
              <p className="mt-4 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                As your Virtual CFO, we provide the strategic financial leadership your
                business needs to grow and optimize operations without the overhead of
                a full-time executive.
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
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {benefits.map((item) => (
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
                What We Offer
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Virtual CFO Services
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cfoServices.map((service, index) => (
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

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Our Process
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                How We Work Together
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 100}>
                <div className="text-center">
                  <div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold"
                    style={{
                      backgroundColor: 'rgb(79, 122, 194)',
                      color: 'rgb(255, 255, 255)',
                    }}
                  >
                    {step.step}
                  </div>
                  <h3
                    className="mb-2 text-lg font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: 'rgb(143, 154, 174)' }}>{step.description}</p>
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
                Ready for Strategic Financial Leadership?
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Schedule a free consultation to discuss how Virtual CFO services can
                help your business grow.
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
