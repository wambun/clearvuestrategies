'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-choose-us', label: 'Why Us' },
  { href: '#resources', label: 'Resources' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden bg-secondary-900 py-2 text-sm text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href="tel:17145872086"
              className="flex items-center gap-2 transition-colors hover:text-primary-300"
            >
              <Phone className="h-4 w-4" />
              <span>1-714-587-2086</span>
            </a>
            <a
              href="mailto:info@clearvuestrategies.net"
              className="flex items-center gap-2 transition-colors hover:text-primary-300"
            >
              <Mail className="h-4 w-4" />
              <span>info@clearvuestrategies.net</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70">Huntington Beach, CA | Serving Nationwide & Worldwide</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/95 shadow-lg shadow-gray-100/50 backdrop-blur-md'
            : 'bg-white'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-secondary-900">
                  Clear<span className="text-primary-500">Vue</span>
                </span>
                <span className="ml-2 hidden text-sm font-medium text-gray-500 sm:inline">
                  Strategies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href="https://www.icfiles.com/app/login.asp?customstyle=clearvue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
              >
                Client Portal
              </a>
              <Button
                href="https://paulgorman.as.me/schedule/a24932e7"
                external
                size="sm"
              >
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 lg:hidden',
            isOpen ? 'max-h-[500px]' : 'max-h-0'
          )}
        >
          <div className="border-t border-gray-100 bg-white px-4 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2 border-gray-100" />
              <a
                href="https://www.icfiles.com/app/login.asp?customstyle=clearvue"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-4 py-3 text-base font-medium text-gray-600 transition-colors hover:bg-gray-50"
              >
                Client Portal
              </a>
              <div className="mt-2 flex flex-col gap-2 px-4">
                <a
                  href="tel:17145872086"
                  className="flex items-center gap-2 text-gray-600"
                >
                  <Phone className="h-4 w-4" />
                  <span>1-714-587-2086</span>
                </a>
                <a
                  href="mailto:info@clearvuestrategies.net"
                  className="flex items-center gap-2 text-gray-600"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@clearvuestrategies.net</span>
                </a>
              </div>
              <Button
                href="https://paulgorman.as.me/schedule/a24932e7"
                external
                className="mt-4"
              >
                Free Consultation
              </Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
