// app/ui/Footer.tsx
import { LinkItem, Footer } from "@/packages/core/src/components/Footer";
import React from "react";

const FooterNavLinks: LinkItem[] = [
  {
    id: 1,
    label: "Company",
    path: "/about",

    children: [
      {
        id: 11,
        label: "About Us",
        path: "/about",

        parentId: 1,
      },
      {
        id: 12,
        label: "Careers",
        path: "/careers",

        parentId: 1,
      },
    ],
  },
  {
    id: 2,
    label: "Resources",
    path: "/resources",

    children: [
      {
        id: 21,
        label: "Documentation",
        path: "/docs",

        parentId: 2,
      },
      {
        id: 22,
        label: "Templates",
        path: "/templates",

        parentId: 2,
      },
    ],
  },
  {
    id: 3,
    label: "Support",
    path: "/support",

    children: [
      {
        id: 31,
        label: "Help Center",
        path: "/help",

        parentId: 3,
      },
      {
        id: 32,
        label: "Privacy Policy",
        path: "/privacy",

        parentId: 3,
      },
    ],
  },
];

const brandLogo = {
  src: "/logo.svg",
  alt: "Third Bracket Solution",
  href: "/",
};

export default function MainFooter() {
  return <Footer brandLogo={brandLogo} links={FooterNavLinks}></Footer>;
}
