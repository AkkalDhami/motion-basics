"use client";

import { motion } from "motion/react";

export function Button() {
  return (
    <motion.button
      // initial={{
      //   rotate: 0
      // }}
      // animate={{
      //   rotate: [0, 10, -10, 10, -10, 0]
      // }}

      whileHover={{
        rotateX: 20,
        rotateY: 20,
        boxShadow: "0 2px 20px 4px var(--color-orange-600)",
        opacity: 50,
        y: -4
      }}
      whileTap={{
        y: 0,
        rotateX: 0,
        rotateY: 0
      }}
      transition={{
        duration: 0.1,
        ease: "easeInOut"
      }}
      className="text-neutral-200 relative py-3 group px-8 cursor-pointer rounded-lg bg-neutral-900">
      Click me!
      <span className="absolute inset-x-0 h-px w-3/4 bottom-px bg-linear-to-r from-transparent mx-auto via-orange-600 to-transparent "></span>
      <span className="absolute opacity-0 group-hover:opacity-100 inset-x-0 h-1 w-full blur-sm bottom-0 bg-linear-to-r from-transparent mx-auto via-orange-600 to-transparent "></span>
    </motion.button>
  );
}

export function Button2() {
  return (
    <motion.button
      whileHover={{
        rotateY: 20,
        y: -6
      }}
      whileTap={{
        y: 0,
        rotateY: 0
      }}
      transition={{
        duration: 0.1,
        ease: "easeInOut"
      }}
      className="text-neutral-900 relative py-3 group px-8 cursor-pointer rounded-lg bg-neutral-50">
      Click me!
    </motion.button>
  );
}
