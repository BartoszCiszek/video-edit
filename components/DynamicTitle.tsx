// /components/DynamicTitle.tsx
"use client";

import React, { useState, useEffect } from "react";

export default function DynamicTitle() {
  // Lista klas czcionek typowych dla YouTube/Montażu
  const fonts = [
    "font-['Montserrat']",      // Nowoczesny, czysty
  ];
  
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 350); // Szybkie cięcia (glitch effect)

    return () => clearInterval(interval);
  }, [fonts.length]);

  return (
    <h2 
      className={`text-5xl md:text-7xl font-black tracking-tighter text-white uppercase transition-none ${fonts[currentFontIndex]}`}
      style={{ 
        // Jeśli font jest z Google Fonts (np. Bebas Neue), to zadziała z automatu.
        // Jeśli to "arbitrary value" typu font-['Bebas_Neue'], Tailwind podstawi tę nazwę.
        fontFamily: fonts[currentFontIndex] === "font-display" ? "var(--font-display)" : undefined
      }}
    >
      VIDEO<span className="text-purple-600">EDIT</span>
    </h2>
  );
}