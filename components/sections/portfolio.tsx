"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const milestones = [
  {
    year: "2022",
    title: "Kirten Media Founded",
    description: "Established with a clear mission — to tell stories that matter through purposeful visual storytelling.",
  },
  {
    year: "2023",
    title: "Governor Agbu Kefas — Free Wi-Fi Initiative",
    description: "Produced a documentary showcasing the impact of digital inclusion in Taraba State.",
  },
  {
    year: "2023",
    title: "Kuteb Awareness Network",
    description: "Documented the history, heritage, and identity of the Kuteb people through cinematic productions.",
  },
  {
    year: "2024",
    title: "Strategic Partnerships",
    description: "Partnered with Eloheem Mission Academy, Ladies Alive, Zeta Autos, Habbis Shawarma, and Manasseh Turkur.",
  },
  {
    year: "2024",
    title: "World-Class Recognition",
    description: "Received widespread positive feedback and sparked meaningful conversations within and beyond Taraba State.",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for background glow (translation)
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const cardVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -80 : 80,
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 25,
        delay: 0.15,
      },
    },
  };

  return (
    <Section className="relative bg-black text-white overflow-hidden py-32 md:py-44 border-t border-white/5 select-none">
      {/* Background Lens Effects with translation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm opacity-[0.04]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1600&q=80')",
            }}
          />
        </motion.div>

        {/* Cyan Lens Flare with translation */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -40]) }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.18, 0.08],
            x: ["-15%", "10%", "-15%"],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]"
        />

        {/* Amber Lens Flare with translation */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 40]) }}
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
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/5 opacity-40 pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_12px_#22d3ee] animate-pulse" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400/60 shadow-[0_0_12px_#fbbf24] animate-pulse" />
        </motion.div>

        {/* Sparkle particles (tiny floating dots) */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
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
          Our Journey • 04
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
          <Heading level="h2" size="4xl" className="mb-4 font-black tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">Journey</span>
          </Heading>
          <Text variant="lead" className="text-neutral-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-normal">
            Every milestone tells a story of impact, growth, and legacy.
          </Text>
        </motion.div>

        <div className="space-y-6">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              className={`flex flex-col md:flex-row gap-4 items-center ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Year Badge with glow */}
              <motion.div
                className="md:w-24 flex-shrink-0 text-center"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 font-mono text-sm font-bold shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-500">
                  {milestone.year}
                </div>
              </motion.div>

              {/* Content Card with hover glow */}
              <motion.div
                className="flex-1 p-6 rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] group"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                  {milestone.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {milestone.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
