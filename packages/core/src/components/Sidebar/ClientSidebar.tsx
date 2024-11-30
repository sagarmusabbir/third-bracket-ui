"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import type { SidebarProps, SidebarItem } from "./types";
import Link from "next/link";

// const NavItem = ({
//   item,
//   onClose,
//   isMobile,
//   onExpandItem,
// }: {
//   item: SidebarItem;
//   onClose?: () => void;
//   isMobile?: boolean;
//   onExpandItem?: (item: SidebarItem) => void;
// }) => {
//   const pathname = usePathname();
//   const [isExpanded, setIsExpanded] = useState(false);
//   const hasChildren = item.children && item.children.length > 0;

//   useEffect(() => {
//     if (pathname.startsWith(item.path) && item.path !== "/") {
//       setIsExpanded(true);
//     }
//   }, [pathname, item.path]);

//   const handleClick = () => {
//     if (hasChildren) {
//       setIsExpanded(!isExpanded);
//       if (isMobile && onExpandItem) {
//         onExpandItem(item);
//       }
//     } else {
//       onClose?.();
//     }
//   };

//   return (
//     <div className={`${isMobile ? "" : "space-y-1"}`}>
//       <div
//         className={`px-3 py-2 text-sm rounded-lg flex items-center justify-between cursor-pointer ${
//           pathname === item.path
//             ? "  text-gray-950 dark:text-white"
//             : "text-gray-600 hover:text-gray-950  dark:text-slate-400 dark:hover:text-white  "
//         }`}
//         onClick={handleClick}
//       >
//         <span className="flex items-center gap-2">{item.label}</span>
//         {hasChildren && (
//           <span
//             className={`transform transition-transform ${
//               isExpanded ? "rotate-90" : ""
//             }`}
//           >
//             <RiArrowRightSLine className="w-4 h-4" />
//           </span>
//         )}
//       </div>

//       {hasChildren && isExpanded && (
//         <div className={`${isMobile ? "pl-4" : "ml-4 "} space-y-1`}>
//           {item.children?.map((child) => (
//             <NavItem
//               key={child.id}
//               item={child}
//               onClose={onClose}
//               isMobile={isMobile}
//               onExpandItem={onExpandItem}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

const NavItem = ({
  item,
  onClose,
  isMobile,
  onExpandItem,
}: {
  item: SidebarItem;
  onClose?: () => void;
  isMobile?: boolean;
  onExpandItem?: (item: SidebarItem) => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  useEffect(() => {
    if (pathname.startsWith(item.path) && item.path !== "/") {
      setIsExpanded(true);
    }
  }, [pathname, item.path]);

  const handleClick = () => {
    // Removed the unused parameter
    if (hasChildren) {
      setIsExpanded(!isExpanded);
      if (isMobile && onExpandItem) {
        onExpandItem(item);
      }
    } else {
      // Navigate and close for items without children
      router.push(item.path);
      onClose?.();
    }
  };

  const commonClasses = `px-3 py-2 text-sm rounded-lg flex items-center justify-between cursor-pointer ${
    pathname === item.path
      ? " text-gray-950 dark:text-white"
      : "text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-white"
  }`;

  return (
    <div className={`${isMobile ? "" : "space-y-1"}`}>
      {hasChildren ? (
        // Render div for items with children
        <div className={commonClasses} onClick={handleClick}>
          <span className="flex items-center gap-2">{item.label}</span>
          <span
            className={`transform transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
          >
            <RiArrowRightSLine className="w-4 h-4" />
          </span>
        </div>
      ) : (
        // Render Link for items without children
        <Link href={item.path} className={commonClasses} onClick={handleClick}>
          <span className="flex items-center gap-2">{item.label}</span>
        </Link>
      )}

      {hasChildren && isExpanded && (
        <div className={`${isMobile ? "pl-4" : "ml-4"} space-y-1`}>
          {item.children?.map((child) => (
            <NavItem
              key={child.id}
              item={child}
              onClose={onClose}
              isMobile={isMobile}
              onExpandItem={onExpandItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const ClientSidebar: React.FC<SidebarProps> = ({
  items,
  className = "",
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<SidebarItem | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setExpandedItem(null);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
    setExpandedItem(null);
    onClose?.();
  };

  const handleExpandItem = (item: SidebarItem) => {
    setExpandedItem(item);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden sticky top-16 z-30">
        {/* Toggle Button Section - Always visible and above overlay */}
        <div className="relative z-40 bg-white dark:bg-black border-b border-dashed border-slate-200 dark:border-gray-800">
          <div className="py-2  flex items-center justify-evenly">
            <button
              onClick={toggleMenu}
              className="p-2 inline-flex items-center space-x-2"
            >
              <span className="text-gray-800  dark:text-gray-200 ">
                {isMenuOpen ? (
                  <RiArrowDownSLine className="w-5 h-5 " />
                ) : (
                  <RiArrowRightSLine className="w-5 h-5 " />
                )}
              </span>
              {/* <span className="text-gray-700  dark:text-gray-300 inline-flex ">
                Menu
              </span> */}
            </button>
            {/* {expandedItem && (
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 ">{expandedItem.label}
              </span>
            )} */}
            <span className="text-base  text-gray-700 dark:text-gray-300 ">
              {expandedItem ? expandedItem.label : "Menu"}
            </span>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-20"
              onClick={handleClose}
            />

            {/* Menu Content */}
            <div className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-dashed border-slate-200 dark:border-gray-800 p-4 z-30 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <nav className="space-y-2">
                {items.map((item) => (
                  <NavItem
                    key={item.id}
                    item={item}
                    onClose={handleClose}
                    isMobile={true}
                    onExpandItem={handleExpandItem}
                  />
                ))}
              </nav>
            </div>
          </>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:block w-64 flex-shrink-0 border-r border-dashed border-slate-200 dark:border-gray-800 z-20 ${className}`}
      >
        <nav className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4 space-y-2">
          {items.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              onClose={onClose}
              isMobile={false}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};
