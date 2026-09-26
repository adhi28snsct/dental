"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Calendar } from "lucide-react";

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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
        >
          {/* Quick Book Consultation Action */}
          <a
            href="#appointment"
            className="flex items-center gap-2 rounded-sm bg-[#E10600] px-4 py-2.5 font-mono text-xs font-medium tracking-wide text-white shadow-md transition-colors hover:bg-[#FF2A24]"
          >
            <Calendar size={13} className="text-white" />
            <span>Book consultation</span>
          </a>

          {/* Back to top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] text-[#000000] shadow-md transition-colors hover:border-[#E10600] hover:text-[#E10600]"
          >
            <ArrowUp size={15} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
