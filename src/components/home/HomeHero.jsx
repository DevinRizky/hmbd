"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Daftar foto untuk slider otomatis (pastikan file ini ada di folder public/)
const HERO_IMAGES = ["/intro-pic-primary.jpg", "/gallery-02.jpg", "/gallery-03.jpg"];

export default function HomeHero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    // Mengubah foto otomatis setiap 5 detik
    const timer = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-canvas py-12 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 grid gap-12 lg:grid-cols-12 items-center">
        {/* KOLOM KIRI: TEKS & CALL TO ACTION */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-m-blue-dark dark:text-m-blue-light">Selamat Datang di Website Resmi</span>
          <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-on-dark sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Himpunan Mahasiswa <br />
            <span className="bg-linear-to-r from-m-blue-dark via-m-blue-light to-m-red bg-clip-text text-transparent">Bisnis Digital</span>
          </h1>
          <p className="mt-6 text-base font-light text-body max-w-xl text-justify">
            Wadah aspirasi, kreativitas, dan pengembangan potensi mahasiswa Strata 1 Bisnis Digital Telkom University Purwokerto. Bersama Kabinet Aradhana, kita bergerak dinamis menciptakan inovasi tanpa batas di era transformatif.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/rekrutmen" className="bg-on-dark text-canvas px-6 py-3 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition">
              Daftar Sekarang
            </Link>
            <Link href="/aspirasi" className="border border-hairline px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-surface-soft transition">
              Sampaikan Aspirasi
            </Link>
          </div>
        </div>

        {/* KOLOM KANAN: SLIDER FOTO OTOMATIS */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-lg border border-hairline bg-surface-soft overflow-hidden">
            {HERO_IMAGES.map((imgUrl, idx) => (
              <div key={imgUrl} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                <img src={imgUrl} alt={`Slide Dokumentasi HMBD ${idx + 1}`} className="h-full w-full object-cover brightness-[0.95] dark:brightness-90" loading={idx === 0 ? "eager" : "lazy"} />
              </div>
            ))}
            {/* Indikator Titik Kecil di Pojok Bawah Slider */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
              {HERO_IMAGES.map((_, idx) => (
                <span key={idx} className={`h-1.5 transition-all duration-300 ${idx === currentIdx ? "w-4 bg-m-red" : "w-1.5 bg-white/50"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
