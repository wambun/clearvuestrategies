'use client';

import { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Is a CPA better than an accountant?',
    answer:
      'A Certified Public Accountant (CPA) has met rigorous education requirements, including at least 150 semester hours of education with a concentration in accounting classes. Most states also require two years of experience before being able to sit for the CPA exam. CPAs must maintain their licensure through continuing education, ensuring they stay current with tax laws and regulations. When you work with a CPA like Paul Gorman, you get expertise backed by professional certification and ongoing education.',
  },
  {
    question: 'What is the average charge for a CPA?',
    answer:
      'CPA fees vary based on the complexity of your tax situation: Basic filings (Form 1040) typically range from $200-$400, itemized deductions run $300-$700, and small business income or rental properties cost $800-$1,500. At ClearVue Strategies, we offer a free consultation to discuss your specific needs and provide a personalized quote.',
  },
  {
    question: 'Is it worth hiring a CPA?',
    answer:
      'Absolutely! A CPA brings expertise in tax law, financial planning, and accounting that can save you money and time. CPAs can identify deductions you might miss, help you avoid costly mistakes, represent you if audited, and provide strategic tax planning. With 40 years of experience, Paul Gorman, CPA can help you maximize your financial outcomes.',
  },
  {
    question: 'What services does ClearVue Strategies offer?',
    answer:
      'We offer comprehensive financial services including: Accounting Services, Bookkeeping Support (QuickBooks ProAdvisor certified), Tax Preparation & Planning, Financial Coaching, Virtual CFO Services, and Imago Professional Facilitation. All services are personalized to meet your unique needs.',
  },
  {
    question: 'Do you offer services outside of Huntington Beach?',
    answer:
      'Yes! While we are based in Huntington Beach, California, our CPA and Financial Coaching services are available nationwide across the USA and worldwide. We work with clients remotely using secure technology to provide the same high-quality service regardless of your location.',
  },
  {
    question: 'What is Financial Coaching?',
    answer:
      'Financial Coaching helps you move from financial stress and uncertainty to calm, clarity, and confidence. Through our coaching sessions, you\'ll uncover what\'s really shaping your financial life, align your money with your values, and create a flexible plan you can trust. We help you achieve milestones like retirement, paying off debt, launching a business, buying a home, education funding, and more.',
  },
  {
    question: 'What is Imago Professional Facilitation?',
    answer:
      'Imago Professional Facilitation is a relationship-focused approach to financial counseling that helps couples and partners align on financial goals and values. It combines financial expertise with relationship dynamics to create a harmonious financial future together.',
  },
  {
    question: 'How do I schedule a consultation?',
    answer:
      'You can schedule a free consultation by clicking the "Free Consultation" button on our website or visiting our scheduling page. We\'ll discuss your financial situation, goals, and how ClearVue Strategies can help you achieve them.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <Container size="narrow">
        <SectionHeader
          label="FAQs"
          title="Frequently Asked Questions"
          description="Get answers to common questions about our services, pricing, and how we can help you achieve your financial goals."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <div
                className={cn(
                  'overflow-hidden rounded-xl border transition-all',
                  openIndex === index
                    ? 'border-primary-200 bg-primary-50/50'
                    : 'border-gray-100 bg-white'
                )}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="pr-4 font-semibold text-secondary-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 flex-shrink-0 text-primary-500 transition-transform duration-300',
                      openIndex === index && 'rotate-180'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <div className="border-t border-primary-100 px-6 pb-6 pt-4 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary-50 to-white p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <HelpCircle className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900">
              Still Have Questions?
            </h3>
            <p className="mt-2 text-gray-600">
              We're here to help! Schedule a free consultation or reach out to
              us directly.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="https://paulgorman.as.me/schedule/a24932e7"
                external
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="#contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
