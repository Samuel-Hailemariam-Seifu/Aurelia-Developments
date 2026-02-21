"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "$2.8B+", label: "Total Development Value" },
  { number: "15+", label: "Completed Projects" },
  { number: "8", label: "Global Locations" },
  { number: "98%", label: "Occupancy Rate" },
];

export default function InvestmentHighlights() {
  return (
    <section className="py-section bg-charcoal border-t border-bronze/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-off-white mb-6">
            Investment Highlights
          </h2>
          <div className="w-24 h-[1px] bg-bronze mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-bronze mb-6">
                {stat.number}
              </div>
              <div className="w-16 h-[1px] bg-bronze/30 mx-auto mb-4"></div>
              <div className="text-lg text-warm-gray">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
