// /components/StatsFeatureCards.tsx
"use client";

import React from "react";
import CountUp from "./CountUp";
import { FiCheckCircle, FiThumbsUp, FiPlay } from "react-icons/fi";
import { IconBaseProps } from "react-icons"; // 1. Import typu
import { motion } from "framer-motion";

type Card = {
  // 2. Zmiana typu: zamiast ogólnego ReactNode, konkretny element z propsami ikon
  icon: React.ReactElement<IconBaseProps>;
  title: string;
  desc?: string;
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

const CARDS: Card[] = [
  {
    icon: <FiCheckCircle />,
    title: "Zrealizowane projekty",
    desc: "Projekty od briefu po finalny export.",
    value: 150,
    prefix: "+",
    duration: 2,
  },
  {
    icon: <FiThumbsUp />,
    title: "Zadowolenie klientów",
    desc: "Satysfakcja klienta przy każdym zleceniu.",
    value: 100,
    suffix: "%",
    duration: 2,
  },
  {
    icon: <FiPlay />,
    title: "Wyświetlenia",
    desc: "Łączne wyświetlenia Twoich materiałów.",
    value: 317444,
    prefix: "+",
    duration: 2.5,
  },
];

export default function StatsFeatureCards() {
  return (
    <section className="w-full py-12 relative z-10">
      {/* Nagłówek sekcji */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Na rynku działam <span className="text-cyan-400">od 2 lat</span>
        </h3>
        <p className="text-white/60">Liczby mówią same za siebie</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {CARDS.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="flex flex-col items-center text-center bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors duration-300 shadow-lg group"
          >
            {/* Ikona */}
            <div className="mb-6 p-4 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              {/* 3. Teraz klonowanie jest bezpieczne i TypeScript nie zgłasza błędu o 'size' */}
              {React.cloneElement(c.icon, { size: 32 })}
            </div>

            {/* Tytuł i Opis */}
            <div className="mb-6 flex-grow">
              <h4 className="text-xl font-bold text-white mb-2">{c.title}</h4>
              {c.desc && <p className="text-sm text-white/60 leading-relaxed">{c.desc}</p>}
            </div>

            {/* Licznik */}
            <div className="mt-auto pt-4 border-t border-white/5 w-full">
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tabular-nums inline-flex items-center justify-center">
                
                {/* PREFIX */}
                {c.prefix && (
                  <span className="mr-2 text-3xl md:text-4xl text-purple-400 font-bold">
                    {c.prefix}
                  </span>
                )}

                <CountUp 
                  to={c.value} 
                  duration={c.duration} 
                  separator=" " 
                  className="inline-block" 
                />

                {/* SUFFIX */}
                {c.suffix && (
                  <span className="ml-1 text-3xl md:text-4xl text-purple-400 font-bold">
                    {c.suffix}
                  </span>
                )}
                
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}