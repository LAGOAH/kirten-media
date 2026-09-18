"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const services = [
  {
    title: "Institutional Storytelling",
    description: "We help universities, government agencies, NGOs, and organizations communicate their achievements, document their impact, and preserve their legacy.",
    image: "/images/services/institutional-storytelling.png",
  },
  {
    title: "Documentary Production",
    description: "We produce cinematic documentaries that capture real stories, celebrate achievements, preserve history, and communicate lasting impact.",
    image: "/images/services/documentary-production.png",
  },
  {
    title: "Corporate & Brand Films",
    description: "We create high-quality films that showcase your organization's vision, products, services, and values.",
    image: "/images/services/corporate-films.png",
  },
  {
    title: "Photography",
    description: "We deliver professional photography that captures moments, people, products, and events with creativity, precision, and purpose.",
    image: "/images/services/photography.png",
  },
  {
    title: "Commercial & Advertising",
    description: "From television commercials to digital campaigns, we develop creative advertisements that increase brand awareness and drive engagement.",
    image: "/images/services/commercial-advertising.png",
  },
  {
    title: "Social Media Content",
    description: "We develop engaging visual content tailored for digital platforms, helping brands maintain a strong online presence.",
    image: "/images/services/social-media-content.png",
  },
  {
    title: "Event Coverage",
    description: "We provide comprehensive photo and video coverage for conferences, corporate events, graduations, launches, and ceremonies.",
    image: "/images/services/event-coverage.png",
  },
  {
    title: "Media & Communication Consulting",
    description: "We advise organizations on visual communication strategies, content planning, storytelling, and media solutions.",
    image: "/images/services/media-consulting.png",
  },
];

export default function Services() {
  return (
    <Section className="relative bg-black text-white py-32 md:py-44 border-t border-white/5 select-none">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8" />
        <Heading as="h2" size="4xl" className="mb-4 font-black tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">Services</span>
        </Heading>
        <Text variant="lead" className="text-neutral-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Strategic visual storytelling solutions for every need.
        </Text>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-white/10 bg-neutral-900/50 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            <div className="relative p-5">
              <h3 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-cyan-100 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                {service.description}
              </p>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyan-400/20 group-hover:w-12 group-hover:bg-cyan-400/60 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
