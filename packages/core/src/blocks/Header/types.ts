// packages/core/src/components/Navbar/types.ts

import { NavItem } from "../../components/Navbar/types";

export interface BrandLogo {
  src: string;
  alt: string;
  href: string;
}

// Dedicated type for navigation configuration
export interface NavigationConfig {
  links: NavItem[];
  className?: string;
}

export interface HeaderProps {
  brandLogo: BrandLogo;
  navigation: NavigationConfig;
  // navbar: React.ReactNode;

  children?: React.ReactNode;
  className?: string;
}
