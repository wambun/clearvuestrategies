'use client';

import { cn } from '@/lib/utils';
import { AnimatedSection } from './AnimatedSection';

interface StatCardProps {
  value: string;
  label: string;
  index?: number;
  dark?: boolean;
}

export function StatCard({ value, label, index = 0, dark = false }: StatCardProps) {
  return (
    <AnimatedSection delay={index * 100}>
      <div
        className={cn(
          'rounded-xl p-6 text-center',
          dark
            ? 'bg-white/10 backdrop-blur-sm'
            : 'bg-white shadow-lg shadow-gray-100'
        )}
      >
        <div
          className={cn(
            'text-3xl font-bold md:text-4xl',
            dark ? 'text-white' : 'text-primary-500'
          )}
        >
          {value}
        </div>
        <div
          className={cn(
            'mt-1 text-sm font-medium',
            dark ? 'text-white/70' : 'text-gray-600'
          )}
        >
          {label}
        </div>
      </div>
    </AnimatedSection>
  );
}
