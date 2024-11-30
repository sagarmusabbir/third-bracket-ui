// packages/core/src/components/Navbar/types.ts
export interface NavItem {
  path: string;
  label: string;
}

export interface NavbarProps {
  links: NavItem[];
  className?: string;
}
