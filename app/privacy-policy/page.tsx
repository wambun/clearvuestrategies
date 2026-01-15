import { Metadata } from 'next';
import { PageLayout } from '@/components/clearvue/layout';
import { PageHero } from '@/components/clearvue/ui/PageHero';
import { Container } from '@/components/clearvue/ui/Container';
import { AnimatedSection } from '@/components/clearvue/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Privacy Policy | ClearVue Strategies',
  description: 'Privacy policy for ClearVue Strategies P.C. Learn how we protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <PageHero
        title="Privacy Policy"
        subtitle="Legal"
        description="How we protect and handle your personal information."
        breadcrumbs={[
          { label: 'Privacy Policy', href: '/privacy-policy' },
        ]}
      />

      <section className="py-20" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <Container>
          <AnimatedSection>
            <div className="prose prose-lg mx-auto max-w-3xl">
              <h2 style={{ color: 'rgb(0, 23, 63)' }}>Phone Number Protection</h2>
              <p style={{ color: 'rgb(143, 154, 174)' }}>
                We do not sell your phone number to third parties. Third-party services
                like Zoom Phone may facilitate text messaging under confidentiality agreements.
              </p>

              <h2 style={{ color: 'rgb(0, 23, 63)' }}>Data Security</h2>
              <p style={{ color: 'rgb(143, 154, 174)' }}>
                ClearVue Strategies has instituted every possible precaution to keep client
                data and materials safe while under our control. We take the security of
                your information seriously and implement appropriate measures to protect it.
              </p>

              <h2 style={{ color: 'rgb(0, 23, 63)' }}>Communications</h2>
              <p style={{ color: 'rgb(143, 154, 174)' }}>
                Clients may receive email notifications about product upgrades or be asked
                about mailing list enrollment. An opt-out option is always available for
                marketing communications.
              </p>

              <h2 style={{ color: 'rgb(0, 23, 63)' }}>Non-Disclosure Policy</h2>
              <p style={{ color: 'rgb(143, 154, 174)' }}>
                We do not disclose, share, or sell any nonpublic personal information about
                our clients or former clients to anyone, except as permitted by law.
              </p>

              <h2 style={{ color: 'rgb(0, 23, 63)' }}>SMS Messaging Terms</h2>
              <p style={{ color: 'rgb(143, 154, 174)' }}>
                Text messages are not shared with third parties for marketing purposes.
                SMS is used for:
              </p>
              <ul style={{ color: 'rgb(143, 154, 174)' }}>
                <li>Appointment reminders</li>
                <li>Account notifications</li>
                <li>Marketing communications (with explicit consent)</li>
              </ul>
              <p style={{ color: 'rgb(143, 154, 174)' }}>
                By providing a phone number, you agree to receive SMS messages about
                scheduling, tax, and accounting updates from ClearVue Strategies P.C.
                You can opt out at any time by texting "STOP" to our SMS number: 1-714-587-2086.
              </p>

              <h2 style={{ color: 'rgb(0, 23, 63)' }}>Website Disclaimer</h2>
              <p style={{ color: 'rgb(143, 154, 174)' }}>
                This website provides information for informational purposes only and is
                not a substitute for professional tax or accounting advice. ClearVue
                Strategies does not warrant the accuracy or results from website content.
                Third-party website links are not the firm's responsibility.
              </p>

              <h2 style={{ color: 'rgb(0, 23, 63)' }}>Contact Us</h2>
              <p style={{ color: 'rgb(143, 154, 174)' }}>
                If you have questions about our privacy practices, please contact us:
              </p>
              <ul style={{ color: 'rgb(143, 154, 174)' }}>
                <li>Email: info@clearvuestrategies.net</li>
                <li>Phone: 1-714-587-2086</li>
                <li>Address: 15852 Plymouth Ln, Huntington Beach, CA 92647</li>
              </ul>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageLayout>
  );
}
