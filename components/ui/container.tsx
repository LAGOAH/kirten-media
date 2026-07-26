import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeMap = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  children,
  className = "",
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto px-4 sm:px-6 lg:px-8 w-full
        ${sizeMap[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
