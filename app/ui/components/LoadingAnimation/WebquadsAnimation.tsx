"use client";

import { FC } from "react";

type Props = {
  className?: string;
  duration?: string; // e.g. "3s", "1.5s"
};

const WebQuadsLogo: FC<Props> = ({ className = "w-24", duration = "2s" }) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Replace the <path> below with the actual SVG paths from your PNG */}
    {/* ↓↓↓  Example placeholder (4 rounded squares)  ↓↓↓ */}
    <g strokeWidth="0">
      <rect
        x="64"
        y="64"
        width="160"
        height="160"
        rx="24"
        className="fill-blue-500"
      />
      <rect
        x="288"
        y="64"
        width="160"
        height="160"
        rx="24"
        className="fill-purple-500"
      />
      <rect
        x="64"
        y="288"
        width="160"
        height="160"
        rx="24"
        className="fill-green-500"
      />
      <rect
        x="288"
        y="288"
        width="160"
        height="160"
        rx="24"
        className="fill-yellow-400"
      />
    </g>

    {/* === Animation layer === */}
    <style>{`
      @keyframes pop {
        0%   { transform: scale(0.6) rotate(-4deg); opacity: 0; }
        60%  { transform: scale(1.05) rotate(0deg); opacity: 1; }
        100% { transform: scale(1)    rotate(0deg); opacity: 1; }
      }

      .quad {
        animation: pop ${duration} ease-out infinite;
        transform-origin: center;
      }

      /* stagger each square */
      .quad:nth-of-type(1) { animation-delay: 0s; }
      .quad:nth-of-type(2) { animation-delay: 0.1s; }
      .quad:nth-of-type(3) { animation-delay: 0.2s; }
      .quad:nth-of-type(4) { animation-delay: 0.3s; }
    `}</style>

    {/* apply the className to every rect */}
    <rect className="quad" x="64" y="64" width="160" height="160" rx="24" />
    <rect className="quad" x="288" y="64" width="160" height="160" rx="24" />
    <rect className="quad" x="64" y="288" width="160" height="160" rx="24" />
    <rect className="quad" x="288" y="288" width="160" height="160" rx="24" />
  </svg>
);

export default WebQuadsLogo;
