"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-section bg-charcoal overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-off-white mb-8 leading-tight">
            Begin Your
            <br />
            Investment Journey
          </h2>
          <p className="text-xl text-warm-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover how Aurelia Developments can help you invest in landmark
            properties that define luxury living.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-bronze text-charcoal text-lg font-medium hover:bg-bronze/90 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
