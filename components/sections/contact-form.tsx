"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function ContactForm() {
  return (
    <Section className="relative bg-black text-white py-32 md:py-44 border-t border-white/5 select-none">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8" />
          <Heading as="h2" size="4xl" className="mb-4 font-black tracking-tight">
            Shoot Us a <span className="text-white">Note</span>
          </Heading>
          <Text variant="lead" className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-normal">
            We'd love to hear about your project. Send us a message and we'll get back to you within 24 hours.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-neutral-900/80 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-neutral-900/80 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                Tell Us About Your Project
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-neutral-900/80 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Tell us about your vision, goals, and how we can help..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
