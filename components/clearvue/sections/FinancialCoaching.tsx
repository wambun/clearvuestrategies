'use client';

import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import {
  Target,
  Home,
  Briefcase,
  GraduationCap,
  Plane,
  PiggyBank,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

const milestones = [
  { icon: PiggyBank, label: 'Retirement Planning', description: 'Navigate retirement with confidence' },
  { icon: Target, label: 'Debt Payoff', description: 'Create a clear path to debt freedom' },
  { icon: Briefcase, label: 'Launch a Business', description: 'Turn your entrepreneurial dreams into reality' },
  { icon: Home, label: 'Buy a Home', description: 'Make homeownership achievable' },
  { icon: GraduationCap, label: 'Education Funding', description: 'Plan for your children\'s education' },
  { icon: Plane, label: 'Dream Vacation', description: 'Finally take that trip you\'ve dreamed of' },
];

const benefits = [
  'Uncover what\'s really shaping your financial life',
  'Align your money with your personal values',
  'Create a flexible plan you can trust',
  'Feel like the master of your financial life',
  'Gain confidence and clarity',
  'Turn your vision into reality',
];

export function FinancialCoaching() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8FBFE] py-20 md:py-28">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Side */}
          <div>
            <AnimatedSection>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-600">
                <Sparkles className="h-4 w-4" />
                Transform Your Financial Life
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl md:text-5xl">
                From Financial Stress to{' '}
                <span className="text-primary-500">
                  Calm, Clarity & Confidence
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Our financial coaching services help you move from financial
                stress and uncertainty to a place of peace and empowerment.
                Through our work together, you'll gain the tools and mindset to
                take control of your financial future.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="mt-8 space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <p className="mt-8 rounded-lg border-l-4 border-primary-500 bg-primary-50 p-4 italic text-gray-700">
                "You'll walk away not only at peace with your money, but in
                command of it, feeling like the master of your financial life,
                with the confidence and clarity to turn your vision into
                reality."
              </p>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="mt-8">
                <Button
                  href="https://paulgorman.as.me/schedule/a24932e7"
                  external
                  size="lg"
                >
                  Start Your Financial Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Milestones Grid */}
          <div>
            <AnimatedSection delay={200} direction="right">
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <h3 className="mb-6 text-center text-xl font-bold text-secondary-900">
                  Achieve Your Biggest Financial Goals
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.label}
                      className="group flex items-start gap-3 rounded-xl border border-gray-100 p-4 transition-all hover:border-primary-200 hover:bg-primary-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                        <milestone.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-secondary-900">
                          {milestone.label}
                        </div>
                        <div className="text-sm text-gray-500">
                          {milestone.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
