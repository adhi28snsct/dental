"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function ReceptionReveal() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="concierge"
      className="relative w-full h-[400px] sm:h-[460px] lg:h-[520px] overflow-hidden flex items-center justify-center border-y border-black/5"
      style={{ clipPath: "inset(0)" }}
    >
      {/* ================= FIXED RECEPTION BACKGROUND BEHIND THE SCREEN ================= */}
      {/* Fixed attachment creates the natural feel that the reception area is pinned behind the page, */}
      {/* cleanly revealed as the surrounding white content slides over it. Zero white masks or overlays. */}
      <div
        className="pointer-events-none absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/reception.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(85%) contrast(108%) brightness(86%)",
        }}
      />

      {/* Architectural Blue Sun Shade Tint */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#2D4A60]/45 mix-blend-multiply"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#3E5C76]/25 mix-blend-color"
        aria-hidden="true"
      />

      {/* ================= FOREGROUND FLOATING CONTENT ================= */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center select-none">
        {/* Monospaced Atelier Kicker */}
        <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 mb-4 bg-black/35 backdrop-blur-md border border-white/20 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E10600]" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#FAF9F6]">
            DentArt Clinic & Concierge
          </span>
        </div>

        {/* Clean, Impact Headline */}
        <h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.05em] text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]"
          style={{
            textShadow: "0 2px 14px rgba(0,0,0,0.65), 0 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          Schedule An Appointment
        </h2>

        {/* Micro-Interactions on CTA */}
        <div className="mt-7 flex justify-center">
          <motion.a
            href="#contact"
            whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#FAF4E6] hover:bg-white text-[#14151A] px-9 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <Calendar size={15} className="text-[#C9A24B]" aria-hidden="true" />
            <span>Book Here</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
