import { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export default function Card({ as: Component = "article", className = "", children }: Props) {
  return <Component className={`premium-card h-full ${className}`.trim()}>{children}</Component>;
}
