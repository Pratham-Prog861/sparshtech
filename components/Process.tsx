"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, TestTube, Rocket, Headset } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We analyze your requirements and understand your business goals.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "We create intuitive and beautiful UI/UX designs tailored to your brand.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Our experts build robust and scalable solutions using modern tech.",
  },
  {
    icon: TestTube,
    title: "Testing",
    description:
      "Rigorous testing ensures your product is bug-free and reliable.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "We deploy your product and ensure a smooth go-live experience.",
  },
  {
    icon: Headset,
    title: "Support",
    description:
      "Continuous maintenance and support to keep your business running.",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A streamlined workflow designed to deliver excellence from concept
            to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-background p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
