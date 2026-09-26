import { ReactNode } from "react";

type DividerVariant = "ornament" | "line" | "subtle" | "none";
type Tone = "light" | "dark";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Divider style rendered at the top of the section */
  variant?: DividerVariant;
  /** Color tone of the section — affects divider palette */
  tone?: Tone;
  /** Hide the top divider entirely */
  hideDivider?: boolean;
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  variant = "ornament",
  tone = "light",
  hideDivider = false,
}: SectionWrapperProps) {
  if (variant === "none" || hideDivider) {
    return (
      <section id={id} className={`relative scroll-mt-20 ${className}`}>
        {children}
      </section>
    );
  }

  const lineColor =
    tone === "dark"
      ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
      : "bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent";

  return (
    <section id={id} className={`relative scroll-mt-20 ${className}`}>
      {/* Top divider */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 flex flex-col items-center justify-center">
        {/* Hairline */}
        <div className={`h-px w-full max-w-5xl ${lineColor}`} />

        {/* Centered Signal Red diamond ornament */}
        {variant === "ornament" && (
          <div className="-mt-[5px] flex items-center justify-center">
            <span
              className="block h-[9px] w-[9px] rotate-45 border border-[#E10600] bg-[#E10600]/20"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Subtle variant */}
        {variant === "subtle" && (
          <div className="-mt-px h-px w-16 bg-[#E10600]/40" />
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}