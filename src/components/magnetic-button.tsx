"use client";

import { motion, useMotionValue, useSpring } from "motion/react";

export function MagneticButton() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  const strength = 0.2;

  const springX = useSpring(x, {
    stiffness: 500,
    damping: 40,
    mass: 0.8,
  });

  const springY = useSpring(y, {
    stiffness: 500,
    damping: 40,
    mass: 0.8,
  });

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = event.clientX - centerX;
    const offsetY = event.clientY - centerY;

    x.set(offsetX * strength);
    y.set(offsetY * strength);

    scale.set(1.03);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.button
      style={{
        x: springX,
        y: springY,
        scale: scale,
        transition: "ease-in",
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="rounded-full bg-neutral-50 px-6 py-3 text-sm font-medium text-neutral-950"
    >
      Explore
    </motion.button>
  );
}
