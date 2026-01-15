'use client';

import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import {
  Shield,
  Users,
  Clock,
  Award,
  Globe,
  Heart,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '40 Years of Expertise',
    description:
      'Decades of experience in accounting, tax services, and financial coaching give you access to proven strategies and deep industry knowledge.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description:
      'Every client receives tailored solutions designed specifically for their unique financial situation, goals, and values.',
  },
  {
    icon: Globe,
    title: 'Nationwide & Worldwide',
    description:
      'Whether you are in Huntington Beach, anywhere in the USA, or across the globe, we can serve your financial needs.',
  },
  {
    icon: Shield,
    title: 'QuickBooks ProAdvisor',
    description:
      'Certified QuickBooks ProAdvisor expertise means your bookkeeping and accounting software is set up right from the start.',
  },
  {
    icon: Heart,
    title: 'Values-Based Approach',
    description:
      'We help align your finances with your personal values, ensuring your money supports the life you want to live.',
  },
  {
    icon: Clock,
    title: 'From Stress to Confidence',
    description:
      'Our mission is to move you from financial stress and uncertainty to calm, clarity, and confidence in your financial life.',
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-secondary-900 py-20 md:py-28"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container size="wide" className="relative">
        <AnimatedSection>
          <div className="text-center">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Why Choose ClearVue Strategies?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Discover why clients trust us with their most important financial
              decisions. We combine expertise with personalized care.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} delay={index * 100}>
              <div className="group rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500/20 text-primary-400 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                  <reason.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {reason.title}
                </h3>
                <p className="text-white/70">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CPA vs Accountant Info */}
        <AnimatedSection delay={600}>
          <div className="mt-16 rounded-2xl bg-white/10 p-8 backdrop-blur-sm md:p-12">
            <h3 className="mb-6 text-center text-2xl font-bold text-white">
              Is a CPA Better Than an Accountant?
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-white/80">
                  A Certified Public Accountant (CPA) has met rigorous education
                  requirements, including at least{' '}
                  <strong className="text-white">
                    150 semester hours of education
                  </strong>{' '}
                  with a concentration in accounting classes.
                </p>
                <p className="mt-4 text-white/80">
                  Most states also require{' '}
                  <strong className="text-white">
                    two years of experience
                  </strong>{' '}
                  before being able to sit for the CPA exam. This ensures CPAs
                  have both theoretical knowledge and practical experience.
                </p>
              </div>
              <div>
                <p className="text-white/80">
                  CPAs must maintain their licensure through continuing
                  education, ensuring they stay current with tax laws,
                  regulations, and best practices.
                </p>
                <p className="mt-4 text-white/80">
                  When you work with Paul Gorman, CPA, you get{' '}
                  <strong className="text-white">40 years of expertise</strong>{' '}
                  backed by professional certification and ongoing education.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={700}>
          <div className="mt-12 text-center">
            <Button
              href="https://paulgorman.as.me/schedule/a24932e7"
              external
              size="lg"
            >
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
