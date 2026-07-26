import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
}

const variantStyles = {
  default: "bg-white text-black border border-neutral-200 shadow-sm",
  outline: "bg-transparent border border-neutral-200",
  ghost: "bg-transparent",
};

export function Card({ children, className = "", variant = "default" }: CardProps) {
  return (
    <div
      className={`
        rounded-xl p-6
        transition-all duration-200
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
