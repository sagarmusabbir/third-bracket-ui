//

// app/ui/RootHeader.tsx
import NavLinks from "@/components/NavLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import Link from "next/link";
import Image from "next/image";

const RootHeader = () => {
  return (
    <header
      // className="sticky top-0  z-40 bg-white dark:bg-gray-950 border-b dark:border-gray-800/50 border-slate-200/50"
      className="sticky top-0 bg-white dark:bg-black z-50 border-dashed border-b border-slate-400/20 dark:border-gray-600/40"
    >
      <div className="relative">
        <AnimatedGrid />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link
            href="./"
            className="group    transition-colors duration-300 ease-in-out"
          >
            <Image
              src="/LOGO.svg"
              alt="Third Bracket"
              width={104}
              height={24}
              className="h-5 w-auto dark:invert opacity-90 group-hover:opacity-100"
            />
          </Link>

          {/* Navigation and Theme Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <NavLinks />
          </div>
        </div>
      </div>
    </header>
  );
};

export default RootHeader;
