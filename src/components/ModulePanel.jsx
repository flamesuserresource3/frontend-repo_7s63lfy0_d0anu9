import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeumorphicSurface from './NeumorphicSurface';

function SectionTitle({ children }) {
  return (
    <h3 className="text-lg font-semibold tracking-wide text-[#2c3340]">{children}</h3>
  );
}

export default function ModulePanel({ active, onClose }) {
  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-10"
        >
          {/* background veil with subtle noise tint */}
          <motion.div
            onClick={onClose}
            className="absolute inset-0 bg-[#e9edf2]/70 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <NeumorphicSurface className="relative z-10 w-full max-w-4xl p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <SectionTitle>{active}</SectionTitle>
              <button onClick={onClose} className="rounded-full px-4 py-2 text-sm text-[#62708a] bg-[#eff2f5] shadow-[6px_6px_12px_rgba(163,177,198,0.45),_-6px_-6px_12px_rgba(255,255,255,0.95)] hover:shadow-[8px_8px_16px_rgba(163,177,198,0.55),_-8px_-8px_16px_rgba(255,255,255,1)] transition-shadow">
                Close
              </button>
            </div>

            {active === 'Projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { name: 'HoloBoard', note: 'Realtime canvas with WebRTC + CRDTs' },
                  { name: 'AetherShop', note: 'Headless commerce playground' },
                  { name: 'PulseStack', note: 'Observability starter for JS apps' },
                  { name: 'Synapse UI', note: 'Tiny design system with tokens' },
                ].map((p) => (
                  <NeumorphicSurface key={p.name} className="p-5">
                    <h4 className="text-[#2c3340] font-medium">{p.name}</h4>
                    <p className="text-sm text-[#62708a] mt-1">{p.note}</p>
                    <div className="mt-4 flex gap-3">
                      <a href="#" className="rounded-xl bg-[#eff2f5] px-3 py-1.5 text-xs text-[#2c3340] shadow-[6px_6px_12px_rgba(163,177,198,0.45),_-6px_-6px_12px_rgba(255,255,255,0.95)]">Demo</a>
                      <a href="#" className="rounded-xl bg-[#eff2f5] px-3 py-1.5 text-xs text-[#2c3340] shadow-[6px_6px_12px_rgba(163,177,198,0.45),_-6px_-6px_12px_rgba(255,255,255,0.95)]">Code</a>
                    </div>
                  </NeumorphicSurface>
                ))}
              </div>
            )}

            {active === 'Skills' && (
              <div>
                <p className="text-[#62708a] text-sm mb-4">Comfort across the stack with a preference for minimal, composable systems.</p>
                <div className="flex flex-wrap gap-3">
                  {['TypeScript','React','Next.js','Node','FastAPI','GraphQL','PostgreSQL','MongoDB','Redis','WebRTC','WebGL','Docker','AWS'].map((s) => (
                    <span key={s} className="rounded-2xl px-4 py-2 text-xs text-[#2c3340] bg-[#eff2f5] shadow-[6px_6px_12px_rgba(163,177,198,0.45),_-6px_-6px_12px_rgba(255,255,255,0.95)]">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {active === 'Thoughts' && (
              <div className="space-y-4">
                {[
                  { t: 'Interfaces should whisper, not shout.', d: 'Calm UI creates space for deep work.' },
                  { t: 'APIs are contracts with future you.', d: 'Design for clarity, evolve with migrations.' },
                  { t: 'Latency is a design problem.', d: 'Perceived speed matters as much as raw speed.' },
                ].map((note, i) => (
                  <NeumorphicSurface key={i} className="p-5">
                    <h4 className="text-[#2c3340] font-medium">{note.t}</h4>
                    <p className="text-sm text-[#62708a] mt-1">{note.d}</p>
                  </NeumorphicSurface>
                ))}
              </div>
            )}

            {active === 'Contact' && (
              <div className="grid gap-4 md:grid-cols-2">
                <NeumorphicSurface className="p-5">
                  <p className="text-sm text-[#62708a]">Open to collaborations, product design, and performance audits.</p>
                  <a href="mailto:hello@ahtesham.dev" className="mt-4 inline-block rounded-2xl bg-[#eff2f5] px-5 py-2 text-sm text-[#2c3340] shadow-[6px_6px_12px_rgba(163,177,198,0.45),_-6px_-6px_12px_rgba(255,255,255,0.95)]">hello@ahtesham.dev</a>
                </NeumorphicSurface>
                <NeumorphicSurface className="p-5">
                  <p className="text-sm text-[#62708a]">Also reachable on:</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {[
                      { n: 'GitHub', href: '#' },
                      { n: 'LinkedIn', href: '#' },
                      { n: 'Twitter/X', href: '#' },
                    ].map((l) => (
                      <a key={l.n} href={l.href} className="rounded-2xl bg-[#eff2f5] px-4 py-2 text-xs text-[#2c3340] shadow-[6px_6px_12px_rgba(163,177,198,0.45),_-6px_-6px_12px_rgba(255,255,255,0.95)]">{l.n}</a>
                    ))}
                  </div>
                </NeumorphicSurface>
              </div>
            )}
          </NeumorphicSurface>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
