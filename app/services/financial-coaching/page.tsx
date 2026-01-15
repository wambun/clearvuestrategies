import { Metadata } from 'next';
import { PageLayout } from '@/components/clearvue/layout';
import { PageHero } from '@/components/clearvue/ui/PageHero';
import { Container } from '@/components/clearvue/ui/Container';
import { AnimatedSection } from '@/components/clearvue/ui/AnimatedSection';
import { Button } from '@/components/clearvue/ui/Button';
import {
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Heart,
  Compass,
  Lightbulb,
  TrendingUp,
  Home,
  GraduationCap,
  Briefcase,
  PiggyBank,
  Plane,
  CreditCard,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Financial Coaching | ClearVue Strategies',
  description:
    'Financial coaching services to help you move from financial stress to calm, clarity, and confidence. Personalized guidance for a brighter financial future.',
};

const coachingApproach = [
  {
    icon: Target,
    title: 'Customized Financial Coaching',
    description: 'Every financial journey is unique. We tailor plans to your individual objectives, risk tolerance, and life aspirations, meeting you wherever you are in your financial situation.',
  },
  {
    icon: Users,
    title: 'Collaborative Strategy Development',
    description: 'Using professional facilitation methodologies, we guide you through self-discovery and strategic planning to create comprehensive financial plans aligned with your vision.',
  },
  {
    icon: Heart,
    title: 'Holistic Support',
    description: 'Our coaching incorporates extensive private and public sector experience to address all aspects of financial well-being, helping navigate complex decisions and regulatory frameworks.',
  },
  {
    icon: Compass,
    title: 'Ongoing Implementation',
    description: 'Financial coaching extends beyond initial planning. We work with you to create and implement goals, providing continuous guidance as life circumstances and objectives evolve.',
  },
];

const expectations = [
  'Personalized consultation reviewing current finances and aspirations',
  'Customized step-by-step action plan',
  'Continuous partnership and guidance toward financial objectives',
  'Confidence from working with an experienced professional',
];

const financialGoals = [
  { icon: PiggyBank, title: 'Retirement Planning', description: 'Navigate retirement with confidence' },
  { icon: CreditCard, title: 'Debt Payoff', description: 'Create a clear path to debt freedom' },
  { icon: Briefcase, title: 'Launch a Business', description: 'Turn your entrepreneurial dreams into reality' },
  { icon: Home, title: 'Buy a Home', description: 'Make homeownership achievable' },
  { icon: GraduationCap, title: 'Education Funding', description: "Plan for your children's education" },
  { icon: Plane, title: 'Dream Vacation', description: "Finally take that trip you've dreamed of" },
];

export default function FinancialCoachingPage() {
  return (
    <PageLayout>
      <PageHero
        title="Financial Coaching"
        subtitle="For a Brighter Future"
        description="Move from financial stress to calm, clarity, and confidence with personalized financial coaching services."
        breadcrumbs={[
          { label: 'Services', href: '/#services' },
          { label: 'Financial Coaching', href: '/services/financial-coaching' },
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
                Transform Your Financial Life
              </h2>
              <p className="mt-6 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                ClearVue Strategies offers financial coaching services led by Paul Gorman,
                who brings over four decades of experience as a CPA, having worked in private
                practice and government finance roles in banking and treasury.
              </p>
              <p className="mt-4 text-lg" style={{ color: 'rgb(143, 154, 174)' }}>
                As a certified Imago Professional Facilitator, Paul blends financial expertise
                with collaborative coaching methods to help you achieve your financial goals
                and live the life you envision.
              </p>
              <p
                className="mt-6 text-xl font-medium italic"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                "You'll walk away not only at peace with your money, but in command of it,
                feeling like the master of your financial life."
              </p>
              <div className="mt-8">
                <Button href="https://paulgorman.as.me/schedule/a24932e7" external>
                  Start Your Transformation
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
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  {expectations.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
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

      {/* Approach Section */}
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
                Four Key Components
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {coachingApproach.map((item, index) => (
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

      {/* Financial Goals Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container size="wide">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <div
                className="mb-4 text-base font-medium"
                style={{ color: 'rgb(79, 122, 194)' }}
              >
                Achieve Your Goals
              </div>
              <h2
                className="text-3xl font-bold md:text-4xl"
                style={{ color: 'rgb(0, 23, 63)' }}
              >
                Your Biggest Financial Milestones
              </h2>
              <p className="mx-auto mt-4 max-w-2xl" style={{ color: 'rgb(143, 154, 174)' }}>
                We help you achieve the milestones that matter most in your financial life.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {financialGoals.map((goal, index) => (
              <AnimatedSection key={goal.title} delay={index * 100}>
                <div
                  className="flex items-center gap-4 rounded-xl border p-6"
                  style={{
                    backgroundColor: 'rgb(248, 251, 254)',
                    borderColor: 'rgba(143, 154, 174, 0.3)',
                  }}
                >
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: 'rgba(79, 122, 194, 0.1)' }}
                  >
                    <goal.icon className="h-6 w-6" style={{ color: 'rgb(79, 122, 194)' }} />
                  </div>
                  <div>
                    <h3
                      className="font-bold"
                      style={{ color: 'rgb(0, 23, 63)' }}
                    >
                      {goal.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'rgb(143, 154, 174)' }}>
                      {goal.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
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
                href="/services/imago-facilitation"
                className="group flex items-center justify-between rounded-xl border bg-white p-6 transition-all hover:shadow-lg"
                style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}
              >
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    Imago Facilitation
                  </h3>
                  <p className="mt-2" style={{ color: 'rgb(143, 154, 174)' }}>
                    Relationship-focused financial counseling for couples and partners.
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
                href="/services/virtual-cfo"
                className="group flex items-center justify-between rounded-xl border bg-white p-6 transition-all hover:shadow-lg"
                style={{ borderColor: 'rgba(143, 154, 174, 0.3)' }}
              >
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'rgb(0, 23, 63)' }}
                  >
                    Virtual CFO Services
                  </h3>
                  <p className="mt-2" style={{ color: 'rgb(143, 154, 174)' }}>
                    Strategic financial advisory without the full-time executive cost.
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
                Ready to Transform Your Financial Life?
              </h2>
              <p
                className="mx-auto mt-4 max-w-2xl text-lg"
                style={{ color: 'rgb(152, 176, 217)' }}
              >
                Schedule a free consultation to begin your journey toward financial
                security and prosperity.
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
