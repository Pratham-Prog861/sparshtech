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
    Title : "Frontend Development",
    language: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ]
  },
  {
    Title: "Backend Development",
    language: [
      "Node.js",
      "Express.js",
    ]
  },
  {
    Title : "Animation / Component Libray",
    language: [
      "Framer Motion",
      "Tailwind CSS",
      "Shadcn UI",
      "Aceternity UI"
    ]
  },
  {
    Title: "Database",
    language: [
      "MongoDB",
      "Firebase",
      "Supabase",
      "Neon"
    ]
  },
  {
    Title: "Version Control",
    language: [
      "Git",
      "GitHub",
    ]
  }
]

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
              className="bg-background p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
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
