'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shield } from 'lucide-react';
import Link from 'next/link';

interface OfficerProps {
  id: string;
  name: string;
  collar: string;
  rank: string;
  delay: number;
}

export const OfficerCard = ({ id, name, collar, rank, delay }: OfficerProps) => {
  return (
    <Link href={`/${id.toLowerCase()}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -5, scale: 1.01 }}
        className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-colors duration-500 hover:border-white/30 hover:bg-white/[0.05]"
      >
        {/* Hover Gradient */}
        <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 blur-2xl group-hover:animate-shine" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <div className="rounded-full bg-white/5 p-2 border border-white/5">
              <Shield className="w-5 h-5 text-gray-400" />
            </div>
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
              {id}
            </span>
          </div>

          <div className="mt-8">
             {/* Glitch effect on hover could go here */}
            <h3 className="font-space text-2xl font-bold text-white group-hover:text-white transition-colors">
              {name}
            </h3>
            <div className="flex items-center justify-between mt-2">
              <p className="font-mono text-sm text-white/60 uppercase tracking-tight">
                {rank} &nbsp;|&nbsp; <span className="text-white/30">{collar}</span>
              </p>
              <ArrowUpRight className="w-5 h-5 text-white/0 -translate-x-2 group-hover:translate-x-0 group-hover:text-white transition-all duration-300 ease-out" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
