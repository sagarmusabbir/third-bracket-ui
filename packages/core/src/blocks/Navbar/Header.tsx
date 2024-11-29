// packages/core/src/blocks/Header/Header.tsx
import Image from "next/image";
import Link from "next/link";
import { AnimatedGrid } from "../Navbar/AnimatedGrid";
import type { HeaderProps } from "./types";
import React from "react";
import { ThemeToggle } from "../../components/ThemeToggle";

export const Header = ({
  brandLogo,
  navbar,
  children,
  className = "",
}: HeaderProps) => {
  return (
    <header
      className={`sticky bg-white dark:bg-black  top-0  z-50 border-dashed border-b border-slate-400/20 dark:border-gray-700/50 ${className}`}
    >
      {/* <div className="relative ">
        <AnimatedGrid />
      </div> */}
      <div className="relative   mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link
            href={brandLogo.href}
            className="group transition-opacity duration-200 ease-in-out hover:opacity-100 opacity-90 order-1"
          >
            <Image
              src={brandLogo.src}
              alt={brandLogo.alt}
              width={104}
              height={24}
              className="h-6 w-auto dark:invert"
            />
          </Link>

          {/* Flexible middle section */}
          {children && (
            <div className="flex-1 flex items-center justify-center">
              {children}
            </div>
          )}

          <div className="flex items-center gap-4">
            <div className="order-first md:order-last">
              <ThemeToggle />
            </div>
            <div className="order-last md:order-first">
              <div className="relative ">
                <AnimatedGrid />
              </div>
              {navbar}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
