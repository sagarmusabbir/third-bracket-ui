// import React, { ButtonHTMLAttributes } from "react";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "solid" | "outline" | "link";
//   size?: "sm" | "md" | "lg" | "xl";
//   color?: "dark" | "light";
//   disabled?: boolean;

//   onClick?: () => void;
// }

// const Button: React.FC<ButtonProps> = ({
//   variant = "solid",
//   size = "md",
//   color = "primary",
//   disabled = false,
//   onClick,
//   children,
//   ...rest
// }) => {
//   const buttonClasses = `button-${variant}-${color} button-${size}`;
//   return (
//     <button
//       className={buttonClasses}
//       disabled={disabled}
//       onClick={onClick}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

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
      // dark: "bg-gray-800   rounded-md text-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 dark:bg-opacity-80  hover:bg-opacity-90 dark:hover:bg-opacity-90    border  border-slate-800  ",
      dark: "dark:bg-gray-800/50 bg-gray-800 hover:bg-gray-800/90 transition-color duration-200 ease-in-out  text-gray-50 border border-gray-800/30 hover:border-gray-800/90",
      light:
        "dark:bg-slate-200/90 bg-slate-200/50 hover:bg-slate-200 transition-color duration-200 ease-in-out  text-gray-900 border border-slate-200 hover:border-slate-200/20  ",
    },
    outline: {
      dark: "bg-transparent    text-gray-900 dark:text-white hover:text-white    hover:bg-gray-900     border  border-gray-800",
      light:
        "bg-transparent  text-gray-900 dark:text-white hover:text-gray-900  hover:bg-slate-100            border  border-slate-200",
    },
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs h-8",
    md: "px-5 py-2.5 text-sm h-10",
    lg: "px-7 py-3.5 text-base h-12",
    xl: "px-8 py-4 text-lg h-14",
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
