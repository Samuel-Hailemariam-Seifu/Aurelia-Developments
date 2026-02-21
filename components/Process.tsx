"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Vision",
    description: "Conceptualizing landmark developments that define luxury living.",
  },
  {
    number: "02",
    title: "Design",
    description: "Collaborating with world-renowned architects and designers.",
  },
  {
    number: "03",
    title: "Development",
    description: "Executing with precision, quality, and attention to detail.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Handing over exceptional properties that exceed expectations.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-section bg-charcoal border-t border-bronze/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-off-white mb-6">
            Our Process
          </h2>
          <div className="w-24 h-[1px] bg-bronze mx-auto mb-6"></div>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-[1px] bg-bronze/20"></div>

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-bronze rounded-full border-4 border-charcoal z-10"></div>

                  <div className="pt-16 text-center">
                    <div className="text-6xl font-serif font-bold text-bronze/30 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-off-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-bronze rounded-full flex items-center justify-center text-charcoal font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-serif font-semibold text-off-white mb-3">
                  {step.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
