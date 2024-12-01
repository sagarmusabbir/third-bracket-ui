export interface LinkItem {
  id: number;
  path: string;
  label: string;
  children?: LinkItem[];
  parentId?: number;
  isExpanded?: boolean;
}

export interface FooterProps {
  links: LinkItem[];
  className?: string;

  brandLogo: BrandLogo;
}

export interface BrandLogo {
  src: string;
  alt: string;
  href: string;
}
