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
  const animationRef = useRef<number>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create dots with random positions and velocities
    const dotCount = 50;
    const dots: Dot[] = [];

    for (let i = 0; i < dotCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const hue = Math.floor(Math.random() * 360);
      const lightness = Math.floor(Math.random() * 30) + 50;
      const color = `hsl(${hue}, 100%, ${lightness}%)`;

      // Random velocity between -0.5 and 0.5 pixels per frame
      const speed = Math.random() * 0.3 + 0.1;
      const angle = Math.random() * Math.PI * 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      dots.push({ x, y, vx, vy, color });
    }

    dotsRef.current = dots;

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw each dot
      dotsRef.current.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        // Wrap around edges
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.y > canvas.height) dot.y = 0;
        if (dot.y < 0) dot.y = canvas.height;

        // Draw dot
        ctx.fillStyle = dot.color;
        ctx.fillRect(dot.x, dot.y, 1.8, 1.8);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      if (!canvas) return;

      // Store previous positions as percentages to maintain relative positions
      const widthRatio = window.innerWidth / canvas.width;
      const heightRatio = window.innerHeight / canvas.height;

      // Update canvas dimensions
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Update dot positions proportionally
      dotsRef.current = dotsRef.current.map((dot) => ({
        ...dot,
        x: dot.x * widthRatio,
        y: dot.y * heightRatio,
      }));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-[#000000] -z-10"
    />
  );
};

export default ParticleBackground;
