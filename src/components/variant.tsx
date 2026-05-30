"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion, stagger } from "motion/react";
import { useState } from "react";

export default function Variant() {
  const [open, setOpen] = useState(false);

  const [hovered, setHovered] = useState<number | null>(null);

  const items = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Blog",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    },
  ];

  const navVariants = {
    open: {
      transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
    },
    closed: {
      transition: { delayChildren: stagger(0.05, { from: "last" }) },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className="w-full p-6">
      <div className="flex w-full justify-end gap-2">
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setOpen(!open)}
          className="group w-fit cursor-pointer rounded-full bg-neutral-800 p-3 hover:bg-neutral-700"
        >
          <IconMenu2 className="size-8 text-neutral-400 group-hover:text-neutral-50" />
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateX(100%)",
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateX(0)",
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              transform: "translateX(100%)",
              filter: "blur(12px)",
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 400,
              damping: 40,
            }}
            className="fixed top-0 right-0 h-full w-60 bg-neutral-900 p-6 pt-16"
          >
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => setOpen(!open)}
              className="group absolute top-4 right-4 w-fit cursor-pointer rounded-full bg-neutral-800 p-2 hover:bg-neutral-700"
            >
              <IconX className="size-6 text-neutral-400 group-hover:text-neutral-50" />
            </motion.button>
            <motion.div
              variants={navVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col space-y-2"
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative cursor-pointer overflow-hidden rounded-lg px-3 py-2 text-neutral-300 hover:text-neutral-50"
                >
                  {hovered === index && (
                    <motion.span
                      layoutId="hover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-lg bg-neutral-800"
                    />
                  )}

                  <span className="relative z-10"> {item.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
