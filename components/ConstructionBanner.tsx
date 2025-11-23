"use client";

import React from "react";

const tapeStyle: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(-45deg, #facc15 0, #facc15 24px, #000000 24px, #000000 48px)",
};

export function ConstructionBanner() {
  const message =
    "Website under construction. You are viewing an early access preview while we finish building the full service.";

  const subtext =
    "Expect missing data and do not rely on this site for emergencies or official communication.";

  const TapeRow = ({ children }: { children: React.ReactNode }) => (
    <div
      className="w-full text-center text-[11px] sm:text-sm font-semibold tracking-wide text-black py-2 shadow-md"
      style={tapeStyle}
    >
      <span className="bg-yellow-300/85 px-3 py-1 rounded-md inline-block max-w-[95%] sm:max-w-[80%]">
        {children}
      </span>
    </div>
  );

  return (
    <div className="w-full sticky top-0 z-50 shadow-[0_6px_12px_rgba(0,0,0,0.35)]">
      {/* Top tape row */}
      <TapeRow>
        <span className="mr-2" aria-hidden>
          ⚠️
        </span>
        {message}
      </TapeRow>

      {/* Small gap so the second strip sits slightly lower */}
      <div className="h-1 sm:h-1.5" />

      {/* Second tape row for extra visibility */}
      <TapeRow>
        <span className="mr-2" aria-hidden>
          🚧
        </span>
        {subtext}
      </TapeRow>

      {/* Optional small spacer below so content does not butt right up against the tape */}
      <div className="h-3 sm:h-4 bg-black/70 px-4 py-2 text-center text-[12px] sm:text-sm uppercase tracking-[0.15em] text-yellow-200 font-bold border-t border-b border-yellow-300/60">
        <span className="mr-2" aria-hidden>
          ⏳
        </span>
        Under construction — features may change without notice
      </div>
    </div>
  );
}

// Temporary site wide notice.
// To remove this once the site is live, delete this component
// and remove <ConstructionBanner /> from app/layout.tsx.
