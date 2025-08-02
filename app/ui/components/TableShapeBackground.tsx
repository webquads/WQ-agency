"use client";

import { useMemo } from "react";

const TableShapeBackground = () => {
  // Pre-calculate colors to avoid repeated calculations
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

  // Significantly reduce the grid size for better performance
  const rows = 35; // Reduced from 55
  const cols = 45; // Reduced from 90

  // Pre-generate all cells with colors to avoid calculations during render
  const cells = useMemo(() => {
    const cellArray = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push({
          id: `${i}-${j}`,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      cellArray.push(row);
    }
    return cellArray;
  }, [colors, rows, cols]);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div
        className="absolute top-0 left-0 transform origin-top -skew-x-[40deg]"
        style={{
          width: "150%", // Reduced from 300%
          height: "150%", // Reduced from 300%
        }}
      >
        <div
          className="grid gap-px"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            height: "100%",
          }}
        >
          {cells.flat().map((cell) => (
            <div
              key={cell.id}
              className="group relative border border-opacity-10"
            >
              <div
                className={`w-full h-full ${cell.color} opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-hover:transition-none`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 pointer-events-none bg-gradient-radial from-transparent from-30% to-black" />
    </div>
  );
};

export default TableShapeBackground;
