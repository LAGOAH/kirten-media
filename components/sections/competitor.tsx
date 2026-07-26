"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const competitorPoints = [
  "Focuses purely on standard video production",
  "Delivers basic video files without strategy",
  "Covers events passively without narrative flow",
  "Operates on transactional, one-off jobs",
  "Measures success strictly by completion",
];

const kirtenPoints = [
  "Solves strategic communication challenges via visual storytelling",
  "Delivers high-value institutional assets with lasting impact",
  "Documents institutional history and preserves brand legacy",
  "Builds long-term advisory partnerships with clients",
  "Measures success by public trust, reach, and audience action",
];

export default function Competitor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <Section className="relative bg-black text-white overflow-hidden py-32 md:py-44 border-t border-white/5 select-none">

      {/* Background Lens Effects */}
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

        {/* Cyan Flare */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.18, 0.08],
            x: ["-15%", "10%", "-15%"],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]"
        />

        {/* Amber Flare */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.14, 0.06],
            x: ["10%", "-10%", "10%"],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-amber-500/12 rounded-full blur-[160px]"
        />

        {/* Rotating Rings */}
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

      {/* Floating Badge */}
      <div className="absolute top-10 right-10 z-10 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full border border-white/10 bg-neutral-900/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-2 shadow-2xl"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Why Kirten • 06
        </motion.div>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8" />
          <Heading as="h2" size="4xl" className="mb-4 font-black tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">Difference</span>
          </Heading>
          <Text variant="lead" className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-normal">
            We don't just produce videos. We solve communication challenges.
          </Text>
        </motion.div>

        {/* VS Battle Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Competitor Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="lg:col-span-1"
          >
            <div className="h-full p-8 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm hover:border-red-500/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="text-xs font-mono text-red-400/60 mb-4 tracking-widest">TRADITIONAL</div>
              <Heading as="h3" size="lg" className="text-neutral-400 mb-6">
                Agencies
              </Heading>
              <ul className="space-y-4">
                {competitorPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-400">
                    <span className="text-red-400/60 mt-0.5">✕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* VS Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center lg:col-span-1"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-cyan-400/30 bg-cyan-500/10 flex items-center justify-center text-2xl font-black text-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                VS
              </div>
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping" />
            </div>
          </motion.div>

          {/* Kirten Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="lg:col-span-1"
          >
            <div className="h-full p-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 group relative overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.05)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="text-xs font-mono text-cyan-400/60 mb-4 tracking-widest">KIRTEN MEDIA</div>
              <Heading as="h3" size="lg" className="text-white mb-6">
                Strategic Partner
              </Heading>
              <ul className="space-y-4">
                {kirtenPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-200 group-hover:text-neutral-100 transition-colors">
                    <span className="text-cyan-400/80 mt-0.5">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {/* Glowing bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyan-400/40 group-hover:w-16 group-hover:bg-cyan-400/80 transition-all duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
