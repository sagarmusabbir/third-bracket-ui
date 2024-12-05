// packages/core/src/components/ThemeToggle/ThemeToggle.tsx
"use client";

import React from "react";
import { useEffect, useState } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wait for component to mount to avoid hydration mismatch
    setMounted(true);

    // Check local storage first
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // If no saved preference, check system preference
      const systemPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(systemPreference ? "dark" : "light");
      document.documentElement.classList.toggle("dark", systemPreference);
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        // Only auto-switch if user hasn't manually set a preference
        setTheme(e.matches ? "dark" : "light");
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-md hover:bg-slate-100/50 p-2 dark:hover:bg-gray-800/50 transition-colors duration-300"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <RiMoonLine className="w-4 h-4 text-white " />
      ) : (
        <RiSunLine className="w-4 h-4 text-black" />
      )}
    </button>
  );
};
