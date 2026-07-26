"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

export default function ServicesPage() {
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
            <Heading level="h1" size="5xl" className="mb-4 font-black tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">Services</span>
            </Heading>
            <Text variant="lead" className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Strategic visual storytelling solutions for every need.
            </Text>
          </motion.div>
        </div>
      </Section>

      {/* Services Grid — same as homepage but full page */}
      <Section className="bg-black text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerGroup}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="relative p-5">
                <h3 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-cyan-100 transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors line-clamp-3">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyan-400/20 group-hover:w-12 group-hover:bg-cyan-400/60 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
}
