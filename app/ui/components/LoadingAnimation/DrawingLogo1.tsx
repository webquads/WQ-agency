"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface AnimatedLogoProps {
  fullLogoSrc: string;
  part1Src: string;
  part2Src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  duration?: number;
  minScale?: number;
}

export default function AnimatedDualLogo({
  fullLogoSrc,
  part1Src,
  part2Src,
  alt = "Logo",
  width = 200,
  height = 200,
  className = "",
  duration = 3,
  minScale = 0.5,
}: AnimatedLogoProps) {
  const fullControls = useAnimation();
  const part1Controls = useAnimation();
  const part2Controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isInView && !isAnimating) {
      setIsAnimating(true);
      startAnimation();
    }
  }, [isInView, isAnimating]);

  const startAnimation = async () => {
    // Reset all elements to initial positions
    await Promise.all([
      part1Controls.set({
        x: -width * 1,
        y: -height * 1,
        opacity: 0,
        rotate: -60,
        scale: minScale,
      }),
      part2Controls.set({
        x: width * 1,
        y: height * 1,
        opacity: 0,
        rotate: 60,
        scale: minScale,
      }),
      fullControls.set({
        opacity: 0,
        scale: 1, // Fixed scale
        clipPath: "inset(0 100% 0 0)", // Start fully clipped from right
      }),
    ]);

    // Stage 1: Parts enter from opposite corners with rotation
    await Promise.all([
      part1Controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 0.75,
        transition: { duration: duration * 0.3, ease: "easeOut" },
      }),
      part2Controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 0.75,
        transition: { duration: duration * 0.3, ease: "easeOut" },
      }),
    ]);

    // Stage 2: Parts assemble in center and vanish immediately with full image
    await Promise.all([
      part1Controls.start({
        opacity: 0,
        scale: minScale,
        transition: { duration: duration * 0.3 },
      }),
      part2Controls.start({
        opacity: 0,
        scale: minScale,
        transition: { duration: duration * 0.3 },
      }),
      fullControls.start({
        opacity: 1,
        scale: 1, // Fixed scale
        clipPath: "inset(0 0% 0 0)", // Fully visible
        transition: { duration: duration * 0.4, ease: "easeInOut" },
      }),
    ]);

    // Stage 3: Hold the full image at full opacity for a moment
    await new Promise((resolve) => setTimeout(resolve, duration * 0.2));

    // Stage 4: Full image fades out from left to right and parts break apart horizontally
    await Promise.all([
      fullControls.start({
        opacity: 0,
        scale: 1, // Fixed scale
        clipPath: "inset(0 0% 0 100%)", // Clip from left to right
        transition: { duration: duration * 0.3, ease: "easeInOut" },
      }),
      part1Controls.start({
        x: -width * 0.8, // Move left horizontally
        y: 0, // Keep at center vertically
        opacity: 1,
        rotate: -15, // Slight rotation for visual interest
        scale: minScale,
        transition: {
          duration: duration * 0.3,
          ease: "easeIn",
          delay: duration * 0.15, // Delayed start
        },
      }),
      part2Controls.start({
        x: width * 0.8, // Move right horizontally
        y: 0, // Keep at center vertically
        opacity: 1,
        rotate: 15, // Slight rotation for visual interest
        scale: minScale,
        transition: {
          duration: duration * 0.3,
          ease: "easeIn",
          delay: duration * 0.15, // Delayed start
        },
      }),
    ]);

    // Reset animation state
    setIsAnimating(false);
    // Restart animation if still in view
    if (isInView) {
      startAnimation();
    }
  };

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {/* Full Logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={fullControls}
        initial={{
          opacity: 0,
          scale: 1, // Fixed scale
          clipPath: "inset(0 100% 0 0)", // Start fully clipped from right
        }}
      >
        <Image
          src={fullLogoSrc}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
        />
      </motion.div>

      {/* Part 1 (Left) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={part1Controls}
        initial={{
          x: -width * 0.8,
          y: -height * 0.8,
          opacity: 0,
          rotate: -45,
          scale: minScale,
        }}
      >
        <Image
          src={part1Src}
          alt={`${alt} Part 1`}
          width={width}
          height={height}
          className="object-contain"
        />
      </motion.div>

      {/* Part 2 (Right) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={part2Controls}
        initial={{
          x: width * 0.8,
          y: height * 0.8,
          opacity: 0,
          rotate: 45,
          scale: minScale,
        }}
      >
        <Image
          src={part2Src}
          alt={`${alt} Part 2`}
          width={width}
          height={height}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
