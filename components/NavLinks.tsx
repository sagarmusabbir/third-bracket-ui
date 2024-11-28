// components/NavLinks.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RootNavLinks } from "@/config/site";
import MobileNav from "./MobileMenu";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center space-x-8">
        {RootNavLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              href={path}
              className={` 
                ${
                  pathname === path
                    ? "text-emerald-500 dark:text-emerald-400"
                    : ""
                }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <MobileNav />
    </nav>
  );
};

export default NavLinks;
