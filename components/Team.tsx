"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ronak Ganava",
    role: "CEO & Founder",
    image: "/ceo.jpg",
    description:
      "He is the founder and CEO of Sparshtech. He has a passion for technology and a talent for innovation. He is a true leader and a role model for many.",
    linkedin: "",
  },
  {
    name: "Pratham Darji",
    role: "CTO",
    image: "/cto.jpg",
    description:
      "He is the CTO of Sparshtech. He has a passion for technology and a talent for innovation. He is a true leader and a role model for many.",
    linkedin: "https://www.linkedin.com/in/pratham-darji-b704092a2/",
  },
  {
    name: "Aryan Patel",
    role: "COO",
    image: "/coo.jpg",
    description:
      "He is the COO of Sparshtech. He has a passion for technology and a talent for innovation. He is a true leader and a role model for many.",
    linkedin: "",
  },
  {
    name: "Nevin",
    role: "Co-Founder",
    image: "/co-founder.jpg",
    description:
      "He is the Co-Founder of Sparshtech. He has a passion for technology and a talent for innovation. He is a true leader and a role model for many.",
    linkedin: "",
  },
  {
    name: "Sandesh Mandora",
    role: "BPM",
    image: "/bpm.jpg",
    description:
      "He is the BPM of Sparshtech. He has a passion for technology and a talent for innovation. He is a true leader and a role model for many.",
    linkedin: "",
  },
];

export default function Team() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 bg-linear-to-r from-primary via-accent to-primary bg-clip-text bg-size-200 animate-gradient-text">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate minds behind our innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center space-y-4">
                  <Skeleton className="h-48 w-48 rounded-full" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))
            : teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative h-full"
                >
                  <div className="absolute -inset-0.5 bg-linear-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur group-hover:animate-gradient-text bg-size-200" />
                  <div className="relative flex flex-col items-center bg-background p-6 pb-16 rounded-2xl shadow-sm group-hover:shadow-2xl border border-border h-full transition-all duration-300">
                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-70 blur transition-opacity duration-500" />
                      <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-secondary group-hover:border-transparent transition-colors duration-300 bg-background">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mb-4 px-3 py-1 rounded-full bg-secondary/50 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground text-center line-clamp-4 group-hover:text-foreground/80 transition-colors duration-300">
                      {member.description}
                    </p>

                    <div className="absolute bottom-4 right-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border text-muted-foreground hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
