"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-section bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[700px] lg:h-[800px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Aurelia Developments"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-24 h-[1px] bg-bronze mb-8"></div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-off-white mb-8 leading-tight">
              About Aurelia
            </h2>
            <div className="space-y-6 text-warm-gray leading-relaxed text-lg">
              <p>
                Aurelia Developments is a premier real estate developer
                specializing in luxury residential towers and commercial
                developments in the world's most prestigious locations.
              </p>
              <p>
                With a portfolio spanning Dubai, London, New York, and Singapore,
                we have established ourselves as a leader in creating
                architectural landmarks that define luxury living.
              </p>
              <p>
                Our approach combines visionary design, exceptional craftsmanship,
                and unwavering attention to detail. Each development is conceived
                as a landmark, designed to stand the test of time while providing
                residents and investors with unparalleled quality and value.
              </p>
              <p>
                We work with the world's most renowned architects, interior
                designers, and craftspeople to create spaces that are both
                beautiful and functional, luxurious yet livable.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
