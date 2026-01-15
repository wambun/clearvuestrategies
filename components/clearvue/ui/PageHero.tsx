'use client';

import { Container } from './Container';
import { AnimatedSection } from './AnimatedSection';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({ title, subtitle, description, breadcrumbs }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-40"
      style={{ backgroundColor: 'rgb(0, 23, 63)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgb(79, 122, 194) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgb(79, 122, 194) 0%, transparent 50%)`,
          }}
        />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <AnimatedSection>
            <nav className="mb-6 flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="transition-opacity hover:opacity-80"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Home
              </Link>
              {breadcrumbs.map((item, index) => (
                <span key={item.href} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" style={{ color: 'rgb(152, 176, 217)' }} />
                  {index === breadcrumbs.length - 1 ? (
                    <span style={{ color: 'rgb(255, 255, 255)' }}>{item.label}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition-opacity hover:opacity-80"
                      style={{ color: 'rgb(152, 176, 217)' }}
                    >
                      {item.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          </AnimatedSection>
        )}

        {/* Subtitle */}
        {subtitle && (
          <AnimatedSection delay={100}>
            <div
              className="mb-4 text-base font-medium"
              style={{ color: 'rgb(79, 122, 194)' }}
            >
              {subtitle}
            </div>
          </AnimatedSection>
        )}

        {/* Title */}
        <AnimatedSection delay={200}>
          <h1
            className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            style={{ color: 'rgb(255, 255, 255)' }}
          >
            {title}
          </h1>
        </AnimatedSection>

        {/* Description */}
        {description && (
          <AnimatedSection delay={300}>
            <p
              className="mt-6 max-w-2xl text-lg"
              style={{ color: 'rgb(152, 176, 217)' }}
            >
              {description}
            </p>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
