'use client';

import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight, Award, Globe, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 py-20 md:py-28 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <AnimatedSection>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Award className="h-4 w-4 text-primary-300" />
                <span className="text-sm font-medium text-white/90">
                  40 Years of Trusted Expertise
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Your Trusted{' '}
                <span className="bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">
                  CPA Partner
                </span>{' '}
                for Financial Success
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
                Personalized accounting, tax services, and financial coaching to
                help you move from financial stress to{' '}
                <span className="font-semibold text-primary-300">
                  calm, clarity, and confidence
                </span>
                .
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  href="https://paulgorman.as.me/schedule/a24932e7"
                  external
                  size="lg"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button href="#services" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Explore Services
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 lg:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-400" />
                  <span>QuickBooks ProAdvisor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary-400" />
                  <span>Serving Nationwide & Worldwide</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats Cards */}
          <div className="relative">
            <AnimatedSection delay={200} direction="right">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white">40+</div>
                  <div className="mt-1 text-sm text-white/70">Years of Experience</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white">6</div>
                  <div className="mt-1 text-sm text-white/70">Core Services</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white">100%</div>
                  <div className="mt-1 text-sm text-white/70">Personalized Solutions</div>
                </div>
                <div className="rounded-2xl bg-primary-500/30 p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white">Free</div>
                  <div className="mt-1 text-sm text-white/70">Initial Consultation</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Floating Badge */}
            <AnimatedSection delay={500} direction="fade">
              <div className="absolute -bottom-4 -right-4 hidden rounded-xl bg-white p-4 shadow-xl lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary-900">Paul Gorman</div>
                    <div className="text-sm text-gray-600">CPA & Money Coach</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
