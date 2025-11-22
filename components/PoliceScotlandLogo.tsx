'use client';

import { motion } from 'framer-motion';

export const PoliceScotlandLogo = () => {
  // Animation Variants for the drawing effect
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.2, type: 'spring', duration: 2, bounce: 0 },
        opacity: { delay: i * 0.2, duration: 0.01 },
      },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center group cursor-pointer select-none">
      {/* THE CREST SVG */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-2">
        {/* Glowing Backlight */}
        <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full opacity-20 group-hover:opacity-50 transition-opacity duration-700" />

        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 200 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        >
          {/* 1. THE CROWN (Top) - Simplified Geometric */}
          <motion.path
            d="M70 50 L70 30 L100 15 L130 30 L130 50 H70Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            custom={0}
            className="fill-transparent group-hover:fill-white/10 transition-colors duration-500"
          />
          <motion.path
            d="M100 15 V5 M95 5 H105 M100 2 V8"
            stroke="white"
            strokeWidth="3"
            variants={draw}
            custom={0.5}
          />

          {/* 2. THE THISTLE (Center) - The "Data Node" */}
          {/* Bulb */}
          <motion.path
            d="M80 90 C 80 110, 120 110, 120 90"
            stroke="white"
            strokeWidth="3"
            variants={draw}
            custom={1}
            className="group-hover:stroke-blue-400 transition-colors"
          />
          {/* Cross-hatch / Net texture inside thistle */}
          <motion.path
            d="M85 92 L115 108 M115 92 L85 108"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            variants={draw}
            custom={1.2}
          />
          {/* Spikes (Top of thistle) */}
          <motion.path
            d="M80 90 L85 65 L90 80 L95 60 L100 85 L105 60 L110 80 L115 65 L120 90"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
            variants={draw}
            custom={1.5}
          />

          {/* 3. THE LEAVES (Sides) - Stylized as Lightning/Signal */}
          {/* Left Leaf */}
          <motion.path
            d="M75 120 L50 100 L60 85 L40 70 L65 55"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            custom={2}
          />
          {/* Right Leaf */}
          <motion.path
            d="M125 120 L150 100 L140 85 L160 70 L135 55"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            custom={2.2}
          />

          {/* 4. THE BANNER (Bottom) - "Semper Vigilo" holder */}
          <motion.path
            d="M50 140 Q 100 170 150 140 L 140 160 Q 100 190 60 160 Z"
            stroke="white"
            strokeWidth="2"
            variants={draw}
            custom={3}
            className="fill-black/50"
          />

          {/* The Motto Text (SVG Text to ensure alignment) */}
          <motion.text
            x="100"
            y="163"
            textAnchor="middle"
            fill="white"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="0.1em"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            SEMPER VIGILO
          </motion.text>
        </motion.svg>
      </div>

      {/* TEXT BELOW LOGO */}
      <div className="text-center z-10">
        <h1 className="font-space font-bold text-2xl md:text-3xl tracking-tighter text-white group-hover:text-blue-50 transition-colors">
          POLICE SCOTLAND
        </h1>
        <div className="flex items-center justify-center gap-2 mt-1">
          <div className="h-[1px] w-8 bg-blue-500/50" />
          <p className="font-mono text-xs text-blue-400 uppercase tracking-[0.3em]">
            Keeping People Safe
          </p>
          <div className="h-[1px] w-8 bg-blue-500/50" />
        </div>
      </div>
    </div>
  );
};

export default PoliceScotlandLogo;
