"use client";

import { cn } from "@/lib/utils";
import {
  Icon24Hours,
  Icon360View,
  IconMessage,
  IconX
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Card() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              filter: "blur(12px)"
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            className={cn(
              "w-110 rounded-lg space-y-4 flex-col p-6 text-neutral-800 flex h-130 ",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
            )}>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-base">
                Organization UI Components
              </h2>
              <p className="text-sm text-neutral-600">
                Clerk&apos;s UI components add turn-key simplicity to complex
                Organization management tasks.
              </p>

              <div className="flex items-center my-3 justify-center">
                <button
                  onClick={() => setOpen(!open)}
                  className="w-fit flex items-center gap-1 justify-center cursor-pointer shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] border text-neutral-800 border-neutral-500/30 py-1.5 px-3 text-sm rounded-lg">
                  Learn More
                  <IconX className="size-4" />
                </button>
              </div>
            </div>
            <div className="flex-1 border-dotted h-full border-2 border-neutral-200 rounded-lg">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  filter: "blur(12px)"
                }}
                whileHover={{
                  opacity: 100,
                  scale: 1,
                  filter: "blur(0px)"
                }}
                transition={{
                  // duration: 0.3,
                  // ease: "easeInOut"
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="h-full w-full inset-0 rounded-lg bg-white">
                <div className="grid grid-cols-1 divide-y divide-neutral-200">
                  <div className="flex items-center gap-2 p-4">
                    <IconMessage
                      className={cn(
                        "size-12 rounded-lg p-2",
                        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                      )}
                    />
                    <div className="flex flex-col">
                      <h3 className="font-medium text-base">UI Components</h3>
                      <p className="text-sm text-neutral-600">
                        A collection of pre-built UI components.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-4">
                    <Icon360View
                      className={cn(
                        "size-12 rounded-lg p-2",
                        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                      )}
                    />
                    <div className="flex flex-col">
                      <h3 className="font-medium text-base">
                        360 days all around
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Support available 24/7 to assist you{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-4">
                    <Icon24Hours
                      className={cn(
                        "size-12 rounded-lg p-2",
                        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                      )}
                    />
                    <div className="flex flex-col">
                      <h3 className="font-medium text-base">
                        24 hours turnaround
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Get your issues resolved within 24 hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-4">
                    <Icon24Hours
                      className={cn(
                        "size-12 rounded-lg p-2",
                        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                      )}
                    />
                    <div className="flex flex-col">
                      <h3 className="font-medium text-base">
                        24 hours turnaround
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Get your issues resolved within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
