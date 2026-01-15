import { Metadata } from 'next';
import { PageLayout } from '@/components/clearvue/layout';
import { PageHero } from '@/components/clearvue/ui/PageHero';
import { Container } from '@/components/clearvue/ui/Container';
import { AnimatedSection } from '@/components/clearvue/ui/AnimatedSection';
import { Button } from '@/components/clearvue/ui/Button';
import {
  CheckCircle,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Target,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paul Gorman, CPA | ClearVue Strategies',
  description:
    'Meet Paul Gorman, CPA - Founder of ClearVue Strategies with over 40 years of experience in accounting, tax services, and financial coaching.',
};

const experience = [
  'Over 40 years of experience as a CPA',
  'Government finance executive managing treasury operations',
  'Oversight of an $8 billion cash and investment pool',
  'Development of robust budgeting strategies',
  'Cash flow management and long-term financial planning',
  'Tax preparation and planning for individuals and businesses',
];

const credentials = [
  {
    icon: GraduationCap,
    title: 'Bachelor of Science in Accounting',
    description: 'California State University, Long Beach',
  },
  {
    icon: Award,
    title: 'Licensed CPA',
    description: 'State of California',
  },
  {
    icon: Heart,
    title: 'Certified Imago Professional Facilitator',
    description: 'Communication and relationship building',
  },
  {
    icon: BookOpen,
    title: 'Ongoing Professional Development',
    description: 'Tax law, financial forecasting, and accounting software',
  },
];

const services = [
  'Accounting and bookkeeping services',
  'Tax preparation and planning',
  'Financial coaching',
  'Virtual CFO services',
  'Imago Professional Facilitation',
];

export default function PaulGormanPage() {
  return (
    <PageLayout>
      <PageHero
        title="Paul Gorman, CPA"
        subtitle="Meet Our Founder"
        description="Over 40 years of dedicated expertise in accounting, tax services, and financial coaching."
        breadcrumbs={[
          { label: 'Our Firm', href: '/our-firm/why-choose-us' },
          { label: 'Paul Gorman', href: '/our-firm/paul-gorman' },
        ]}
      />

      {/* Bio Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div
                className="aspect-square overflow-hidden rounded-2xl"
                style={{ backgroundColor: 'rgb(248, 251, 254)' }}
              >
                <img
                  src="https://www.clearvuestrategies.net/wp-content/uploads/2025/02/Paul-Gorman-CPA-768x768.jpg"
                  alt="Paul Gorman - CPA & Money Coach"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Founder & Principal
              </h2>
              <p className="mt-6 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                Paul C. Gorman is the founder and principal of ClearVue Strategies P.C.
                He brings over 40 years of experience as a CPA and a government finance
                executive managing treasury operations for an $8 billion cash and
                investment pool.
              </p>
              <p className="mt-4 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                His vision centers on providing straightforward, personalized financial
                services and building lasting, personal relationships with every client.
              </p>

              <div className="mt-8">
                <h3
                  className="mb-4 text-xl font-bold"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  Experience Highlights
                </h3>
                <ul className="space-y-3">
                  {experience.map((item) => (
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

              <div className="mt-8">
                <Button href="https://paulgorman.as.me/schedule/a24932e7" external>
                  Schedule with Paul
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Credentials Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Education & Credentials
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Professional Qualifications
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {credentials.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div
                  className="flex items-start gap-4 rounded-xl border p-6"
                  style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgba(143, 154, 174, 0.3)',
                  }}
                >
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: 'rgba(79, 122, 194, 0.1)' }}
                  >
                    <item.icon className="h-6 w-6" style={{ color: 'rgb(79, 122, 194)' }} />
                  </div>
                  <div>
                    <h3
                      className="font-bold"
                      style={{ color: 'rgb(0, 23, 63)' }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: 'rgb(143, 154, 174)' }}>{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Services Offered
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                How Paul Can Help You
              </h2>
              <p className="mt-4" style={{ color: 'rgb(143, 154, 174)' }}>
                Paul provides comprehensive financial services tailored to individuals
                and small businesses, with a focus on personalized attention and
                long-term relationships.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div
                className="rounded-2xl p-8"
                style={{ backgroundColor: 'rgb(248, 251, 254)' }}
              >
                <ul className="space-y-4">
                  {services.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <CheckCircle
                        className="h-5 w-5 flex-shrink-0"
                        style={{ color: 'rgb(79, 122, 194)' }}
                      />
                      <span
                        className="text-lg font-medium"
                        style={{ color: 'rgb(0, 23, 63)' }}
                      >
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/#services"
                    className="inline-flex items-center font-medium transition-opacity hover:opacity-80"
                    style={{ color: 'rgb(79, 122, 194)' }}
                  >
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
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
                Ready to Work with Paul?
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Schedule a free consultation to discuss your financial goals and discover
                how ClearVue Strategies can help you achieve them.
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
