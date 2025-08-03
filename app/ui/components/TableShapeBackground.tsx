"use client";

import { useEffect, useMemo, useState } from "react";

const TableShapeBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const colors = useMemo(
    () => [
      "bg-red-400",
      "bg-red-500",
      "bg-red-600",
      "bg-blue-400",
      "bg-blue-500",
      "bg-blue-600",
      "bg-teal-400",
      "bg-teal-500",
      "bg-teal-600",
      "bg-green-400",
      "bg-green-500",
      "bg-green-600",
      "bg-purple-400",
      "bg-purple-500",
      "bg-purple-600",
      "bg-orange-400",
      "bg-orange-500",
      "bg-orange-600",
    ],
    []
  );

  const rows = 20;
  const cols = 40;

  // Simple seeded random function for consistent results
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const cells = useMemo(() => {
    if (!isClient) {
      // Return empty array during SSR
      return Array(rows)
        .fill(null)
        .map((_, i) =>
          Array(cols)
            .fill(null)
            .map((_, j) => ({
              id: `${i}-${j}`,
              color: "bg-transparent", // Default color during SSR
            }))
        );
    }

    const cellArray = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const seed = i * cols + j;
        const randomIndex = Math.floor(seededRandom(seed) * colors.length);
        row.push({
          id: `${i}-${j}`,
          color: colors[randomIndex],
        });
      }
      cellArray.push(row);
    }
    return cellArray;
  }, [colors, rows, cols, isClient]);

  // Show loading state or simplified version during SSR
  if (!isClient) {
    return (
      <div className="w-full h-full overflow-hidden relative">
        <div
          className="absolute top-0 left-0 transform origin-top -skew-x-[30deg]"
          style={{
            width: "135%",
            height: "100%",
          }}
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
              height: "100%",
            }}
          >
            {cells.flat().map((cell) => (
              <div
                key={cell.id}
                className="group relative border border-[rgba(60,60,60,0.21)]"
              ></div>
            ))}
          </div>
        </div>
        <div className="w-full h-full absolute top-0 left-0 pointer-events-none bg-radial from-transparent to-black from-30%" />
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div
        className="absolute top-0 left-0 transform origin-top -skew-x-[30deg]"
        style={{
          width: "135%",
          height: "100%",
        }}
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            height: "100%",
          }}
        >
          {cells.flat().map((cell) => (
            <div
              key={cell.id}
              className="group relative border border-[rgba(60,60,60,0.21)]"
            >
              <div
                className={`w-full h-full ${cell.color} opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 group-hover:transition-none`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 pointer-events-none bg-radial from-transparent to-black from-30%" />
    </div>
  );
};

export default TableShapeBackground;
