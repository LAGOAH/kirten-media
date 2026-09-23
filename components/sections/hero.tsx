"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const headlineWords = ["We", "are", "a", "strategic", "visual", "storytelling", "company."];
  const subtitleWords = [
    "That", "partners", "with", "institutions,", "organizations,", "brands,",
    "and", "visionary", "individuals", "to", "communicate", "ideas,",
    "preserve", "stories,", "strengthen", "public", "trust,",
    "and", "inspire", "meaningful", "action."
  ];

  return (
    <section className="relative bg-black text-white flex items-center justify-center px-6 py-12 md:py-16 overflow-hidden">

      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Headline — word-by-word ZOOM IN with impact */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 2.5, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.12 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-2 md:mr-3 text-white"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Shake divider — dramatic line with wobble */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: "80px",
            opacity: 1,
            x: [0, -3, 3, -2, 2, 0],
          }}
          transition={{
            width: { duration: 0.9, delay: 1.0, ease: "easeOut" },
            opacity: { duration: 0.9, delay: 1.0 },
            x: { duration: 0.6, delay: 1.9, ease: "easeInOut" },
          }}
          className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"
        />

        {/* Subtitle — words fly in from random directions with shake */}
        <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed font-bold">
          {subtitleWords.map((word, i) => {
            const directions = [
              { x: -40, y: 0 },
              { x: 40, y: 0 },
              { x: 0, y: 30 },
              { x: 0, y: -30 },
              { x: 30, y: 20 },
              { x: -30, y: -20 },
            ];
            const dir = directions[i % directions.length];

            return (
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                  x: dir.x,
                  y: dir.y,
                  scale: 1.5,
                  rotate: (i % 2 === 0 ? -8 : 8),
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.7,
                  delay: 1.2 + 0.045 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-1.5"
              >
                {word}
              </motion.span>
            );
          })}
        </p>

      </div>
    </section>
  );
}
