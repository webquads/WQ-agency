// components/AdvancedSVGDrawing.tsx
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface PathData {
  d: string;
  length: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  delay?: number;
}

interface AdvancedSVGDrawingProps {
  svgContent: string;
  width?: number;
  height?: number;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
  className?: string;
  pathColors?: string[];
}

export default function AdvancedSVGDrawing({
  svgContent,
  width = 300,
  height = 300,
  duration = 3,
  delay = 0,
  repeatDelay = 1,
  className = "",
  pathColors = [],
}: AdvancedSVGDrawingProps) {
  const [paths, setPaths] = useState<PathData[]>([]);

  useEffect(() => {
    // Parse the SVG content to extract paths
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgContent, "image/svg+xml");
    const pathElements = doc.querySelectorAll("path");

    const extractedPaths: PathData[] = [];

    pathElements.forEach((path, index) => {
      const d = path.getAttribute("d");
      const stroke =
        path.getAttribute("stroke") ||
        pathColors[index % pathColors.length] ||
        "#000";
      const strokeWidth = parseFloat(path.getAttribute("stroke-width") || "2");
      const fill = path.getAttribute("fill") || "none";

      if (d) {
        // Create a temporary path element to calculate length
        const tempPath = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        tempPath.setAttribute("d", d);
        const length = tempPath.getTotalLength();
        extractedPaths.push({
          d,
          length,
          stroke,
          strokeWidth,
          fill,
          delay: index * (duration / pathElements.length),
        });
      }
    });

    setPaths(extractedPaths);
  }, [svgContent, pathColors, duration]);

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path.d}
            fill={path.fill}
            stroke={path.stroke}
            strokeWidth={path.strokeWidth}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: duration * 0.8,
              delay: delay + (path.delay ?? 0),
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: repeatDelay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
