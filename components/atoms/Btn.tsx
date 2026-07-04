"use client";
import { motion } from "motion/react";

type BtnProps = {
  text: string;
  type: "submit" | "button";
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Btn({ text, type, onClick }: BtnProps) {
  return (
    <>
      <motion.button
        className="btn btn-neutral w-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type={type}
        onClick={onClick}
      >
        {text}
      </motion.button>
    </>
  );
}
