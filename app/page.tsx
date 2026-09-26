import Hero from "@/components/hero";
import About from "@/components/about";
import Doctors from "@/components/Doctors";
import MasterLaboratory from "@/components/MasterLaboratory";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Treatments from "@/components/Treatments";
import Transformations from "@/components/Transformations";
import Reviews from "@/components/Reviews";
import ClinicTechnology from "@/components/ClinicTechnology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import CustomCursor from "@/components/CustomCursor";
import ScrollTeethBackground from "@/components/ScrollTeethBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FAFCFF] text-slate-900 selection:bg-cyan-500 selection:text-white font-sans">
      {/* Magic Particle Sparkle Cursor */}
      <CustomCursor />

      {/* Dynamic Scroll-Driven Teeth Evolution Background (Damaged → Treatment → Open Arch → Radiant Smile) */}
      <ScrollTeethBackground />

      {/* 01 — Hero */}
      <Hero />

      {/* 02 — About / The Clinic */}
      <About />

      {/* 03 — Doctors / Specialists */}
      <Doctors />

      {/* 04 — M.Vision Inspired In-House Master Ceramic Lab & 40x Microscope Precision */}
      <MasterLaboratory />

      {/* 05 — Services */}
      <Services />

      {/* 06 — The DentArt Approach */}
      <Approach />

      {/* 07 — Treatments / Signature Smile */}
      <Treatments />

      {/* 08 — Smile Transformations (Before & After) */}
      <Transformations />

      {/* 09 — Patient Stories */}
      <Reviews />

      {/* 10 — Clinic / Technology */}
      <ClinicTechnology />

      {/* 11 — Contact / Appointment */}
      <Contact />

      {/* 12 — Footer */}
      <Footer />

      {/* Floating Emergency & Quick Booking Access */}
      <FloatingWidget />
    </main>
  );
}