"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const milestones = [
  {
    chapter: "01 / The Beginning",
    title: "Kirten Media Founded",
    description: "Established with a clear mission — to tell stories that matter through purposeful visual storytelling.",
  },
  {
    chapter: "02 / Government Work",
    title: "Governor Agbu Kefas — Free Wi-Fi Initiative",
    description: "Produced a documentary showcasing the impact of digital inclusion in Taraba State.",
  },
  {
    chapter: "03 / Heritage",
    title: "Kuteb Awareness Network",
    description: "Documented the history, heritage, and identity of the Kuteb people through cinematic productions.",
  },
  {
    chapter: "04 / Collaborations",
    title: "Strategic Partnerships",
    description: "Partnered with Eloheem Mission Academy, Ladies Alive, Zeta Autos, Habbis Shawarma, and Manasseh Turkur.",
  },
  {
    chapter: "05 / Recognition",
    title: "World-Class Recognition",
    description: "Received widespread positive feedback and sparked meaningful conversations within and beyond Taraba State.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">

      {/* ============ BACKGROUND LENS EFFECTS ============ */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        {/* Cyan Lens Flare */}
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

        {/* Amber Lens Flare */}
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

        {/* Rotating Aperture Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-dashed border-white/10 opacity-30"
        />

        {/* Inner Reverse Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/5 opacity-40"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_12px_#22d3ee] animate-pulse" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400/60 shadow-[0_0_12px_#fbbf24] animate-pulse" />
        </motion.div>
      </div>

      {/* ============ HERO ============ */}
      <Section className="relative z-10 pt-40 pb-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">

          {/* Logo */}
          <div className="mb-16">
            <img
              src="/images/kirtenmedialogo.png"
              alt="Kirten Media"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Label + Heading */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-white/30" />
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-500 font-mono">
                Selected Work / Timeline
              </span>
            </div>

            <Heading as="h1" size="5xl" className="mb-6 font-black tracking-tight leading-[1.05]">
              Portfolio
            </Heading>

            <Text variant="lead" className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              A record of the stories we've told, the institutions we've served, and the legacy we're building.
            </Text>
          </div>

        </div>
      </Section>

      {/* ============ TIMELINE ============ */}
      <Section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="border-t border-white/10">

            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="group border-b border-white/10 py-10 md:py-14"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">

                  {/* Chapter Label */}
                  <div className="md:col-span-3 md:pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 group-hover:text-cyan-400/80 transition-colors duration-500">
                      {m.chapter}
                    </span>
                  </div>

                  {/* Title + Description */}
                  <div className="md:col-span-9">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight leading-snug group-hover:text-cyan-100 transition-colors duration-300">
                      {m.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-2xl">
                      {m.description}
                    </p>

                    {/* Signature underline — grows on hover */}
                    <div className="mt-6 h-px w-0 group-hover:w-32 bg-cyan-400/60 transition-all duration-700 ease-out" />
                  </div>

                </div>
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
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3 font-mono">
                Want to be part of the next chapter?
              </p>
              <a
                href="/contact"
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight hover:text-neutral-300 transition-colors inline-block"
              >
                Let's talk →
              </a>
            </div>

            <p className="text-xs text-neutral-600 font-mono">
              Est. 2022 — Present
            </p>

          </div>
        </div>
      </Section>

    </div>
  );
}
