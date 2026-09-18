"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const testimonials = [
  {
    quote: "You delivered our message excellently. Thank you.",
    author: "Gaus Dorcas",
    role: "CEO, Ladies Alive",
    image: "/images/testimonials/gaus-dorcas.png",
  },
];

const sparkles = [
  { top: 15, left: 20 },
  { top: 30, left: 75 },
  { top: 50, left: 10 },
  { top: 65, left: 65 },
  { top: 80, left: 35 },
  { top: 10, left: 85 },
  { top: 45, left: 55 },
  { top: 75, left: 90 },
];

export default function Testimonials() {
  return (
    <Section className="relative bg-black text-white overflow-hidden py-32 md:py-44 border-t border-white/5 select-none">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.18, 0.08],
            x: ["-15%", "10%", "-15%"],
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

        {/* Sparkle particles — FIXED positions, no Math.random() */}
        {sparkles.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/15"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8" />
          <Heading as="h2" size="4xl" className="mb-4 font-black tracking-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-neutral-400">Clients Say</span>
          </Heading>
          <Text variant="lead" className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-normal">
            Real stories from real partnerships.
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400/30 flex-shrink-0 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="text-3xl text-cyan-400/30 mb-2">"</div>
                  <p className="text-base md:text-lg text-neutral-200 italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="mt-4">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
