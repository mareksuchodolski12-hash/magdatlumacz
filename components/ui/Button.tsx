import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "lg";

export function getButtonClassName(variant: ButtonVariant = "primary", size: ButtonSize = "md") {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variantClasses = {
    primary:
      "bg-[#A8C98B] text-[#213B34] shadow-sm hover:bg-[#95b878] hover:shadow-md focus-visible:outline-[#A8C98B]",
    secondary:
      "border border-[#6F9E8F]/30 bg-white text-[#213B34] shadow-sm hover:border-[#6F9E8F]/50 hover:bg-[#F3F8F4] focus-visible:outline-[#6F9E8F]",
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
