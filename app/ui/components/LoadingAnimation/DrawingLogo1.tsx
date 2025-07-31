// components/DrawingLogo.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface DrawingLogoProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
}

export default function DrawingLogo1({
  src,
  alt = "Logo",
  width = 200,
  height = 200,
  duration = 3,
  delay = 0,
  repeatDelay = 1,
}: DrawingLogoProps) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div style={{ width, height }} className="flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 rounded" style={{ width, height }}></div>
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
      
      {/* Drawing mask - simulates drawing effect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
        animate={{ 
          clipPath: [
            "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            "polygon(0% 0%, 25% 0%, 20% 100%, 0% 100%)",
            "polygon(0% 0%, 50% 0%, 45% 100%, 20% 100%)",
            "polygon(0% 0%, 75% 0%, 70% 100%, 45% 100%)",
            "polygon(0% 0%, 100% 0%, 95% 100%, 70% 100%)",
            "polygon(0% 0%, 100% 0%, 100% 100%, 95% 100%)",
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          ]
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay,
          ease: "easeInOut",
          times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1]
        }}
      />
      
      {/* Additional effect - drawing line */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-blue-500"
        initial={{ width: 0, opacity: 0 }}
        animate={{ 
          width: [0, width * 0.3, width * 0.6, width],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: duration * 0.7,
          delay,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}