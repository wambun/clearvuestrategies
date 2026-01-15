'use client';

import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';
import { StatCard } from '../ui/StatCard';
import {
  User,
  Target,
  Heart,
  Award,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const stats = [
  { value: '40+', label: 'Years Experience' },
  { value: 'USA', label: 'Nationwide Service' },
  { value: 'Global', label: 'Worldwide Reach' },
  { value: '100%', label: 'Client Focused' },
];

const highlights = [
  'Personalized, tailored financial solutions',
  'QuickBooks ProAdvisor certified',
  'Individual and business expertise',
  'Move from stress to confidence',
  'Values-aligned financial planning',
  'Dedicated CPA partnership',
];

export function About() {
  return (
    <section id="about" className="bg-[#F8FBFE] py-20 md:py-28">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 aspect-[4/5]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                      <User className="h-12 w-12 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900">
                      Paul Gorman
                    </h3>
                    <p className="text-gray-600">CPA & Money Coach</p>
                    <p className="mt-2 text-sm text-gray-500">
                      Founder, ClearVue Strategies
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-6 shadow-xl md:-right-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-white">
                    <Award className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary-900">
                      40+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years of Expertise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <div>
            <AnimatedSection>
              <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-600">
                About ClearVue Strategies
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl md:text-5xl">
                Take Control of Your Finances with Expert Guidance
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                At ClearVue Strategies P.C., doing business as ClearVue
                Strategies, we offer{' '}
                <strong>40 years of expertise</strong> in accounting services,
                tax services, and financial coaching. Founded by{' '}
                <strong>Paul Gorman, CPA</strong>, we provide personalized
                services that empower you to navigate your financial journey
                with confidence.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Our CPA and Financial Coaching services are available in{' '}
                <strong>Huntington Beach</strong>, all of the{' '}
                <strong>USA</strong>, and across the <strong>world</strong>. All
                of our services are designed to meet the unique needs of our
                clients, ensuring tailored solutions that work for you.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  href="https://paulgorman.as.me/schedule/a24932e7"
                  external
                  variant="outline"
                >
                  Meet Paul Gorman
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
