import React from "react";
import { clsx } from "clsx";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "left",
  className,
}) => {
  return (
    <div
      className={clsx(
        "mb-12 md:mb-16",
        {
          "text-left": align === "left",
          "text-center mx-auto max-w-3xl": align === "center",
        },
        className
      )}
    >
      {badge && (
        <div
          className={clsx("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-4", "border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 backdrop-blur-md")}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
