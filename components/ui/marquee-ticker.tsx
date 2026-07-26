"use client";

import { motion } from "framer-motion";

const items = [
  "GOVERNOR AGBU KEFAS FREE WI-FI",
  "KUTEB AWARENESS NETWORK",
  "DOCUMENTARY PRODUCTION",
  "INSTITUTIONAL BRANDING",
  "LADIES ALIVE",
  "ZETA AUTOS",
  "ELOHEEM MISSION ACADEMY",
];

export function MarqueeTicker() {
  return (
    <div className="relative w-full overflow-hidden bg-neutral-950 border-y border-white/10 py-4">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center w-max"
      >
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-neutral-400 hover:text-amber-300 transition-colors">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-amber-400/60 animate-ping" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
