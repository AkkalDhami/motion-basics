"use client";

import { motion, useAnimate } from "motion/react";

export default function AnimationSequence() {
  const [scope, animate] = useAnimate();

  const animateButton = async () => {
    animate(
      ".text",
      {
        display: "none",
        width: 0,
      },
      {
        duration: 0.1,
      },
    );
    await animate(
      "button",
      {
        width: "4rem",
        borderRadius: "50%",
      },
      {
        duration: 0.2,
      },
    );
    animate(
      "button",
      {
        opacity: 1,
        scale: [0, 1.2, 0.8, 1],
        background: "var(--color-green-500)",
      },
      {
        duration: 0.6,
      },
    );
    animate(
      ".check-icon",
      {
        opacity: 1,
      },
      {
        duration: 0.4,
      },
    );
    animate(
      ".check-icon path",
      {
        pathLength: 1,
      },
      {
        duration: 0.3,
      },
    );
  };

  return (
    <div
      ref={scope}
      className="relative flex h-14 w-60 items-center justify-center"
    >
      <motion.button
        onClick={animateButton}
        style={{
          width: "30rem",
        }}
        className="h-14 w-full cursor-pointer rounded-lg bg-orange-700"
      >
        <span className="text"> Pay Now ($169)</span>
      </motion.button>

      <motion.svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="#FFFFFF"
        strokeWidth={3}
        className="check-icon pointer-events-none absolute inset-0 m-auto size-8"
        style={{
          opacity: 0,
        }}
      >
        <motion.path
          initial={{
            pathLength: 0,
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </motion.svg>
    </div>
  );
}
