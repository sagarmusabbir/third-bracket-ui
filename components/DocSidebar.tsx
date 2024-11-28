// components/DocSidebar.tsx
"use client";

import { DocNavLinks, hasChildren } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LinkItem } from "@/lib/types"; // Make sure to import the type
import { RiArrowRightSLine } from "react-icons/ri";

const NavItem = ({ item }: { item: LinkItem }) => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildItems = hasChildren(item);

  // Automatically expand if current path is child of this item
  useEffect(() => {
    if (pathname.startsWith(item.path) && item.path !== "/") {
      setIsExpanded(true);
    }
  }, [pathname, item.path]);

  return (
    <div className="space-y-1">
      <Link
        href={item.path}
        className={`px-3 py-2 text-sm rounded-lg flex items-center justify-between ${
          pathname === item.path
            ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
        }`}
        onClick={(e) => {
          if (hasChildItems) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
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
      </Link>

      {hasChildItems && isExpanded && (
        <div className="ml-4 space-y-1">
          {item.children?.map((child) => (
            <NavItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const DocSidebar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className="p-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="space-y-1">
              <div className="h-8 w-full bg-gray-100 dark:bg-gray-800/50 rounded-lg animate-pulse" />
              <div className="h-8 w-full bg-gray-100 dark:bg-gray-800/50 rounded-lg animate-pulse" />
              <div className="h-8 w-full bg-gray-100 dark:bg-gray-800/50 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="p-4">
      <div className="space-y-4">
        {DocNavLinks.map((item) => (
          <div key={item.id} className="space-y-2">
            {/* Optional: Add section headers */}
            {item.label && (
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white px-3">
                {item.label}
              </h4>
            )}
            <NavItem item={item} />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default DocSidebar;
