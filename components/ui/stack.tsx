import { ReactNode } from "react";

type StackDirection = "vertical" | "horizontal";
type StackAlign = "start" | "center" | "end" | "stretch";
type StackJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
type StackSpacing = "0" | "1" | "2" | "3" | "4" | "6" | "8" | "10" | "12" | "16";

interface StackProps {
  children: ReactNode;
  direction?: StackDirection;
  spacing?: StackSpacing;
  align?: StackAlign;
  justify?: StackJustify;
  className?: string;
  as?: "div" | "section" | "article" | "nav" | "header" | "footer";
}

const spacingMap: Record<StackSpacing, string> = {
  "0": "gap-0",
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "6": "gap-6",
  "8": "gap-8",
  "10": "gap-10",
  "12": "gap-12",
  "16": "gap-16",
};

const alignMap: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyMap: Record<StackJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export function Stack({
  children,
  direction = "vertical",
  spacing = "4",
  align = "stretch",
  justify = "start",
  className = "",
  as: Component = "div",
}: StackProps) {
  const directionClass = direction === "vertical" ? "flex-col" : "flex-row";

  return (
    <Component
      className={`
        flex
        ${directionClass}
        ${spacingMap[spacing]}
        ${alignMap[align]}
        ${justifyMap[justify]}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}
