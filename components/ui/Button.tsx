import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center rounded-md  font-medium transition-colors  duration-400 delay-50 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-opacity focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background whitespace-nowrap",
  {
    variants: {
      variant: {
        base: "border border-gray-900 dark:border-slate-50 bg-gray-900 dark:bg-slate-50 text-slate-50 dark:text-gray-900 hover:bg-gray-900/90 dark:hover:bg-slate-50/90",
        glow: " bg-gradient-to-r from-gray-800 via-gray-700 to-slate-600 dark:from-slate-50 dark:via-slate-200 dark:to-slate-400 text-slate-50 dark:text-gray-900  opacity-100 hover:opacity-90 transition-opacity ",
        framed:
          "border border-dashed hover:border-solid border-slate-200 text-gray-900 hover:bg-slate-100/50 dark:hover:bg-gray-900/30 group-hover:transition-opacity   dark:border-gray-800 dark:text-white  hover:backdrop-blur-2xl",
        dim: "border border-slate-300 dark:border-gray-700 bg-slate-200 text-gray-900 hover:bg-slate-200/80 dark:bg-gray-800 dark:text-slate-100 dark:hover:bg-gray-800/80",

        ghost:
          "border border-transparent hover:border-slate-50 dark:hover:border-gray-900 text-gray-700 hover:text-gray-800 hover:bg-slate-50  dark:text-slate-300 dark:hover:text-slate-200 dark:hover:bg-gray-900 ",
        link: "underline underline-offset-8 decoration-from-font decoration-slate-400/40 dark:decoration-gray-600/60  decoration-dashed     text-slate-900 text-gray-700 hover:decoration-slate-400/40 dark:hover:decoration-gray-600/60 hover:decoration-solid hover:text-gray-800 dark:text-slate-300 dark:hover:text-slate-200",
      },
      size: {
        base: "h-9 rounded-md px-4  text-sm",
        sm: " h-8 px-3 rounded-md text-sm",
        lg: "h-10 px-5 rounded-md text-base",
        xl: "h-12 px-6 rounded-xl text-base",
      },
    },
    defaultVariants: {
      variant: "base",
      size: "base",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string | undefined;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
