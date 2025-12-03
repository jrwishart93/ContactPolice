'use client';

import { type ReactNode, useMemo, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import { Search, ShieldAlert, Lock, ArrowUpRight } from 'lucide-react';
import LiquidBackground from '@/components/LiquidBackground';
import PoliceScotlandLogo from '@/components/PoliceScotlandLogo';

const transition = { type: 'spring', stiffness: 200, damping: 20 };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const officers = [
  { id: 'T329', name: 'J. Wishart', rank: 'Constable', collar: '329' },
  { id: 'T159', name: 'D. Niven', rank: 'Constable', collar: '159' },
  { id: 'T245', name: 'C. Beddows', rank: 'Constable', collar: '245' },
  { id: 'T368', name: 'A. Jardine', rank: 'Constable', collar: '368' },
  { id: 'T992', name: 'R. Sterling', rank: 'Sergeant', collar: '992' },
  { id: 'T114', name: 'M. Vance', rank: 'Inspector', collar: '114' },
  { id: 'T882', name: 'S. Holmes', rank: 'Constable', collar: '882' },
  { id: 'T404', name: 'Error Handler', rank: 'Cyber Unit', collar: '404' },
  { id: 'T007', name: 'J. Bond', rank: 'Commander', collar: '007' },
];

const glassBackground =
  'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)';
const borderGradient =
  'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05))';
const noiseSvg =
  "url('data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 160 160\\"><filter id=\\"n\\"><feTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.8\\" numOctaves=\\"4\\" stitchTiles=\\"stitch\\"/></filter><rect width=\\"100%\\" height=\\"100%\\" filter=\\"url(%23n)\\" opacity=\\"0.2\\"/></svg>')";

function Glass({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl ${className}`}
      style={{
        background: glassBackground,
        borderImageSlice: 1,
        borderImageSource: borderGradient,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: noiseSvg,
          opacity: 0.12,
          mixBlendMode: 'soft-light',
        }}
      />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.14),transparent_45%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function OfficerCard({
  id,
  name,
  collar,
  rank,
}: {
  id: string;
  name: string;
  collar: string;
  rank: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const spotlight = useMotionTemplate`radial-gradient(140px circle at ${mouseX}px ${mouseY}px, rgba(59,130,246,0.18), transparent 55%)`;

  return (
    <motion.div
      layoutId={id}
      layout
      whileHover={{ z: 10, scale: 1.02 }}
      transition={transition}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        mouseX.set(x);
        mouseY.set(y);
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;
        rotateX.set(((y - centerY) / centerY) * -4);
        rotateY.set(((x - centerX) / centerX) * 4);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className="group relative h-full"
      style={{ perspective: 1000 }}
    >
      <Glass
        className="h-full border-white/20 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.6)]"
      >
        <motion.div
          className="relative h-full p-6"
          style={{
            background: spotlight,
            transformStyle: 'preserve-3d',
            rotateX,
            rotateY,
          }}
          transition={transition}
        >
          <div className="flex items-start justify-between">
            <div className="rounded-full border border-white/10 bg-white/5 p-2 shadow-inner shadow-white/10">
              <ShieldAlert className="h-5 w-5 text-blue-200/60" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/50">{id}</span>
          </div>

          <div className="mt-10 space-y-3">
            <h3 className="font-space text-2xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              {name}
            </h3>
            <div className="flex items-center justify-between">
              <p className="font-mono text-sm uppercase text-white/60">
                {rank} | <span className="text-white/30">{collar}</span>
              </p>
              <ArrowUpRight className="h-5 w-5 text-white/30 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
            </div>
          </div>
        </motion.div>
      </Glass>
    </motion.div>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const filteredOfficers = useMemo(
    () =>
      officers.filter((officer) =>
        officer.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        officer.collar.toLowerCase().includes(searchQuery.toLowerCase()) ||
        officer.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  const title = 'Public Officer Directory';

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030305] text-white selection:bg-blue-500/30">
      <LiquidBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%)] opacity-50" />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_40%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transition, delay: 0.2 }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 pt-28 md:px-8 md:pt-32 lg:pt-40">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <motion.div
            className="relative w-full lg:w-[60%]"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-white/70 shadow-[0_10px_50px_-30px_rgba(0,0,0,1)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              System Operational
            </motion.div>

            <motion.div
              className="relative flex items-center gap-4"
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ ...transition, delay: 0.35 }}
            >
              <motion.div
                drag
                dragConstraints={{ left: -20, right: 20, top: -10, bottom: 10 }}
                dragElastic={0.08}
                className="relative"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.45 }}
                style={{ filter: 'drop-shadow(0px 20px 60px rgba(0,0,0,0.35))' }}
              >
                <motion.div
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-3xl"
                  style={{ background: glassBackground }}
                  whileHover={{ rotateX: -4, rotateY: 4 }}
                  transition={transition}
                >
                  <PoliceScotlandLogo className="w-28 md:w-36" />
                </motion.div>
              </motion.div>

              <div className="flex-1 space-y-4">
                <motion.h1
                  className="font-space text-4xl font-black leading-tight text-transparent md:text-6xl lg:text-7xl"
                  style={{
                    backgroundClip: 'text',
                    backgroundImage: 'linear-gradient(180deg,#fff,rgba(255,255,255,0.45))',
                  }}
                  initial="initial"
                  animate="animate"
                  variants={stagger}
                >
                  {title.split('').map((char, index) => (
                    <motion.span
                      key={`${char}-${index}`}
                      className="inline-block"
                      variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                      }}
                      transition={{ ...transition, delay: 0.1 + index * 0.03 }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.p
                  className="max-w-xl font-mono text-base leading-relaxed text-white/60"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transition, delay: 0.8 }}
                >
                  Securely access contact details for serving officers. Direct messaging channels and live credential verification ensure you are speaking with an authenticated authority.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, scale: 0.7, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ ...transition, delay: 1 }}
            >
              <Glass className={`max-w-3xl border-white/15 ${isFocused ? 'shadow-[0_0_0_1px_rgba(59,130,246,0.25),0_15px_60px_-35px_rgba(59,130,246,0.6)]' : ''}`}>
                <motion.div
                  className="relative flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={transition}
                >
                  <motion.div
                    animate={{
                      opacity: isFocused ? [0.6, 1, 0.6] : 0.5,
                      scale: isFocused ? [1, 1.05, 1] : 1,
                    }}
                    transition={{ duration: isFocused ? 1.6 : 0.3, repeat: isFocused ? Infinity : 0, ease: 'easeInOut' }}
                    className="rounded-full border border-white/10 bg-white/10 p-2 text-white/60"
                  >
                    <Search className="h-5 w-5" />
                  </motion.div>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Search by collar number, ID, or name..."
                    className="w-full border-none bg-transparent font-mono text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                  <div className="flex h-11 items-center rounded-full border border-white/10 bg-gradient-to-r from-white/20 to-white/5 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 shadow-inner shadow-white/20">
                    Locate
                  </div>
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isFocused ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ boxShadow: '0 0 0 1px rgba(59,130,246,0.3), 0 0 60px 10px rgba(59,130,246,0.12)' }}
                  />
                </motion.div>
              </Glass>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full lg:w-[40%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.6 }}
          >
            <Glass className="border-white/15 p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">Signal</span>
                <span className="font-mono text-xs text-emerald-300">Encrypted</span>
              </div>
              <div className="mt-6 space-y-4 text-sm text-white/70">
                <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                  <span className="font-space text-base font-semibold text-white">Command</span>
                  <span className="font-mono text-xs text-white/50">DIRECT LINK</span>
                </div>
                <div className="rounded-2xl border border-white/5 bg-black/30 p-4 font-mono text-xs leading-relaxed text-white/60 shadow-inner shadow-white/5">
                  Initiate secure channel with a verified officer. Identity validation is enforced through biometric and collar number pairing.
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="text-white/50">Latency</div>
                    <div className="font-space text-xl font-semibold text-white">12ms</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="text-white/50">Nodes</div>
                    <div className="font-space text-xl font-semibold text-white">16</div>
                  </div>
                </div>
              </div>
            </Glass>
          </motion.div>
        </div>

        <section className="relative space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-space text-2xl font-bold text-white md:text-3xl">Active Personnel</h2>
            <div className="font-mono text-xs text-white/40">UPDATED: {new Date().toLocaleTimeString()}</div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            transition={transition}
          >
            <AnimatePresence>
              {filteredOfficers.map((officer) => (
                <motion.div
                  key={officer.id}
                  layoutId={officer.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={transition}
                >
                  <OfficerCard {...officer} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <Glass className="border-white/10 p-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-space text-2xl font-semibold text-white">Secure Contact. Verified Identity.</h3>
                <p className="font-mono text-sm leading-relaxed text-white/60">
                  The old way involved waiting on hold via 101. The new way is direct, digital, and transparent. Our platform ensures you are speaking to a verified officer.
                </p>
                <div className="flex flex-col gap-3 text-sm text-white/70">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/70">
                      <Lock className="h-4 w-4" />
                    </div>
                    End-to-End Encrypted Forms
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/70">
                      <ShieldAlert className="h-4 w-4" />
                    </div>
                    Instant Badge Verification
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(59,130,246,0.22),transparent_45%)]" />
                <div className="relative space-y-4 text-sm text-white/70 opacity-90">
                  <div className="h-3 w-2/3 rounded-full bg-white/15" />
                  <div className="h-3 w-1/2 rounded-full bg-white/10" />
                  <div className="mt-8 rounded-xl border border-white/10 bg-black/30 p-4">
                    <div className="h-3 w-3/4 rounded-full bg-white/15" />
                    <div className="mt-3 h-3 w-2/4 rounded-full bg-white/8" />
                    <div className="mt-3 h-3 w-5/6 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </Glass>
        </section>
      </div>
    </main>
  );
}
