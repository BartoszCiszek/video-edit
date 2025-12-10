// /components/ServicesSection.tsx
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiScissors, FiFilm, FiMonitor, FiVolume2, FiActivity, FiLayers } from "react-icons/fi";
import { IconBaseProps } from "react-icons"; // Importujemy typ propsów ikon

// Definicja typu usługi
type Service = {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactElement<IconBaseProps>; // Zmieniamy typ na konkretny element Reacta z propsami ikon
  videoSrc?: string;
};

const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Montaż Dynamiczny (Vlog/YouTube)",
    desc: "Szybkie cięcia, efekty przejść, napisy, memy. Utrzymanie uwagi widza od pierwszej do ostatniej sekundy. Idealne pod retention.",
    icon: <FiScissors />,
  },
  {
    id: "s2",
    title: "Reklamy & Social Media (Shorts/Reels)",
    desc: "Formaty pionowe (9:16) i kwadratowe. Krótkie, treściwe formy reklamowe z mocnym CTA, zoptymalizowane pod algorytmy TikToka i IG.",
    icon: <FiFilm />,
  },
  {
    id: "s3",
    title: "Color Grading & Korekcja",
    desc: "Nadawanie filmowego looku. Poprawa balansu bieli, ekspozycji i tworzenie unikalnego klimatu za pomocą LUT-ów i ręcznej korekcji.",
    icon: <FiMonitor />,
  },
  {
    id: "s4",
    title: "Sound Design & Mix Audio",
    desc: "Dobór muzyki, efekty dźwiękowe (SFX), czyszczenie dialogów. Dźwięk to 50% sukcesu wideo.",
    icon: <FiVolume2 />,
  },
  {
    id: "s5",
    title: "Animacje & Motion Graphics",
    desc: "Proste animacje 2D, intro/outro, animowane napisy (kinetyczna typografia), paski dolne.",
    icon: <FiLayers />,
  },
  {
    id: "s6",
    title: "Konsultacje & Strategia Wideo",
    desc: "Pomoc w doborze sprzętu, pomysły na content, analiza Twoich obecnych materiałów i plan naprawczy.",
    icon: <FiActivity />,
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.warn("Video play failed:", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 50 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 shadow-xl hover:shadow-cyan-500/10 transition-all duration-500"
    >
      {/* Neonowy Border na Hover */}
      <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-cyan-400 group-hover:to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
        <div className="h-full w-full bg-[#0a0a0a] rounded-2xl" />
      </div>

      {/* Opcjonalne tło wideo */}
      {service.videoSrc && (
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-lighten pointer-events-none">
          <video
            ref={videoRef}
            src={service.videoSrc}
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-[#0a0a0a] opacity-80" />
        </div>
      )}

      {/* Treść karty */}
      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="mb-6 p-4 bg-white/5 rounded-2xl w-16 h-16 flex items-center justify-center text-white/70 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 group-hover:scale-110 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          {/* TERAZ TO JEST POPRAWNE: Klonujemy element i przekazujemy size */}
          {React.cloneElement(service.icon, { size: 32 })}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
          {service.title}
        </h3>

        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[#050505] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Używamy typografii, którą naprawiliśmy wcześniej (ściśnięta) */}
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 tracking-tighter leading-none font-sans">
            Czym się <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">zajmuję?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Kompleksowa postprodukcja wideo. Od surowego materiału po gotowy viral.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(139,0,255,0.5)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}