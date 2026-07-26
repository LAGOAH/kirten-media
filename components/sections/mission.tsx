"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerGroup = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <Section className="relative bg-black text-white overflow-hidden py-32 md:py-44 border-t border-white/5 select-none">

      {/* BACKGROUND — Lens Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm opacity-[0.04]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: ["-10%", "5%", "-10%"],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            x: ["10%", "-5%", "10%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[160px]"
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_12px_#22d3ee]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400/60 shadow-[0_0_12px_#fbbf24]" />
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
          Our Foundation • 02
        </motion.div>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerGroup}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8"
          />
          <motion.div variants={fadeInUp}>
            <Heading level="h2" size="4xl" className="mb-4 font-black tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">Foundation</span>
            </Heading>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Text variant="lead" className="text-neutral-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-normal">
              The vision, mission, and values that guide Kirten Media.
            </Text>
          </motion.div>
        </motion.div>

        {/* 3 Cards — Explicitly visible with backgrounds */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerGroup}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Vision Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative p-8 rounded-2xl border border-white/20 bg-neutral-800/80 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 h-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="text-xs font-mono text-cyan-400/80 mb-4 tracking-widest">01</div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-100 transition-colors">
              Vision
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
              To become Africa's leading strategic visual storytelling company, helping institutions, organizations, and brands communicate their impact, preserve their legacy, and inspire meaningful change.
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyan-400/40 group-hover:w-12 group-hover:bg-cyan-400/80 transition-all duration-500" />
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative p-8 rounded-2xl border border-white/20 bg-neutral-800/80 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 h-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="text-xs font-mono text-cyan-400/80 mb-4 tracking-widest">02</div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-100 transition-colors">
              Mission
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
              To create purposeful visual stories that strengthen trust, elevate brands, preserve history, and inspire action through creativity, innovation, and excellence.
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyan-400/40 group-hover:w-12 group-hover:bg-cyan-400/80 transition-all duration-500" />
          </motion.div>

          {/* Values Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative p-8 rounded-2xl border border-white/20 bg-neutral-800/80 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 h-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="text-xs font-mono text-cyan-400/80 mb-4 tracking-widest">03</div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-100 transition-colors">
              Values
            </h3>
            <ul className="space-y-2 text-sm text-neutral-300 group-hover:text-neutral-200 transition-colors">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400/80">◆</span> Integrity
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400/80">◆</span> Excellence
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400/80">◆</span> Creativity
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400/80">◆</span> Purpose
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400/80">◆</span> Partnership
              </li>
            </ul>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyan-400/40 group-hover:w-12 group-hover:bg-cyan-400/80 transition-all duration-500" />
          </motion.div>
        </motion.div>

      </div>
    </Section>
  );
}
