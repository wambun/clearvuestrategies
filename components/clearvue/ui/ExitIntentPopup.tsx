'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, Gift, ArrowRight, CheckCircle } from 'lucide-react';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      // Only trigger when mouse leaves from the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        // Check if user has already seen popup this session
        const hasSeenPopup = sessionStorage.getItem('exitPopupShown');
        if (!hasSeenPopup) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem('exitPopupShown', 'true');
        }
      }
    },
    [hasShown]
  );

  useEffect(() => {
    // Only add listener on desktop
    if (window.innerWidth >= 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [handleMouseLeave]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const benefits = [
    'Personalized tax-saving strategies',
    'Financial health assessment',
    'QuickBooks optimization tips',
    'No obligation, 100% free',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg animate-in zoom-in-95 rounded-2xl p-8 shadow-2xl"
        style={{ backgroundColor: 'rgb(255, 255, 255)' }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 transition-colors hover:bg-gray-100"
          style={{ color: 'rgb(143, 154, 174)' }}
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full"
            style={{ backgroundColor: 'rgba(79, 122, 194, 0.1)' }}
          >
            <Gift className="h-8 w-8" style={{ color: 'rgb(79, 122, 194)' }} />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h2
            className="mb-2 text-2xl font-bold"
            style={{ color: 'rgb(0, 23, 63)' }}
          >
            Wait! Don't Leave Empty-Handed
          </h2>
          <p className="mb-6" style={{ color: 'rgb(143, 154, 174)' }}>
            Get a <strong style={{ color: 'rgb(0, 23, 63)' }}>FREE 30-minute consultation</strong> with
            Paul Gorman, CPA — 40 years of expertise at your service.
          </p>

          {/* Benefits */}
          <div className="mb-6 space-y-3 text-left">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle
                  className="h-5 w-5 flex-shrink-0"
                  style={{ color: 'rgb(79, 122, 194)' }}
                />
                <span style={{ color: 'rgb(0, 23, 63)' }}>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a
              href="https://paulgorman.as.me/schedule/a24932e7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: 'rgb(79, 122, 194)',
                color: 'rgb(255, 255, 255)',
              }}
              onClick={handleClose}
            >
              Claim My Free Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
            <button
              onClick={handleClose}
              className="w-full py-2 text-sm transition-colors hover:underline"
              style={{ color: 'rgb(143, 154, 174)' }}
            >
              No thanks, I'll figure it out myself
            </button>
          </div>
        </div>

        {/* Trust indicator */}
        <div
          className="mt-6 flex items-center justify-center gap-2 border-t pt-4"
          style={{ borderColor: 'rgba(143, 154, 174, 0.2)' }}
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-8 w-8 overflow-hidden rounded-full border-2"
                style={{ borderColor: 'rgb(255, 255, 255)' }}
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 20}`}
                  alt="Client"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-sm" style={{ color: 'rgb(143, 154, 174)' }}>
            Join 1,000+ satisfied clients
          </span>
        </div>
      </div>
    </div>
  );
}
