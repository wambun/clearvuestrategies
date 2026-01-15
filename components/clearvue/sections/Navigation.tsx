'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

const navLinks: NavItem[] = [
  { href: '/', label: 'Home' },
  {
    href: '/our-firm/why-choose-us',
    label: 'Our Firm',
    children: [
      { href: '/our-firm/why-choose-us', label: 'Why Choose Us' },
      { href: '/our-firm/paul-gorman', label: 'Paul Gorman, CPA' },
      { href: '/our-firm/testimonials', label: 'Testimonials' },
    ],
  },
  {
    href: '/services/accounting',
    label: 'Services',
    children: [
      { href: '/services/accounting', label: 'Accounting Services' },
      { href: '/services/bookkeeping', label: 'Bookkeeping' },
      { href: '/services/tax-services', label: 'Tax Services' },
      { href: '/services/financial-coaching', label: 'Financial Coaching' },
      { href: '/services/virtual-cfo', label: 'Virtual CFO' },
      { href: '/services/imago-facilitation', label: 'Imago Facilitation' },
    ],
  },
  {
    href: '/client-resources',
    label: 'Resources',
    children: [
      { href: '/client-resources', label: 'Client Resources' },
      { href: '/faqs', label: 'FAQs' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
    ],
  },
  { href: '/#contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const getHref = (item: NavItem) => {
    // On homepage, use anchor links for Home and Contact
    if (isHomePage) {
      if (item.label === 'Home') return '#home';
      if (item.label === 'Contact') return '#contact';
    }
    return item.href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl">
        {/* Floating Navigation Bar - Framer Style */}
        <nav
          className={cn(
            'flex items-center justify-between rounded-[10px] px-6 py-4 transition-all duration-300',
            'bg-white backdrop-blur-[10px]',
            scrolled ? 'shadow-lg' : 'shadow-md'
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/static/images/clearvue-logo.gif"
              alt="ClearVue Strategies"
              className="h-14 w-auto md:h-16"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {link.label}
                    <ChevronDown className={cn(
                      'h-4 w-4 transition-transform',
                      openDropdown === link.label && 'rotate-180'
                    )} />
                  </button>
                  <div
                    className={cn(
                      'absolute left-0 top-full z-50 mt-2 min-w-[200px] rounded-lg bg-white py-2 shadow-lg transition-all',
                      openDropdown === link.label
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-2 opacity-0'
                    )}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm transition-colors hover:bg-gray-50"
                        style={{ color: 'rgb(0, 23, 63)' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={getHref(link)}
                  className="text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <a
              href="https://paulgorman.as.me/schedule/a24932e7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[5px] px-5 py-2.5 text-sm font-medium transition-all hover:opacity-90"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgb(0, 23, 63)',
                border: '1px solid rgb(0, 23, 63)',
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 lg:hidden"
            style={{ color: 'rgb(0, 23, 63)' }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'mt-2 overflow-hidden rounded-[10px] bg-white transition-all duration-300 lg:hidden',
            isOpen ? 'max-h-[800px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-6 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setMobileOpenDropdown(
                          mobileOpenDropdown === link.label ? null : link.label
                        )
                      }
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-gray-50"
                      style={{ color: 'rgb(0, 23, 63)' }}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          mobileOpenDropdown === link.label && 'rotate-180'
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-200',
                        mobileOpenDropdown === link.label
                          ? 'max-h-[300px]'
                          : 'max-h-0'
                      )}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-lg py-2 pl-8 pr-4 text-sm transition-colors hover:bg-gray-50"
                          style={{ color: 'rgb(143, 154, 174)' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={getHref(link)}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-gray-50"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <hr className="my-2 border-gray-100" />
              <a
                href="https://www.icfiles.com/app/login.asp?customstyle=clearvue"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-gray-50"
                style={{ color: 'rgb(143, 154, 174)' }}
              >
                Client Portal
              </a>
              <div className="mt-2 flex flex-col gap-2 px-4">
                <a
                  href="tel:17145872086"
                  className="flex items-center gap-2"
                  style={{ color: 'rgb(143, 154, 174)' }}
                >
                  <Phone className="h-4 w-4" />
                  <span>1-714-587-2086</span>
                </a>
                <a
                  href="mailto:info@clearvuestrategies.net"
                  className="flex items-center gap-2"
                  style={{ color: 'rgb(143, 154, 174)' }}
                >
                  <Mail className="h-4 w-4" />
                  <span>info@clearvuestrategies.net</span>
                </a>
              </div>
              <a
                href="https://paulgorman.as.me/schedule/a24932e7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-[5px] px-5 py-3 text-center text-sm font-medium"
                style={{
                  backgroundColor: 'rgb(79, 122, 194)',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                Free Consultation
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
