"use client";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Smartphone,
  Cpu,
  MessageSquare,
  Database,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks like Next.js and React. We focus on performance, SEO, and user experience.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "CMS Integration",
      "E-commerce Solutions",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. We create seamless mobile experiences that engage users.",
    features: [
      "iOS & Android",
      "React Native / Flutter",
      "App Store Submission",
      "Maintenance",
    ],
  },
  {
    icon: Cpu,
    title: "Custom Software",
    description:
      "Tailored software solutions to streamline your business operations. From CRM systems to inventory management, we build what you need.",
    features: [
      "Enterprise Software",
      "API Development",
      "Legacy Migration",
      "SaaS Development",
    ],
  },
  {
    icon: MessageSquare,
    title: "AI & Chatbots",
    description:
      "Intelligent chatbots and AI integrations to automate customer support and enhance user interaction.",
    features: [
      "NLP Integration",
      "Customer Support Bots",
      "Process Automation",
      "Data Analysis",
    ],
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Robust and scalable database architectures to handle your growing data needs securely and efficiently.",
    features: [
      "SQL & NoSQL",
      "Data Migration",
      "Performance Tuning",
      "Backup Solutions",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure setup and management to ensure your applications are always available and scalable.",
    features: [
      "AWS / Azure / GCP",
      "DevOps",
      "CI/CD Pipelines",
      "Serverless Architecture",
    ],
  },
];

const Tech = [
  {
    Title: "Frontend Development",
    language: [
      {
        name: "HTML",
        logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
      },
      {
        name: "CSS",
        logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "JavaScript",
        logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
      },
      {
        name: "TypeScript",
        logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "React",
        logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      },
      {
        name: "Next.js",
        logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
      },
    ],
  },
  {
    Title: "Backend Development",
    language: [
      {
        name: "Node.js",
        logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
      },
      {
        name: "Express.js",
        logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
      },
    ],
  },
  {
    Title: "Animation / Component Library",
    language: [
      {
        name: "Framer Motion",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Shadcn UI",
        logo: "https://ui.shadcn.com/favicon.ico",
      },
      {
        name: "Aceternity UI",
        logo: "https://ui.aceternity.com/logo.png",
      },
    ],
  },
  {
    Title: "Database",
    language: [
      {
        name: "MongoDB",
        logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
      },
      {
        name: "Firebase",
        logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "Supabase",
        logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
      },
    ],
  },
  {
    Title: "Version Control",
    language: [
      {
        name: "Git",
        logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      },
      {
        name: "GitHub",
        logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
      },
    ],
  },
  {
    Title: "Mobile Development",
    language: [
      {
        name: "React Native",
        logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      },
      {
        name: "Expo GO",
        logo: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and
            efficiency for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background p-8 rounded-xl border border-border shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/50"
            >
              <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 group-hover:scale-150 transition-transform duration-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust, scalable, and
              modern solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Tech.map((tech, index) => (
              <div
                key={index}
                className="group bg-background p-8 rounded-xl border border-border shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/50"
              >
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 group-hover:animate-pulse transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{tech.Title}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.language.map((lang, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-secondary/50 text-foreground rounded-lg border border-border/50 hover:bg-primary/20 hover:border-primary hover:shadow-md hover:shadow-primary/20 hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      <Image
                        src={lang.logo}
                        alt={lang.name}
                        width={16}
                        height={16}
                        className="h-4 w-4 object-contain group-hover:scale-110 transition-transform duration-200"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                        
                      />
                      {lang.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Contact us to discuss
            your specific requirements and how we can help.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
