// components/MobileNav.tsx
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RootNavLinks } from "@/config/site";
import { RiCloseLargeLine, RiArrowRightSLine } from "react-icons/ri";
import { AnimatedGrid } from "./ui/AnimatedGrid";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="lg:hidden ">
      {/* Mobile Menu Button */}
      <button
        className="p-2 -mr-2 text-gray-800   dark:text-white    "
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {/* <RiMenu3Fill className=" w-6 h-6    " /> */}
        <svg
          viewBox="0 0 13.046 13.046"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M4.61 12.547h7.978v.041H4.61Zm-4.018-.049h1.991v.14H.592ZM4.61 4.874h7.978v.041H4.61Zm0 3.44h7.978v.04H4.61Z"
            style={{
              opacity: 1,
              fill: "currentColor",
              fillOpacity: 1,
              stroke: "currentColor",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeMiterlimit: 50,
              strokeDasharray: "none",
              strokeDashoffset: 2,
              paintOrder: "markers fill stroke",
            }}
            transform="translate(-.092 -.092)"
          />
          <path
            d="M4.61 12.547h7.978v.041H4.61Zm-4.018-.049h1.991v.14H.592Z"
            style={{
              opacity: 1,
              fill: "currentColor",
              fillOpacity: 1,
              stroke: "currentColor",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeMiterlimit: 50,
              strokeDasharray: "none",
              strokeDashoffset: 2,
              paintOrder: "markers fill stroke",
            }}
            transform="matrix(-1 0 0 1 13.137 -11.998)"
          />
        </svg>
      </button>

      {/* Mobile Menu Overlay with Animated Grid */}
      <div
        className={`fixed inset-0 bg-white/70 dark:bg-gray-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <AnimatedGrid />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-white  dark:via-gray-950/40 dark:to-gray-950" />
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white/10 dark:bg-gray-950/30 backdrop-blur-md border-dashed   transform transition-transform border-l dark:border-gray-800/50 duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between px-4 h-16 border-b border-dashed dark:border-gray-800/50">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Menu
          </h2>
          <button
            className="p-2 text-gray-800 hover:text-gray-950 dark:text-gray-200 dark:hover:text-white"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <RiCloseLargeLine className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="relative m-6 rounded-lg divide-y divide-dashed border-dashed divide-gray-200/70 dark:divide-gray-700/40 border border-gray-200/70 dark:border-gray-700/40">
          {RootNavLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              onClick={closeMenu}
              className={`group flex items-center justify-between px-4 py-3
                first:rounded-t-lg last:rounded-b-lg
                 backdrop-blur-sm
                transition-all duration-200 ease-in-out
                ${
                  pathname === path
                    ? "text-gray-900 dark:text-white bg-gray-100/50 dark:bg-gray-800/50"
                    : "text-gray-800/80 hover:text-gray-900 hover:bg-white/80 dark:text-slate-100/60 dark:hover:text-white dark:hover:bg-gray-800/50"
                }`}
            >
              <span className="flex items-center space-x-3">
                {Icon && <Icon className="w-4 h-4" />}
                <span>{label}</span>
              </span>
              <RiArrowRightSLine
                className="w-5 h-5 opacity-0 group-hover:opacity-100
                  transition-opacity duration-200"
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
