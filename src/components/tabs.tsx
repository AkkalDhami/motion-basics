"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
export default function Tabs() {
  const options = [
    {
      label: "JavaScript",
    },
    {
      label: "TypeScript",
    },
    {
      label: "Python",
    },
  ];

  const [current, setCurrent] = useState<string | null>(options[0].label);
  return (
    <div className="mx-auto flex w-full max-w-xl items-center justify-between rounded-full bg-neutral-800 px-4 py-2">
      {options.map((n) => (
        <div
          key={n.label}
          onClick={() => setCurrent(n.label)}
          className="relative cursor-pointer px-4 py-2 text-lg font-medium"
        >
          {n.label === current && (
            <motion.div
              layoutId={"asdf"}
              className="absolute inset-0 h-full w-full rounded-full bg-white"
            ></motion.div>
          )}
          <span
            className={cn(
              "relative",
              n.label === current && "text-black duration-300",
            )}
          >
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
