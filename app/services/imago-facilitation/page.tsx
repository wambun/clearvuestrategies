import { Metadata } from 'next';
import { PageLayout } from '@/components/clearvue/layout';
import { PageHero } from '@/components/clearvue/ui/PageHero';
import { Container } from '@/components/clearvue/ui/Container';
import { AnimatedSection } from '@/components/clearvue/ui/AnimatedSection';
import { Button } from '@/components/clearvue/ui/Button';
import {
  CheckCircle,
  ArrowRight,
  Heart,
  Users,
  MessageCircle,
  Lightbulb,
  Handshake,
  User,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Imago Facilitation | ClearVue Strategies',
  description:
    'Transform relationships through Imago Professional Facilitation. Structured empathetic dialogue for individuals, dyads, and teams to create clarity and resolve challenges.',
};

const howItWorks = [
  {
    icon: User,
    title: 'Customized Individual Sessions',
    description: 'Exploration of underlying issues and development of communication strategies tailored to your needs.',
  },
  {
    icon: Users,
    title: 'Customized Dyad Sessions',
    description: 'Work with two individuals (non-romantic) to explore interaction patterns and develop effective communication strategies.',
  },
  {
    icon: Handshake,
    title: 'Group Facilitation',
    description: 'Uncover collective dynamics and build cohesive team environments.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Tools & Techniques',
    description: 'Structured methods for enhancing connection, resolving conflicts, and fostering deeper understanding.',
  },
];

const benefits = [
  'Move from conflict to connection',
  'Uncover unspoken feelings and misunderstandings',
  'Address unmet needs in relationships',
  'Develop clearer, more compassionate communication',
  'Build stronger professional and personal connections',
];

export default function ImagoFacilitationPage() {
  return (
    <PageLayout>
      <PageHero
        title="Imago Facilitation"
        subtitle="Enhance Your Relationships"
        description="Transforming relationships through structured empathetic dialogue to uncover and transform hidden dynamics."
        breadcrumbs={[
          { label: 'Services', href: '/#services' },
          { label: 'Imago Facilitation', href: '/services/imago-facilitation' },
        ]}
      />

      {/* Overview Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                What Is Imago Professional Facilitation?
              </h2>
              <p className="mt-6 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                Imago Professional Facilitation helps people move from conflict to connection
                by working within the "space between" - where unspoken feelings, misunderstandings,
                and unmet needs reside.
              </p>
              <p className="mt-4 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                As a certified Imago Professional Facilitator, Paul Gorman uses techniques
                based on Imago Relationship Theory to guide individuals, dyadic interactions,
                and group settings toward clearer, more compassionate communication.
              </p>
              <div
                className="mt-6 rounded-lg border-l-4 p-4"
                style={{
                  borderColor: 'rgb(79, 122, 194)',
                  backgroundColor: 'rgb(248, 251, 254)',
                }}
              >
                <p className="text-sm italic" style={{ color: 'rgb(143, 154, 174)' }}>
                  <strong>Note:</strong> Therapy and counseling for romantic couples are
                  reserved for trained Imago counselors. Our facilitation services focus
                  on individuals, non-romantic dyads, and professional teams.
                </p>
              </div>
              <div className="mt-8">
                <Button href="https://paulgorman.as.me/schedule/a24932e7" external>
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div
                className="rounded-2xl p-8"
                style={{ backgroundColor: 'rgb(248, 251, 254)' }}
              >
                <h3
                  className="mb-6 text-xl font-bold"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  Benefits of Imago Facilitation
                </h3>
                <ul className="space-y-4">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Heart
                        className="mt-0.5 h-5 w-5 flex-shrink-0"
                        style={{ color: 'rgb(79, 122, 194)' }}
                      />
                      <span style={{ color: 'rgb(0, 23, 63)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Our Approach
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                How It Works
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {howItWorks.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div
                  className="h-full rounded-xl border p-8 transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgba(143, 154, 174, 0.3)',
                  }}
                >
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg"
                    style={{ backgroundColor: 'rgba(79, 122, 194, 0.1)' }}
                  >
                    <item.icon className="h-7 w-7" style={{ color: 'rgb(79, 122, 194)' }} />
                  </div>
                  <h3
                    className="mb-3 text-xl font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base" style={{ color: 'rgb(143, 154, 174)' }}>
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Client Experiences
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                What Clients Say
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={100}>
              <div
                className="rounded-xl p-8"
                style={{ backgroundColor: 'rgb(248, 251, 254)' }}
              >
                <div className="mb-4 text-2xl" style={{ color: 'rgb(79, 122, 194)' }}>
                  ★★★★★
                </div>
                <p
                  className="text-lg italic"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  "This workshop was groundbreaking for me. I had no idea what to expect.
                  I enjoyed the centered, welcoming and warmth of approach you had. The
                  sentence stems and mirroring exercises were transformational - the
                  experience was magical."
                </p>
                <p className="mt-4 font-medium" style={{ color: 'rgb(79, 122, 194)' }}>
                  - LL, Money and Me Workshop Participant
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div
                className="rounded-xl p-8"
                style={{ backgroundColor: 'rgb(248, 251, 254)' }}
              >
                <div className="mb-4 text-2xl" style={{ color: 'rgb(79, 122, 194)' }}>
                  ★★★★★
                </div>
                <p
                  className="text-lg italic"
                  style={{ color: 'rgb(0, 23, 63)' }}
                >
                  "It was a great series. The background information was helpful and useful
                  for the topic. The mirroring was wonderful for gaining a better understanding
                  of our relationships with money."
                </p>
                <p className="mt-4 font-medium" style={{ color: 'rgb(79, 122, 194)' }}>
                  - Linda L., Money and Me Workshop Participant
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="py-20" style={{ backgroundColor: 'rgb(248, 251, 254)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Related Services
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedSection delay={100}>
              <Link
                href="/services/financial-coaching"
                className="group flex items-center justify-between rounded-xl border bg-white p-6 transition-all hover:shadow-lg"
                style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}
              >
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    Financial Coaching
                  </h3>
                  <p className="mt-2" style={{ color: 'rgb(143, 154, 174)' }}>
                    Move from financial stress to calm, clarity, and confidence.
                  </p>
                </div>
                <ArrowRight
                  className="h-6 w-6 transition-transform group-hover:translate-x-2"
                  style={{ color: 'rgb(79, 122, 194)' }}
                />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Link
                href="/services/tax-services"
                className="group flex items-center justify-between rounded-xl border bg-white p-6 transition-all hover:shadow-lg"
                style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}
              >
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    Tax Services
                  </h3>
                  <p className="mt-2" style={{ color: 'rgb(143, 154, 174)' }}>
                    Expert tax preparation and forward-looking tax planning.
                  </p>
                </div>
                <ArrowRight
                  className="h-6 w-6 transition-transform group-hover:translate-x-2"
                  style={{ color: 'rgb(79, 122, 194)' }}
                />
              </Link>
            </AnimatedSection>
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
                Ready to Transform Your Relationships?
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Schedule a free consultation to explore how Imago Facilitation can help
                you build stronger connections.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="https://paulgorman.as.me/schedule/a24932e7" external>
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="tel:17145872086" variant="outline">
                  Call 1-714-587-2086
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageLayout>
  );
}
