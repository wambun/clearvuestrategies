'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out';

  const variants = {
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40',
    secondary:
      'bg-secondary-900 text-white hover:bg-secondary-800 shadow-lg shadow-secondary-900/25',
    outline:
      'border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white',
    ghost: 'text-primary-600 hover:bg-primary-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
