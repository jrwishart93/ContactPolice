'use client';

import { motion } from 'framer-motion';

export const PoliceScotlandLogo = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0, fillOpacity: 0, strokeOpacity: 0 },
    visible: { 
      pathLength: 1, 
      strokeOpacity: 1,
      fillOpacity: 1,
      transition: { 
        pathLength: { duration: 3, ease: "easeInOut" }, // Slow draw
        strokeOpacity: { duration: 0.5 },
        fillOpacity: { duration: 1, delay: 2.5 } // Fill after draw finishes
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, delay: 3 } 
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="flex flex-col items-center justify-center p-8 select-none group cursor-pointer perspective-1000"
    >
      
      {/* Container with interactive hover effects */}
      <motion.div 
        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-72 h-auto md:w-96 flex flex-col items-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        
        {/* 1. Dynamic Atmosphere Glow (Behind) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700 animate-pulse" />

        {/* 2. THE OFFICIAL CREST SVG */}
        <svg
          viewBox="0 0 300 353"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] z-10"
        >
          {/* Definitions for gradients/masks */}
          <defs>
            <linearGradient id="crestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#e0f2fe" /> {/* Light Blue Tint */}
              <stop offset="100%" stopColor="#93c5fd" /> {/* Metallic Blue */}
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* 
            The Exact Path Data 
            Transform: Inverts the Y-axis (scale -0.1) and moves it down (translate 353) to correct Potrace output.
          */}
          <motion.g transform="translate(0,353) scale(0.1,-0.1)">
             <motion.path 
               variants={pathVariants}
               d="M0 1765 l0 -1765 1500 0 1500 0 0 1765 0 1765 -1500 0 -1500 0 0 -1765z m1450 1598 c12 -16 24 -27 26 -25 12 7 24 0 24 -13 0 -9 11 -20 24 -24 13 -5 26 -17 30 -27 7 -19 -10 -44 -30 -44 -8 0 -19 -11 -24 -25 -6 -15 -17 -25 -30 -25 -11 0 -20 -4 -20 -10 0 -5 5 -10 10 -10 6 0 19 -14 30 -32 19 -32 18 -69 -3 -96 -13 -17 -6 -22 21 -15 15 3 22 13 22 29 l0 24 43 -22 c23 -12 66 -27 95 -34 53 -12 53 -12 63 14 l10 27 32 -35 c18 -19 53 -49 79 -67 41 -28 48 -30 65 -18 28 22 33 18 33 -21 0 -20 5 -54 12 -75 11 -37 13 -39 54 -39 l42 0 -21 -52 c-12 -29 -25 -54 -29 -56 -5 -2 -8 -8 -8 -12 0 -8 -22 -57 -82 -187 -8 -17 -6 -27 11 -49 26 -32 27 -66 4 -105 -14 -24 -23 -28 -43 -24 -147 32 -792 31 -941 0 -23 -5 -29 -1 -43 30 -19 40 -15 78 11 107 17 19 22 3 -79 217 -32 68 -58 126 -58 129 0 2 18 2 39 -1 36 -4 40 -2 50 22 6 14 13 49 17 76 7 60 9 63 32 42 17 -15 21 -15 58 10 21 14 58 44 81 66 l42 40 11 -27 c7 -19 15 -26 28 -23 9 3 30 8 45 11 16 4 51 17 78 31 l49 23 0 -23 c0 -14 7 -25 19 -28 28 -7 32 2 16 27 -21 32 -10 77 27 109 l32 27 -26 0 c-26 0 -53 22 -42 33 4 4 -4 11 -18 16 -26 10 -42 36 -32 53 3 5 17 13 31 19 13 5 22 13 18 18 -3 6 5 15 17 22 13 6 31 20 41 30 24 25 32 24 57 -8z m-626 -745 c-9 -31 -92 -245 -110 -285 -20 -45 -18 -53 14 -42 41 13 156 38 159 35 2 -1 -48 -56 -110 -120 l-114 -118 -53 106 c-29 59 -54 105 -57 103 -2 -2 -8 -85 -13 -183 -22 -409 -30 -558 -34 -561 -2 -2 -36 17 -77 41 -40 25 -75 44 -76 43 -1 -1 11 -29 27 -62 30 -64 82 -175 123 -265 13 -30 44 -95 68 -145 42 -87 44 -94 49 -208 4 -85 2 -117 -7 -117 -6 0 -13 3 -15 8 -2 5 -324 250 -367 279 -17 11 15 8 79 -8 41 -10 78 -19 82 -19 4 0 -13 37 -38 83 -24 45 -61 116 -81 157 -21 41 -40 77 -43 80 -3 3 -30 55 -59 115 -30 61 -66 127 -79 148 -13 22 -21 41 -19 44 3 2 41 -23 85 -56 45 -34 83 -61 86 -61 3 0 4 19 1 43 -2 23 -7 110 -10 192 -3 83 -7 177 -10 210 -12 162 -15 346 -6 341 5 -4 33 -53 62 -111 30 -58 56 -105 59 -105 8 0 40 90 124 348 12 35 26 43 26 15 0 -19 31 -155 36 -162 2 -2 28 18 57 45 29 27 88 81 132 119 43 39 83 75 89 82 18 20 28 15 20 -9z m1307 -78 c168 -153 177 -161 182 -153 3 4 13 45 23 91 9 45 20 82 23 82 3 0 35 -88 70 -195 36 -108 68 -192 72 -188 4 5 33 59 64 121 32 62 59 111 62 109 3 -4 -6 -242 -27 -627 -4 -91 -7 -166 -5 -168 1 -2 39 25 84 59 85 64 107 70 74 22 -11 -15 -65 -116 -120 -223 -56 -107 -120 -232 -144 -277 -24 -45 -41 -84 -38 -88 4 -3 39 3 80 14 40 12 74 19 76 17 3 -2 -60 -52 -139 -112 -203 -153 -223 -168 -226 -176 -2 -5 -9 -8 -15 -8 -9 0 -11 31 -9 112 l4 113 63 135 c34 74 80 173 101 220 21 47 52 113 70 148 17 34 29 64 25 66 -3 2 -37 -16 -74 -41 -38 -25 -71 -43 -73 -40 -3 2 -7 44 -9 93 -8 147 -36 618 -38 639 -1 12 -24 -23 -57 -88 l-55 -108 -114 116 c-63 64 -112 117 -110 119 4 4 83 -13 157 -33 17 -5 32 -6 32 -3 0 3 -26 73 -59 156 -75 193 -77 201 -58 190 8 -5 57 -47 108 -94z"
               fill="url(#crestGradient)"
               stroke="white"
               strokeWidth="20"
             />
          </motion.g>
        </svg>

        {/* 3. TYPOGRAPHY OVERLAY */}
        <motion.div 
           variants={textVariants}
           className="mt-4 text-center z-20"
        >
          <div className="relative inline-block">
            <h1 className="font-space font-black text-4xl md:text-6xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl leading-none">
              POLICE
            </h1>
          </div>
          <h2 className="font-space font-light text-4xl md:text-6xl tracking-tight text-white/90 drop-shadow-2xl leading-none -mt-2">
            SCOTLAND
          </h2>
          
          <div className="flex items-center justify-center gap-3 my-5 opacity-80">
             <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-400" />
             <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_#60a5fa]" />
             <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-blue-200/80 font-bold">
            Keeping People Safe
          </p>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default PoliceScotlandLogo;
