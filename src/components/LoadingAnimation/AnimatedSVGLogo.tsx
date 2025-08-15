"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface AnimatedLogoProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  duration?: number;
  minScale?: number;
}

export default function AnimatedLogo({
  src,
  alt = "Logo",
  width = 200,
  height = 200,
  className = "",
  duration = 3,
  minScale = 0.5,
}: AnimatedLogoProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      // Start the animation sequence
      const animate = async () => {
        // Drawing animation (reveal from center to both sides + scale up)
        await controls.start({
          clipPath: "inset(0 0% 0 0%)",
          scale: 1,
          transition: {
            duration,
            ease: "easeInOut",
          },
        });

        // Pause briefly when fully visible
        await controls.start({
          clipPath: "inset(0 0% 0 0%)",
          scale: 1,
          transition: { duration: 1 },
        });

        // Reset animation (hide back to center + scale down)
        await controls.start({
          clipPath: "inset(0 50% 0 50%)",
          scale: minScale,
          transition: {
            duration: duration / 2,
            ease: "easeInOut",
          },
        });

        // Restart the animation
        animate();
      };

      animate();
    }
  }, [isInView, controls, duration, minScale]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="relative"
        initial={{
          clipPath: "inset(0 50% 0 50%)",
          scale: minScale,
        }}
        animate={controls}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
