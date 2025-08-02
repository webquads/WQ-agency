"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
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

    // Set canvas size
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    setCanvasSize();

    // Reduce dot count for better performance
    const dotCount = Math.min(
      30,
      Math.floor((canvas.width * canvas.height) / 50000)
    );
    const dots: Dot[] = [];

    // Pre-calculate colors to avoid repeated hsl() calculations
    const colors = [
      "#3b82f6",
      "#ef4444",
      "#10b981",
      "#f59e0b",
      "#8b5cf6",
      "#06b6d4",
      "#f97316",
      "#84cc16",
    ];

    for (let i = 0; i < dotCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const color = colors[Math.floor(Math.random() * colors.length)];

      // Reduce speed for smoother animation
      const speed = Math.random() * 0.15 + 0.05;
      const angle = Math.random() * Math.PI * 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      dots.push({ x, y, vx, vy, color });
    }

    dotsRef.current = dots;

    // Throttled animation loop (60fps max)
    const animate = (currentTime: number) => {
      if (!ctx || !canvas) return;

      // Throttle to ~60fps
      if (currentTime - lastTimeRef.current < 16) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTimeRef.current = currentTime;

      // Clear canvas efficiently
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Batch updates for better performance
      ctx.beginPath();
      dotsRef.current.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Wrap around edges
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.y > canvas.height) dot.y = 0;
        if (dot.y < 0) dot.y = canvas.height;

        // Use fillRect instead of arc for better performance
        ctx.fillStyle = dot.color;
        ctx.fillRect(dot.x, dot.y, 1.5, 1.5);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!canvas) return;

        const oldWidth = canvas.width;
        const oldHeight = canvas.height;

        setCanvasSize();

        const widthRatio = canvas.width / oldWidth;
        const heightRatio = canvas.height / oldHeight;

        // Update dot positions proportionally
        dotsRef.current = dotsRef.current.map((dot) => ({
          ...dot,
          x: dot.x * widthRatio,
          y: dot.y * heightRatio,
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
      className="fixed top-0 left-0 w-full h-full bg-[#000000] -z-10"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default ParticleBackground;
