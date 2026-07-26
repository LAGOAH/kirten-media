"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const pulseScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <Section className="relative bg-black text-white overflow-hidden py-32 md:py-44 border-t border-white/5 select-none">

      {/* Background Lens Effects with Pulsing Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm opacity-[0.04]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1600&q=80')",
            }}
          />
        </motion.div>

        {/* Pulsing Central Glow */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 via-amber-500/20 to-cyan-500/20 rounded-full blur-[180px]"
        />

        {/* Cyan Lens Flare */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.18, 0.08],
            x: ["-15%", "10%", "-15%"],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]"
        />

        {/* Amber Lens Flare */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.14, 0.06],
            x: ["10%", "-10%", "10%"],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-amber-500/12 rounded-full blur-[160px]"
        />

        {/* Rotating Aperture Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-dashed border-white/10 opacity-30 pointer-events-none"
        />

        {/* Inner Reverse Rotating Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/5 opacity-40 pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_12px_#22d3ee] animate-pulse" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400/60 shadow-[0_0_12px_#fbbf24] animate-pulse" />
        </motion.div>
      </div>

      {/* Floating Badge */}
      <div className="absolute top-10 right-10 z-10 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full border border-white/10 bg-neutral-900/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-2 shadow-2xl"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Final Chapter • 10
        </motion.div>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Animated Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8"
          />

          {/* Pulsing Scale Container */}
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heading level="h2" size="5xl" className="mb-4 font-black tracking-tight leading-tight">
              Ready to Tell Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-amber-200 to-cyan-200">Story?</span>
            </Heading>
          </motion.div>

          <Text variant="lead" className="text-neutral-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light mb-8">
            Let's create compelling visual stories that communicate your impact, preserve your legacy, and inspire action.
          </Text>

          {/* Magnetic Glow Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="https://wa.me/2348137228977?text=Hello%20Kirten%20Media%2C%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer">
                <button className="relative group overflow-hidden px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-amber-400 text-black font-bold text-base transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.5)]">
                  <span className="relative z-10">Book a Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/start-your-story">
                <button className="px-10 py-5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white font-semibold hover:border-white/60 hover:bg-white/10 transition-all duration-300">
                  Start Your Story
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 pt-10 border-t border-white/5"
          >
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-[0.4em]">
              Communicating Impact · Preserving Legacy · Inspiring Action
            </p>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  );
}
