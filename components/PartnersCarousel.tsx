// /components/PartnersCarousel.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CountUp from "./CountUp";

const partners = [
  { 
    name: "FRIZ", 
    img: "/bartek.webp", 
    yt: 5000000, 
    ig: 4000000 
  },
  { 
    name: "Nicole Węcławiak", 
    img: "/nicole.webp", 
    yt: 959216, 
    ig: 416672 
  },
  { 
    name: "PATEC", 
    img: "/bartek.webp", 
    yt: 1580000, 
    ig: 2200000 
  },
  { 
    name: "TROMBA", 
    img: "/bartek.webp", 
    yt: 1200000, 
    ig: 1800000 
  },
  { 
    name: "NOWCIAX", 
    img: "/nicole.webp", 
    yt: 800000, 
    ig: 1100000 
  },
];

export default function PartnersCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    // Przewijamy o szerokość jednej karty + gap (ok. 320px + 24px)
    const scrollAmount = direction === "left" ? -340 : 340;
    
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="w-full py-10 relative group">
      
      {/* Przycisk LEWO (widoczny tylko na desktopie po najechaniu lub zawsze, wedle uznania) */}
      <button 
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-purple-600 text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-xl border border-white/10 hover:scale-110 active:scale-95"
        aria-label="Przewiń w lewo"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Przycisk PRAWO */}
      <button 
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-purple-600 text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-xl border border-white/10 hover:scale-110 active:scale-95"
        aria-label="Przewiń w prawo"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Kontener Karuzeli */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 md:gap-8 pb-8 px-4 md:px-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Ukrycie scrollbara
      >
        {partners.map((p, idx) => (
          <motion.div
            key={`${p.name}-${idx}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="shrink-0 w-[280px] md:w-[320px] snap-center flex flex-col bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl border border-white/5 hover:border-purple-500/30 transition-colors duration-300"
          >
            {/* ZDJĘCIE */}
            <div className="relative w-full aspect-4/5 overflow-hidden">
              <Image 
                src={p.img} 
                alt={p.name} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* FIOLETOWY PASEK */}
            <div className="bg-[#8b00ff] py-3 text-center relative z-10 shadow-lg">
              <h3 className="text-xl font-black text-white uppercase tracking-wider font-sans">
                {p.name}
              </h3>
            </div>

            {/* STATYSTYKI */}
            <div className="bg-[#121212] p-5 flex flex-col gap-3 items-center justify-center border-t border-white/5">
              <div className="flex items-center gap-3 w-full justify-center">
                <div className="p-1.5 bg-white rounded flex items-center justify-center shadow-md">
                  <FaYoutube className="text-lg text-[#FF0000]" />
                </div>
                <div className="text-lg font-bold text-white font-mono tracking-tight">
                  <CountUp to={p.yt} duration={2.5} separator="," />
                </div>
              </div>

              <div className="flex items-center gap-3 w-full justify-center">
                <div className="p-1.5 bg-white rounded flex items-center justify-center shadow-md">
                  <FaInstagram className="text-lg text-[#E1306C]" />
                </div>
                <div className="text-lg font-bold text-white font-mono tracking-tight">
                  <CountUp to={p.ig} duration={2.5} separator="," />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Pusty element na końcu dla lepszego scrollowania na mobile */}
        <div className="w-4 shrink-0" />
      </div>
    </div>
  );
}