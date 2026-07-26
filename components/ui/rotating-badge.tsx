"use client";

import { motion } from "framer-motion";

interface RotatingBadgeProps {
  text?: string;
  className?: string;
}

export function RotatingBadge({
  text = "• KIRTEN MEDIA • STRATEGIC STORYTELLING • PRESERVING LEGACY ",
  className = "",
}: RotatingBadgeProps) {
  return (
    <div className={`relative flex items-center justify-center w-36 h-36 ${className}`}>
      {/* Central Interactive Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
          <svg
            className="w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      {/* Rotating SVG Text */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[9.5px] font-mono fill-amber-300/80 font-semibold tracking-widest uppercase">
            <textPath href="#circlePath">{text}</textPath>
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
