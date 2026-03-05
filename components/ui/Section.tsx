import { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export default function Section({ as: Component = "section", className = "", children }: Props) {
  return <Component className={`section-shell space-y-6 ${className}`.trim()}>{children}</Component>;
}
