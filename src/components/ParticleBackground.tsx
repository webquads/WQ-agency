"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match viewport
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;

      // Use viewport dimensions directly
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    };

    setCanvasSize();

    // Fixed dot count (no extra dots will be produced)
    const dotCount = 30;
    const dots: Dot[] = [];

    // Get actual canvas dimensions for dot positioning
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    // Initialize dots with proper boundaries
    for (let i = 0; i < dotCount; i++) {
      const x = Math.random() * (canvasWidth - 20) + 10; // Keep dots away from edges
      const y = Math.random() * (canvasHeight - 20) + 10;

      // Random velocity
      const speed = Math.random() * 0 + 0.5; // Increased speed for better visibility
      const angle = Math.random() * Math.PI * 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      dots.push({ x, y, vx, vy});
    }

    dotsRef.current = dots;

    // Animation loop
    const animate = (currentTime: number) => {
      if (!ctx || !canvas) return;

      // Throttle to ~60fps
      if (currentTime - lastTimeRef.current < 16) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTimeRef.current = currentTime;

      // Get current canvas display dimensions
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      // Clear canvas
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Update and draw dots
      dotsRef.current.forEach((dot) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges instead of wrapping (prevents sticking)
        if (dot.x <= 0 || dot.x >= displayWidth) {
          dot.vx = -dot.vx;
          dot.x = Math.max(0, Math.min(displayWidth, dot.x)); // Clamp position
        }
        if (dot.y <= 0 || dot.y >= displayHeight) {
          dot.vy = -dot.vy;
          dot.y = Math.max(0, Math.min(displayHeight, dot.y)); // Clamp position
        }

        // Draw dot
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(dot.x - 1, dot.y - 1, 2, 2); // Slightly larger and centered
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!canvas) return;

        const oldWidth = canvas.style.width ? parseFloat(canvas.style.width) : window.innerWidth;
        const oldHeight = canvas.style.height ? parseFloat(canvas.style.height) : window.innerHeight;

        setCanvasSize();

        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        const widthRatio = newWidth / oldWidth;
        const heightRatio = newHeight / oldHeight;

        dotsRef.current = dotsRef.current.map((dot) => ({
          ...dot,
          x: Math.max(0, Math.min(newWidth, dot.x * widthRatio)),
          y: Math.max(0, Math.min(newHeight, dot.y * heightRatio)),
        }));
      }, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none"
      style={{
        width: "100vw",
        height: "100vh",
        display: "block"
      }}
    />
  );
};

export default ParticleBackground;