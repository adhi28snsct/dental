"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Calendar, Phone } from "lucide-react";

export default function FloatingWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Quick Book Consultation Floating Action Button */}
          <motion.a
            href="#appointment"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 backdrop-blur-md hover:scale-105 transition-transform"
          >
            <Calendar size={15} />
            <span>Book Visit</span>
          </motion.a>

          {/* Quick Call Button */}
          <motion.a
            href="tel:+919876543210"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Call clinic directly"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-cyan-600 border border-slate-200 shadow-xl backdrop-blur-md hover:border-cyan-400"
          >
            <Phone size={17} />
          </motion.a>

          {/* Back to top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top of page"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200 shadow-xl transition-colors hover:border-cyan-400 hover:text-cyan-600 backdrop-blur-md"
          >
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
