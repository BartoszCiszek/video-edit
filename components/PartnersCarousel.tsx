"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import CountUp from "./CountUp";

const partners = [
  { 
    name: "FRIZ", 
    img: "/bartek.webp", 
    yt: 5000000, 
    ig: 4000000 
  },
  { 
    name: "WERSOW", 
    img: "/nicole.webp", 
    yt: 2670000, 
    ig: 3600000 
  },
  { 
    name: "PATEC", 
    img: "/bartek.webp", 
    yt: 1580000, 
    ig: 2200000 
  },
];

export default function PartnersCarousel() {
  return (
    <div className="w-full py-10">
      {/* sm:grid-cols-3 = Rząd 3 elementów na tabletach i PC */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
        {partners.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6, type: "spring" }}
            className="flex flex-col bg-[#0a0a0a] rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/5"
          >
            {/* ZDJĘCIE */}
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image 
                src={p.img} 
                alt={p.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* FIOLETOWY PASEK */}
            <div className="bg-[#8b00ff] py-3 text-center relative z-10 shadow-lg">
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider font-sans">
                {p.name}
              </h3>
            </div>

            {/* STATYSTYKI */}
            <div className="bg-[#121212] p-6 flex flex-col gap-4 items-center justify-center border-t border-white/5">
              <div className="flex items-center gap-3 w-full justify-center">
                <div className="p-1.5 bg-white rounded flex items-center justify-center shadow-md">
                  <FaYoutube className="text-xl text-[#FF0000]" />
                </div>
                <div className="text-lg md:text-xl font-bold text-white font-mono tracking-tight">
                  <CountUp to={p.yt} duration={2.5} separator="," />
                </div>
              </div>

              <div className="flex items-center gap-3 w-full justify-center">
                <div className="p-1.5 bg-white rounded flex items-center justify-center shadow-md">
                  <FaInstagram className="text-xl text-[#E1306C]" />
                </div>
                <div className="text-lg md:text-xl font-bold text-white font-mono tracking-tight">
                  <CountUp to={p.ig} duration={2.5} separator="," />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}