import { ReactNode } from "react";
import { Container } from "./container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "article";
}

export function Section({
  children,
  className = "",
  containerClassName = "",
  as: Component = "section",
}: SectionProps) {
  return (
    <Component className={`py-16 sm:py-20 md:py-24 lg:py-28 ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </Component>
  );
}
