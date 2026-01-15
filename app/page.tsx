import {
  Navigation,
  Hero,
  About,
  Services,
  WhyChooseUs,
  FinancialCoaching,
  Resources,
  FAQ,
  CTA,
  Contact,
  Footer,
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
        <FinancialCoaching />
        <Resources />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
