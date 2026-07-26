"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const pillars = [
  {
    num: "01",
    title: "Shape Perception",
    desc: "Transforming everyday milestones and achievements into high-impact visual narrative strategies.",
    glow: "from-cyan-500/10 via-blue-500/10 to-transparent",
  },
  {
    num: "02",
    title: "Preserve Legacy",
    desc: "Archiving critical history, institutional milestones, and brand heritage with documentary precision.",
    glow: "from-amber-500/10 via-rose-500/10 to-transparent",
  },
  {
    num: "03",
    title: "Inspire Action",
    desc: "Cultivating public trust and deep audience engagement through strategic, emotionally resonant media.",
    glow: "from-emerald-500/10 via-teal-500/10 to-transparent",
  },
];

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const staggerGroup = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <Section className="relative bg-black text-white overflow-hidden py-32 md:py-44 border-t border-white/5 select-none">
      
      {/* BACKGROUND LENS EFFECTS & ROTATING ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle base texture */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md opacity-[0.05]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        {/* 🎬 1. Anamorphic Lens Flare Colors (Cyan & Amber Lens Glows) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: ["-10%", "5%", "-10%"],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: ["10%", "-5%", "10%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[160px]"
        />

        {/* 🔄 2. Rotating Camera Lens Aperture Ring (Big & Slow) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-dashed border-white/10 opacity-30 pointer-events-none"
        />

        {/* 🔄 3. Inner Reverse Rotating Prism Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/5 opacity-40 pointer-events-none"
        >
          {/* Subtle Lens Notch Markings */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_12px_#22d3ee]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400/60 shadow-[0_0_12px_#fbbf24]" />
        </motion.div>
      </div>

      {/* Floating Studio Badge */}
      <div className="absolute top-10 right-10 z-10 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full border border-white/10 bg-neutral-900/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-2 shadow-2xl"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          Studio Overview • 01
        </motion.div>
      </div>

      {/* Main Narrative Content */}
      <div ref={containerRef} className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Header Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerGroup}
          className="text-center"
        >
          {/* Subtle Gradient Line */}
          <motion.div
            variants={fadeInUp}
            className="w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8"
          />

          <motion.div variants={fadeInUp}>
            <Heading as="h2" size="4xl" className="mb-6 font-black tracking-tight leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">
                Kirten Media.
              </span>
            </Heading>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Text variant="lead" className="text-neutral-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-normal">
              We are a strategic visual storytelling company that partners with institutions, organizations,
              brands, and visionary individuals to communicate ideas, preserve stories, strengthen public trust,
              and inspire meaningful action.
            </Text>
          </motion.div>

          {/* Lens Glass Quote Card */}
          <motion.div
            variants={fadeInUp}
            className="my-14 p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl max-w-2xl mx-auto relative overflow-hidden group shadow-2xl"
          >
            {/* Top Cyan Light Streak */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            
            <p className="text-base md:text-lg italic text-neutral-200 font-serif leading-relaxed">
              "How an organization is seen is often as important as what it does."
            </p>
          </motion.div>
        </motion.div>

        {/* 3 Pillar Cards with Colored Lens Glows */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerGroup}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-950/70 backdrop-blur-md hover:border-white/30 transition-all duration-500 overflow-hidden"
            >
              {/* Colored Lens Ambient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* Number Tag */}
              <div className="text-xs font-mono text-neutral-500 mb-4 tracking-widest flex items-center justify-between">
                <span>{pillar.num}</span>
                <span className="w-8 h-px bg-white/10 group-hover:bg-cyan-400/50 transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-100 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal group-hover:text-neutral-300 transition-colors">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}
