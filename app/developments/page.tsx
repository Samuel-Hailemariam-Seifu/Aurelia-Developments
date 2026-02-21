"use client";

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";

const allDevelopments = [
  {
    id: 1,
    name: "The Residences at Aurelia",
    location: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    type: "Luxury Residential",
    status: "Completed",
    units: "120",
    description: "Luxury waterfront residences with panoramic marina views.",
  },
  {
    id: 2,
    name: "Aurelia Tower",
    location: "London, Mayfair",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    type: "Commercial & Residential",
    status: "Under Construction",
    units: "85",
    description: "Iconic mixed-use tower in the heart of Mayfair.",
  },
  {
    id: 3,
    name: "Aurelia Heights",
    location: "New York, Manhattan",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    type: "Luxury Residential",
    status: "Completed",
    units: "200",
    description: "Ultra-luxury condominiums with Central Park views.",
  },
  {
    id: 4,
    name: "Aurelia Plaza",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    type: "Mixed-Use Development",
    status: "Planning",
    units: "150",
    description: "Premier mixed-use development in Singapore's financial district.",
  },
  {
    id: 5,
    name: "Aurelia Bay",
    location: "Dubai, Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    type: "Luxury Residential",
    status: "Under Construction",
    units: "95",
    description: "Exclusive beachfront residences on Palm Jumeirah.",
  },
  {
    id: 6,
    name: "Aurelia Gardens",
    location: "London, Kensington",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    type: "Luxury Residential",
    status: "Completed",
    units: "60",
    description: "Boutique collection of luxury townhouses and apartments.",
  },
];

export default function DevelopmentsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-off-white mb-6">
              Our Developments
            </h1>
            <div className="w-24 h-[1px] bg-bronze mx-auto mb-6"></div>
            <p className="text-xl text-warm-gray leading-relaxed">
              Iconic properties that define luxury living in the world's most
              prestigious locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Developments Grid */}
      <section className="py-section bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDevelopments.map((development, index) => (
              <motion.div
                key={development.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/developments/${development.id}`}>
                  <div className="relative h-[500px] overflow-hidden mb-6">
                    <Image
                      src={development.image}
                      alt={development.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-bronze text-charcoal text-xs font-medium uppercase tracking-wider">
                        {development.status}
                      </span>
                    </div>
                  </div>
                  <div className="w-12 h-[1px] bg-bronze mb-4"></div>
                  <h3 className="text-2xl font-serif font-bold text-off-white mb-2">
                    {development.name}
                  </h3>
                  <p className="text-warm-gray mb-2">{development.location}</p>
                  <p className="text-sm text-bronze uppercase tracking-wider mb-3">
                    {development.type}
                  </p>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {development.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
