"use client";

import { motion, AnimatePresence } from "motion/react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        className="card w-9/12 h-10/12 bg-base-300 shadow-xl rounded-lg gap-10 flex flex-col justify-center items-center"
        initial={{ opacity: 0, scale: 0, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0, y: -50 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
