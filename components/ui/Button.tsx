import * as React from "react";

type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-lg cursor-pointer px-6 py-2 text-base md:text-lg font-bold transition-colors";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#E31C22] text-white border border-[#E31C22] hover:bg-[#c21a1f]",
  secondary:
    "bg-transparent text-[#E31C22] border border-[#E31C22] ",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", className = "", children, ...props },
    ref
  ) {
    const variantClass = variantClasses[variant];

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
