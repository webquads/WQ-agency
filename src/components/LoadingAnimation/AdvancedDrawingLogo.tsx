// components/AdvancedDrawingLogo.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AdvancedDrawingLogoProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
}

export default function AdvancedDrawingLogo({
  src,
  alt = "Logo",
  width = 200,
  height = 200,
  duration = 4,
  delay = 0,
  repeatDelay = 1,
}: AdvancedDrawingLogoProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        style={{ width, height }}
        className="flex items-center justify-center"
      >
        <div
          className="animate-pulse bg-gray-200 rounded"
          style={{ width, height }}
        ></div>
      </div>
    );
  }

  return (
    <motion.div
      className="relative overflow-hidden"
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* The actual logo */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0"
      />

      {/* Complex drawing mask that follows geometric patterns */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" }}
        animate={{
          clipPath: [
            "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
            "polygon(50% 50%, 60% 40%, 50% 50%, 50% 50%)",
            "polygon(50% 50%, 60% 40%, 70% 50%, 50% 50%)",
            "polygon(50% 50%, 60% 40%, 70% 50%, 60% 60%)",
            "polygon(50% 50%, 60% 40%, 70% 50%, 60% 60%, 50% 70%)",
            "polygon(50% 50%, 60% 40%, 70% 50%, 60% 60%, 50% 70%, 40% 60%)",
            "polygon(50% 50%, 60% 40%, 70% 50%, 60% 60%, 50% 70%, 40% 60%, 30% 50%)",
            "polygon(50% 50%, 60% 40%, 70% 50%, 60% 60%, 50% 70%, 40% 60%, 30% 50%, 40% 40%)",
            "polygon(50% 50%, 60% 40%, 70% 50%, 60% 60%, 50% 70%, 40% 60%, 30% 50%, 40% 40%, 50% 30%)",
            "polygon(50% 50%, 60% 40%, 70% 50%, 60% 60%, 50% 70%, 40% 60%, 30% 50%, 40% 40%, 50% 30%, 60% 40%)",
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay,
          ease: "easeInOut",
        }}
      />

      {/* Drawing effect lines that follow the geometric pattern */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: duration * 0.8,
          delay,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay,
        }}
      >
        <svg width={width} height={height} className="absolute inset-0">
          <motion.path
            d={`M${width * 0.5},${height * 0.5} L${width * 0.6},${
              height * 0.4
            } L${width * 0.7},${height * 0.5} L${width * 0.6},${
              height * 0.6
            } L${width * 0.5},${height * 0.7} L${width * 0.4},${
              height * 0.6
            } L${width * 0.3},${height * 0.5} L${width * 0.4},${
              height * 0.4
            } L${width * 0.5},${height * 0.3} L${width * 0.6},${height * 0.4}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: duration * 0.7,
              delay,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}
