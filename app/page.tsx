// /app/page.tsx
import React from "react";
import Image from "next/image";
import HeroClient from "../components/HeroClient";
import PartnersCarousel from "../components/PartnersCarousel";
import StatsFeatureCards from "../components/StatsFeatureCards";
import WorkGallery from "../components/WorkGallery";
import WhySection from "../components/WhySection";
import ServicesSection from "../components/ServicesSection";
import DynamicTitle from "../components/DynamicTitle"; // <--- 1. IMPORTUJEMY TUTAJ
import { FaInstagram, FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "VideoEdit — Bartosz Ciszek",
  description: "VideoEdit — montaż, content creation, storytelling",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO Z WIDEO W TLE */}
      <section id="home" className="section relative overflow-hidden min-h-[85vh] flex items-center">
        
        {/* 1. BACKGROUND VIDEO */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/30" />
        </div>

        {/* 2. TREŚĆ HERO */}
        <div className="container-max hero-grid relative z-10 w-full">
          <div>
            <HeroClient />
          </div>

          <div className="relative hidden md:block">
            <div className="card p-4 neon-card rotate-3 hover:rotate-0 transition-transform duration-500" style={{ width: 360 }}>
              <div className="w-full h-56 md:h-96 bg-neutral-900 rounded-lg overflow-hidden relative">
                <Image 
                  src="/logo.webp" 
                  alt="Logo" 
                  width={800} 
                  height={1000} 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEPARATOR TYPOGRAFICZNY (ANIMOWANY) --- */}
      <div className="w-full bg-black py-16 flex justify-center items-center relative z-10 border-b border-white/5">
         <div className="text-center">
            <p className="text-sm text-cyan-400 font-bold tracking-[0.3em] uppercase mb-3">
              Production House
            </p>
            {/* 2. UŻYWAMY TUTAJ NOWEGO KOMPONENTU */}
            <DynamicTitle />
         </div>
      </div>
      {/* ------------------------------------------------------- */}

      {/* 1) O mnie */}
      <section id="about" className="section py-20 relative">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-cyan-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="w-full h-80 md:h-[600px] card p-0 overflow-hidden rounded-xl relative">
              <Image 
                src="/bartek.webp" 
                alt="Bartek" 
                width={1000} 
                height={1200} 
                className="object-cover w-full h-full" 
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[0.9] tracking-tighter font-sans">
              CZEŚĆ! <br/> JESTEM <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">BARTEK</span>
            </h2>
            <p className="lead text-lg text-gray-300 mb-6 font-medium">
              Kocham robić wielkie rzeczy! Zajmuję się montażem, kreacją contentu i prowadzeniem projektów video dla twórców i marek.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Moim celem jest nie tylko "pocięcie filmu", ale stworzenie historii, która zatrzyma widza przed ekranem.
            </p>
          </div>
        </div>
      </section>

      {/* 2) Czym się zajmuję */}
      <ServicesSection />

      {/* 3) Partners */}
      <section id="partners" className="section py-20 bg-[#050505]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold uppercase mb-2 font-sans tracking-tighter">Współpracowałem z</h3>
            <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full"/>
          </div>
          <PartnersCarousel />
        </div>
      </section>

      {/* 4) Stats */}
      <section id="stats" className="section py-20 bg-black">
        <StatsFeatureCards />
      </section>

      {/* 5) Work gallery */}
      <section id="work" className="section py-20">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 font-sans tracking-tighter uppercase">Wybrane Projekty</h3>
              <p className="text-gray-400">Zobacz, co udało mi się stworzyć.</p>
            </div>
            <a href="https://www.youtube.com/@BartekCiszek" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition underline underline-offset-4">
              Zobacz więcej na YouTube →
            </a>
          </div>
          <WorkGallery />
        </div>
      </section>

      {/* 6) Method */}
      <section id="method" className="section py-20 bg-[#080808]">
        <div className="container-max text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sans tracking-tighter uppercase">Moja filozofia pracy</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nie chodzi o to, żeby było "ładnie". Chodzi o to, żeby było skutecznie.
          </p>
        </div>
        <div className="container-max">
          <WhySection />
        </div>
      </section>

      {/* 7) CTA contact */}
      <section id="contact" className="section py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-cyan-900/20 to-black pointer-events-none" />

        <div className="container-max text-center relative z-10">
          <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter font-sans uppercase">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-500">
              Zróbmy razem hałas.
            </span>
          </h3>
          <p className="lead text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            Masz surowy materiał? A może tylko pomysł? <br/>
            Napisz do mnie, zamienimy to w viral.
          </p>

          <div className="flex flex-col items-center gap-8">
            <a href="mailto:bartosz.ciszek@videoedit.pl" className="btn-primary flex items-center gap-3 px-10 py-4 text-xl shadow-cyan-500/20 shadow-lg hover:shadow-cyan-500/40 transition-all">
              <FaEnvelope /> Napisz do mnie
            </a>

            <div className="flex justify-center gap-8 text-neutral-500 mt-4">
              <a href="#" className="hover:text-cyan-400 transition transform hover:scale-125 duration-300"><FaInstagram size={32} /></a>
              <a href="#" className="hover:text-red-500 transition transform hover:scale-125 duration-300"><FaYoutube size={32} /></a>
              <a href="#" className="hover:text-pink-500 transition transform hover:scale-125 duration-300"><FaTiktok size={32} /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-600 border-t border-white/5 bg-black">
        © {new Date().getFullYear()} VideoEdit — Bartosz Ciszek. All rights reserved.
      </footer>
    </main>
  );
}