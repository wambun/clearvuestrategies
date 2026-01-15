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
  Users,
  Heart,
  Shield,
  Globe,
  Lightbulb,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Choose Us | ClearVue Strategies',
  description:
    '40 years of dedicated CPA expertise tailored to individual and small business needs. Personalized financial planning with a focus on your goals.',
};

const reasons = [
  {
    icon: Award,
    title: 'Personalized Approach',
    description: 'Services customized to meet each client\'s unique financial needs and goals.',
  },
  {
    icon: Lightbulb,
    title: 'Expert Guidance',
    description: 'Access to Paul Gorman\'s 40 years of CPA experience and specialized knowledge.',
  },
  {
    icon: Users,
    title: 'Holistic Services',
    description: 'Comprehensive offerings including accounting, tax preparation, and financial coaching.',
  },
  {
    icon: Heart,
    title: 'Client Empowerment',
    description: 'Helping clients define their financial vision and implement effective strategies.',
  },
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description: 'Built on integrity and professionalism for lasting partnerships.',
  },
  {
    icon: Globe,
    title: 'Community Focused',
    description: 'Local Orange County firm offering remote services nationwide and worldwide.',
  },
];

const stats = [
  { value: '40+', label: 'Years Experience' },
  { value: '1,000+', label: 'Satisfied Clients' },
  { value: '6', label: 'Core Services' },
  { value: '100%', label: 'Personalized Solutions' },
];

export default function WhyChooseUsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Why Choose ClearVue Strategies?"
        subtitle="Our Firm"
        description="40 years of dedicated CPA expertise tailored to individual and small business needs."
        breadcrumbs={[
          { label: 'Our Firm', href: '/our-firm/why-choose-us' },
          { label: 'Why Choose Us', href: '/our-firm/why-choose-us' },
        ]}
      />

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
        <Container size="wide">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div
                    className="text-4xl font-bold md:text-5xl"
                    style={{ color: 'rgb(79, 122, 194)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="mt-2 text-sm font-medium"
                    style={{ color: 'rgb(143, 154, 174)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Reasons Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                What Sets Us Apart
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Our Key Differentiators
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 100}>
                <div
                  className="h-full rounded-xl border p-8 transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: 'rgb(248, 251, 254)',
                    borderColor: 'rgba(143, 154, 174, 0.3)',
                  }}
                >
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg"
                    style={{ backgroundColor: 'rgba(79, 122, 194, 0.1)' }}
                  >
                    <reason.icon className="h-7 w-7" style={{ color: 'rgb(79, 122, 194)' }} />
                  </div>
                  <h3
                    className="mb-3 text-xl font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {reason.title}
                  </h3>
                  <p style={{ color: 'rgb(143, 154, 174)' }}>{reason.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* About Paul Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Your Financial Partner
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Meet Paul Gorman, CPA
              </h2>
              <p className="mt-6 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                Paul C. Gorman brings over 40 years of experience as a CPA and government
                finance executive. His expertise includes managing treasury operations
                for an $8 billion cash and investment pool, developing robust budgeting
                strategies, and providing personalized financial guidance.
              </p>
              <p className="mt-4 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                As a certified Imago Professional Facilitator, Paul also provides services
                focused on communication improvement, conflict resolution, and relationship
                building.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/our-firm/paul-gorman">
                  Learn More About Paul
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="https://paulgorman.as.me/schedule/a24932e7" external variant="outline">
                  Schedule with Paul
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div
                className="rounded-2xl p-8"
                style={{ backgroundColor: 'rgb(255, 255, 255)' }}
              >
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  Paul's Mission
                </h3>
                <p
                  className="text-xl italic"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  "My vision is to provide straightforward, personalized financial services
                  and build lasting, personal relationships with every client."
                </p>
                <div className="mt-8">
                  <h4
                    className="mb-4 font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    Areas of Expertise:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Individual & Business Tax',
                      'Financial Coaching',
                      'Accounting & Bookkeeping',
                      'Virtual CFO Services',
                      'Imago Facilitation',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle
                          className="h-4 w-4"
                          style={{ color: 'rgb(79, 122, 194)' }}
                        />
                        <span style={{ color: 'rgb(143, 154, 174)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
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
                Ready to Get Started?
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Schedule a free consultation to experience the ClearVue Strategies difference.
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
