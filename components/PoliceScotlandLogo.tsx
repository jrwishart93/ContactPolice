'use client';

import { motion } from 'framer-motion';

export const PoliceScotlandLogo = () => {
  // Drawing animation configuration
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.05, type: "spring", duration: 2.5, bounce: 0 },
        opacity: { delay: i * 0.05, duration: 0.01 }
      }
    })
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 select-none">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative w-64 md:w-80 flex flex-col items-center"
      >
        
        {/* Subtle Blue Atmosphere Glow (Behind) */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-blue-900/20 blur-[80px] rounded-full pointer-events-none" />

        <svg
          viewBox="0 0 400 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-2xl"
          aria-label="Police Scotland Crest"
        >
          {/* DEFINITIONS: Reusable Patterns */}
          <defs>
            {/* Diamond Scale Pattern for Thistle Body */}
            <pattern id="diamondScales" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="18" height="18" fill="none" stroke="white" strokeWidth="1.5" />
            </pattern>
          </defs>

          {/* --- 1. THE LEAVES (The Wreath) --- */}
          {/* High-detail serrated paths to match the image exactly */}
          <g id="leaves">
            {/* Left Leaf - 5 distinct spikes */}
            <motion.path
              d="M200 400 
                 L180 390 L130 360 L160 340 
                 L120 300 L155 280 
                 L115 230 L155 220 
                 L125 170 L165 180 
                 L160 130 L200 160" 
              stroke="white" strokeWidth="3" fill="black" strokeLinejoin="miter" strokeMiterlimit="10"
              variants={draw} custom={3}
            />
            {/* Right Leaf - Mirror of Left */}
            <motion.path
              d="M200 400 
                 L220 390 L270 360 L240 340 
                 L280 300 L245 280 
                 L285 230 L245 220 
                 L275 170 L235 180 
                 L240 130 L200 160"
              stroke="white" strokeWidth="3" fill="black" strokeLinejoin="miter" strokeMiterlimit="10"
              variants={draw} custom={3}
            />
          </g>

          {/* --- 2. THE THISTLE (Centerpiece) --- */}
          <g id="thistle">
            {/* The Top Brush (Fan) */}
            <motion.path
              d="M165 160 Q 160 130, 200 120 Q 240 130, 235 160 Z"
              stroke="white" strokeWidth="2.5" fill="black"
              variants={draw} custom={1}
            />
            {/* Brush Vertical Details */}
            <motion.path d="M200 120 V160 M185 125 L190 160 M215 125 L210 160" stroke="white" strokeWidth="1.5" variants={draw} custom={1.2} />

            {/* The Bulb (Body) */}
            {/* Using mask to apply diamond pattern only inside the bulb */}
            <mask id="bulbMask">
              <path d="M165 160 C 150 200, 150 250, 200 280 C 250 250, 250 200, 235 160 Z" fill="white" />
            </mask>
            
            {/* Bulb Outline */}
            <motion.path
              d="M165 160 C 150 200, 150 250, 200 280 C 250 250, 250 200, 235 160 Z"
              stroke="white" strokeWidth="3" fill="black"
              variants={draw} custom={1.5}
            />
            
            {/* The Lattice Pattern Fill */}
            <motion.rect 
              x="150" y="160" width="100" height="120" 
              fill="url(#diamondScales)" 
              mask="url(#bulbMask)"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            />

            {/* The Sepals (Spikes at bottom of bulb) */}
            <motion.path 
               d="M175 265 L180 290 L200 280 L220 290 L225 265"
               stroke="white" strokeWidth="2" fill="black"
               variants={draw} custom={2}
            />
          </g>

          {/* --- 3. THE CROWN (St Edward's / Scottish Hybrid) --- */}
          <g id="crown" transform="translate(0, -10)">
             {/* Base Rim */}
             <motion.path 
               d="M150 110 L145 90 H255 L250 110 H150 Z" 
               stroke="white" strokeWidth="2.5" fill="black"
               variants={draw} custom={0}
             />
             {/* Jewels on Rim */}
             <circle cx="170" cy="100" r="3" fill="white" />
             <circle cx="200" cy="100" r="4" fill="white" />
             <circle cx="230" cy="100" r="3" fill="white" />

             {/* Arches */}
             <motion.path
               d="M145 90 Q 140 40, 200 30 Q 260 40, 255 90"
               stroke="white" strokeWidth="2.5" fill="none"
               variants={draw} custom={0.2}
             />
             <motion.path
               d="M200 30 V90" stroke="white" strokeWidth="1" variants={draw} custom={0.3}
             />

             {/* Orb & Cross at Top */}
             <circle cx="200" cy="25" r="6" fill="black" stroke="white" strokeWidth="2" />
             <motion.path 
               d="M200 19 V5 M194 12 H206" 
               stroke="white" strokeWidth="2.5"
               variants={draw} custom={0.4}
             />
          </g>

          {/* --- 4. THE BANNER --- */}
          <g id="banner">
            <motion.path
              d="M120 380 L120 405 L200 425 L280 405 L280 380 L200 400 L120 380 Z"
              stroke="white" strokeWidth="2.5" fill="black"
              variants={draw} custom={4}
            />
            <motion.text
              x="200" y="408" textAnchor="middle"
              fill="white" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="bold" letterSpacing="0.2em"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
            >
              SEMPER VIGILO
            </motion.text>
          </g>

          {/* --- 5. TYPOGRAPHY (Matched Hierarchy) --- */}
          
          {/* "POLICE" - Extra Bold, Sans Serif */}
          <text x="200" y="475" textAnchor="middle" fill="white" fontSize="58" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" letterSpacing="0.02em">
            POLICE
          </text>
          
          {/* "SCOTLAND" - Regular weight, same width */}
          <text x="200" y="520" textAnchor="middle" fill="white" fontSize="58" fontFamily="Arial, Helvetica, sans-serif" fontWeight="400" letterSpacing="0.02em">
            SCOTLAND
          </text>

          {/* Horizontal Rule */}
          <motion.line 
             x1="50" y1="535" x2="350" y2="535" 
             stroke="white" strokeWidth="2"
             initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 1 }}
          />

          {/* Tagline */}
          <text x="200" y="565" textAnchor="middle" fill="white" fontSize="32" fontFamily="Arial, Helvetica, sans-serif" fontWeight="400">
            Keeping people safe
          </text>

        </svg>
      </motion.div>
    </div>
  );
};

export default PoliceScotlandLogo;
