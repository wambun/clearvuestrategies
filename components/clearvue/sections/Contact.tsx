'use client';

import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ArrowRight,
  Calendar,
  User,
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: '15852 Plymouth Ln',
    subValue: 'Huntington Beach, CA 92647',
    href: 'https://maps.google.com/?q=15852+Plymouth+Ln+Huntington+Beach+CA+92647',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '1-714-587-2086',
    subValue: 'Call or text',
    href: 'tel:17145872086',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@clearvuestrategies.net',
    subValue: 'We respond within 24 hours',
    href: 'mailto:info@clearvuestrategies.net',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday - Friday',
    subValue: '9:00 AM - 5:00 PM PST',
    href: null,
  },
];

const quickLinks = [
  {
    title: 'Schedule Free Consultation',
    description: 'Book a time to discuss your financial needs',
    href: 'https://paulgorman.as.me/schedule/a24932e7',
    icon: Calendar,
    primary: true,
  },
  {
    title: 'Client Portal Login',
    description: 'Access your secure client documents',
    href: 'https://www.icfiles.com/app/login.asp?customstyle=clearvue',
    icon: User,
    primary: false,
  },
  {
    title: 'Newsletter Signup',
    description: 'Stay updated with financial tips and news',
    href: 'https://www.clearvuestrategies.net/newsletter-signup/',
    icon: Mail,
    primary: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <Container size="wide">
        <SectionHeader
          label="Contact Us"
          title="Get in Touch"
          description="Ready to take the next step? Reach out to schedule your free consultation or ask any questions."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <AnimatedSection>
              <h3 className="mb-6 text-xl font-bold text-secondary-900">
                Contact Information
              </h3>
            </AnimatedSection>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <AnimatedSection key={item.label} delay={index * 100}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith('http') ? '_blank' : undefined
                          }
                          rel={
                            item.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="text-lg font-semibold text-secondary-900 transition-colors hover:text-primary-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold text-secondary-900">
                          {item.value}
                        </div>
                      )}
                      <div className="text-gray-600">{item.subValue}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Map Embed Placeholder */}
            <AnimatedSection delay={400}>
              <div className="mt-8 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.5!2d-117.99!3d33.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ0JzI0LjAiTiAxMTfCsDU5JzI0LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ClearVue Strategies Location"
                    className="grayscale transition-all hover:grayscale-0"
                  />
                </div>
                <div className="p-4 text-center">
                  <a
                    href="https://maps.google.com/?q=15852+Plymouth+Ln+Huntington+Beach+CA+92647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                  >
                    View on Google Maps
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Quick Actions */}
          <div>
            <AnimatedSection>
              <h3 className="mb-6 text-xl font-bold text-secondary-900">
                Quick Actions
              </h3>
            </AnimatedSection>

            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <AnimatedSection key={link.title} delay={index * 100}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 rounded-xl border p-6 transition-all ${
                      link.primary
                        ? 'border-primary-200 bg-primary-50 hover:bg-primary-100'
                        : 'border-gray-100 bg-white hover:border-primary-200 hover:shadow-md'
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${
                        link.primary
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600'
                      }`}
                    >
                      <link.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-secondary-900">
                        {link.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {link.description}
                      </div>
                    </div>
                    <ArrowRight
                      className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                        link.primary ? 'text-primary-600' : 'text-gray-400'
                      }`}
                    />
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* Paul Gorman Card */}
            <AnimatedSection delay={400}>
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-secondary-900 to-secondary-800 p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Paul Gorman</h4>
                    <p className="text-white/70">CPA & Money Coach</p>
                  </div>
                </div>
                <p className="mt-4 text-white/80">
                  With 40 years of expertise in accounting services, tax
                  services, and financial coaching, Paul is dedicated to helping
                  you achieve your financial goals.
                </p>
                <Button
                  href="https://paulgorman.as.me/schedule/a24932e7"
                  external
                  className="mt-6 bg-white text-secondary-900 hover:bg-gray-100"
                >
                  Schedule with Paul
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
