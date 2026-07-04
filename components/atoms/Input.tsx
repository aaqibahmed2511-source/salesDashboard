"use client";

import { motion } from "motion/react";

type InputProps = {
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ placeholder }: InputProps) {
  return (
    <motion.input
      className="input w-xl h-1/12 input-bordered input-primary"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      placeholder={placeholder}
    />
  );
}
