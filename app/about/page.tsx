"use client";

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";

const values = [
  {
    title: "Excellence",
    description:
      "We maintain the highest standards in design, construction, and service delivery.",
  },
  {
    title: "Innovation",
    description:
      "We embrace cutting-edge design and sustainable building practices.",
  },
  {
    title: "Integrity",
    description:
      "We conduct business with transparency, honesty, and ethical practices.",
  },
  {
    title: "Legacy",
    description:
      "We create developments that stand as landmarks for generations to come.",
  },
];

const milestones = [
  { year: "2015", event: "Aurelia Developments founded" },
  { year: "2017", event: "First development completed in Dubai" },
  { year: "2019", event: "Expansion to London and New York" },
  { year: "2022", event: "Aurelia Heights completed in Manhattan" },
  { year: "2023", event: "The Residences at Aurelia completed" },
  { year: "2025", event: "Aurelia Tower completion (projected)" },
];

export default function AboutPage() {
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
              About Aurelia
            </h1>
            <div className="w-24 h-[1px] bg-bronze mx-auto mb-6"></div>
            <p className="text-xl text-warm-gray leading-relaxed">
              Creating landmark developments that define luxury living in the
              world's most prestigious locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-section bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="w-24 h-[1px] bg-bronze mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-off-white mb-8 leading-tight">
                Our Story
              </h2>
              <div className="space-y-6 text-warm-gray leading-relaxed text-lg">
                <p>
                  Founded in 2015, Aurelia Developments has rapidly established
                  itself as a premier real estate developer specializing in
                  luxury residential towers and commercial developments in the
                  world's most prestigious locations.
                </p>
                <p>
                  With a portfolio spanning Dubai, London, New York, and
                  Singapore, we have created architectural landmarks that define
                  luxury living. Our approach combines visionary design,
                  exceptional craftsmanship, and unwavering attention to detail.
                </p>
                <p>
                  Each development is conceived as a landmark, designed to stand
                  the test of time while providing residents and investors with
                  unparalleled quality and value. We work with the world's most
                  renowned architects, interior designers, and craftspeople to
                  create spaces that are both beautiful and functional, luxurious
                  yet livable.
                </p>
                <p>
                  Our commitment to excellence has earned us recognition as one
                  of the industry's most trusted developers, with a track record
                  of delivering exceptional properties that exceed expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-section bg-charcoal border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-off-white mb-6">
              Our Values
            </h2>
            <div className="w-24 h-[1px] bg-bronze mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-12 h-[1px] bg-bronze mb-6"></div>
                <h3 className="text-2xl font-serif font-semibold text-off-white mb-4">
                  {value.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-section bg-charcoal border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-off-white mb-6">
              Our Journey
            </h2>
            <div className="w-24 h-[1px] bg-bronze mx-auto mb-6"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 text-3xl font-serif font-bold text-bronze">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="w-12 h-[1px] bg-bronze/30 mb-4"></div>
                    <p className="text-xl text-warm-gray">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
