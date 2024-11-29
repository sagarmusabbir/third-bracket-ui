// packages/core/src/components/Navbar/types.ts
export interface NavItem {
  path: string;
  label: string;
}

export interface NavbarProps {
  links: NavItem[];
  className?: string;
}

export interface BrandLogo {
  src: string;
  alt: string;
  href: string;
}

export interface HeaderProps {
  brandLogo: BrandLogo;
  navbar: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
