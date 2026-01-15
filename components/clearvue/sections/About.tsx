'use client';

import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

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
    <section id="about" className="py-20 md:py-28" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side - Framer Style */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://www.clearvuestrategies.net/wp-content/uploads/2025/02/Paul-Gorman-CPA-768x768.jpg"
                  alt="Paul Gorman - CPA & Money Coach"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>

              {/* Floating Badge - Framer Style */}
              <div
                className="absolute -bottom-6 -right-6 rounded-xl p-6"
                style={{ backgroundColor: 'rgb(79, 122, 194)' }}
              >
                <div
                  className="text-4xl font-bold"
                  style={{ color: 'rgb(255, 255, 255)' }}
                >
                  40+
                </div>
                <div
                  className="text-sm"
                  style={{ color: 'rgb(255, 255, 255)', opacity: 0.8 }}
                >
                  Years Experience
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Side - Framer Style */}
          <div>
            <AnimatedSection>
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                About ClearVue Strategies
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2
                className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Take Control of Your Finances with Expert Guidance
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p
                className="mt-6 text-lg leading-relaxed"
                style={{ color: 'rgb(143, 154, 174)' }}
              >
                At ClearVue Strategies P.C., we offer{' '}
                <span style={{ color: 'rgb(0, 23, 63)', fontWeight: 600 }}>40 years of expertise</span>{' '}
                in accounting services, tax services, and financial coaching. Founded by{' '}
                <span style={{ color: 'rgb(0, 23, 63)', fontWeight: 600 }}>Paul Gorman, CPA</span>, we provide personalized services that empower you to navigate your financial journey with confidence.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p
                className="mt-4 text-lg leading-relaxed"
                style={{ color: 'rgb(143, 154, 174)' }}
              >
                Our CPA and Financial Coaching services are available in Huntington Beach, all of the USA, and across the world.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: 'rgb(79, 122, 194)' }} />
                    <span style={{ color: 'rgb(0, 23, 63)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center rounded-[5px] px-6 py-3 text-sm font-medium transition-all hover:opacity-90"
                  style={{
                    backgroundColor: 'rgb(79, 122, 194)',
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  Explore Services
                </a>
                <a
                  href="https://paulgorman.as.me/schedule/a24932e7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[5px] px-6 py-3 text-sm font-medium transition-all hover:opacity-90"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'rgb(0, 23, 63)',
                    border: '1px solid rgb(143, 154, 174)',
                  }}
                >
                  Meet Paul Gorman
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
