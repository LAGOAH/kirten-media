import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  variant?: "body" | "lead" | "small" | "muted";
}

const sizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const variantStyles = {
  body: "text-neutral-300",
  lead: "text-neutral-300 text-lg md:text-xl",
  small: "text-xs text-neutral-500",
  muted: "text-neutral-500",
};

export function Text({
  children,
  className = "",
  as: Component = "p",
  size = "base",
  variant = "body",
}: TextProps) {
  return (
    <Component
      className={`${variantStyles[variant]} ${sizeMap[size]} ${className}`}
    >
      {children}
    </Component>
  );
}
