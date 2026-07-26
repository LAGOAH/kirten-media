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

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Simple variants with NO transition
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
    },
  };

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <Section className="relative bg-black text-white overflow-hidden min-h-[40vh] flex items-center justify-center border-b border-white/5">
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
            <Heading as="h1" size="5xl" className="mb-4 font-black tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">Journey</span>
            </Heading>
            <Text variant="lead" className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Every milestone tells a story of impact, growth, and legacy.
            </Text>
          </motion.div>
        </div>
      </Section>

      {/* Timeline Section — No Images */}
      <Section className="bg-black text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
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
              {/* Year Badge */}
              <motion.div
                className="md:w-24 flex-shrink-0 text-center"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 font-mono text-sm font-bold shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-500">
                  {milestone.year}
                </div>
              </motion.div>

              {/* Content Card — No Image */}
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
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyan-400/20 group-hover:w-12 group-hover:bg-cyan-400/60 transition-all duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
