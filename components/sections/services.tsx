"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const services = [
  {
    title: "Institutional Storytelling",
    description: "We help universities, government agencies, NGOs, and organizations communicate their achievements, document their impact, and preserve their legacy through compelling visual storytelling.",
    image: "/images/services/institutional-storytelling.png",
  },
  {
    title: "Documentary Production",
    description: "We produce cinematic documentaries that capture real stories, celebrate achievements, preserve history, and communicate lasting impact to diverse audiences.",
    image: "/images/services/documentary-production.png",
  },
  {
    title: "Corporate & Brand Films",
    description: "We create high-quality films that showcase your organization's vision, products, services, and values, helping you build trust and connect with your audience.",
    image: "/images/services/corporate-films.png",
  },
  {
    title: "Photography",
    description: "We deliver professional photography that captures moments, people, products, and events with creativity, precision, and purpose.",
    image: "/images/services/photography.png",
  },
  {
    title: "Commercial & Advertising",
    description: "From television commercials to digital campaigns, we develop creative advertisements that increase brand awareness, drive engagement, and inspire action.",
    image: "/images/services/commercial-advertising.png",
  },
  {
    title: "Social Media Content",
    description: "We develop engaging visual content tailored for digital platforms, helping brands maintain a strong online presence and build meaningful connections with their audience.",
    image: "/images/services/social-media-content.png",
  },
  {
    title: "Event Coverage",
    description: "We provide comprehensive photo and video coverage for conferences, corporate events, graduations, launches, ceremonies, and other significant occasions.",
    image: "/images/services/event-coverage.png",
  },
  {
    title: "Media & Communication Consulting",
    description: "We advise organizations on visual communication strategies, content planning, storytelling, and media solutions that strengthen reputation and maximize impact.",
    image: "/images/services/media-consulting.png",
  },
];

export default function Services() {
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
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <Section className="relative bg-black text-white overflow-hidden py-32 md:py-44 border-t border-white/5 select-none">

      {/* BACKGROUND — Lens Effects with Motion */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        {/* Cyan Lens Flare — moving */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.18, 0.08],
            x: ["-15%", "10%", "-15%"],
            y: ["-5%", "5%", "-5%"],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]"
        />

        {/* Amber Lens Flare — moving opposite direction */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.14, 0.06],
            x: ["10%", "-10%", "10%"],
            y: ["5%", "-5%", "5%"],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-amber-500/12 rounded-full blur-[160px]"
        />

        {/* Third Glow — subtle white */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.04, 0.08, 0.04],
            x: ["0%", "5%", "0%"],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]"
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
          Our Services • 03
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">Services</span>
            </Heading>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Text variant="lead" className="text-neutral-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-normal">
              Strategic visual storytelling solutions for every need.
            </Text>
          </motion.div>
        </motion.div>

        {/* Services Grid — 4 columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerGroup}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
            >
              {/* Image with zoom on hover */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-5">
                <h3 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-cyan-100 transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line — animated on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyan-400/20 group-hover:w-12 group-hover:bg-cyan-400/60 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}
