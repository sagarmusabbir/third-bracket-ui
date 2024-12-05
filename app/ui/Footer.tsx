import { Footer, FooterProps } from "@/packages/core/src";

const footerData: FooterProps = {
  brand: {
    src: "/logo.svg",
    alt: "Third Bracket Solution",
    href: "/",
    info: {
      companyName: "Third Bracket Solution",
      description:
        "Pre-built Tailwind components and blocks to help you ship beautiful websites faster",
      phone: "+880 1234-567890",
      email: "contact@thirdbracket.com",
      address: "Dhaka, Bangladesh",
    },
    social: {
      linkedin: "https://linkedin.com/company/thirdbracket",
      facebook: "https://facebook.com/thirdbracket",
      github: "https://github.com/thirdbracket",
      whatsapp: "https://wa.me/yourwhatsappnumber",
    },
  },
  links: [
    {
      id: 1,
      label: "Company",
      path: "/company",
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
        {
          id: 13,
          label: "Contact",
          path: "/contact",
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
          label: "Components",
          path: "/components",
          parentId: 2,
        },
        {
          id: 22,
          label: "Documentation",
          path: "/docs",
          parentId: 2,
        },
        {
          id: 23,
          label: "Blocks",
          path: "/blocks",
          parentId: 2,
        },
        {
          id: 24,
          label: "Pages",
          path: "/pages",
          parentId: 2,
        },
      ],
    },
    {
      id: 3,
      label: "Legal",
      path: "/legal",
      children: [
        {
          id: 31,
          label: "Privacy Policy",
          path: "/privacy",
          parentId: 3,
        },
        {
          id: 32,
          label: "Terms of Service",
          path: "/terms",
          parentId: 3,
        },
        {
          id: 33,
          label: "Cookie Policy",
          path: "/cookie-policy",
          parentId: 3,
        },
      ],
    },
    {
      id: 4,
      label: "More",
      path: "/more",
      children: [
        {
          id: 41,
          label: "Blog",
          path: "/blog",
          parentId: 4,
        },
        {
          id: 42,
          label: "Support",
          path: "/support",
          parentId: 4,
        },
        {
          id: 43,
          label: "FAQ",
          path: "/faq",
          parentId: 4,
        },
        {
          id: 44,
          label: "Changelog",
          path: "/changelog",
          parentId: 4,
        },
      ],
    },
  ],
};

// Usage in a component
{
  /* <Footer {...footerData} />; */
}

export default function RootFooter() {
  return <Footer className="" {...footerData} />;
}
