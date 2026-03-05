import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Section({ className = "", children }: Props) {
  return <section className={`section-shell ${className}`.trim()}>{children}</section>;
}
