'use client';

import { ReactNode, useState } from 'react';
import { ChevronRight, Lock, Menu, Search, ShieldAlert } from 'lucide-react';
import LiquidBackground from '@/components/LiquidBackground';
import { OfficerCard } from '@/components/OfficerCard';
import PoliceScotlandLogo from '@/components/PoliceScotlandLogo';

export const dynamic = 'force-dynamic';

// Fixed: URL-encoded SVG to prevent syntax errors with quotes
const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`;

function Glass({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative backdrop-blur-xl bg-white/[0.02] border border-white/10 ${className}`}
      style={{
        backgroundImage: noiseSvg, // Uses the fixed variable
      }}
    >
      {children}
    </div>
  );
}

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

export default function Home() {
  const [query, setQuery] = useState('');
  const filteredOfficers = officers.filter((officer) => {
    const search = query.toLowerCase();
    return (
      officer.id.toLowerCase().includes(search) ||
      officer.collar.toLowerCase().includes(search) ||
      officer.name.toLowerCase().includes(search)
    );
  });

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#030305]">
      <LiquidBackground />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030305]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
              <div className="h-3 w-3 animate-pulse rounded-full bg-black" />
            </div>
            <span className="font-space text-lg font-bold tracking-tight">
              ContactPolice<span className="text-white/40">.uk</span>
            </span>
          </div>
          <div className="hidden items-center gap-8 font-mono text-sm text-white/60 md:flex">
            <a href="#directory" className="transition-colors hover:text-white">
              Directory
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Report
            </a>
            <a href="#security" className="transition-colors hover:text-white">
              Security
            </a>
          </div>
          <button className="text-white md:hidden">
            <Menu />
          </button>
        </div>
      </nav>

      <div className="absolute right-4 top-28 z-40 md:right-8 md:top-24 lg:right-16 lg:top-20">
        <PoliceScotlandLogo className="scale-75 md:scale-90" />
      </div>

      <section className="relative z-10 px-6 pb-20 pt-40">
        <div className="mx-auto max-w-7xl">
          <Glass className="max-w-3xl p-10 shadow-2xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-mono text-white/70 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              System Operational
            </div>

            <h1 className="mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text font-space text-5xl font-bold leading-[0.9] tracking-tighter text-transparent md:text-7xl">
              PUBLIC OFFICER
              <br />
              DIRECTORY
            </h1>

            <p className="mb-12 max-w-xl font-mono text-lg leading-relaxed text-white/50">
              Securely access contact details for serving officers. Direct messaging channels and verifying credentials in real-time.
            </p>

            <div className="group relative max-w-xl">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-white/20 to-white/0 opacity-30 blur transition duration-500 group-hover:opacity-70" />
              <div className="relative flex items-center gap-2 rounded-xl border border-white/10 bg-black/70 p-2">
                <Search className="ml-3 h-6 w-6 text-white/40" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by collar number (e.g. T329)..."
                  className="w-full border-none bg-transparent px-4 py-3 font-mono text-white outline-none placeholder:text-white/20"
                />
                <button className="rounded-lg bg-white px-6 py-2 font-space font-bold text-black transition-colors hover:bg-gray-200">
                  Locate
                </button>
              </div>
            </div>
          </Glass>
        </div>
      </section>

      <section id="directory" className="relative z-10 border-t border-white/5 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-space text-3xl font-bold">Active Personnel</h2>
            <div className="font-mono text-xs text-white/40">UPDATED: {new Date().toLocaleTimeString()}</div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredOfficers.map((officer, index) => (
              <OfficerCard key={officer.id} {...officer} delay={index * 0.1} />
            ))}
            {filteredOfficers.length === 0 && (
              <Glass className="col-span-full p-6 text-center font-mono text-white/50">
                No officers match that query.
              </Glass>
            )}
          </div>

          <div className="mt-12 text-center">
            <button className="group inline-flex items-center gap-2 border-b border-transparent pb-1 font-mono text-sm uppercase tracking-widest text-white/60 transition-colors hover:border-white hover:text-white">
              View Full Database
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <section id="security" className="relative z-10 px-6 py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div>
            <h2 className="font-space text-4xl font-bold leading-tight text-white">
              Secure Contact.
              <br />
              Verified Identity.
            </h2>
            <p className="mb-8 text-white/50 leading-relaxed">
              The old way involved waiting on hold via 101. The new way is direct, digital, and transparent. Our platform ensures you are speaking to a verified officer.
            </p>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-4 text-white/80">
                <div className="flex h-6 w-6 items-center justify-center rounded border border-white/10 bg-white/10">
                  <Lock className="h-3 w-3" />
                </div>
                End-to-End Encrypted Forms
              </li>
              <li className="flex items-center gap-4 text-white/80">
                <div className="flex h-6 w-6 items-center justify-center rounded border border-white/10 bg-white/10">
                  <ShieldAlert className="h-3 w-3" />
                </div>
                Instant Badge Verification
              </li>
            </ul>
          </div>
          <Glass className="relative h-[400px] overflow-hidden rounded-2xl p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
            <div className="space-y-4 opacity-50 grayscale transition-all duration-700 hover:grayscale-0">
              <div className="h-4 w-3/4 animate-pulse rounded bg-white/20" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-white/20 delay-75" />
              <div className="mt-8 h-32 w-full rounded border border-white/5 bg-white/10" />
            </div>
          </Glass>
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t border-white/10 bg-[#010101] px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 md:flex-row md:justify-between">
          <div>
            <h3 className="mb-2 font-space text-2xl font-bold">ContactPolice.uk</h3>
            <p className="max-w-xs font-mono text-sm text-white/40">
              Connecting the public with the police through modern, transparent technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 font-mono text-sm text-white/60">
            <div className="flex flex-col gap-3">
              <span className="mb-2 text-white font-bold">Platform</span>
              <a href="#directory" className="hover:text-white">
                Officers
              </a>
              <a href="#security" className="hover:text-white">
                Security
              </a>
              <a href="#contact" className="hover:text-white">
                Feedback
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="mb-2 text-white font-bold">Legal</span>
              <a href="/privacy" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Accessibility
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-7xl text-center">
          <h1 className="pointer-events-none select-none font-space text-[12vw] font-bold leading-none text-white/5">EMERGENCY 999</h1>
        </div>
      </section>
    </main>
  );
}
