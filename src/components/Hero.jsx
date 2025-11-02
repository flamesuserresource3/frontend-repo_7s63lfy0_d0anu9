import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-[46vh] min-h-[320px] w-full overflow-hidden rounded-[25px] bg-[#eff2f5] shadow-[10px_10px_20px_rgba(163,177,198,0.55),_-10px_-10px_20px_rgba(255,255,255,1)]">
      <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      {/* Soft glass overlay for readability without blocking pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#eff2f5]/80 via-transparent to-transparent" />

      {/* Title and subtle status bar */}
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
        <div>
          <motion.h1
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-[28px] md:text-[34px] font-semibold tracking-[0.02em] text-[#2c3340]"
          >
            Ahtesham OS
          </motion.h1>
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.05 } }}
            className="mt-1 text-sm md:text-base text-[#4a5568]/80"
          >
            An AI control interface for a creative full‑stack developer
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden md:flex items-center gap-2 rounded-full bg-[#eff2f5] px-4 py-2 shadow-[6px_6px_12px_rgba(163,177,198,0.45),_-6px_-6px_12px_rgba(255,255,255,0.95)]"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_3px_rgba(74,222,128,0.6)]" />
          <span className="text-xs text-[#62708a]">Systems nominal</span>
        </motion.div>
      </div>
    </div>
  );
}
