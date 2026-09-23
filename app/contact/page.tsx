"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import ContactForm from "@/components/sections/contact-form";

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

      {/* Background */}
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
      </div>

      {/* Hero */}
      <Section className="relative z-10 pt-40 pb-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-16">
            <img
              src="/images/kirtenmedialogo.png"
              alt="Kirten Media"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

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

      {/* Contact info */}
      <Section className="relative z-10 py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
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
      </Section>

      {/* The working form */}
      <ContactForm />
    </div>
  );
}
