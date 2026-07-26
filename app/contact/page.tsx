"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const contactMethods = [
    {
      icon: "✉️",
      title: "Email",
      value: "info@kirtenmedia.com",
      link: "mailto:info@kirtenmedia.com",
      description: "We respond within 24 hours",
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+234-813-722-8977",
      link: "tel:+2348137228977",
      description: "Available 9AM - 6PM (WAT)",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "Message us",
      link: "https://wa.me/2348137228977?text=Hello%20Kirten%20Media%2C%20I%20would%20like%20to%20connect.",
      description: "Quick responses",
    },
    {
      icon: "🌐",
      title: "Website",
      value: "www.kirtenmedia.com",
      link: "https://www.kirtenmedia.com",
      description: "Explore our work",
    },
  ];

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <Section className="relative bg-black text-white overflow-hidden min-h-[45vh] flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div style={{ y: bgY }} className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1600&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.06, 0.12, 0.06],
              x: ["-10%", "5%", "-10%"],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.06, 0.14, 0.06],
              x: ["10%", "-10%", "10%"],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-amber-500/12 rounded-full blur-[160px]"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-dashed border-white/10 opacity-30 pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/5 opacity-40 pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_12px_#22d3ee] animate-pulse" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400/60 shadow-[0_0_12px_#fbbf24] animate-pulse" />
          </motion.div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8" />
            <Heading level="h1" size="5xl" className="mb-4 font-black tracking-tight">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">Connect</span>
            </Heading>
            <Text variant="lead" className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              We'd love to hear from you. Reach out and let's create something extraordinary together.
            </Text>
          </motion.div>
        </div>
      </Section>

      {/* Contact Cards Grid */}
      <Section className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : "_self"}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : ""}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-500 text-center block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-base font-medium text-cyan-400/90 mb-1">
                  {method.value}
                </p>
                
                <p className="text-xs text-neutral-500">
                  {method.description}
                </p>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyan-400/20 group-hover:w-12 group-hover:bg-cyan-400/60 transition-all duration-500" />
              </motion.a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 rounded-2xl border border-amber-400/20 bg-amber-500/5 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-500">
              <p className="text-sm text-neutral-400 mb-3">
                Prefer a quick conversation?
              </p>
              <a
                href="https://wa.me/2348137228977?text=Hello%20Kirten%20Media%2C%20I%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-amber-500/20 border border-cyan-400/30 text-white font-semibold hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-300"
              >
                <span className="text-2xl">💬</span>
                Chat with us on WhatsApp
                <span className="text-xs text-neutral-400">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
