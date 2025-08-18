"use client";

import { useEffect, useRef, useState } from "react";

const ShapeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [triangleCount, setTriangleCount] = useState(0);

  useEffect(() => {
    const calculateTriangles = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const triangleWidth = containerWidth / 40;
        setTriangleCount(Math.floor(containerWidth / triangleWidth));
      }
    };

    calculateTriangles();
    window.addEventListener("resize", calculateTriangles);
    return () => window.removeEventListener("resize", calculateTriangles);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: 20 }).map((_, rowIndex) => (
          <div
            key={`top-${rowIndex}`}
            className="w-full h-[5%] max-h-[100px] flex"
          >
            {Array.from({ length: triangleCount }).map((_, triIndex) => (
              <span
                key={`top-tri-${triIndex}`}
                className="flex-1 h-full bg-red-500 [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] 
                  opacity-0 hover:opacity-100 
                  z-10"
              />
            ))}
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-full transform rotate-180 translate-x-[33.5px]">
        {Array.from({ length: 20 }).map((_, rowIndex) => (
          <div
            key={`bottom-${rowIndex}`}
            className="w-full h-[5%] max-h-[100px] flex"
          >
            {Array.from({ length: triangleCount }).map((_, triIndex) => (
              <span
                key={`bottom-tri-${triIndex}`}
                className="flex-1 h-full bg-green-500 [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] 
                  opacity-0 hover:opacity-100
                  z-20"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapeBackground;
