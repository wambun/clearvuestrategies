import { Metadata } from 'next';
import { PageLayout } from '@/components/clearvue/layout';
import { PageHero } from '@/components/clearvue/ui/PageHero';
import { Container } from '@/components/clearvue/ui/Container';
import { AnimatedSection } from '@/components/clearvue/ui/AnimatedSection';
import { Button } from '@/components/clearvue/ui/Button';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { FAQ } from '@/components/clearvue';

export const metadata: Metadata = {
  title: 'FAQs | ClearVue Strategies',
  description: 'Frequently asked questions about ClearVue Strategies services, pricing, and processes.',
};

const additionalFaqs = [
  {
    question: 'How do you bill for your services?',
    answer: 'Standard billing procedure is to bill monthly. For certain services, we bill in advance. We require payment upon receipt. All standard forms of payment are accepted, including credit cards.',
  },
  {
    question: 'What hours are you available?',
    answer: 'We are available during normal business hours, which are 8:30 AM to 5:00 PM, Monday through Friday. Special arrangements can be made for evening or weekend consultations when needed.',
  },
  {
    question: 'What role do you play if the IRS audits me?',
    answer: 'We offer up to one full hour at no charge reviewing the return. After the initial review, regular hourly fees apply for any additional audit representation services.',
  },
  {
    question: 'What preparation materials do you need for my return?',
    answer: 'Materials in computer accounting programs are preferred, though nearly all formats are accepted. Please contact us about specific software compatibility if you have questions.',
  },
];

export default function FAQsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Get Answers"
        description="Find answers to common questions about our services, pricing, and how we can help you."
        breadcrumbs={[
          { label: 'FAQs', href: '/faqs' },
        ]}
      />

      {/* Main FAQ Section - Reuse existing component */}
      <FAQ />

      {/* Additional FAQs */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                More Questions
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Billing & Process FAQs
              </h2>
            </div>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl space-y-6">
            {additionalFaqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 100}>
                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: 'rgba(79, 122, 194, 0.1)' }}
                    >
                      <HelpCircle className="h-5 w-5" style={{ color: 'rgb(79, 122, 194)' }} />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold"
                        style={{ color: 'rgb(0, 23, 63)' }}
                      >
                        {faq.question}
                      </h3>
                      <p className="mt-2" style={{ color: 'rgb(143, 154, 174)' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(0, 23, 63)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="text-center">
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(255, 255, 255)' }}
              >
                Still Have Questions?
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Schedule a free consultation and we'll be happy to answer any questions
                you may have.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="https://paulgorman.as.me/schedule/a24932e7" external>
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="mailto:info@clearvuestrategies.net" variant="outline">
                  Email Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageLayout>
  );
}
