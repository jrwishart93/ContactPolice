'use client';

import { motion } from 'framer-motion';
import { Search, ShieldAlert, Lock, ChevronRight, Menu } from 'lucide-react';
import LiquidBackground from '@/components/LiquidBackground';
import { OfficerCard } from '@/components/OfficerCard';
import PoliceScotlandLogo from '@/components/PoliceScotlandLogo';

// Mock Data
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

export default function HomeClient() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#030305]">
      <LiquidBackground />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030305]/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
               <div className="w-3 h-3 bg-black rounded-full animate-pulse" />
            </div>
            <span className="font-space font-bold text-lg tracking-tight">
              ContactPolice<span className="text-white/40">.uk</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Directory</a>
            <a href="#" className="hover:text-white transition-colors">Report</a>
            <a href="#" className="hover:text-white transition-colors">Emergency</a>
          </div>
          <button className="md:hidden text-white">
            <Menu />
          </button>
        </div>
      </nav>

      <section className="relative z-10 pt-40 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-mono text-white/70 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              System Operational
            </div>

            <h1 className="font-space font-bold text-5xl md:text-7xl leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6">
              PUBLIC OFFICER<br />
              DIRECTORY
            </h1>

            <p className="font-mono text-lg text-white/50 max-w-xl leading-relaxed mb-12">
              Securely access contact details for serving officers. Direct messaging channels and verifying credentials in real-time.
            </p>

            <div className="max-w-xl relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500" />
              <div className="relative flex items-center bg-black border border-white/10 rounded-xl overflow-hidden p-2">
                <Search className="w-6 h-6 text-white/40 ml-3" />
                <input type="text" placeholder="Search by collar number (e.g. T329)..." className="w-full bg-transparent border-none outline-none text-white px-4 py-3 font-mono placeholder:text-white/20" />
                <button className="px-6 py-2 bg-white text-black font-bold font-space rounded-lg hover:bg-gray-200 transition-colors">Locate</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 mt-12 md:mt-16 flex justify-center">
        <PoliceScotlandLogo />
      </div>

      <section className="relative z-10 py-20 px-6 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-space text-3xl font-bold">Active Personnel</h2>
            <div className="font-mono text-xs text-white/40">UPDATED: {new Date().toLocaleTimeString()}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {officers.map((officer, index) => (
              <OfficerCard key={officer.id} {...officer} delay={index * 0.1} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest border-b border-transparent hover:border-white pb-1">
              View Full Database
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-space text-4xl font-bold mb-6">Secure Contact.<br/>Verified Identity.</h2>
            <p className="text-white/50 leading-relaxed mb-8">The old way involved waiting on hold via 101. The new way is direct, digital, and transparent. Our platform ensures you are speaking to a verified officer.</p>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-4 text-white/80"><div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center border border-white/10"><Lock className="w-3 h-3" /></div>End-to-End Encrypted Forms</li>
              <li className="flex items-center gap-4 text-white/80"><div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center border border-white/10"><ShieldAlert className="w-3 h-3" /></div>Instant Badge Verification</li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden p-8">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
             <div className="space-y-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="h-4 w-3/4 bg-white/20 rounded animate-pulse" />
               <div className="h-4 w-1/2 bg-white/20 rounded animate-pulse delay-75" />
               <div className="h-32 w-full bg-white/10 rounded border border-white/5 mt-8" />
             </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-[#010101] py-20 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h3 className="font-space text-2xl font-bold mb-2">ContactPolice.uk</h3>
            <p className="text-white/40 font-mono text-sm max-w-xs">Connecting the public with the police through modern, transparent technology.</p>
          </div>
          <div className="grid grid-cols-2 gap-12 font-mono text-sm text-white/60">
            <div className="flex flex-col gap-3"><span className="text-white font-bold mb-2">Platform</span><a href="#" className="hover:text-white">Officers</a><a href="#" className="hover:text-white">Stations</a><a href="#" className="hover:text-white">Feedback</a></div>
            <div className="flex flex-col gap-3"><span className="text-white font-bold mb-2">Legal</span><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a><a href="#" className="hover:text-white">Accessibility</a></div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-20 text-center"><h1 className="font-space font-bold text-[12vw] leading-none text-white/5 select-none pointer-events-none">EMERGENCY 999</h1></div>
      </footer>
    </main>
  );
}
