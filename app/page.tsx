import {
  Navigation,
  Hero,
  About,
  Services,
  WhyChooseUs,
  TrustBadges,
  FinancialCoaching,
  Resources,
  FAQ,
  CTA,
  Contact,
  Footer,
  StickyCTA,
  ExitIntentPopup,
} from '@/components/clearvue';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <TrustBadges />
        <FinancialCoaching />
        <Resources />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <ExitIntentPopup />
    </>
  );
}
