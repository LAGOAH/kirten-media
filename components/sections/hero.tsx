"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

// --- Sub-component: Animated Number Counter ---
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        node.textContent = Math.floor(latest) + suffix;
      },
    });

    return () => controls.stop();
  }, [value, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

// --- Sub-component: Magnetic Button Wrapper ---
function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- Main Hero Component ---
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
      {/* 1. Film Grain Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* 2. Interactive Spotlight Flare */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-gradient-to-r from-white/10 to-neutral-500/10 rounded-full blur-[160px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: useTransform(springX, [-0.5, 0.5], ["25%", "75%"]),
          top: useTransform(springY, [-0.5, 0.5], ["25%", "75%"]),
        }}
      />

      {/* 3. Subtle Grid Lines */}
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
        
        {/* LEFT COLUMN: 3D Parallax Interactive Logo */}
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start perspective-1000">
          <motion.div
            style={{
              rotateX: logoRotateX,
              rotateY: logoRotateY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer group p-8"
          >
            <div className="absolute inset-0 rounded-3xl bg-white/5 blur-3xl group-hover:bg-white/20 transition-all duration-700" />

            <img
              src="/images/kirtenmedialogo.png"
              alt="Kirten Media Logo"
              className="relative w-48 sm:w-56 md:w-64 lg:w-80 h-auto object-contain filter invert brightness-0 contrast-100 drop-shadow-[0_25px_35px_rgba(255,255,255,0.25)]"
            />

            {/* Floating Glass Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-2 -right-2 bg-neutral-900/90 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-[11px] uppercase tracking-widest text-neutral-300 flex items-center gap-2 shadow-2xl"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Strategic Studio
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Typography & Actions */}
        <div className="flex-1 text-center lg:text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="text-xs uppercase tracking-widest text-neutral-300 font-medium">
              Global Media & Communications
            </span>
          </motion.div>

          {/* Heading with Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]"
          >
            Shaping Perception.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              Preserving Legacy.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed mx-auto lg:mx-0 font-normal"
          >
            Strategic visual storytelling for governments, institutions,
            high-net-worth individuals, and world-class organizations.
          </motion.p>

          {/* Magnetic Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <MagneticButton className="w-full sm:w-auto">
              <Link href="/portfolio" className="block w-full sm:w-auto">
                <button className="relative group overflow-hidden rounded-xl px-8 py-4 bg-white text-black font-semibold w-full sm:w-auto transition-transform active:scale-95 shadow-[0_0_35px_rgba(255,255,255,0.25)]">
                  <span className="relative z-10">View Our Work</span>
                  <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
              </Link>
            </MagneticButton>

            <MagneticButton className="w-full sm:w-auto">
              <Link href="/start-your-story" className="block w-full sm:w-auto">
                <button className="px-8 py-4 rounded-xl border border-white/30 bg-white/5 backdrop-blur-md text-white font-semibold hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto active:scale-95">
                  Start Your Story
                </button>
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Live Counter Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-center lg:text-left max-w-md mx-auto lg:mx-0"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">
                <Counter value={50} suffix="+" />
              </p>
              <p className="text-[11px] text-neutral-500 uppercase tracking-widest mt-1 font-medium">
                Projects Built
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">
                <Counter value={100} suffix="%" />
              </p>
              <p className="text-[11px] text-neutral-500 uppercase tracking-widest mt-1 font-medium">
                Discretion
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">Global</p>
              <p className="text-[11px] text-neutral-500 uppercase tracking-widest mt-1 font-medium">
                Reach
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
