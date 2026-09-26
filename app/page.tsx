import Hero from "@/components/hero";
import About from "@/components/about";
import ReceptionReveal from "@/components/ReceptionReveal";
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
import StickyNavbar from "@/components/StickyNavbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FFFFFF] text-[#000000] selection:bg-[#E10600] selection:text-white font-sans">
      {/* Persistent Global Sticky Navigation */}
      <StickyNavbar />

      {/* Particle Cursor */}
      <CustomCursor />

      {/* Background Evolutionary Watermark Layer */}
      <ScrollTeethBackground />

      {/* 01 — Hero */}
      <Hero />

      {/* 02 — About / Philosophy */}
      <About />

      {/* 02.5 — Reception & Concierge Parallax Reveal (Brentwood / OriginalSmile inspired) */}
      <ReceptionReveal />

      {/* 03 — Doctors / Specialists */}
      <Doctors />

      {/* 04 — Painless Sleep Dentistry Suite */}
      <MasterLaboratory />

      {/* 05 — Clinical Services */}
      <Services />

      {/* 06 — The DentArt Approach */}
      <Approach />

      {/* 07 — Specialized Treatments */}
      <Treatments />

      {/* 08 — Transformations (Before & After) */}
      <Transformations />

      {/* 09 — Patient Stories */}
      <Reviews />

      {/* 10 — Clinic Technology */}
      <ClinicTechnology />

      {/* 11 — Contact / Consultation */}
      <Contact />

      {/* 12 — Footer */}
      <Footer />

      {/* Floating Quick Action */}
      <FloatingWidget />
    </main>
  );
}