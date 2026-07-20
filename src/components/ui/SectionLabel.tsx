'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionLabelProps {
  num: string;
  label: string;
}

export default function SectionLabel({ num, label }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-3 mb-6"
    >
      <span className="font-mono text-xs tracking-widest text-rose-dust font-medium">
        {num}
      </span>
      <span className="h-[1px] w-8 bg-border-strong bg-rose-dust/30"></span>
      <span className="text-xs uppercase tracking-[0.25em] text-stone-mist font-medium">
        {label}
      </span>
    </motion.div>
  );
}
