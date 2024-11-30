// packages/core/src/blocks/Header/Header.tsx
import Image from "next/image";
import Link from "next/link";

import type { HeaderProps } from "./types";
import React from "react";
import { ThemeToggle } from "../../components/ThemeToggle";

import { Navbar } from "../../components/Navbar";

export const Header = ({
  brandLogo,
  navigation,
  children,
  className = "",
}: HeaderProps) => {
  return (
    <header
      className={`sticky   top-0  z-40 border-dashed border-b border-slate-200 dark:border-gray-800 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand Section */}
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
              <Navbar
                links={navigation.links}
                className={navigation.className}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
