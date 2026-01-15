'use client';

import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowUpRight, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: 'rgb(0, 23, 63)' }}>
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Get Started Today
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2
                className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
                style={{ color: 'rgb(255, 255, 255)' }}
              >
                Ready to Take Control of Your Finances?
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p
                className="mt-6 max-w-lg text-lg leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Schedule your free consultation today and discover how ClearVue Strategies can help you achieve your financial goals with confidence.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://paulgorman.as.me/schedule/a24932e7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-[5px] px-8 py-4 text-base font-medium transition-all hover:opacity-90"
                  style={{
                    backgroundColor: 'rgb(79, 122, 194)',
                    color: 'rgb(255, 255, 255)',
                  }}
                >
                  Schedule Free Consultation
                </a>
                <a
                  href="tel:17145872086"
                  className="inline-flex items-center gap-2 rounded-[5px] px-8 py-4 text-base font-medium transition-all hover:opacity-90"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'rgb(255, 255, 255)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <AnimatedSection delay={100}>
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(79, 122, 194, 0.2)' }}
              >
                <div
                  className="text-sm font-medium"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  Free
                </div>
                <div
                  className="mt-1 text-xl font-bold"
                  style={{ color: 'rgb(255, 255, 255)' }}
                >
                  Initial Consultation
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  No obligation to discuss your financial needs
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(79, 122, 194, 0.2)' }}
              >
                <div
                  className="text-sm font-medium"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  Personalized
                </div>
                <div
                  className="mt-1 text-xl font-bold"
                  style={{ color: 'rgb(255, 255, 255)' }}
                >
                  Financial Assessment
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  Tailored solutions for your unique situation
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(79, 122, 194, 0.2)' }}
              >
                <div
                  className="text-sm font-medium"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  Expert
                </div>
                <div
                  className="mt-1 text-xl font-bold"
                  style={{ color: 'rgb(255, 255, 255)' }}
                >
                  Professional Guidance
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  40 years of accounting expertise
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(79, 122, 194, 0.2)' }}
              >
                <div
                  className="text-sm font-medium"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  Nationwide
                </div>
                <div
                  className="mt-1 text-xl font-bold"
                  style={{ color: 'rgb(255, 255, 255)' }}
                >
                  & Worldwide Service
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  Serving clients across the globe
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
