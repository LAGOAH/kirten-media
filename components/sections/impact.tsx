"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const impacts = [
  {
    title: "Build Public Trust",
    description: "Establish credibility and authenticity through transparent, purpose-driven visual narratives.",
    icon: "🔒",
    progress: 98,
  },
  {
    title: "Strengthen Brand Reputation",
    description: "Elevate brand perception with high-production-value content that commands respect.",
    icon: "⭐",
    progress: 95,
  },
  {
    title: "Increase Visibility",
    description: "Expand reach and audience engagement through strategic multi-platform distribution.",
    icon: "👁️",
    progress: 92,
  },
  {
    title: "Preserve Institutional Memory",
    description: "Archive critical history, milestones, and achievements for future generations.",
    icon: "📜",
    progress: 96,
  },
  {
    title: "Inspire Stakeholder Engagement",
    description: "Deepen connections with stakeholders through emotionally resonant storytelling.",
    icon: "🤝",
    progress: 90,
  },
  {
    title: "Attract Partnerships",
    description: "Position your organization as a leader, attracting strategic alliances and opportunities.",
    icon: "🤲",
    progress: 88,
  },
  {
    title: "Create Lasting Communication Assets",
    description: "Build a library of high-quality media assets that serve your brand for years.",
    icon: "📦",
    progress: 94,
  },
];

// Progress Bar Component
function ProgressBar({ progress, delay }: { progress: number; delay: number }) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            setWidth(progress);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [progress, delay, hasAnimated]);

  return (
    <div ref={barRef} className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-amber-400"
        style={{ width: `${width}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );
}

export default function Impact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 50]);

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
      transition: { staggerChildren: 0.1 },
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

        {/* Impact Score overlay (large in background) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[16rem] font-black text-white/5 tracking-tight pointer-events-none select-none">
          IMPACT
        </div>
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
          Impact Metrics • 08
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
            className="w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-8"
          />
          <motion.div variants={fadeInUp}>
            <Heading level="h2" size="4xl" className="mb-4 font-black tracking-tight">
              Expected <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Impact</span>
            </Heading>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Text variant="lead" className="text-neutral-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-normal">
              What our work delivers for our clients.
            </Text>
          </motion.div>
        </motion.div>

        {/* Impact Grid — with progress bars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerGroup}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {impacts.map((impact, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm hover:border-amber-400/30 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-3">
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {impact.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-100 transition-colors">
                    {impact.title}
                  </h3>
                </div>
                {/* Impact Score */}
                <div className="text-xs font-mono text-amber-400/60 group-hover:text-amber-300 transition-colors">
                  {impact.progress}%
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors mb-4">
                {impact.description}
              </p>

              {/* Progress Bar */}
              <ProgressBar progress={impact.progress} delay={idx * 200} />
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Impact Score */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 p-8 rounded-2xl border border-amber-400/20 bg-amber-500/5 backdrop-blur-sm text-center max-w-2xl mx-auto"
        >
          <div className="text-xs font-mono text-amber-400/60 tracking-widest mb-2">OVERALL IMPACT SCORE</div>
          <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            94%
          </div>
          <Text variant="body" className="text-neutral-400 text-sm mt-2">
            Average impact across all key performance indicators.
          </Text>
        </motion.div>

      </div>
    </Section>
  );
}
