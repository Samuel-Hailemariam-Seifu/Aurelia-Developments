"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Aurelia Developments has redefined luxury living. The attention to detail and quality of craftsmanship is unparalleled.",
    author: "Resident",
    location: "The Residences at Aurelia",
  },
  {
    quote:
      "Investing with Aurelia was one of the best decisions we've made. The returns and quality have exceeded all expectations.",
    author: "Investor",
    location: "Aurelia Tower, London",
  },
  {
    quote:
      "Working with Aurelia Developments has been exceptional. Their vision and execution are truly world-class.",
    author: "Partner",
    location: "Architecture Firm",
  },
];

export default function Testimonials() {
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
            Testimonials
          </h2>
          <div className="w-24 h-[1px] bg-bronze mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-8xl font-serif text-bronze/20 absolute -top-4 -left-2 leading-none">
                "
              </div>
              <div className="relative pt-8">
                <p className="text-xl text-warm-gray leading-relaxed mb-8">
                  {testimonial.quote}
                </p>
                <div className="w-12 h-[1px] bg-bronze/30 mb-4"></div>
                <div>
                  <p className="text-sm font-medium text-off-white mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-warm-gray">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
