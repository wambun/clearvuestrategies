'use client';

import { useState, useEffect } from 'react';
import { Calendar, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approximately 600px)
      const shouldShow = window.scrollY > 600;
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sticky Bar */}
      <div
        className={cn(
          'fixed bottom-0 left-0 right-0 z-40 hidden transform transition-all duration-300 md:block',
          isVisible ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div
          className="border-t px-4 py-3"
          style={{
            backgroundColor: 'rgb(0, 23, 63)',
            borderColor: 'rgba(79, 122, 194, 0.3)',
          }}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgba(79, 122, 194, 0.2)' }}
              >
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">
                  Ready to take control of your finances?
                </p>
                <p className="text-sm text-white/70">
                  Schedule your free consultation with Paul Gorman, CPA
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:17145872086"
                className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all hover:opacity-90"
                style={{
                  backgroundColor: 'transparent',
                  color: 'rgb(255, 255, 255)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="https://paulgorman.as.me/schedule/a24932e7"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-6 py-2.5 text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: 'rgb(79, 122, 194)',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                Schedule Free Consultation
              </a>
              <button
                onClick={() => setIsDismissed(true)}
                className="ml-2 rounded-full p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Button */}
      <div
        className={cn(
          'fixed bottom-4 right-4 z-40 transform transition-all duration-300 md:hidden',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        )}
      >
        <a
          href="https://paulgorman.as.me/schedule/a24932e7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold shadow-lg transition-all hover:scale-105"
          style={{
            backgroundColor: 'rgb(79, 122, 194)',
            color: 'rgb(255, 255, 255)',
          }}
        >
          <Calendar className="h-5 w-5" />
          Free Consultation
        </a>
      </div>
    </>
  );
}
