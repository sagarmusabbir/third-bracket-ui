// components/DocTopbar.tsx
"use client";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { DocNavLinks, hasChildren } from "@/config/site";
import { LinkItem } from "@/lib/types";

const NavItem = ({
  item,
  onClose,
}: {
  item: LinkItem;
  onClose: () => void;
}) => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildItems = hasChildren(item); // Use the imported function

  // Automatically expand if current path is child of this item
  useEffect(() => {
    if (pathname.startsWith(item.path) && item.path !== "/") {
      setIsExpanded(true);
    }
  }, [pathname, item.path]);

  return (
    <div className="space-y-1">
      <div
        className={`px-3 py-2 text-sm rounded-lg flex items-center justify-between cursor-pointer ${
          pathname === item.path
            ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
        }`}
        onClick={(e) => {
          if (hasChildItems) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          } else {
            onClose();
          }
        }}
      >
        <span className="flex items-center gap-2">
          {item.icon && <item.icon className="w-5 h-5" />}
          {item.label}
        </span>
        {hasChildItems && (
          <span
            className={`transform transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
          >
            <RiArrowRightSLine className="w-4 h-4" />
          </span>
        )}
      </div>

      {hasChildItems && isExpanded && (
        <div className="ml-4 space-y-1">
          {item.children?.map((child) => (
            <NavItem key={child.id} item={child} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  );
};

const DocTopbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close the mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Loading state
  if (!mounted) {
    return (
      <div className="border-b dark:border-gray-800/50 border-slate-200/50 p-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="w-12 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Mobile Topbar */}
      <div className="border-b dark:border-gray-800/50 border-slate-200/50 p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 w-full justify-start"
        >
          <span className="inline-flex items-center gap-2">Menu</span>
          {isOpen ? (
            <RiArrowDownSLine className="w-6 h-6" />
          ) : (
            <RiArrowRightSLine className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 bg-white dark:bg-gray-950 border-b dark:border-gray-800/50 border-slate-200/50 shadow-lg z-40 md:hidden"
          style={{ top: "var(--doc-topbar-height, 57px)" }}
        >
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <div className="p-4 pb-safe">
              <div className="space-y-4">
                {DocNavLinks.map((item) => (
                  <NavItem
                    key={item.id}
                    item={item}
                    onClose={() => setIsOpen(false)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocTopbar;
