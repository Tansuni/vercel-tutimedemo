"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          clipPath: "inset(50% 0 50% 0)",
          filter: "hue-rotate(90deg) brightness(2)",
        }}
        animate={{
          opacity: 1,
          clipPath: "inset(0% 0 0% 0)",
          filter: "hue-rotate(0deg) brightness(1)",
        }}
        exit={{
          opacity: 0,
          clipPath: "inset(50% 0 50% 0)",
          filter: "hue-rotate(90deg) brightness(2)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}