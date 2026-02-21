"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Contact Us
            </h1>
            <div className="w-24 h-[1px] bg-bronze mx-auto mb-6"></div>
            <p className="text-xl text-warm-gray leading-relaxed">
              Begin your investment journey with Aurelia Developments. Schedule
              a consultation to explore our luxury developments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-section bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold text-off-white mb-8">
                Schedule Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-warm-gray mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bronze/20 bg-charcoal text-off-white focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-warm-gray mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bronze/20 bg-charcoal text-off-white focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-warm-gray mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bronze/20 bg-charcoal text-off-white focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-warm-gray mb-2"
                  >
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bronze/20 bg-charcoal text-off-white focus:outline-none focus:border-bronze transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="residential">Luxury Residential</option>
                    <option value="commercial">Commercial Development</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-warm-gray mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bronze/20 bg-charcoal text-off-white focus:outline-none focus:border-bronze transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-bronze text-charcoal text-lg font-medium hover:bg-bronze/90 transition-all duration-300"
                >
                  Submit Inquiry
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold text-off-white mb-8">
                Office Information
              </h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-bronze mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-off-white mb-2">
                      New York Office
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      123 Park Avenue
                      <br />
                      New York, NY 10017
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-bronze mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-off-white mb-2">
                      Phone
                    </h3>
                    <p className="text-warm-gray">
                      <a
                        href="tel:+12125550100"
                        className="hover:text-bronze transition-colors"
                      >
                        +1 (212) 555-0100
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-bronze mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-off-white mb-2">
                      Email
                    </h3>
                    <p className="text-warm-gray">
                      <a
                        href="mailto:info@aureliadevelopments.com"
                        className="hover:text-bronze transition-colors"
                      >
                        info@aureliadevelopments.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-bronze/10">
                <h3 className="text-xl font-serif font-semibold text-off-white mb-4">
                  Global Presence
                </h3>
                <div className="space-y-3 text-warm-gray">
                  <p>New York • London • Dubai • Singapore</p>
                  <p className="text-sm">
                    Our offices are located in the world's most prestigious
                    financial and cultural centers.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
