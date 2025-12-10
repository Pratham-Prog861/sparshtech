import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Vision from "@/components/Vision";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SparshTech',
    url: 'https://sparshtech.in',
    logo: 'https://sparshtech.in/logo.png',
    description: 'Leading digital solutions provider in India. We build modern websites, mobile apps, custom software, and AI-powered chatbots that empower businesses to grow.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://twitter.com/sparshtech',
      'https://linkedin.com/company/sparshtech',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Hindi'],
    },
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '4',
      offers: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Modern responsive websites built with latest technologies',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software Development',
            description: 'Tailored software solutions for business needs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Chatbot Development',
            description: 'Intelligent chatbots powered by artificial intelligence',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <AboutUs />
        <Process />
        <Vision />
        <Team />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
