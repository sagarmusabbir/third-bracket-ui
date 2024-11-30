// packages/core/src/components/Navbar/ClientNavbar.tsx
"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { AnimatedGrid } from "./AnimatedGrid";
import type { NavbarProps } from "./types";

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
        <div className="hidden lg:flex items-center space-x-8">
          {links.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              className={`transition-colors duration-200 ${
                currentPath === path
                  ? "text-emerald-500 dark:text-emerald-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
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
          className={`fixed inset-0 z-[60] bg-white/70 dark:bg-gray-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        >
          <AnimatedGrid />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-white dark:via-gray-950/40 dark:to-gray-950" />
        </div>

        {/* Menu Panel */}
        <div
          className={`fixed inset-y-0 right-0 z-[70] w-full max-w-xs transform transition-transform duration-300 ease-in-out border-l border-dashed border-slate-200 dark:border-gray-800 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full bg-white dark:bg-gray-950">
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

            <nav className="relative m-6 rounded-lg divide-y divide-dashed border-dashed divide-gray-200/70 dark:divide-gray-700/40 border border-slate-200 dark:border-gray-800">
              {links.map(({ path, label }) => (
                <a
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
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

// "use client";

// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
// import { createPortal } from "react-dom";
// import { AnimatedGrid } from "./AnimatedGrid";
// import type { NavbarProps } from "./types";

// export const ClientNavbar: React.FC<NavbarProps> = ({
//   links,
//   className = "",
// }) => {
//   const currentPath = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <>
//       <nav className={`relative ${className}`}>
//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center space-x-8">
//           {links.map(({ path, label }) => (
//             <a
//               key={path}
//               href={path}
//               className={`transition-colors duration-200 ${
//                 currentPath === path
//                   ? "text-emerald-500 dark:text-emerald-400"
//                   : "text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
//               }`}
//             >
//               {label}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className="p-2 text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
//             aria-label="Toggle menu"
//           >
//             <RiMenu3Fill className="w-6 h-6" />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu (Portaled to body) */}
//       {typeof window !== "undefined" &&
//         createPortal(
//           <div className="lg:hidden">
//             {/* Overlay */}
//             <div
//               className={`fixed inset-0 z-40 bg-white/70 dark:bg-gray-950/60 backdrop-blur-sm transition-opacity duration-300 ${
//                 isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//               }`}
//               onClick={closeMenu}
//             >
//               <AnimatedGrid />
//               <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-white dark:via-gray-950/40 dark:to-gray-950" />
//             </div>

//             {/* Mobile Menu Panel */}
//             <div
//               className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white/10 dark:bg-gray-950/30 backdrop-blur-md border-dashed transform transition-transform duration-300 ease-in-out border-l dark:border-gray-800/50 ${
//                 isMenuOpen ? "translate-x-0" : "translate-x-full"
//               }`}
//             >
//               <div className="relative flex items-center justify-between px-4 h-16 border-b border-dashed border-slate-200 dark:border-gray-800">
//                 <h2 className="text-lg font-medium text-gray-800 dark:text-white">
//                   Menu
//                 </h2>
//                 <button
//                   className="p-2 text-gray-800 hover:text-gray-950 dark:text-gray-200 dark:hover:text-white"
//                   onClick={closeMenu}
//                   aria-label="Close menu"
//                 >
//                   <RiCloseLine className="w-6 h-6" />
//                 </button>
//               </div>

//               <nav className="relative m-6 rounded-lg divide-y divide-dashed border-dashed divide-gray-200/70 dark:divide-gray-700/40 border border-slate-200 dark:border-gray-800">
//                 {links.map(({ path, label }) => (
//                   <a
//                     key={path}
//                     href={path}
//                     onClick={closeMenu}
//                     className={`block px-4 py-3 first:rounded-t-lg last:rounded-b-lg backdrop-blur-sm transition-all duration-200 ease-in-out ${
//                       currentPath === path
//                         ? "text-gray-900 dark:text-white bg-gray-100/50 dark:bg-gray-800/50"
//                         : "text-gray-800/80 hover:text-gray-900 hover:bg-white/80 dark:text-slate-100/60 dark:hover:text-white dark:hover:bg-gray-800/50"
//                     }`}
//                   >
//                     {label}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           </div>,
//           document.body
//         )}
//     </>
//   );
// };

// packages/core/src/components/Navbar/ClientNavbar.tsx

// "use client";

// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
// import Image from "next/image";
// import Link from "next/link";
// import { AnimatedGrid } from "./AnimatedGrid";
// import type { NavbarProps } from "./types";
// import React from "react";

// export const ClientNavbar: React.FC<NavbarProps> = ({
//   links,
//   className = "",
//   brandLogo,
// }) => {
//   const currentPath = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <>
//       <nav
//         className={`relative p-4 z-40 flex items-center justify-between w-full ${className}`}
//       >
//         {/* Brand Logo */}
//         {brandLogo && (
//           <Link href={brandLogo.href} className="flex items-center">
//             <Image
//               src={brandLogo.src}
//               alt={brandLogo.alt}
//               width={32}
//               height={32}
//               className="h-6 w-auto"
//             />
//           </Link>
//         )}

//         {/* Desktop Navigation */}
//         <ul className="hidden lg:flex items-center space-x-8">
//           {links.map(({ path, label }) => (
//             <li key={path}>
//               <a
//                 href={path}
//                 className={`${
//                   currentPath === path
//                     ? "text-emerald-500 dark:text-emerald-400"
//                     : "text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
//                 }`}
//               >
//                 {label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button
//             className="p-2 text-gray-800 dark:text-white"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <RiMenu3Line className="w-6 h-6" />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu (Portal to body) */}
//       <div className="lg:hidden">
//         {/* Overlay */}
//         <div
//           className={`fixed inset-0 z-40 bg-white/70 dark:bg-gray-950/60 backdrop-blur-sm transition-opacity duration-300 ${
//             isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//           onClick={closeMenu}
//         >
//           <AnimatedGrid />
//           <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-white dark:via-gray-950/40 dark:to-gray-950" />
//         </div>

//         {/* Mobile Menu Panel */}
//         <div
//           className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white/10 dark:bg-gray-950/30 backdrop-blur-md border-dashed transform transition-transform duration-300 ease-in-out border-l dark:border-gray-800/50 ${
//             isMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="relative flex items-center justify-between px-4 h-16 border-b border-dashed dark:border-gray-800/50">
//             <h2 className="text-lg font-medium text-gray-800 dark:text-white">
//               Menu
//             </h2>
//             <button
//               className="p-2 text-gray-800 hover:text-gray-950 dark:text-gray-200 dark:hover:text-white"
//               onClick={closeMenu}
//               aria-label="Close menu"
//             >
//               <RiCloseLine className="w-6 h-6" />
//             </button>
//           </div>

//           <nav className="relative m-6 rounded-lg divide-y divide-dashed border-dashed divide-gray-200/70 dark:divide-gray-700/40 border border-gray-200/70 dark:border-gray-700/40">
//             {links.map(({ path, label }) => (
//               <a
//                 key={path}
//                 href={path}
//                 onClick={closeMenu}
//                 className={`block px-4 py-3 first:rounded-t-lg last:rounded-b-lg backdrop-blur-sm transition-all duration-200 ease-in-out ${
//                   currentPath === path
//                     ? "text-gray-900 dark:text-white bg-gray-100/50 dark:bg-gray-800/50"
//                     : "text-gray-800/80 hover:text-gray-900 hover:bg-white/80 dark:text-slate-100/60 dark:hover:text-white dark:hover:bg-gray-800/50"
//                 }`}
//               >
//                 {label}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };
