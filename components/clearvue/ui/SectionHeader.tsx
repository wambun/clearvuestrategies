'use client';

import { cn } from '@/lib/utils';
import { AnimatedSection } from './AnimatedSection';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  return (
    <AnimatedSection
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {label && (
        <span
          className={cn(
            'mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium',
            dark
              ? 'bg-white/10 text-white/80'
              : 'bg-primary-100/50 text-primary-600'
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl',
          dark ? 'text-white' : 'text-secondary-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mx-auto mt-4 max-w-2xl text-lg',
            dark ? 'text-white/70' : 'text-gray-600'
          )}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
