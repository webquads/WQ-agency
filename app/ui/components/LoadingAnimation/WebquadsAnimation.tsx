// components/AnimatedLogo.tsx
"use client"; // This directive marks it as a client component

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedLogoProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
  minScale?: number;
  maxScale?: number;
}

export default function AnimatedLogo({
  src,
  alt = "Logo",
  width = 200,
  height = 200,
  duration = 2,
  delay = 0,
  repeatDelay = 1,
  minScale = 0.5,
  maxScale = 1,
}: AnimatedLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: minScale }}
      animate={{ opacity: 1, scale: maxScale }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay,
        ease: "easeInOut",
      }}
      className="flex items-center justify-center"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="max-w-full h-auto"
      />
    </motion.div>
  );
}
