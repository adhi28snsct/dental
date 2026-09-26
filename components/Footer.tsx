"use client";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Smile,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, MagneticHover } from "./MotionWrapper";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "In-House Lab", href: "#laboratory" },
  { label: "Services", href: "#services" },
  { label: "Treatments", href: "#treatments" },
  { label: "Patient Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
];

const treatments = [
  "Teeth Whitening",
  "Dental Implants",
  "Clear Aligners",
  "Root Canal Therapy",
  "Pediatric Care",
  "Preventive Hygiene",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030712] text-white">

      {/* Ambient background glows */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-[130px]"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8">

        {/* APPOINTMENT BANNER */}
        <FadeIn direction="up">
          <div className="relative mb-16 overflow-hidden rounded-[2.5rem] border border-cyan-500/30 bg-gradient-to-r from-[#0B1B33]/90 via-[#081426]/90 to-[#0B1B33]/90 p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Your Best Smile Awaits
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl text-white tracking-tight">
                  Ready to book your gentle dental checkup?
                </h3>
                <p className="mt-1 font-sans text-sm text-cyan-200/70">
                  Schedule your consultation in just 60 seconds with our friendly team.
                </p>
              </div>

              <MagneticHover>
                <a
                  href="#appointment"
                  className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105"
                >
                  Book Appointment Now
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </MagneticHover>
            </div>
          </div>
        </FadeIn>

        {/* MAIN FOOTER GRID */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.8fr_1fr]">

          {/* BRAND COLUMN */}
          <FadeIn direction="up" delay={0.1} className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-400/10 text-cyan-400 shadow-sm shadow-cyan-500/20"
              >
                <Smile size={28} strokeWidth={1.6} />
              </motion.div>

              <div>
                <p className="font-display text-2xl font-extrabold tracking-tight text-white">
                  Dent<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Art</span>
                </p>
                <p className="-mt-1 text-[9px] uppercase tracking-[0.2em] text-cyan-200/50 font-bold">
                  Smile Brighter Everyday
                </p>
              </div>
            </a>

            <p className="mt-6 font-sans text-sm leading-7 text-white/55">
              Modern dental health and cosmetic transformations with empathetic care.
              We are dedicated to giving your family reasons to smile brighter every day.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="mt-7 flex items-center gap-3">
              <SocialButton label="IG" href="#" ariaLabel="Instagram" />
              <SocialButton label="FB" href="#" ariaLabel="Facebook" />
              <SocialButton label="IN" href="#" ariaLabel="LinkedIn" />
            </div>
          </FadeIn>

          {/* QUICK LINKS */}
          <FadeIn direction="up" delay={0.2}>
            <h3 className="font-display text-sm font-bold tracking-wider uppercase text-white/90">
              Quick Links
            </h3>
            <div className="mt-6 space-y-3.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-cyan-400"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 text-cyan-400"
                  />
                </a>
              ))}
            </div>
          </FadeIn>

          {/* TREATMENTS */}
          <FadeIn direction="up" delay={0.3}>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/90">
              Treatments
            </h3>
            <div className="mt-6 space-y-3.5">
              {treatments.map((treatment) => (
                <a
                  key={treatment}
                  href="#treatments"
                  className="block w-fit text-sm text-white/55 transition-colors duration-200 hover:text-cyan-400"
                >
                  {treatment}
                </a>
              ))}
            </div>
          </FadeIn>

          {/* CONTACT INFO */}
          <FadeIn direction="up" delay={0.4}>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/90">
              Get In Touch
            </h3>
            <div className="mt-6 space-y-4">
              <a
                href="tel:+919876543210"
                className="group flex gap-3 text-white/70 hover:text-cyan-400 transition-colors"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    +91 98765 43210
                  </p>
                  <p className="text-xs text-white/40">Direct Clinic Hotline</p>
                </div>
              </a>

              <a
                href="mailto:hello@dentart.com"
                className="group flex gap-3 text-white/70 hover:text-cyan-400 transition-colors"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    hello@dentart.com
                  </p>
                  <p className="text-xs text-white/40">Email Appointments</p>
                </div>
              </a>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-sm leading-6 text-white/70">
                    123 Dental Avenue,
                    <br />
                    Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="mt-14 flex flex-col gap-4 border-t border-cyan-500/15 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} DentArt Clinic. Crafted with Care.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-cyan-300">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-cyan-300">
              Terms of Service
            </a>
            <a href="#appointment" className="text-cyan-400 transition hover:underline">
              Patient Portal
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

function SocialButton({
  label,
  href,
  ariaLabel,
}: {
  label: string;
  href: string;
  ariaLabel: string;
}) {
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-[#0B1B33] text-xs font-bold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/20"
    >
      {label}
    </motion.a>
  );
}