// packages/core/src/components/Navbar/ClientNavbar.tsx
"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";

import type { NavbarProps } from "./types";
import { AnimatedGrid } from "./AnimatedGrid";
import Link from "next/link";

export const ClientNavbar: React.FC<NavbarProps> = ({
  links,
  className = "",
}) => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`relative ${className}`}>
        <div className="hidden lg:flex items-center space-x-8 text-sm">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`transition-colors duration-200 ${
                currentPath === path
                  ? "text-emerald-500 dark:text-emerald-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden ">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            <RiMenu3Fill className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-[60] bg-white dark:bg-black backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        >
          <AnimatedGrid />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-white dark:via-gray-950/40 dark:to-gray-950" />
        </div>

        {/* Menu Panel */}
        <div
          className={`fixed  inset-y-0 right-0 z-[70] w-full max-w-xs transform transition-transform duration-300 ease-in-out border-l border-dashed border-slate-200  dark:border-gray-800 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full bg-white dark:bg-black">
            <div className="h-16 flex items-center justify-between px-4 border-b  border-dashed border-slate-200 dark:border-gray-800">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                Menu
              </h2>
              <button
                className="p-2 text-gray-800 hover:text-gray-950 dark:text-gray-200 dark:hover:text-white"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <RiCloseLine className="w-6 h-6" />
              </button>
            </div>

            <nav className="relative m-6 rounded-lg divide-y  divide-dashed border-dashed divide-gray-200/70 dark:divide-gray-700/40 border border-slate-200 dark:border-gray-800">
              {links.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 first:rounded-t-lg last:rounded-b-lg transition-all duration-200 ease-in-out ${
                    currentPath === path
                      ? "text-gray-950 dark:text-white "
                      : "text-gray-600 hover:text-gray-950  dark:text-slate-400 dark:hover:text-white "
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
