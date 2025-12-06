"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Vision
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At SparshTech, we envision a digital landscape where technology
              seamlessly bridges the gap between businesses and their customers.
              We believe in creating solutions that are not just functional, but
              transformative.
            </p>
            <p>
              Our goal is to empower organizations of all sizes with the tools
              they need to thrive in an increasingly digital world. From
              intuitive user interfaces to complex backend systems, we strive
              for excellence in every line of code we write.
            </p>
            <p>
              We are committed to innovation, integrity, and building lasting
              partnerships. Your success is our success, and we are dedicated to
              helping you achieve your full potential through the power of
              technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
