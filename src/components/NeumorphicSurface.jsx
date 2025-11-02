import React from 'react';
import { motion } from 'framer-motion';

// A reusable surface with soft dual shadows and subtle hover life
export default function NeumorphicSurface({ className = '', children, as = 'div', whileHover = true, whileTap = true }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      whileHover={whileHover ? { y: -1, boxShadow: '10px 10px 20px rgba(163,177,198,0.45), -10px -10px 20px rgba(255,255,255,0.9)' } : undefined}
      whileTap={whileTap ? { y: 1, boxShadow: 'inset 10px 10px 20px rgba(163,177,198,0.35), inset -10px -10px 20px rgba(255,255,255,0.9)' } : undefined}
      className={`rounded-[25px] bg-[#eff2f5] shadow-[10px_10px_20px_rgba(163,177,198,0.55),_-10px_-10px_20px_rgba(255,255,255,1)] ${className}`}
    >
      {children}
    </Component>
  );
}
