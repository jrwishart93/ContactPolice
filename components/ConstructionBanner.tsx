"use client";

import React from "react";

const tapeStyle: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(-45deg, #facc15 0, #facc15 24px, #000000 24px, #000000 48px)",
};

export function ConstructionBanner() {
  const message =
    "Website under construction. You are viewing an early access version while we finish building the full service.";

  const TapeRow = () => (
    <div
      className="w-full text-center text-[11px] sm:text-sm font-semibold tracking-wide text-black py-2 shadow-md"
      style={tapeStyle}
    >
      <span className="bg-yellow-300/85 px-3 py-1 rounded-md inline-block max-w-[95%] sm:max-w-[80%]">
        {message}
      </span>
    </div>
  );

  return (
    <div className="w-full z-50">
      {/* Top tape row */}
      <TapeRow />

      {/* Small gap so the second strip sits slightly lower */}
      <div className="h-1 sm:h-1.5" />

      {/* Second tape row for extra visibility */}
      <TapeRow />

      {/* Optional small spacer below so content does not butt right up against the tape */}
      <div className="h-2 sm:h-3" />
    </div>
  );
}

// Temporary site wide notice.
// To remove this once the site is live, delete this component
// and remove <ConstructionBanner /> from app/layout.tsx.
