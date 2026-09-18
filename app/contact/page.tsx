"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const contactDetails = [
  {
    label: "Email",
    value: "info@kirtenmedia.com",
    href: "mailto:info@kirtenmedia.com",
  },
  {
    label: "Phone",
    value: "+234 813 722 8977",
    href: "tel:+2348137228977",
  },
  {
    label: "Location",
    value: "Taraba State, Nigeria",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">

      {/* Subtle background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
            x: ["-15%", "10%", "-15%"],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.12, 0.06],
            x: ["10%", "-10%", "10%"],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-amber-500/12 rounded-full blur-[160px]"
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

          {/* Logo */}
          <div className="mb-16">
            <img
              src="/images/kirtenmedialogo.png"
              alt="Kirten Media"
              className="h-16 md:h-20 w-auto object-contain filter invert brightness-0 contrast-100"
            />
          </div>

          {/* Label + BOLD Heading */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-[2px] bg-white" />
              <span className="text-xs uppercase tracking-[0.4em] text-white font-mono font-bold">
                Get in Touch
              </span>
            </div>

            <Heading as="h1" size="5xl" className="mb-8 font-black tracking-tighter leading-[0.95] text-6xl md:text-7xl lg:text-8xl">
              Let's Start a Conversation.
            </Heading>

            <Text variant="lead" className="text-neutral-300 text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
              Whether you're planning a documentary, a brand film, or a full communication strategy — we'd love to hear about it.
            </Text>
          </div>

        </div>
      </Section>

      {/* ============ FORM + INFO ============ */}
      <Section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* LEFT: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white mb-10 font-mono font-bold">
                Direct Contact
              </p>

              <div className="space-y-12">
                {contactDetails.map((item, idx) => (
                  <div key={idx} className="border-b-2 border-white/15 pb-6">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-3 font-mono font-bold">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-2xl md:text-3xl text-white hover:text-cyan-300 transition-colors duration-300 font-bold tracking-tight"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-2xl md:text-3xl text-white font-bold tracking-tight">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Response note */}
              <div className="mt-12 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mt-2 flex-shrink-0" />
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We respond to every message within <span className="text-white font-bold">24 hours</span>.
                </p>
              </div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-8"
            >
              <form className="space-y-10">

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.4em] text-white mb-4 font-mono font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-transparent border-b-2 border-white/30 pb-4 text-white text-lg placeholder-neutral-600 focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-medium"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.4em] text-white mb-4 font-mono font-bold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-transparent border-b-2 border-white/30 pb-4 text-white text-lg placeholder-neutral-600 focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-medium"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-[10px] uppercase tracking-[0.4em] text-white mb-4 font-mono font-bold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-transparent border-b-2 border-white/30 pb-4 text-white text-lg placeholder-neutral-600 focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-medium"
                    placeholder="Documentary, brand film, consultation..."
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.4em] text-white mb-4 font-mono font-bold">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-transparent border-b-2 border-white/30 pb-4 text-white text-lg placeholder-neutral-600 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none font-medium"
                    placeholder="Share your vision, timeline, and goals..."
                  />
                </div>

                {/* BOLD Submit button */}
                <div className="pt-6">
                  <motion.button
                    type="submit"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group inline-flex items-center gap-4 text-base uppercase tracking-[0.4em] text-white hover:text-cyan-300 transition-colors duration-300 font-mono font-bold"
                  >
                    <span>Send Message</span>
                    <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300 text-2xl">→</span>
                  </motion.button>
                </div>

              </form>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* ============ BOTTOM ============ */}
      <Section className="relative z-10 border-t border-white/5 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500 font-mono uppercase tracking-[0.4em] font-bold">
            Kirten Media
          </p>
          <p className="text-xs text-neutral-500">
            Communicating Impact · Preserving Legacy · Inspiring Action
          </p>
        </div>
      </Section>

    </div>
  );
}
