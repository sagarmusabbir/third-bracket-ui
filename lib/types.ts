import { CardPropps } from "@/packages/core/src";

export interface LinkItem {
  id: number;
  label: string;
  path: string;
  icon: React.ElementType;
  children?: LinkItem[]; // Add children for nested items
  parentId?: number; // Optional: to track parent-child relationships
  isExpanded?: boolean; // Optional: for dropdown state management
}

//Cards
export interface CardProps {
  header: string;
  skeleton: {
    src: string;
    alt: string;
  };
  href: string;
}

export interface FeaturedSectionProps {
  heading: {
    main: string;
    highlight?: string;
  };
  subheading?: string;
  ctaButtons: {
    button1: CTAButton;
  };
  cards: CardPropps[];
}

//Type for grouped navigation items
export interface NavGroup {
  id: number;
  label: string;
  items: LinkItem[];
}

interface CTAButton {
  label: string;
  href: string;
}

export interface BrandLogo {
  src: string;
  alt: string;
}

export interface HeroProps {
  heading: {
    main: string;
    highlight?: string;
  };
  paragraph?: string;
  coverImage: {
    src: string;
    alt: string;
  };
  ctaButtons: {
    button1: CTAButton;
    button2?: CTAButton; // Make second button optional
  };
  brandLogos?: {
    src: string;
    alt: string;
  }[];
}
