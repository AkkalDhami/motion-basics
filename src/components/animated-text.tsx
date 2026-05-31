"use client";

import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

export default function AnimatedText() {
  const text =
    "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows";
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    startAnimate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAnimate = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0)",
        y: 0
      },
      {
        duration: 0.4,
        ease: "easeInOut",
        delay: stagger(0.03)
      },
    );
  };

  return (
    <div
      ref={scope}
      className="mx-auto wrap-break-word max-w-4xl text-2xl leading-snug font-semibold"
    >
      {text.split(" ").map((word, idx) => (
        <motion.span
          key={idx}
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10
          }} className="inline-block"
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
}
