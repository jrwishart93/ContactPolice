'use client';

import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.1, type: 'spring', duration: 2, bounce: 0 },
      opacity: { delay: i * 0.1, duration: 0.01 },
    },
  }),
};

export default function PoliceScotlandLogo() {
  return (
    <div className="flex flex-col items-center justify-center p-4 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-64 h-auto md:w-80 flex flex-col items-center"
      >
        <div className="absolute top-10 inset-x-0 h-40 bg-blue-900/30 blur-[60px] rounded-full pointer-events-none" />

        <motion.svg
          viewBox="0 0 300 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-2xl"
          initial="hidden"
          animate="visible"
        >
          <g id="crown">
            <motion.path
              d="M110 60 H190 L195 45 H105 L110 60 Z"
              stroke="white"
              strokeWidth="2"
              fill="none"
              variants={draw}
              custom={0}
            />
            <motion.path
              d="M105 45 Q 100 15, 150 5 Q 200 15, 195 45"
              stroke="white"
              strokeWidth="2"
              fill="none"
              variants={draw}
              custom={0.2}
            />
            <motion.path
              d="M150 5 V15 M145 10 H155"
              stroke="white"
              strokeWidth="2"
              variants={draw}
              custom={0.3}
            />
            <motion.path
              d="M125 45 Q 135 25, 150 25 Q 165 25, 175 45"
              stroke="white"
              strokeWidth="1.5"
              variants={draw}
              custom={0.4}
            />
          </g>

          <g id="thistle">
            <motion.path
              d="M125 75 Q 115 95, 130 105 H 170 Q 185 95, 175 75"
              stroke="white"
              strokeWidth="2"
              fill="none"
              variants={draw}
              custom={1}
            />
            {[135, 140, 145, 150, 155, 160, 165].map((x, i) => (
              <motion.line
                key={i}
                x1={x}
                y1="105"
                x2={x + (i - 3) * 1.5}
                y2="80"
                stroke="white"
                strokeWidth="1"
                variants={draw}
                custom={1.2 + i * 0.05}
              />
            ))}

            <motion.path
              d="M130 105 C 120 130, 120 155, 150 170 C 180 155, 180 130, 170 105"
              stroke="white"
              strokeWidth="2.5"
              fill="#000"
              variants={draw}
              custom={1.5}
            />

            <defs>
              <clipPath id="bulbClip">
                <path d="M130 105 C 120 130, 120 155, 150 170 C 180 155, 180 130, 170 105 Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#bulbClip)" stroke="white" strokeWidth="1" strokeOpacity="0.7">
              <motion.path
                d="M120 120 L160 170 M120 140 L145 175 M130 100 L180 160 M150 100 L185 140"
                variants={draw}
                custom={2}
              />
              <motion.path
                d="M180 120 L140 170 M180 140 L155 175 M170 100 L120 160 M150 100 L115 140"
                variants={draw}
                custom={2.2}
              />
            </g>
          </g>

          <g id="leaves">
            <motion.path
              d="M120 160 L100 155 L110 140 L90 130 L105 115 L85 100 L110 80"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinejoin="bevel"
              variants={draw}
              custom={2.5}
            />
            <motion.path
              d="M180 160 L200 155 L190 140 L210 130 L195 115 L215 100 L190 80"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinejoin="bevel"
              variants={draw}
              custom={2.5}
            />
          </g>

          <motion.path
            d="M90 180 L85 195 H215 L210 180 Q 150 210 90 180 Z"
            stroke="white"
            strokeWidth="2"
            fill="black"
            variants={draw}
            custom={3}
          />
          <motion.text
            x="150"
            y="196"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontFamily="serif"
            fontWeight="bold"
            letterSpacing="0.2em"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            SEMPER VIGILO
          </motion.text>

          <text
            x="150"
            y="245"
            textAnchor="middle"
            fill="white"
            fontSize="42"
            fontFamily="sans-serif"
            fontWeight="bold"
            letterSpacing="0.05em"
          >
            POLICE
          </text>

          <text
            x="150"
            y="285"
            textAnchor="middle"
            fill="white"
            fontSize="42"
            fontFamily="sans-serif"
            fontWeight="300"
            letterSpacing="0.05em"
          >
            SCOTLAND
          </text>

          <motion.line
            x1="50"
            y1="300"
            x2="250"
            y2="300"
            stroke="white"
            strokeWidth="1.5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          />

          <text x="150" y="330" textAnchor="middle" fill="white" fontSize="24" fontFamily="sans-serif" fontWeight="400">
            Keeping people safe
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
}
