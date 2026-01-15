'use client';

import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight, Phone, Calendar, CheckCircle } from 'lucide-react';

const benefits = [
  'Free initial consultation',
  'Personalized financial assessment',
  'No obligation',
  'Expert guidance',
];

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 py-20 md:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

      <Container size="narrow" className="relative">
        <AnimatedSection>
          <div className="text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Calendar className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">
                Book Your Free Consultation
              </span>
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to Take Control of Your Finances?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Schedule your free consultation today and discover how ClearVue
              Strategies can help you achieve your financial goals with
              confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-white/90"
                >
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="https://paulgorman.as.me/schedule/a24932e7"
                external
                size="lg"
                className="bg-white text-primary-600 shadow-xl hover:bg-gray-100"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="tel:17145872086"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call 1-714-587-2086
              </a>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
