'use client';

import { cn } from '@/lib/utils';
import { AnimatedSection } from './AnimatedSection';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  index = 0,
}: ServiceCardProps) {
  const Content = (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/10 md:p-8">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-secondary-900">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="flex items-center text-sm font-semibold text-primary-500 transition-colors group-hover:text-primary-600">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );

  return (
    <AnimatedSection delay={index * 100}>
      {href ? (
        <a href={href} className="block h-full">
          {Content}
        </a>
      ) : (
        Content
      )}
    </AnimatedSection>
  );
}
