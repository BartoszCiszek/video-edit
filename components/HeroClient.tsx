// /components/HeroClient.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion"; // 1. Import typu Variants

// 2. Jawne typowanie obiektu container
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// 3. Jawne typowanie obiektu item
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

const HeroClient: React.FC = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h1 className="hero-title neon h1 leading-tight" variants={item}>
        Montaż. <br />
        <span className="text-white">Kolor.</span> <br />
        <span className="neon-accent">Ruch.</span>
      </motion.h1>

      <motion.p className="mt-6 lead max-w-lg text-lg text-gray-300" variants={item}>
        Tworzę dynamiczne vlogi, reklamy i content video.
        <br />
        Sprawiam, że widzowie <span className="text-white font-semibold">nie przewijają</span>.
      </motion.p>

      <motion.div className="mt-8 flex gap-4" variants={item}>
        <motion.a
          href="#work"
          className="btn-primary relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Zobacz realizacje</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </motion.a>

        <motion.a
          href="#contact"
          className="px-6 py-2 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-cyan-400 transition-colors duration-300 backdrop-blur-sm bg-black/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Kontakt
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default HeroClient;