"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <motion.div
          className={cn(
            "absolute inset-0",
            "bg-size-[20px_20px]",
            "bg-[radial-gradient(#6366f1_1px,transparent_1px)]",
            "dark:bg-[radial-gradient(#818cf8_1px,transparent_1px)]"
          )}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-background mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px] animate-pulse"></div>
        <div
          className="absolute left-1/4 top-1/4 -z-10 h-[200px] w-[200px] rounded-full bg-purple-500/10 opacity-20 blur-[80px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute right-1/4 bottom-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-blue-500/10 opacity-20 blur-[90px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Animated Brand Name with Gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium bg-linear-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Welcome to the Future
            </span>
          </div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-linear-to-r from-purple-600 via-white/20 to-purple-600 bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient-shift">
              SparshTech
            </span>
            <motion.div
              className="absolute -inset-1 bg-linear-to-r from-purple-600/20 via-white/20 to-purple-600/20 blur-2xl -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h1>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            <span className="text-foreground">We build </span>
            <span className="relative inline-block group">
              <span className="text-purple-800 dark:text-purple-400 group-hover:text-purple-500 transition-colors">
                modern websites
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-purple-800 via-blue-800 to-purple-800 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
            <span className="text-foreground">, </span>
            <br className="hidden md:block" />
            <span className="text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors">
              mobile apps
            </span>
            <span className="text-foreground">, and </span>
            <span className="text-purple-800 dark:text-purple-400 hover:text-purple-500 transition-colors">
              intelligent chatbots
            </span>
            <span className="text-foreground">.</span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Empowering businesses to grow with{" "}
            <span className="text-foreground font-semibold">
              cutting-edge technology
            </span>{" "}
            and{" "}
            <span className="text-foreground font-semibold">
              premium design
            </span>
            .
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="h-14 px-10 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-10 text-lg font-semibold border-2 hover:bg-primary/5"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
}
