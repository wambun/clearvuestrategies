'use client';

import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Shield, Users, Clock, Award, Globe, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '40 Years of Expertise',
    description:
      'Decades of experience in accounting, tax services, and financial coaching.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description:
      'Every client receives tailored solutions designed for their unique situation.',
  },
  {
    icon: Globe,
    title: 'Nationwide & Worldwide',
    description:
      'Serving clients in Huntington Beach, across the USA, and globally.',
  },
  {
    icon: Shield,
    title: 'QuickBooks ProAdvisor',
    description:
      'Certified QuickBooks ProAdvisor for proper bookkeeping setup.',
  },
  {
    icon: Heart,
    title: 'Values-Based Approach',
    description:
      'Align your finances with your personal values and life goals.',
  },
  {
    icon: Clock,
    title: 'From Stress to Confidence',
    description:
      'Move from financial stress to calm, clarity, and confidence.',
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'rgb(255, 255, 255)' }}
    >
      <Container size="wide">
        {/* Header */}
        <div className="mb-16">
          <AnimatedSection>
            <div
              className="mb-4 text-base font-medium"
              style={{ color: 'rgb(79, 122, 194)' }}
            >
              Why Choose Us
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2
              className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
              style={{ color: 'rgb(0, 23, 63)' }}
            >
              Why Choose ClearVue Strategies?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p
              className="mt-4 max-w-2xl text-lg"
              style={{ color: 'rgb(143, 154, 174)' }}
            >
              Discover why clients trust us with their most important financial decisions.
            </p>
          </AnimatedSection>
        </div>

        {/* Reasons Grid - Framer Style */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} delay={index * 100}>
              <div
                className="group rounded-xl p-6 transition-all"
                style={{ backgroundColor: 'rgba(233, 237, 241, 0.4)' }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-all"
                  style={{ backgroundColor: 'rgb(79, 122, 194)' }}
                >
                  <reason.icon className="h-6 w-6" style={{ color: 'rgb(255, 255, 255)' }} />
                </div>
                <h3
                  className="mb-2 text-lg font-bold"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  {reason.title}
                </h3>
                <p style={{ color: 'rgb(143, 154, 174)' }}>{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CPA Info Section - Framer Style */}
        <AnimatedSection delay={600}>
          <div
            className="mt-20 grid gap-12 rounded-2xl p-8 md:grid-cols-2 md:p-12"
            style={{ backgroundColor: 'rgb(0, 23, 63)' }}
          >
            <div>
              <div
                className="mb-4 text-sm font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Professional Credentials
              </div>
              <h3
                className="text-2xl font-bold md:text-3xl"
                style={{ color: 'rgb(255, 255, 255)' }}
              >
                Is a CPA Better Than an Accountant?
              </h3>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                A Certified Public Accountant (CPA) has met rigorous education requirements, including at least{' '}
                <span style={{ color: 'rgb(255, 255, 255)' }}>150 semester hours of education</span>{' '}
                with a concentration in accounting classes.
              </p>
            </div>
            <div className="space-y-4">
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(79, 122, 194, 0.2)' }}
              >
                <div
                  className="text-lg font-bold"
                  style={{ color: 'rgb(255, 255, 255)' }}
                >
                  Education Requirements
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  150 semester hours + concentration in accounting
                </p>
              </div>
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(79, 122, 194, 0.2)' }}
              >
                <div
                  className="text-lg font-bold"
                  style={{ color: 'rgb(255, 255, 255)' }}
                >
                  Experience Required
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  Two years before CPA exam eligibility
                </p>
              </div>
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(79, 122, 194, 0.2)' }}
              >
                <div
                  className="text-lg font-bold"
                  style={{ color: 'rgb(255, 255, 255)' }}
                >
                  Continuing Education
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  Stay current with tax laws and regulations
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
