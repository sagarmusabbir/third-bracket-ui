import DefaultLayout from "@/components/layout/DefaultLayout";
import FeaturedSection from "@/components/sections/featured";

import { blockCards, componentCards } from "@/config/site";

import { FeaturedSectionProps, HeroProps } from "@/lib/types";

export default function Home() {
  const heroContent: HeroProps = {
    heading: {
      main: "Tailwind css UI",
      highlight: "built for next.js",
    },
    paragraph:
      "A modern, responsive component library built with React and Tailwind CSS. Perfect for your next project.",
    coverImage: {
      src: "/images/hero-illustration.svg",
      alt: "Hero illustration",
    },
    ctaButtons: {
      button1: {
        label: "Get Started",
        href: "#",
      },
      button2: {
        label: "Documentation",
        href: "#",
      },
    },
    brandLogos: [
      {
        src: "/images/logos/logo1.svg",
        alt: "Company 1",
      },
      {
        src: "/images/logos/logo2.svg",
        alt: "Company 2",
      },
      {
        src: "/images/logos/logo3.svg",
        alt: "Company 2",
      },
      {
        src: "/images/logos/logo4.svg",
        alt: "Company 2",
      },
      {
        src: "/images/logos/logo5.svg",
        alt: "Company 2",
      },
      {
        src: "/images/logos/logo6.svg",
        alt: "Company 2",
      },
    ],
  };

  const componentSection: FeaturedSectionProps = {
    heading: {
      main: "Modern UI Components",
      highlight: "Zero Complexity",
    },
    subheading:
      "Pre-built Tailwind components and blocks to help you ship beautiful websites faster",
    ctaButtons: {
      button1: {
        label: "Explore All Components →",
        href: "/components",
      },
    },
    cards: blockCards,
  };

  const blockSection: FeaturedSectionProps = {
    heading: {
      main: "Your UI ",
      highlight: "Building Blocks",
    },
    subheading:
      "Beautiful, responsive Tailwind components that seamlessly integrate into your workflow.",
    ctaButtons: {
      button1: {
        label: "Explore All Blocks →",
        href: "/blocks",
      },
    },
    cards: componentCards,
  };

  return (
    <DefaultLayout hero={heroContent}>
      <FeaturedSection {...componentSection} />
      <FeaturedSection {...blockSection} />
    </DefaultLayout>
  );
}
