import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Vision from "@/components/Vision";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <AboutUs />
      <Process />
      <Vision />
      <Team />
      <FAQ />
      <CTA />
    </main>
  );
}
