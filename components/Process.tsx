"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code,
  TestTube,
  Rocket,
  Headset,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We analyze your requirements and understand your business goals.",
    gradient: "from-purple-500 to-pink-500",
    animationDelay: 0,
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "We create intuitive and beautiful UI/UX designs tailored to your brand.",
    gradient: "from-blue-500 to-cyan-500",
    animationDelay: 200,
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Our experts build robust and scalable solutions using modern tech.",
    gradient: "from-green-500 to-emerald-500",
    animationDelay: 400,
  },
  {
    icon: TestTube,
    title: "Testing",
    description:
      "Rigorous testing ensures your product is bug-free and reliable.",
    gradient: "from-yellow-500 to-orange-500",
    animationDelay: 600,
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "We deploy your product and ensure a smooth go-live experience.",
    gradient: "from-red-500 to-pink-500",
    animationDelay: 800,
  },
  {
    icon: Headset,
    title: "Support",
    description:
      "Continuous maintenance and support to keep your business running.",
    gradient: "from-indigo-500 to-purple-500",
    animationDelay: 1000,
  },
];

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-secondary/20 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Sparkles className="w-5 h-5 text-primary animate-spin-slow" />
            <span className="text-sm font-semibold text-primary">
              Our Workflow
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 bg-linear-to-r from-primary via-accent to-primary bg-clip-text bg-size-200 animate-gradient-text">
            Our Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A streamlined workflow designed to deliver excellence from concept
            to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  group relative overflow-hidden rounded-xl bg-background border border-border
                  shadow-sm hover:shadow-xl transition-all duration-500
                  ${isVisible ? "animate-step-reveal" : "opacity-0"}
                `}
                style={{
                  animationDelay: `${step.animationDelay}ms`,
                }}
              >
                <div
                  className={`
                    absolute inset-0 bg-linear-to-br ${step.gradient} 
                    opacity-0 transition-opacity duration-500
                    animate-gradient-pulse
                  `}
                  style={{
                    animationDelay: `${step.animationDelay}ms`,
                  }}
                />

                <div
                  className="absolute inset-0 opacity-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                    animationDelay: `${step.animationDelay + 500}ms`,
                  }}
                />

                <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 rounded-xl bg-linear-to-r ${step.gradient} blur-xl opacity-30`}
                  />
                </div>

                <div className="relative p-8 h-full flex flex-col">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div
                      className={`
                        inline-flex h-12 w-12 items-center justify-center rounded-lg
                        bg-linear-to-br ${step.gradient}
                        transition-transform duration-300
                      `}
                      style={{
                        animationDelay: `${step.animationDelay}ms`,
                      }}
                    >
                      <Icon
                        className="h-6 w-6 text-white"
                        style={{
                          animationDelay: `${step.animationDelay + 300}ms`,
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground grow">
                    {step.description}
                  </p>

                  <div
                    className={`absolute top-10 right-10 w-2 h-2 bg-linear-to-r ${step.gradient} rounded-full animate-particle-float opacity-0`}
                    style={{ animationDelay: `${step.animationDelay}ms` }}
                  />
                  <div
                    className={`absolute bottom-10 left-10 w-2 h-2 bg-linear-to-r ${step.gradient} rounded-full animate-particle-float opacity-0`}
                    style={{
                      animationDelay: `${step.animationDelay + 500}ms`,
                    }}
                  />
                  <div
                    className={`absolute top-1/2 right-20 w-1 h-1 bg-linear-to-r ${step.gradient} rounded-full animate-particle-float opacity-0`}
                    style={{
                      animationDelay: `${step.animationDelay + 1000}ms`,
                    }}
                  />
                </div>

                <div
                  className={`
                    absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${step.gradient}
                    opacity-0
                  `}
                  style={{
                    animationDelay: `${step.animationDelay}ms`,
                  }}
                />

                <div
                  className={`absolute top-0 left-0 w-16 h-16 bg-linear-to-br ${step.gradient} opacity-0 blur-2xl transition-opacity duration-500`}
                />
                <div
                  className={`absolute bottom-0 right-0 w-16 h-16 bg-linear-to-tl ${step.gradient} opacity-0 blur-2xl transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-border to-transparent opacity-20 -z-10" />
      </div>
    </section>
  );
}
