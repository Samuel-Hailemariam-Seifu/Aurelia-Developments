"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-bronze/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-semibold text-off-white tracking-wide">
              AURELIA
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="/developments"
              className="text-sm text-warm-gray hover:text-off-white transition-colors relative group"
            >
              Developments
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-bronze group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-sm text-warm-gray hover:text-off-white transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-bronze group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#process"
              className="text-sm text-warm-gray hover:text-off-white transition-colors relative group"
            >
              Process
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-bronze group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-sm text-warm-gray hover:text-off-white transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-bronze group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-bronze text-charcoal text-sm font-medium hover:bg-bronze/90 transition-all duration-300"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-off-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
