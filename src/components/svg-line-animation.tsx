"use client";

import { motion } from "motion/react";

export function SVGLineAnimation() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <AnimateContainer />
      <div className="absolute top-80 z-50 flex h-32 w-56 items-center justify-center bg-white/70 p-10 text-2xl font-semibold text-black backdrop-blur-lg">
        AKKAL
      </div>
    </div>
  );
}

const PATHS = [
  {
    d: "M 0 0 L 0 404.609",
    transform: "translate(370 0)",
    dim: 20,
  },
  {
    d: "M 164 0 L 98.814 0 L 0 83.557 L 0 205",
    transform: "translate(400 110)",
  },
  {
    d: "M 0 0 L 56.317 0 C 93.572 34.834 114.632 53.417 155 84.826 L 155 206",
    transform: "translate(181.152 110)",
  },
  {
    d: "M 0 0 L 295 0 L 295 81",
    transform: "translate(0 221)",
  },
  {
    d: "M 296 0 L 0 0 L 0 79",
    transform: "translate(438 221)",
  },
];

const AnimateContainer = () => {
  return (
    <div className="pointer-events-none z-40 mx-auto w-full max-w-200">
      <svg viewBox="0 0 734 405" className="w-fill h-auto" fill="none">
        {PATHS.map((path, i) => (
          <AnimatedLine key={i} {...path} />
        ))}
      </svg>
    </div>
  );
};

const AnimatedLine = ({ d, transform }: { d: string; transform: string }) => {
  return (
    <g transform={transform}>
      <path
        d={d}
        stroke="color-mix(in srgb, var(--color-neutral-600) 50%, transparent)"
        strokeWidth={2}
      />
      <motion.path
        d={d}
        stroke="var(--color-neutral-300)"
        strokeDasharray={`0.1 0.9`}
        pathLength={1}
        initial={{
          strokeDashoffset: 0,
        }}
        animate={{
          strokeDashoffset: -1,
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatType: "loop",
        }}
        strokeWidth={2}
      />
    </g>
  );
};
