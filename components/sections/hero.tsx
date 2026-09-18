"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const logoRotateX = useTransform(springY, [-0.5, 0.5], ["14deg", "-14deg"]);
  const logoRotateY = useTransform(springX, [-0.5, 0.5], ["-14deg", "14deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black text-white flex items-center px-6 overflow-hidden pt-28 pb-16 select-none"
    >
      {/* Film Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Spotlight */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-gradient-to-r from-white/10 to-neutral-500/10 rounded-full blur-[160px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: useTransform(springX, [-0.5, 0.5], ["25%", "75%"]),
          top: useTransform(springY, [-0.5, 0.5], ["25%", "75%"]),
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* LEFT: Interactive Logo (expands on hover) */}
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start perspective-1000">
          <motion.div
            style={{
              rotateX: logoRotateX,
              rotateY: logoRotateY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative cursor-pointer group p-8"
          >
            <div className="absolute inset-0 rounded-3xl bg-white/5 blur-3xl group-hover:bg-white/20 transition-all duration-700" />

            <img
              src="/images/kirtenmedialogo.png"
              alt="Kirten Media Logo"
              className="relative w-48 sm:w-56 md:w-64 lg:w-80 h-auto object-contain filter invert brightness-0 contrast-100 drop-shadow-[0_25px_35px_rgba(255,255,255,0.25)]"
            />
          </motion.div>
        </div>

        {/* RIGHT: Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
          >
            Welcome to <span className="text-white">Kirten Media.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            We are a strategic visual storytelling company that partners with institutions, organizations, brands, and visionary individuals to communicate ideas, preserve stories, strengthen public trust, and inspire meaningful action.
          </motion.p>
        </div>

      </div>
    </main>
  );
}
