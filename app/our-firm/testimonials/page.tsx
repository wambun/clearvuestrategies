import { Metadata } from 'next';
import { PageLayout } from '@/components/clearvue/layout';
import { PageHero } from '@/components/clearvue/ui/PageHero';
import { Container } from '@/components/clearvue/ui/Container';
import { AnimatedSection } from '@/components/clearvue/ui/AnimatedSection';
import { Button } from '@/components/clearvue/ui/Button';
import { ArrowRight, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Testimonials | ClearVue Strategies',
  description:
    'See what our clients say about working with ClearVue Strategies. Real testimonials from individuals and businesses we have helped.',
};

const testimonials = [
  {
    quote:
      "This workshop was groundbreaking for me. I had no idea what to expect. I enjoyed the centered, welcoming and warmth of approach you had. The sentence stems and mirroring exercises were transformational - the experience was magical.",
    author: 'LL',
    service: 'Money and Me Workshop Participant',
    rating: 5,
    additionalFeedback:
      'I appreciated the videos and quotes. I feel lighter and grateful after attending.',
  },
  {
    quote:
      "It was a great series. The background information was helpful and useful for the topic. The mirroring was wonderful for gaining a better understanding of our relationships with money.",
    author: 'Linda L.',
    service: 'Money and Me Workshop Participant',
    rating: 5,
    additionalFeedback:
      "Other attendees' stories provided valuable insights. I encourage continued offerings of this work.",
  },
  {
    quote:
      "Paul has been instrumental in helping me understand and manage my business finances. His patient approach and deep expertise have given me confidence in my financial decisions.",
    author: 'Small Business Owner',
    service: 'Virtual CFO Services',
    rating: 5,
  },
  {
    quote:
      "Working with ClearVue Strategies has transformed my relationship with money. The financial coaching sessions helped me create a clear path toward my retirement goals.",
    author: 'Financial Coaching Client',
    service: 'Financial Coaching',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <PageLayout>
      <PageHero
        title="What Our Clients Say"
        subtitle="Client Testimonials"
        description="Real stories from individuals and businesses who have experienced clarity and transformation through our services."
        breadcrumbs={[
          { label: 'Our Firm', href: '/our-firm/why-choose-us' },
          { label: 'Testimonials', href: '/our-firm/testimonials' },
        ]}
      />

      {/* Testimonials Grid */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  className="h-full rounded-xl p-8"
                  style={{ backgroundColor: 'rgb(248, 251, 254)' }}
                >
                  <div className="mb-4 flex items-center gap-2">
                    <Quote
                      className="h-8 w-8"
                      style={{ color: 'rgb(79, 122, 194)' }}
                    />
                    <div className="text-xl" style={{ color: 'rgb(79, 122, 194)' }}>
                      {'★'.repeat(testimonial.rating)}
                    </div>
                  </div>
                  <p
                    className="text-lg italic leading-relaxed"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  {testimonial.additionalFeedback && (
                    <p
                      className="mt-4 text-base"
                      style={{ color: 'rgb(143, 154, 174)' }}
                    >
                      {testimonial.additionalFeedback}
                    </p>
                  )}
                  <div className="mt-6 border-t pt-4" style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}>
                    <p
                      className="font-bold"
                      style={{ color: 'rgb(0, 23, 63)' }}
                    >
                      {testimonial.author}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: 'rgb(79, 122, 194)' }}
                    >
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Quote Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mx-auto max-w-4xl text-center">
              <Quote
                className="mx-auto mb-6 h-12 w-12"
                style={{ color: 'rgb(79, 122, 194)' }}
              />
              <blockquote>
                <p
                  className="text-2xl font-medium italic leading-relaxed md:text-3xl"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  &ldquo;This service has given me a completely new perspective on
                  managing my finances. I finally feel in control and confident
                  about my financial future.&rdquo;
                </p>
              </blockquote>
              <div className="mt-6">
                <p
                  className="text-lg font-bold"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  Long-term Client
                </p>
                <p style={{ color: 'rgb(79, 122, 194)' }}>
                  Tax & Financial Services
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Share Your Story Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div
              className="rounded-2xl p-8 md:p-12"
              style={{ backgroundColor: 'rgb(248, 251, 254)' }}
            >
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h2
                    className="text-2xl font-bold md:text-3xl"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    Share Your Experience
                  </h2>
                  <p
                    className="mt-4 text-lg"
                    style={{ color: 'rgb(143, 154, 174)' }}
                  >
                    We value your feedback and would love to hear about your
                    experience working with ClearVue Strategies. Your story could
                    help others find the clarity they&apos;re looking for.
                  </p>
                </div>
                <div className="flex flex-col gap-4 md:items-end">
                  <Button href="mailto:info@clearvuestrategies.net?subject=Client Testimonial">
                    Share Your Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
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
                Ready to Experience the ClearVue Difference?
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Schedule a free consultation and discover how we can help you
                achieve financial clarity.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="https://paulgorman.as.me/schedule/a24932e7" external>
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="/our-firm/paul-gorman" variant="outline">
                  Meet Paul Gorman
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageLayout>
  );
}
