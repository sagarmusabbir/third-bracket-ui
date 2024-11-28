"use client";

import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "dark" | "light" | "glow" | "dim";
}

const Button: React.FC<ButtonProps> = ({
  href,
  variant = "solid",
  size = "md",
  color = "dark",
  className,
  children,
  onClick,
  ...rest
}) => {
  const baseClasses =
    "group inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "h-8 px-3 text-sm min-w-[80px] w-fit",
    md: "h-10 px-4 text-base min-w-[100px] w-fit",
    lg: "h-12 px-6 text-lg min-w-[120px] w-fit",
    xl: "h-14 px-8 text-xl min-w-[140px] w-fit",
  };

  const variantClasses = {
    solid: {
      dark: "bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600",
      light:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
      glow: "bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-600 hover:to-slate-700 focus:ring-slate-500 dark:from-slate-600 dark:to-slate-700 dark:hover:from-slate-500 dark:hover:to-slate-600",
      dim: "bg-slate-600 text-white hover:bg-slate-500 focus:ring-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700",
    },
    outline: {
      dark: "border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white focus:ring-slate-500 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-600",
      light:
        "border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
      glow: "border-2 border-slate-600 text-slate-600 hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-700 hover:text-white focus:ring-slate-500 dark:border-slate-500 dark:text-slate-400",
      dim: "border-2 border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white focus:ring-slate-400 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700",
    },
    ghost: {
      dark: "text-slate-800 hover:bg-slate-100 focus:ring-slate-500 dark:text-slate-300 dark:hover:bg-slate-800",
      light:
        "text-gray-600 hover:bg-gray-100 focus:ring-gray-300 dark:text-gray-300 dark:hover:bg-gray-800",
      glow: "text-slate-600 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200 focus:ring-slate-500 dark:text-slate-400 dark:hover:from-slate-800 dark:hover:to-slate-700",
      dim: "text-slate-500 hover:bg-slate-100 focus:ring-slate-400 dark:text-slate-400 dark:hover:bg-slate-800",
    },
  };

  const buttonClasses = twMerge(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant][color],
    className
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a className={buttonClasses}>{children}</a>
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
