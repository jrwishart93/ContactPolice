"use client";

import React from "react";

// Temporary site wide notice.
// To remove this once the site is live, delete this component
// and remove <ConstructionBanner /> from app/layout.tsx.
export function ConstructionBanner() {
  return (
    <div className="w-full z-50">
      <div
        className="w-full text-center text-xs sm:text-sm font-semibold tracking-wide text-black py-2 shadow-md"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #facc15 0, #facc15 20px, #000000 20px, #000000 40px)",
        }}
      >
        <span className="bg-yellow-300/80 px-3 py-1 rounded-md inline-block">
          Website under construction. Please take this as an early access version while we finish building the full service.
        </span>
      </div>
    </div>
  );
}
