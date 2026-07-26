"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function Promise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const sealRotate = useTransform(scrollYProgress, [0, 0.5], [0, 360]);

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
          Our Promise • 09
        </motion.div>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-8" />
          <Heading as="h2" size="4xl" className="mb-4 font-black tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Promise</span>
          </Heading>
        </motion.div>

        {/* Promise Seal / Badge (centerpiece) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            {/* Outer ring - rotating */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-amber-400/30"
            />
            {/* Inner ring - rotating opposite */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-amber-400/10"
            />

            {/* Center Seal */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-32 h-32 rounded-full border-2 border-amber-400/40 bg-gradient-to-br from-amber-500/10 to-transparent backdrop-blur-md flex items-center justify-center shadow-[0_0_60px_rgba(251,191,36,0.1)]"
            >
              <div className="text-center">
                <div className="text-3xl mb-1">✦</div>
                <div className="text-[10px] font-mono text-amber-400/80 tracking-widest">SEAL OF</div>
                <div className="text-xs font-bold text-amber-300 tracking-wider">PROMISE</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Promise Text with Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
            },
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <Text variant="lead" className="text-neutral-200 text-lg md:text-xl font-light leading-relaxed mb-6">
              We promise to approach every project with <span className="text-amber-300 font-medium">integrity</span>, <span className="text-cyan-300 font-medium">creativity</span>, and <span className="text-amber-300 font-medium">excellence</span>.
            </Text>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <Text variant="body" className="text-neutral-400 text-base leading-relaxed">
              Beyond delivering exceptional visuals, we are committed to understanding your vision,
              communicating your impact, and helping your story create lasting value for generations to come.
            </Text>
          </motion.div>

          {/* Tagline */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="mt-8 pt-8 border-t border-white/5"
          >
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-[0.3em]">
              Communicating Impact • Preserving Legacy • Inspiring Action
            </p>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  );
}
