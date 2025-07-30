"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedLogoProps {
  /** Whether the animation should loop continuously */
  loop?: boolean;
  /** Duration of one complete cycle (fade in + fade out) in milliseconds */
  duration?: number;
  /** Additional CSS classes for styling */
  className?: string;
  /** Callback fired when animation completes one cycle */
  onAnimationComplete?: () => void;
  /** Whether to start the animation immediately */
  autoStart?: boolean;
  /** Control animation playback externally */
  isPlaying?: boolean;
}

/**
 * AnimatedLogo Component
 *
 * A reusable Next.js component that animates a logo from 0% to 100% opacity
 * and back to 0%, creating a smooth build-up and deconstruction effect.
 *
 * Features:
 * - Smooth opacity transitions using CSS animations
 * - Customizable duration and loop behavior
 * - Performance optimized with requestAnimationFrame
 * - Accessible with reduced motion support
 * - TypeScript support with comprehensive prop types
 */
const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  loop = true,
  duration = 3000,
  className = "",
  onAnimationComplete,
  autoStart = true,
  isPlaying = true,
}) => {
  const [opacity, setOpacity] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const phaseRef = useRef<"fadeIn" | "fadeOut">("fadeIn");

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /**
   * Animation logic using requestAnimationFrame for smooth performance
   * Handles both fade-in and fade-out phases of the animation cycle
   */
  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const halfDuration = duration / 2;

    if (phaseRef.current === "fadeIn") {
      // Fade in phase: 0% to 100% opacity
      const progress = Math.min(elapsed / halfDuration, 1);
      const easedProgress = easeInOutCubic(progress);
      setOpacity(easedProgress);

      if (progress >= 1) {
        // Switch to fade out phase
        phaseRef.current = "fadeOut";
        startTimeRef.current = timestamp;
      }
    } else {
      // Fade out phase: 100% to 0% opacity
      const progress = Math.min(elapsed / halfDuration, 1);
      const easedProgress = easeInOutCubic(progress);
      setOpacity(1 - easedProgress);

      if (progress >= 1) {
        // Animation cycle complete
        onAnimationComplete?.();

        if (loop) {
          // Reset for next cycle
          phaseRef.current = "fadeIn";
          startTimeRef.current = timestamp;
        } else {
          // Stop animation
          setIsAnimating(false);
          return;
        }
      }
    }

    if (isPlaying && isAnimating) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  /**
   * Cubic easing function for smooth animation transitions
   * Provides natural acceleration and deceleration
   */
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  /**
   * Start the animation cycle
   */
  const startAnimation = () => {
    if (prefersReducedMotion) {
      setOpacity(1);
      return;
    }

    setIsAnimating(true);
    phaseRef.current = "fadeIn";
    startTimeRef.current = undefined;
    animationRef.current = requestAnimationFrame(animate);
  };

  /**
   * Stop the animation and cleanup
   */
  const stopAnimation = () => {
    setIsAnimating(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  // Handle autoStart and external play/pause control
  useEffect(() => {
    if (autoStart && isPlaying) {
      startAnimation();
    } else if (!isPlaying) {
      stopAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoStart, isPlaying, duration, loop]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`inline-block transition-opacity ${className}`}
      style={{
        opacity: prefersReducedMotion ? 1 : opacity,
        // Hardware acceleration for smooth animations
        transform: "translateZ(0)",
        willChange: "opacity",
      }}
      role="img"
      aria-label="Animated company logo"
    >
      {/* Your Logo SVG */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Blue left section */}
        <path
          d="M0 150C0 67.157 67.157 0 150 0H250C272.091 0 290 17.909 290 40V560C290 582.091 272.091 600 250 600H150C67.157 600 0 532.843 0 450V150Z"
          fill="url(#blueGradient)"
        />

        {/* Blue connecting section */}
        <path
          d="M290 200C290 177.909 307.909 160 330 160H470C492.091 160 510 177.909 510 200V240C510 262.091 492.091 280 470 280H330C307.909 280 290 262.091 290 240V200Z"
          fill="url(#blueGradient)"
        />

        {/* Orange right section */}
        <path
          d="M510 150C510 67.157 577.157 0 660 0H750C832.843 0 900 67.157 900 150V450C900 532.843 832.843 600 750 600H660C577.157 600 510 532.843 510 450V150Z"
          fill="url(#orangeGradient)"
        />

        {/* White cutout sections */}
        <path
          d="M360 120C360 97.909 377.909 80 400 80H800V200C800 222.091 782.091 240 760 240H400C377.909 240 360 222.091 360 200V120Z"
          fill="white"
        />

        <path
          d="M360 360C360 337.909 377.909 320 400 320H760C782.091 320 800 337.909 800 360V480C800 502.091 782.091 520 760 520H400C377.909 520 360 502.091 360 480V360Z"
          fill="white"
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>

          <linearGradient
            id="orangeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="50%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#FED7AA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
