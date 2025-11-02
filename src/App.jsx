import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ControlDock from './components/ControlDock';
import ModulePanel from './components/ModulePanel';

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#eff2f5] p-5 md:p-8 text-[#1b2430] font-['Inter',_'system-ui',_'Segoe_UI',_Arial] selection:bg-[#dfe6ee] selection:text-[#1b2430]">
      <div className="mx-auto flex h-full max-w-6xl flex-col gap-5 md:gap-6">
        {/* HERO */}
        <Hero />

        {/* CONTROL DOCK */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <ControlDock active={active} onSelect={(k) => setActive(k)} />
        </motion.div>

        {/* Footer-like status */}
        <div className="mt-auto flex items-center justify-between rounded-[25px] bg-[#eff2f5] px-5 py-4 shadow-[10px_10px_20px_rgba(163,177,198,0.55),_-10px_-10px_20px_rgba(255,255,255,1)]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#8b9db5] shadow-[0_0_10px_3px_rgba(139,157,181,0.45)]" />
            <p className="text-xs text-[#62708a]">Calm mode on • Neumorphic surface active</p>
          </div>
          <p className="text-xs text-[#62708a]">v1.0 • Ahtesham OS</p>
        </div>
      </div>

      {/* MODULE PANEL */}
      <ModulePanel active={active} onClose={() => setActive(null)} />
    </div>
  );
}
