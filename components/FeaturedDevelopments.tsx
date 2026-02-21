"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const developments = [
  {
    id: 1,
    name: "The Residences at Aurelia",
    location: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    type: "Luxury Residential",
  },
  {
    id: 2,
    name: "Aurelia Tower",
    location: "London, Mayfair",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    type: "Commercial & Residential",
  },
  {
    id: 3,
    name: "Aurelia Heights",
    location: "New York, Manhattan",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    type: "Luxury Residential",
  },
  {
    id: 4,
    name: "Aurelia Plaza",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    type: "Mixed-Use Development",
  },
];

export default function FeaturedDevelopments() {
  return (
    <section id="developments" className="py-section bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-off-white mb-6">
            Featured Developments
          </h2>
          <div className="w-24 h-[1px] bg-bronze mx-auto mb-6"></div>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Iconic properties that define luxury living
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {developments.map((development, index) => (
            <motion.div
              key={development.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[600px] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0">
                <Image
                  src={development.image}
                  alt={development.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <div className="w-12 h-[1px] bg-bronze mb-4"></div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-off-white mb-2">
                  {development.name}
                </h3>
                <p className="text-warm-gray mb-2">{development.location}</p>
                <p className="text-sm text-bronze uppercase tracking-wider">
                  {development.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
