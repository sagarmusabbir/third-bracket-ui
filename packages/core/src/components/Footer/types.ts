export interface LinkItem {
  id: number;
  path: string;
  label: string;
  children?: LinkItem[];
  parentId?: number;
  isExpanded?: boolean;
}

export interface SocialLinks {
  linkedin?: string;
  facebook?: string;
  github?: string;
  whatsapp?: string;
}

export interface BrandInfo {
  companyName: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export interface BrandLogo {
  src: string;
  alt: string;
  href: string;
}

export interface FooterBrand extends BrandLogo {
  info: BrandInfo;
  social: SocialLinks;
}

export interface FooterProps {
  brand: FooterBrand;
  links: LinkItem[];
  className?: string;
}
