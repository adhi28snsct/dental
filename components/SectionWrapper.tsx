import { ReactNode } from "react";

type DividerVariant = "line" | "glow" | "subtle" | "none";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: DividerVariant | string;
  dividerColor?: string;
  topVariant?: DividerVariant | string;
  topDividerColor?: string;
  hideDivider?: boolean;
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  hideDivider = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {/* Subtle, minimalist top hairline gradient divider */}
      {!hideDivider && (
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 flex justify-center">
          <div className="h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}