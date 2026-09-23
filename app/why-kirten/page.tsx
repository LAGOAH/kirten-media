"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const foundation = [
  {
    num: "01",
    label: "Vision",
    text: "To become Africa's leading strategic visual storytelling company, helping institutions, organizations, and brands communicate their impact, preserve their legacy, and inspire meaningful change.",
  },
  {
    num: "02",
    label: "Mission",
    text: "To create purposeful visual stories that strengthen trust, elevate brands, preserve history, and inspire action through creativity, innovation, and excellence.",
  },
  {
    num: "03",
    label: "Values",
    text: null,
  },
];

const values = ["Integrity", "Excellence", "Creativity", "Purpose", "Partnership"];

const impacts = [
  "Build public trust",
  "Strengthen brand reputation",
  "Increase visibility",
  "Preserve institutional memory",
  "Inspire stakeholder engagement",
  "Attract partnerships and opportunities",
  "Create lasting communication assets",
];

export default function WhyKirtenPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">

      {/* Background lens effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.06, 0.14, 0.06],
            x: ["-15%", "10%", "-15%"],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.11, 0.05],
            x: ["10%", "-10%", "10%"],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px]"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-dashed border-white/10 opacity-30"
        />
      </div>

      {/* ============ HERO ============ */}
      <Section className="relative z-10 pt-40 pb-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-16">
            <img
              src="/images/kirtenmedialogo.png"
              alt="Kirten Media"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-white" />
            <span className="text-xs uppercase tracking-[0.4em] text-white font-mono font-bold">
              Why Kirten
            </span>
          </div>

          <Heading as="h1" size="5xl" className="mb-8 font-black tracking-tighter leading-[0.95] text-6xl md:text-7xl lg:text-8xl">
            We don't just produce videos.
          </Heading>

          <Text variant="lead" className="text-neutral-300 text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
            We solve communication challenges. We build legacy.
          </Text>

        </div>
      </Section>

      {/* ============ FOUNDATION ============ */}
      <Section className="relative z-10 py-24 md:py-32 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-3 mb-14">
            <span className="w-10 h-[2px] bg-white" />
            <span className="text-xs uppercase tracking-[0.4em] text-white font-mono font-bold">
              Foundation
            </span>
          </div>

          <div className="space-y-16">
            {foundation.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-b border-white/10 pb-16 last:border-b-0"
              >
                <div className="md:col-span-3">
                  <div className="text-5xl md:text-6xl font-black font-mono text-white/20 leading-none mb-2">
                    {item.num}
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-mono font-bold">
                    {item.label}
                  </div>
                </div>

                <div className="md:col-span-9">
                  {item.text ? (
                    <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl">
                      {item.text}
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-3">
                      {values.map((value) => (
                        <span
                          key={value}
                          className="px-5 py-2.5 text-sm border border-white/20 rounded-full text-white hover:border-cyan-400/60 hover:bg-cyan-500/5 transition-all duration-300 font-medium"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Section>

      {/* ============ OUR PROMISE ============ */}
      <Section className="relative z-10 py-32 md:py-44 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="flex items-center justify-center gap-3 mb-14">
            <span className="w-10 h-[2px] bg-white" />
            <span className="text-xs uppercase tracking-[0.4em] text-white font-mono font-bold">
              Our Promise
            </span>
            <span className="w-10 h-[2px] bg-white" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.25] text-white mb-10"
          >
            We approach every project with integrity, creativity, and excellence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Beyond delivering exceptional visuals, we are committed to understanding your vision, communicating your impact, and helping your story create lasting value for generations to come.
          </motion.p>

          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-[2px] bg-cyan-400/50" />
            <span className="text-sm italic text-cyan-300/80 tracking-wide">
              — The Kirten Media Team
            </span>
          </div>

        </div>
      </Section>

      {/* ============ EXPECTED IMPACT ============ */}
      <Section className="relative z-10 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-3 mb-14">
            <span className="w-10 h-[2px] bg-white" />
            <span className="text-xs uppercase tracking-[0.4em] text-white font-mono font-bold">
              Expected Impact
            </span>
          </div>

          <Heading as="h2" size="4xl" className="mb-20 font-black tracking-tight leading-[1.05] max-w-3xl text-4xl md:text-5xl">
            What our work delivers.
          </Heading>

          <div className="border-t border-white/10">
            {impacts.map((impact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group border-b border-white/10 py-6 md:py-8 flex items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="flex items-center gap-6 md:gap-10 flex-1">
                  <span className="text-sm font-mono text-neutral-600 group-hover:text-cyan-400 transition-colors duration-300 font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg md:text-xl text-neutral-300 group-hover:text-white transition-colors duration-300 font-medium tracking-tight">
                    {impact}
                  </span>
                </div>
                <span className="text-cyan-400/30 group-hover:text-cyan-400 transition-colors duration-300 text-xl">
                  ✓
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </Section>

      {/* ============ BOTTOM CTA ============ */}
      <Section className="relative z-10 border-t border-white/5 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4 font-mono font-bold">
                Ready when you are
              </p>
              <a
                href="/contact"
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight hover:text-neutral-300 transition-colors inline-block"
              >
                Let's talk →
              </a>
            </div>

            <p className="text-xs text-neutral-600 font-mono uppercase tracking-[0.3em]">
              Est. 2022 — Present
            </p>

          </div>
        </div>
      </Section>

    </div>
  );
}
