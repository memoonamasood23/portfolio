"use client";

import React, { useRef, useState } from "react";
import { clsx } from "clsx";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "indigo" | "blue" | "violet" | "emerald";
  interactive?: boolean;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className,
  glowColor = "indigo",
  interactive = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowGradients = {
    indigo: "rgba(99, 102, 241, 0.15)",
    blue: "rgba(56, 189, 248, 0.15)",
    violet: "rgba(129, 140, 248, 0.15)",
    emerald: "rgba(16, 185, 129, 0.15)",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        "relative rounded-2xl transition-all duration-300 overflow-hidden",
        "bg-[#0D121F]/80 border border-white/[0.08] backdrop-blur-md",
        "hover:border-indigo-500/30 hover:bg-[#121829]/90",
        className
      )}
      {...props}
    >
      {interactive && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowGradients[glowColor]}, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
