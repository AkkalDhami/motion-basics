"use client";

import { IconRocket } from "@tabler/icons-react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

type Feature = {
  icon: React.ReactNode;
  titte: string;
  description: string;
  content: React.ReactNode;
};

export default function Hooks() {
  const features: Feature[] = [
    {
      icon: <IconRocket className="size-12 text-neutral-200" />,
      titte: "Generate ultra realistic images in seconds",
      description:
        "With our state of the art AI, you can generate ultra realistic images in no time at att. ",
      content: (
        <Image
          width={600}
          height={600}
          alt="car"
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww"
          className="rounded-md"
        />
      ),
    },
    {
      icon: <IconRocket className="size-12 text-neutral-200" />,
      titte: "Realistic images in seconds",
      description:
        "With our state of the art AI, you can generate ultra realistic images in no time at att. ",
      content: (
        <Image
          width={600}
          height={600}
          alt="car"
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww"
          className="rounded-md"
        />
      ),
    },
    {
      icon: <IconRocket className="size-12 text-neutral-200" />,
      titte: "Replicate ultra realistic images in seconds",
      description:
        "With our state of the art AI, you can generate ultra realistic images in no time at att. ",
      content: (
        <Image
          width={600}
          height={600}
          alt="car"
          src="https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
          className="rounded-md"
        />
      ),
    },
    {
      icon: <IconRocket className="size-12 text-neutral-200" />,
      titte: "Generate ultra realistic images",
      description:
        "With our state of the art AI, you can generate ultra realistic images in no time at att. ",
      content: (
        <Image
          width={600}
          height={600}
          alt="car"
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww"
          className="rounded-md"
        />
      ),
    },
  ];

  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgColors = [
    "var(--color-slate-800)",
    "var(--color-neutral-900)",
    "var(--color-gray-950)",
    "var(--color-zinc-900)",
    "var(--color-stone-950)",
  ];
  const [bg, setBg] = useState("#f8fafc");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.round(latest * (bgColors.length - 1));
    setBg(bgColors[index]);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{ background: bg }}
      ref={ref}
      className="flex w-full flex-col items-center justify-center gap-7 px-6"
    >
      <div className="mx-auto max-w-5xl">
        {features.map((feature) => (
          <Card key={feature.titte} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      damping: 30,
      stiffness: 300,
      mass: 1,
    },
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);

  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div ref={ref} className="grid grid-cols-2 items-center gap-16 py-40">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-2"
      >
        {feature.icon}
        <h2 className="text-2xl font-semibold">{feature.titte}</h2>
        <p className="text-neutral-500">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};
