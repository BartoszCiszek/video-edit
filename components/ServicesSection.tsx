// /components/ServicesSection.tsx
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiScissors, FiFilm, FiMonitor, FiVolume2, FiActivity, FiLayers } from "react-icons/fi";
import { IconBaseProps } from "react-icons";

// Definicja typu usługi
type Service = {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactElement<IconBaseProps>;
  // videoSrc?: string; // USUNIĘTE: nie używamy już wideo
};

// Dane usług
const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Montaż Dynamiczny (Vlog/YouTube)",
    desc: "Krótka forma cięta pod algorytm. Flow, rytm i storytelling, który trzyma widza do samego końca. Memy, pacing, captions i efekty — wszystko po coś. Zero pustych przebitek. Retention robi robotę.",
    icon: <FiScissors />,
  },
  {
    id: "s2",
    title: "Reklamy & Social Media (Shorts/Reels)",
    desc: "Formaty 9:16 robione pod wynik, nie pod sztukę. Mocny pierwszy sekundowy hook, wyraźny CTA, rytm dopasowany do algorytmów TikToka/Instagrama. Treści, które zatrzymują i konwertują.",
    icon: <FiFilm />,
  },
  {
    id: "s3",
    title: "Color Grading & Korekcja",
    desc: "Filmowy look dopasowany do historii. Od czyszczenia balansu i ekspozycji po budowanie nastroju za pomocą LUT-ów i ręcznej kolorki. Każda scena wygląda jak część większej opowieści.",
    icon: <FiMonitor />,
  },
  {
    id: "s4",
    title: "Sound Design & Mix Audio",
    desc: "Muzyka, SFX i dialogi doprowadzone do czystości. Buduję emocje dźwiękiem — od subtelnych detali po pełny, kinowy charakter. Dźwięk to 50% efektu końcowego, więc nie idę na skróty.",
    icon: <FiVolume2 />,
  },
  {
    id: "s5",
    title: "Animacje & Motion Graphics",
    desc: "Intro/outro, 3D, kinetic typography, paski dolne — wszystko dopasowane do charakteru marki. Animacje, które wyglądają jak naturalna część historii, a nie wrzucony efekt.",
    icon: <FiLayers />,
  },
  {
    id: "s6",
    title: "Konsultacje & Strategia Wideo",
    desc: "Pomagam poukładać content tak, żeby zaczął robić wyniki. Analiza Twoich materiałów, wskazanie błędów, plan na poprawę jakości i spójność wizualną. Konkrety, nie lanie wody.",
    icon: <FiActivity />,
  },
];

// Komponent pojedynczej karty
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 50 }}
      className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 shadow-xl hover:shadow-cyan-500/10 transition-all duration-500"
    >
      {/* Neonowy Border na Hover (Gradient) */}
      <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-cyan-400 group-hover:to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
        <div className="h-full w-full bg-[#0a0a0a] rounded-2xl" />
      </div>

      {/* Treść karty */}
      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Ikona */}
        <div className="mb-6 p-4 bg-white/5 rounded-2xl w-16 h-16 flex items-center justify-center text-white/70 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 group-hover:scale-110 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          {React.cloneElement(service.icon, { size: 32 })}
        </div>

        {/* Tytuł */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
          {service.title}
        </h3>

        {/* Opis */}
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
};

// Główny komponent sekcji
export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Subtelne tło/ziarno */}
      <div className="absolute inset-0 bg-[#050505] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Nagłówek sekcji */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 tracking-tighter leading-none font-sans">
            Czym się <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">zajmuję?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Kompleksowa postprodukcja wideo. Od surowego materiału po gotowy viral.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(139,0,255,0.5)]" />
        </motion.div>

        {/* Grid Usług */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}