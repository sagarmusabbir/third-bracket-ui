import React, { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "dark" | "light";
  href: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "md",
  color = "dark",
  className,
  children,
  href,
  ...rest
}) => {
  const baseClasses =
    "font-semibold rounded focus:outline-none transition duration-300 ease-in-out inline-flex items-center justify-center flex-shrink-0 rounded-md";

  const variantClasses = {
    solid: {
      dark: "dark:bg-gray-800/50 bg-gray-800 hover:bg-gray-800 transition-color duration-200 ease-in-out py-3 px-10 rounded-lg text-gray-50 ",
      light:
        "dark:bg-slate-200/90 bg-slate-200 hover:bg-slate-200 transition-color duration-200 ease-in-out py-3 px-10 rounded-lg text-gray-950 ",
    },
    outline: {
      dark: "border-2 bg-transparent border-gray-800  hover:bg-gray-800  text-gray-800 dark:text-white hover:text-white  transition-color duration-200 ease-in-out py-3 px-10 rounded-lg ",
      light:
        "border-2 bg-transparent border-slate-200  hover:bg-slate-200  text-gray-800 dark:text-white hover:text-gray-800  transition-color duration-200 ease-in-out py-3 px-10 rounded-lg",
    },
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs h-8",
    md: "px-4 py-2 text-sm h-10",
    lg: "px-8 h-11 text-base ",
    xl: "px-10 py-3 text-lg h-12",
  };

  const buttonClasses = twMerge(
    baseClasses,
    variantClasses[variant][color],
    sizeClasses[size],
    className
  );

  return (
    <Link href={href} passHref legacyBehavior>
      <a className={buttonClasses} {...rest}>
        {children}
      </a>
    </Link>
  );
};

export default Button;
