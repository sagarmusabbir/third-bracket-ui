import React from "react";

// components/AnimatedGrid.tsx
export const AnimatedGrid = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-0"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id="grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
          className="animate-grid-movement"
        >
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-slate-200 dark:text-gray-700"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
};
