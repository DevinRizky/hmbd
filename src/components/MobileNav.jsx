"use client";

import Link from "next/link";
import { useEffect } from "react";
import MStripe from "./MStripe";

export default function MobileNav({ open, onClose, pathname, navItems }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div id="mobile-nav" className="fixed inset-0 z-9999 select-none md:hidden" role="dialog" aria-modal="true" aria-label="Menu navigasi">
      {/*
       * FIX: Backdrop menggunakan onClick (konsisten dengan hamburger yang
       * sudah diubah ke onClick). Hapus e.preventDefault() yang tidak perlu.
       *
       * touch-manipulation ditambahkan agar tap delay 0ms di backdrop juga,
       * konsisten dengan tombol hamburger di Navbar.
       *
       * Catatan penting: JANGAN pakai onPointerDown di sini. Jika hamburger
       * pakai onPointerDown dan backdrop pakai onClick, akan terjadi race
       * condition: menu dibuka via pointerdown, lalu langsung tertutup karena
       * onClick backdrop ter-trigger dalam satu gesture tap yang sama.
       */}
      <button type="button" className="absolute inset-0 touch-manipulation bg-black/50 backdrop-blur-xs" onClick={onClose} aria-label="Tutup menu" />

      <aside className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-hairline bg-canvas shadow-[0_0_48px_rgba(28,105,212,0.15)]" onClick={(e) => e.stopPropagation()}>
        <MStripe />
        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 overflow-y-auto bg-canvas px-6 py-8">
          {navItems.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`touch-manipulation border-l-2 px-4 py-4 text-sm font-normal tracking-[0.5px] transition duration-200 ease-out active:bg-surface-soft ${
                  active ? "border-m-blue-dark bg-surface-soft text-on-dark shadow-[inset_0_0_24px_rgba(28,105,212,0.08)]" : "border-transparent text-body hover:border-m-blue-light hover:text-body-strong"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
