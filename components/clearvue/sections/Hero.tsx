'use client';

import { Container } from '../ui/Container';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24"
      style={{ backgroundColor: 'rgb(0, 23, 63)' }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            filter: 'brightness(0.3)',
          }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 23, 63, 0.9) 0%, rgba(79, 122, 194, 0.7) 100%)',
          }}
        />
      </div>

      <Container size="wide" className="relative">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="text-left">
            {/* Pill Badge - Framer Style */}
            <AnimatedSection>
              <a
                href="#about"
                className="mb-8 inline-flex items-center gap-3 rounded-full px-5 py-2.5 transition-all hover:opacity-90"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <span className="text-sm font-medium" style={{ color: 'rgb(255, 255, 255)' }}>
                  Explore who we are
                </span>
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <ArrowUpRight className="h-3.5 w-3.5" style={{ color: 'rgb(255, 255, 255)' }} />
                </div>
              </a>
            </AnimatedSection>

            {/* Main Heading - Framer Style */}
            <AnimatedSection delay={100}>
              <h1
                className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ color: 'rgb(255, 255, 255)' }}
              >
                Trustworthy and Experienced{' '}
                <span className="relative">
                  CPA Services
                  <span
                    className="absolute -bottom-2 left-0 h-1 w-full rounded"
                    style={{ backgroundColor: 'rgb(79, 122, 194)' }}
                  />
                </span>
              </h1>
            </AnimatedSection>

            {/* Subtitle */}
            <AnimatedSection delay={200}>
              <p
                className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl"
                style={{ color: 'rgb(255, 255, 255)' }}
              >
                Maximize your financial potential with our professional accounting, tax, and financial coaching services. 40 years of trusted expertise.
              </p>
            </AnimatedSection>

            {/* CTA Button - Framer Style */}
            <AnimatedSection delay={300}>
              <a
                href="https://paulgorman.as.me/schedule/a24932e7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center rounded-[5px] px-8 py-4 text-base font-medium transition-all hover:opacity-90"
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  color: 'rgb(0, 23, 63)',
                }}
              >
                Get a Free Quote
              </a>
            </AnimatedSection>

            {/* Trust Logos - Framer Style */}
            <AnimatedSection delay={400}>
              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2 opacity-70">
                  <svg className="h-6 w-6" fill="currentColor" style={{ color: 'rgb(255, 255, 255)' }} viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                  <span className="text-sm font-medium" style={{ color: 'rgb(255, 255, 255)' }}>QuickBooks ProAdvisor</span>
                </div>
                <div className="flex items-center gap-2 opacity-70">
                  <svg className="h-6 w-6" fill="currentColor" style={{ color: 'rgb(255, 255, 255)' }} viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-sm font-medium" style={{ color: 'rgb(255, 255, 255)' }}>Licensed CPA</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Stats/Image Area */}
          <div className="relative hidden lg:block">
            <AnimatedSection delay={200} direction="right">
              {/* Decorative Stars/Elements */}
              <div className="absolute -right-4 top-0 opacity-30">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <path d="M60 0L63 57L120 60L63 63L60 120L57 63L0 60L57 57L60 0Z" fill="white"/>
                </svg>
              </div>

              {/* Feature Image Card */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional accounting and financial analysis"
                  className="h-[500px] w-full object-cover"
                />
              </div>

              {/* Stats Badge */}
              <div
                className="absolute -bottom-6 -left-6 rounded-xl p-6"
                style={{ backgroundColor: 'rgb(255, 255, 255)' }}
              >
                <div
                  className="text-sm font-medium"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  More than 1,000+ happy clients
                </div>
                <div className="mt-3 flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 overflow-hidden rounded-full border-2"
                      style={{ borderColor: 'rgb(255, 255, 255)' }}
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Client"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>

      {/* Stats Section - Framer Style */}
      <div style={{ backgroundColor: 'rgb(255, 255, 255)' }} className="relative py-16">
        <Container size="wide">
          <div className="grid gap-8 md:grid-cols-4">
            <AnimatedSection delay={100}>
              <div className="text-center md:text-left">
                <div
                  className="text-5xl font-bold md:text-6xl"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  40+
                </div>
                <div
                  className="mt-2 text-base"
                  style={{ color: 'rgb(143, 154, 174)' }}
                >
                  Years Experience
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center md:text-left">
                <div
                  className="text-5xl font-bold md:text-6xl"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  1k+
                </div>
                <div
                  className="mt-2 text-base"
                  style={{ color: 'rgb(143, 154, 174)' }}
                >
                  Satisfied Clients
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center md:text-left">
                <div
                  className="text-5xl font-bold md:text-6xl"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  6
                </div>
                <div
                  className="mt-2 text-base"
                  style={{ color: 'rgb(143, 154, 174)' }}
                >
                  Core Services
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="text-center md:text-left">
                <div
                  className="text-5xl font-bold md:text-6xl"
                  style={{ color: 'rgb(79, 122, 194)' }}
                >
                  100%
                </div>
                <div
                  className="mt-2 text-base"
                  style={{ color: 'rgb(143, 154, 174)' }}
                >
                  Personalized Solutions
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </div>
    </section>
  );
}
