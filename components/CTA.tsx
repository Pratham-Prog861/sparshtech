"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[250%_250%] animate-gradient-xy"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let&apos;s build something extraordinary together
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Ready to transform your digital presence? Our team is ready to bring
          your vision to life.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="h-14 px-8 text-lg font-semibold"
        >
          <Link href="/contact">
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
