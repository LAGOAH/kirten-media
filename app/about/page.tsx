"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    image: "/images/team/lazarus.png",
    name: "Lazarus Rimamkirtan",
    role: "Executive Consultant / Managing Director",
    description: "Leads strategic vision and client partnerships.",
  },
  {
    image: "/images/team/miracle.png",
    name: "Miracle John Garba",
    role: "Head of Production",
    description: "Oversees planning, logistics, and production to ensure seamless execution across all projects.",
  },
  {
    image: "/images/team/simon.png",
    name: "Simon Anthony",
    role: "Head of Finance",
    description: "Oversees financial planning, budgeting, project costing, procurement, and financial accountability.",
  },
  {
    image: "/images/team/andefiki.png",
    name: "Andefiki Ayanarimam",
    role: "Post-Production Lead",
    description: "Transforms raw footage into compelling visual narratives through editing, color grading, and sound design.",
  },
  {
    image: "/images/team/isaac.png",
    name: "Isaac Mamnugsi",
    role: "Director, DOP",
    description: "Captures cinematic visuals that bring stories to life with creativity and technical excellence.",
  },
];

export default function AboutPage() {
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
    },
  };

  const staggerGroup = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8" />
            <Heading as="h1" size="5xl" className="mb-4 font-black tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">Kirten Media</span>
            </Heading>
            <Text variant="lead" className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Strategic visual storytelling for governments, institutions, organizations, and brands.
            </Text>
          </motion.div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="bg-black text-white border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8" />
          <Heading as="h2" size="3xl" className="mb-4 font-bold tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600">Mission</span>
          </Heading>
          <Text variant="lead" className="text-neutral-400 leading-relaxed">
            To create purposeful visual stories that strengthen trust, elevate brands, preserve history, and inspire action through creativity, innovation, and excellence.
          </Text>
        </div>
      </Section>

      {/* Vision Section */}
      <Section className="bg-black text-white border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-8" />
          <Heading as="h2" size="3xl" className="mb-4 font-bold tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Vision</span>
          </Heading>
          <Text variant="lead" className="text-neutral-400 leading-relaxed">
            To become Africa's leading strategic visual storytelling company, helping institutions, organizations, and brands communicate their impact, preserve their legacy, and inspire meaningful change.
          </Text>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-black text-white border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8" />
          <Heading as="h2" size="3xl" className="mb-6 font-bold tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">Values</span>
          </Heading>
          <div className="flex flex-wrap justify-center gap-3">
            {["Integrity", "Excellence", "Creativity", "Purpose", "Partnership"].map((value, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-sm border border-white/10 rounded-full text-neutral-300 hover:border-cyan-400/30 hover:bg-cyan-500/5 transition-all duration-300"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-black text-white border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerGroup}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div variants={fadeInUp}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-8" />
            <Heading as="h2" size="3xl" className="mb-4 font-bold tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Team</span>
            </Heading>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Text variant="lead" className="text-neutral-400 leading-relaxed">
              Behind every great story is a passionate team committed to bringing it to life.
            </Text>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card
                variant="outline"
                className="border-neutral-800 bg-neutral-900/30 backdrop-blur-sm text-center p-6 hover:border-cyan-400/30 transition-all duration-500 h-full"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-amber-500/20 mx-auto mb-4 flex items-center justify-center overflow-hidden border border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Heading as="h3" size="lg" className="text-white">{member.name}</Heading>
                <Text variant="small" className="text-cyan-400/80">{member.role}</Text>
                <Text variant="body" className="text-neutral-400 text-sm mt-2">{member.description}</Text>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
