import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Code2, Brain, Mail } from 'lucide-react';
import NeumorphicSurface from './NeumorphicSurface';

const tiles = [
  { key: 'Projects', icon: Folder, desc: 'Live builds and experiments' },
  { key: 'Skills', icon: Code2, desc: 'Stacks, tools, superpowers' },
  { key: 'Thoughts', icon: Brain, desc: 'Notes from the creative core' },
  { key: 'Contact', icon: Mail, desc: 'Ping the operator' },
];

export default function ControlDock({ onSelect, active }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {tiles.map(({ key, icon: Icon, desc }) => (
        <button key={key} onClick={() => onSelect(key)} className="focus:outline-none group">
          <NeumorphicSurface className={`relative h-32 md:h-36 w-full p-5 transition-colors ${
            active === key ? 'ring-2 ring-[#aeb9c8]/60' : 'ring-0'
          }`}>
            {/* Glow pulse */}
            <motion.span
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: active === key ? 0.35 : 0 }}
              className="pointer-events-none absolute inset-0 rounded-[25px] bg-gradient-to-br from-white/50 to-transparent"
            />
            <div className="flex h-full w-full flex-col items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#eff2f5] p-3 shadow-[6px_6px_12px_rgba(163,177,198,0.45),_-6px_-6px_12px_rgba(255,255,255,0.95)] group-hover:shadow-[8px_8px_16px_rgba(163,177,198,0.55),_-8px_-8px_16px_rgba(255,255,255,1)] transition-shadow">
                  <Icon className="h-5 w-5 text-[#2c3340]" />
                </div>
                <motion.span
                  layout
                  className="text-base font-medium text-[#2c3340]"
                >
                  {key}
                </motion.span>
              </div>
              <p className="text-xs text-[#62708a]">{desc}</p>
            </div>
            {/* Ripple on hover */}
            <span className="pointer-events-none absolute -inset-1 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(closest-side,_rgba(255,255,255,0.6),_transparent_70%)]" />
          </NeumorphicSurface>
        </button>
      ))}
    </div>
  );
}
