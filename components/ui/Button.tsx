import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "lg";

export function getButtonClassName(variant: ButtonVariant = "primary", size: ButtonSize = "md") {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variantClasses = {
    primary:
      "bg-cyan-700 text-white shadow-[0_10px_24px_-14px_rgba(8,145,178,0.95)] hover:bg-cyan-800 focus-visible:outline-cyan-700",
    secondary:
      "border border-slate-300 bg-white text-slate-800 shadow-sm hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-slate-700",
  };
  const sizeClasses = {
    md: "min-h-11 px-5 py-2.5 text-sm sm:text-base",
    lg: "min-h-12 px-6 py-3 text-base sm:text-lg",
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button({ variant = "primary", size = "md", className = "", type = "button", ...props }: Props) {
  return <button type={type} className={`${getButtonClassName(variant, size)} ${className}`.trim()} {...props} />;
}
