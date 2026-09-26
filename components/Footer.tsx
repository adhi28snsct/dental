"use client";

import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FadeIn } from "./MotionWrapper";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Studio philosophy", href: "#about" },
  { label: "Our clinicians", href: "#doctors" },
  { label: "Painless sedation suite", href: "#laboratory" },
  { label: "Clinical treatments", href: "#services" },
  { label: "Care approach", href: "#approach" },
  { label: "Patient reviews", href: "#reviews" },
  { label: "Contact studio", href: "#contact" },
];

const treatments = [
  "Restorative ceramic veneers",
  "Precision dental implants",
  "Clear orthodontic aligners",
  "Microscopic root canal therapy",
  "Periodontal laser hygiene",
  "Painless sleep dentistry",
];

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#000000] text-[#FFFFFF]">
      {/* Top red divider line & diamond */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 flex flex-col items-center justify-center">
        <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#E10600]/40 to-transparent" />
        <div className="-mt-[5px] flex items-center justify-center">
          <span
            className="block h-[9px] w-[9px] rotate-45 border border-[#E10600] bg-[#E10600]"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-24 lg:px-8">
        {/* APPOINTMENT BANNER */}
        <FadeIn direction="up">
          <div className="relative mb-20 rounded-sm border border-white/15 bg-[#000000] p-8 sm:p-12 shadow-lg">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
                  Reserve your consultation
                </p>
                <h3 className="mt-2 font-serif text-2xl font-medium sm:text-3xl text-[#FFFFFF] tracking-tight">
                  Ready to experience mindful dental care?
                </h3>
                <p className="mt-2 text-[15px] text-[#FFFFFF]/75 max-w-xl">
                  Schedule your comprehensive clinical evaluation with our senior dental masters.
                </p>
              </div>

              <a
                href="#appointment"
                className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-[#E10600] px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#FF2A24]"
              >
                <span>Request consultation</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* MAIN FOOTER GRID */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]">
          {/* BRAND COLUMN */}
          <FadeIn direction="up" delay={0.1} className="max-w-sm">
            <a href="#" className="inline-block">
              <span className="font-serif text-3xl font-normal tracking-tight text-[#FFFFFF]">
                DentArt
              </span>
              <p className="mt-1 font-serif text-xs italic text-[#E10600]">
                Studio of restorative & aesthetic dentistry
              </p>
            </a>

            <p className="mt-6 text-[14px] leading-relaxed text-[#FFFFFF]/70">
              Dentistry practiced with unhurried precision, biological biocompatibility,
              and genuine patient comfort. Founded on the principle that clinical excellence
              and gentle hospitality belong together.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="mt-7 flex items-center gap-2.5">
              <SocialButton label="Instagram" href="#" ariaLabel="Instagram" />
              <SocialButton label="LinkedIn" href="#" ariaLabel="LinkedIn" />
              <SocialButton label="Facebook" href="#" ariaLabel="Facebook" />
            </div>
          </FadeIn>

          {/* QUICK LINKS */}
          <FadeIn direction="up" delay={0.15}>
            <p className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
              Navigation
            </p>
            <div className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-[#FFFFFF]/70 transition-colors hover:text-[#E10600]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </FadeIn>

          {/* TREATMENTS */}
          <FadeIn direction="up" delay={0.2}>
            <p className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
              Disciplines
            </p>
            <div className="mt-5 space-y-2.5">
              {treatments.map((treatment) => (
                <a
                  key={treatment}
                  href="#treatments"
                  className="block text-sm text-[#FFFFFF]/70 transition-colors hover:text-[#E10600]"
                >
                  {treatment}
                </a>
              ))}
            </div>
          </FadeIn>

          {/* CONTACT INFO */}
          <FadeIn direction="up" delay={0.25}>
            <p className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
              Studio inquiries
            </p>
            <div className="mt-5 space-y-4">
              <a
                href="tel:+919876543210"
                className="group flex gap-3 text-[#FFFFFF]/75 transition-colors hover:text-[#FFFFFF]"
              >
                <Phone size={16} className="mt-1 shrink-0 text-[#E10600]" />
                <div>
                  <p className="text-sm font-medium text-[#FFFFFF]">
                    +91 98765 43210
                  </p>
                  <p className="font-mono text-xs text-[#FFFFFF]/50">Direct appointment line</p>
                </div>
              </a>

              <a
                href="mailto:hello@dentart.com"
                className="group flex gap-3 text-[#FFFFFF]/75 transition-colors hover:text-[#FFFFFF]"
              >
                <Mail size={16} className="mt-1 shrink-0 text-[#E10600]" />
                <div>
                  <p className="text-sm font-medium text-[#FFFFFF]">
                    hello@dentart.com
                  </p>
                  <p className="font-mono text-xs text-[#FFFFFF]/50">Concierge email desk</p>
                </div>
              </a>

              <div className="flex gap-3 text-[#FFFFFF]/75">
                <MapPin size={16} className="mt-1 shrink-0 text-[#E10600]" />
                <div>
                  <p className="text-sm leading-relaxed text-[#FFFFFF]/70">
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
        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 text-xs text-[#FFFFFF]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} DentArt Studio. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#FFFFFF]">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-[#FFFFFF]">
              Terms of Care
            </a>
            <a href="#appointment" className="text-[#E10600] transition hover:underline">
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
    <a
      href={href}
      aria-label={ariaLabel}
      className="inline-flex items-center rounded-sm border border-white/15 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-[#FFFFFF]/70 transition-colors hover:border-[#E10600] hover:text-[#FFFFFF]"
    >
      {label}
    </a>
  );
}