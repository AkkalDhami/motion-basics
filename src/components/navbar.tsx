"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const items = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/",
    },
    {
      label: "Contact",
      href: "/",
    },
    {
      label: "Login",
      href: "/",
    },
  ];

  const [hovered, setHovered] = useState<null | number>(null);

  return (
    <nav className="mx-auto flex w-full max-w-xl items-center justify-between rounded-full bg-neutral-50 px-2 py-2 text-neutral-900">
      {items.map((item, idx) => (
        <div
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          key={item.label}
          className="group relative flex w-full cursor-pointer items-center justify-center px-4 py-3 text-lg font-medium"
        >
          {hovered === idx && (
            <motion.span
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-neutral-950"
            />
          )}
          <span className="relative group-hover:text-white"> {item.label}</span>
        </div>
      ))}
    </nav>
  );
}
