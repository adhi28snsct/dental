"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Concierge", href: "#concierge" },
  { label: "Doctors", href: "#doctors" },
  { label: "Painless Suite", href: "#laboratory" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Treatments", href: "#treatments" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function StickyNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Scroll interpolation range: 0px to 120px
  const SCROLL_RANGE = [0, 120];

  // 1. Physical Header Compression (96px -> 64px)
  const headerHeight = useTransform(
    scrollY,
    SCROLL_RANGE,
    shouldReduceMotion ? ["64px", "64px"] : ["96px", "64px"]
  );

  // 2. Background Transition (transparent/dark tint -> crisp translucent white)
  const headerBg = useTransform(
    scrollY,
    SCROLL_RANGE,
    shouldReduceMotion
      ? ["rgba(255, 255, 255, 0.96)", "rgba(255, 255, 255, 0.96)"]
      : ["rgba(14, 18, 16, 0.35)", "rgba(255, 255, 255, 0.96)"]
  );

  // 3. Backdrop Blur (2px -> 16px)
  const backdropFilter = useTransform(
    scrollY,
    SCROLL_RANGE,
    shouldReduceMotion ? ["blur(16px)", "blur(16px)"] : ["blur(2px)", "blur(16px)"]
  );

  // 4. Subtle Border & Shadow Evolution
  const borderColor = useTransform(
    scrollY,
    SCROLL_RANGE,
    shouldReduceMotion
      ? ["rgba(0, 0, 0, 0.08)", "rgba(0, 0, 0, 0.08)"]
      : ["rgba(255, 255, 255, 0.12)", "rgba(0, 0, 0, 0.08)"]
  );

  const boxShadow = useTransform(
    scrollY,
    SCROLL_RANGE,
    shouldReduceMotion
      ? ["0 4px 20px -2px rgba(0, 0, 0, 0.05)", "0 4px 20px -2px rgba(0, 0, 0, 0.05)"]
      : ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 20px -2px rgba(0, 0, 0, 0.05)"]
  );

  // 5. Typography & Color Interpolations
  const logoDentColor = useTransform(scrollY, SCROLL_RANGE, ["#FAF9F6", "#000000"]);
  const navLinkColor = useTransform(scrollY, SCROLL_RANGE, [
    "rgba(250, 249, 246, 0.8)",
    "rgb(51, 51, 51)",
  ]);
  const phoneTextColor = useTransform(scrollY, SCROLL_RANGE, [
    "rgba(250, 249, 246, 0.85)",
    "rgb(85, 85, 85)",
  ]);
  const phoneIconColor = useTransform(scrollY, SCROLL_RANGE, ["#C9A24B", "#E10600"]);

  // 6. Action Button Color Transitions
  const ctaBgColor = useTransform(scrollY, SCROLL_RANGE, ["#FAF9F6", "#000000"]);
  const ctaTextColor = useTransform(scrollY, SCROLL_RANGE, ["#0E1210", "#FFFFFF"]);
  const ctaIconColor = useTransform(scrollY, SCROLL_RANGE, ["#E10600", "#FFFFFF"]);

  // 7. Mobile Menu Trigger Colors
  const mobileBtnBorder = useTransform(scrollY, SCROLL_RANGE, [
    "rgba(255, 255, 255, 0.2)",
    "rgba(0, 0, 0, 0.15)",
  ]);
  const mobileBtnColor = useTransform(scrollY, SCROLL_RANGE, ["#FAF9F6", "#000000"]);

  return (
    <motion.header
      style={{
        height: headerHeight,
        backgroundColor: headerBg,
        backdropFilter: backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: borderColor,
        boxShadow: boxShadow,
        willChange: "height, background-color, backdrop-filter, border-color, box-shadow",
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-baseline gap-0.5 group" aria-label="DentArt Home">
          <motion.span
            style={{ color: logoDentColor }}
            className="font-serif text-2xl font-medium tracking-tight transition-colors group-hover:text-[#E10600]"
          >
            Dent
          </motion.span>
          <span className="font-serif text-2xl italic text-[#C9A24B]">Art</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              style={{ color: navLinkColor }}
              className="text-[12px] uppercase tracking-wider font-mono transition-colors hover:!text-[#E10600]"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          <motion.a
            href="tel:+919876543210"
            style={{ color: phoneTextColor }}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono transition-colors mr-2 hover:!text-[#000000]"
            title="Call Clinic"
            aria-label="Call clinic at (0422) 249-8800"
          >
            <motion.span style={{ color: phoneIconColor }}>
              <Phone size={13} aria-hidden="true" />
            </motion.span>
            <span>(0422) 249-8800</span>
          </motion.a>

          {/* Book Consultation Button */}
          <motion.a
            href="#contact"
            style={{
              backgroundColor: ctaBgColor,
              color: ctaTextColor,
            }}
            whileHover={shouldReduceMotion ? {} : { y: -1, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all hover:opacity-90"
          >
            <motion.span style={{ color: ctaIconColor }}>
              <Calendar size={13} aria-hidden="true" />
            </motion.span>
            <span>Book Consultation</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              borderColor: mobileBtnBorder,
              color: mobileBtnColor,
            }}
            className="flex h-9 w-9 items-center justify-center rounded-sm border lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 border-b border-black/10 bg-white/98 backdrop-blur-xl px-6 py-5 shadow-xl lg:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-black/5 pb-2 text-sm font-mono tracking-wide text-[#333333] transition-colors hover:text-[#E10600]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm text-[#555555]"
                >
                  <Phone size={14} className="text-[#E10600]" />
                  <span>(0422) 249-8800</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 rounded-sm bg-[#000000] py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#E10600]"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
