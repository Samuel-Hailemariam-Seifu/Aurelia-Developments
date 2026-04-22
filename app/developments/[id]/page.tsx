"use client";

import { use } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Building2, Calendar } from "lucide-react";

const developments: Record<string, any> = {
  "1": {
    name: "The Residences at Aurelia",
    location: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    type: "Luxury Residential",
    status: "Completed",
    units: "120",
    year: "2023",
    description:
      "The Residences at Aurelia represents the pinnacle of waterfront luxury living in Dubai Marina. This exclusive development features 120 meticulously designed residences, each offering panoramic views of the marina and Arabian Gulf.",
    features: [
      "Panoramic marina and sea views",
      "Private beach access",
      "World-class amenities",
      "24/7 concierge service",
      "Infinity pool and spa",
      "Fine dining restaurants",
    ],
    specifications: {
      "Residence Types": "1-4 bedroom apartments, penthouses",
      "Total Units": "120",
      "Completion": "2023",
      "Architect": "Foster + Partners",
      "Interior Design": "Kelly Hoppen",
    },
  },
  "2": {
    name: "Aurelia Tower",
    location: "London, Mayfair",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    type: "Commercial & Residential",
    status: "Under Construction",
    units: "85",
    year: "2025",
    description:
      "Aurelia Tower is an iconic mixed-use development in the heart of Mayfair, combining luxury residential units with premium commercial spaces. This landmark building redefines urban living in one of London's most prestigious neighborhoods.",
    features: [
      "Prime Mayfair location",
      "Mixed-use development",
      "Premium commercial spaces",
      "Luxury residential units",
      "Private members' club",
      "Rooftop gardens",
    ],
    specifications: {
      "Residence Types": "2-5 bedroom apartments, penthouses",
      "Total Units": "85 residential, 20 commercial",
      "Completion": "2025",
      "Architect": "Zaha Hadid Architects",
      "Interior Design": "David Collins Studio",
    },
  },
  "3": {
    name: "Aurelia Heights",
    location: "New York, Manhattan",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    type: "Luxury Residential",
    status: "Completed",
    units: "200",
    year: "2022",
    description:
      "Aurelia Heights offers ultra-luxury condominiums with breathtaking Central Park views. This prestigious development sets a new standard for residential living in Manhattan, combining architectural excellence with unparalleled amenities.",
    features: [
      "Central Park views",
      "Private elevator access",
      "Wine cellar and tasting room",
      "State-of-the-art fitness center",
      "Children's playroom",
      "Pet spa and grooming",
    ],
    specifications: {
      "Residence Types": "2-6 bedroom condominiums, penthouses",
      "Total Units": "200",
      "Completion": "2022",
      "Architect": "Robert A.M. Stern Architects",
      "Interior Design": "Pierre Yovanovitch",
    },
  },
  "4": {
    name: "Aurelia Plaza",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    type: "Mixed-Use Development",
    status: "Planning",
    units: "150",
    year: "2026",
    description:
      "Aurelia Plaza is a premier mixed-use development in Singapore's financial district, combining luxury residences, premium retail, and world-class office spaces in a single iconic structure.",
    features: [
      "Financial district location",
      "Integrated retail spaces",
      "Premium office suites",
      "Sky gardens",
      "Direct MRT access",
      "Sustainable design",
    ],
    specifications: {
      "Residence Types": "1-4 bedroom apartments",
      "Total Units": "150 residential, 50 commercial",
      "Completion": "2026",
      "Architect": "SOM",
      "Interior Design": "TBD",
    },
  },
  "5": {
    name: "Aurelia Bay",
    location: "Dubai, Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    type: "Luxury Residential",
    status: "Under Construction",
    units: "95",
    year: "2025",
    description:
      "Aurelia Bay is an exclusive beachfront development on Palm Jumeirah, designed for residents seeking privacy, uninterrupted sea views, and resort-level amenities in one of Dubai's most sought-after waterfront addresses.",
    features: [
      "Direct beachfront access",
      "Private resident lounges",
      "Infinity pool overlooking the Gulf",
      "Dedicated wellness and spa facilities",
      "Yacht concierge services",
      "Secure private parking",
    ],
    specifications: {
      "Residence Types": "2-5 bedroom apartments, penthouses",
      "Total Units": "95",
      "Completion": "2025",
      "Architect": "KPF",
      "Interior Design": "Yabu Pushelberg",
    },
  },
  "6": {
    name: "Aurelia Gardens",
    location: "London, Kensington",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    type: "Luxury Residential",
    status: "Completed",
    units: "60",
    year: "2024",
    description:
      "Aurelia Gardens is a boutique collection of refined residences in Kensington, blending classic London architecture with contemporary interiors and curated services for modern urban living.",
    features: [
      "Boutique low-density community",
      "Landscaped private gardens",
      "24/7 concierge and security",
      "Private wellness suite",
      "Residents' business lounge",
      "Smart home integration",
    ],
    specifications: {
      "Residence Types": "2-4 bedroom residences, duplexes",
      "Total Units": "60",
      "Completion": "2024",
      "Architect": "Allies and Morrison",
      "Interior Design": "Studio Ashby",
    },
  },
};

export default function DevelopmentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const development = developments[id];

  if (!development) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center bg-charcoal">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-off-white mb-4">
              Development Not Found
            </h1>
            <Link
              href="/developments"
              className="text-bronze hover:text-bronze/80 transition-colors"
            >
              Return to Developments
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero Image */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={development.image}
          alt={development.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-10">
          <Link
            href="/developments"
            className="inline-flex items-center text-bronze hover:text-bronze/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Developments
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-[1px] bg-bronze mb-4"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-off-white mb-4">
              {development.name}
            </h1>
            <div className="flex items-center text-warm-gray mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              {development.location}
            </div>
            <span className="inline-block px-4 py-2 bg-bronze text-charcoal text-sm font-medium uppercase tracking-wider">
              {development.status}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-section bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-serif font-bold text-off-white mb-6">
                  Overview
                </h2>
                <p className="text-lg text-warm-gray leading-relaxed mb-8">
                  {development.description}
                </p>

                <h3 className="text-3xl font-serif font-bold text-off-white mb-6 mt-12">
                  Features & Amenities
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {development.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-bronze rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-warm-gray">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-charcoal border border-bronze/20 p-8"
              >
                <h3 className="text-2xl font-serif font-bold text-off-white mb-8">
                  Specifications
                </h3>
                <div className="space-y-6">
                  {Object.entries(development.specifications).map(
                    ([key, value]) => (
                      <div key={key}>
                        <div className="text-sm text-bronze uppercase tracking-wider mb-2">
                          {key}
                        </div>
                        <div className="text-warm-gray">{value as string}</div>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-12 pt-8 border-t border-bronze/20">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-4 bg-bronze text-charcoal font-medium hover:bg-bronze/90 transition-all duration-300"
                  >
                    Schedule Viewing
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
