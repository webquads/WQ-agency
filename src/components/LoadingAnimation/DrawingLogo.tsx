// components/DrawingLogo.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DrawingLogoProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
}

export default function DrawingLogo({
  src,
  alt = "Logo",
  width = 200,
  height = 200,
  duration = 2,
  delay = 0,
  repeatDelay = 1,
}: DrawingLogoProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.3,
        rotate: -10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
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
