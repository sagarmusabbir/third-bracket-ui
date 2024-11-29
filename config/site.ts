import { LinkItem, NavGroup } from "@/lib/types";
import { CardPropps } from "@/packages/core/src";
import {
  RiCodeBlock,
  RiLayout3Line,
  RiPagesLine,
  RiBox1Line,
  RiNpmjsLine,
  RiBook2Line,
  RiToolsLine,
  RiTerminalBoxLine,
  RiBookReadLine,
  RiCodeLine,
  RiHome4Line,
  RiPaintLine,
  RiQuestionLine,
  RiSettings4Line,
  RiStackLine,
  RiInformationFill,
  RiBookFill,
  RiLinksFill,
  RiHomeOfficeFill,
  RiLayout2Fill,
  RiContactsFill,
  RiContactsBook2Fill,
  RiShieldFill,
} from "react-icons/ri";

//Footer
export const FooterNavLinks: LinkItem[] = [
  {
    id: 1,
    label: "Company",
    path: "/about",
    icon: RiInformationFill,
    children: [
      {
        id: 11,
        label: "About Us",
        path: "/about",
        icon: RiInformationFill,
        parentId: 1,
      },
      {
        id: 12,
        label: "Careers",
        path: "/careers",
        icon: RiHomeOfficeFill,
        parentId: 1,
      },
    ],
  },
  {
    id: 2,
    label: "Resources",
    path: "/resources",
    icon: RiLinksFill,
    children: [
      {
        id: 21,
        label: "Documentation",
        path: "/docs",
        icon: RiBookFill,
        parentId: 2,
      },
      {
        id: 22,
        label: "Templates",
        path: "/templates",
        icon: RiLayout2Fill,
        parentId: 2,
      },
    ],
  },
  {
    id: 3,
    label: "Support",
    path: "/support",
    icon: RiContactsFill,
    children: [
      {
        id: 31,
        label: "Help Center",
        path: "/help",
        icon: RiContactsBook2Fill,
        parentId: 3,
      },
      {
        id: 32,
        label: "Privacy Policy",
        path: "/privacy",
        icon: RiShieldFill,
        parentId: 3,
      },
    ],
  },
];

// Documentation sub-navigation items
export const DocNavLinks: LinkItem[] = [
  {
    id: 71,
    label: "Getting Started",
    path: "/docs/getting-started",
    icon: RiHome4Line,
    children: [
      {
        id: 711,
        label: "Introduction",
        path: "/docs/getting-started/introduction",
        icon: RiBookReadLine,
        parentId: 71,
      },
      {
        id: 712,
        label: "Installation",
        path: "/docs/getting-started/installation",
        icon: RiToolsLine,
        parentId: 71,
      },
    ],
  },
  {
    id: 72,
    label: "Components",
    path: "/docs/components",
    icon: RiStackLine,
    children: [
      {
        id: 721,
        label: "Buttons",
        path: "/docs/components/buttons",
        icon: RiCodeLine,
        parentId: 72,
        children: [
          {
            id: 7211,
            label: "Primary Buttons",
            path: "/docs/components/buttons/primary",
            icon: RiCodeLine,
            parentId: 721,
          },
          {
            id: 7212,
            label: "Secondary Buttons",
            path: "/docs/components/buttons/secondary",
            icon: RiCodeLine,
            parentId: 721,
          },
        ],
      },
      {
        id: 722,
        label: "Forms",
        path: "/docs/components/forms",
        icon: RiCodeLine,
        parentId: 72,
        children: [
          {
            id: 7221,
            label: "Input Fields",
            path: "/docs/components/forms/input",
            icon: RiCodeLine,
            parentId: 722,
          },
          {
            id: 7222,
            label: "Select Menus",
            path: "/docs/components/forms/select",
            icon: RiCodeLine,
            parentId: 722,
          },
        ],
      },
    ],
  },
  {
    id: 73,
    label: "Utilities",
    path: "/docs/utilities",
    icon: RiToolsLine,
    children: [
      {
        id: 731,
        label: "Colors",
        path: "/docs/utilities/colors",
        icon: RiPaintLine,
        parentId: 73,
        children: [
          {
            id: 7311,
            label: "Color Palette",
            path: "/docs/utilities/colors/palette",
            icon: RiPaintLine,
            parentId: 731,
          },
          {
            id: 7312,
            label: "Color Functions",
            path: "/docs/utilities/colors/functions",
            icon: RiPaintLine,
            parentId: 731,
          },
        ],
      },
    ],
  },
  {
    id: 74,
    label: "Advanced",
    path: "/docs/advanced",
    icon: RiSettings4Line,
    children: [
      {
        id: 741,
        label: "Configuration",
        path: "/docs/advanced/configuration",
        icon: RiTerminalBoxLine,
        parentId: 74,
        children: [
          {
            id: 7411,
            label: "Basic Setup",
            path: "/docs/advanced/configuration/basic",
            icon: RiTerminalBoxLine,
            parentId: 741,
          },
          {
            id: 7412,
            label: "Advanced Setup",
            path: "/docs/advanced/configuration/advanced",
            icon: RiTerminalBoxLine,
            parentId: 741,
          },
        ],
      },
    ],
  },
  {
    id: 75,
    label: "FAQ",
    path: "/docs/faq",
    icon: RiQuestionLine,
    children: [
      {
        id: 751,
        label: "Common Issues",
        path: "/docs/faq/common-issues",
        icon: RiQuestionLine,
        parentId: 75,
        children: [
          {
            id: 7511,
            label: "Installation Issues",
            path: "/docs/faq/common-issues/installation",
            icon: RiQuestionLine,
            parentId: 751,
          },
          {
            id: 7512,
            label: "Usage Issues",
            path: "/docs/faq/common-issues/usage",
            icon: RiQuestionLine,
            parentId: 751,
          },
        ],
      },
    ],
  },
];

export const RootNavLinks: LinkItem[] = [
  {
    id: 2,
    label: "Components",
    path: "/components",
    icon: RiCodeBlock,
  },
  {
    id: 3,
    label: "Blocks",
    path: "/blocks",
    icon: RiBox1Line,
  },
  {
    id: 4,
    label: "Pages",
    path: "/pages",
    icon: RiPagesLine,
  },
  {
    id: 5,
    label: "Templates",
    path: "/templates",
    icon: RiLayout3Line,
  },
  {
    id: 6,
    label: "Packages",
    path: "/packages",
    icon: RiNpmjsLine,
  },
  {
    id: 7,
    label: "Documentation",
    path: "/docs",
    icon: RiBook2Line,
    children: DocNavLinks,
  },
];

// Group documentation items by category
export const DocNavGroups: NavGroup[] = [
  {
    id: 1,
    label: "Getting Started",
    items: DocNavLinks.filter(
      (item) => item.parentId === 7 && item.id >= 701 && item.id < 702
    ),
  },
  {
    id: 2,
    label: "Customization",
    items: DocNavLinks.filter(
      (item) => item.parentId === 7 && item.id >= 702 && item.id < 703
    ),
  },
];

// Helper function to find all children of a nav item
export const getNavChildren = (navItem: LinkItem): LinkItem[] => {
  return DocNavLinks.filter((item) => item.parentId === navItem.id);
};

// Helper function to find a nav item by path
export const findNavItemByPath = (path: string): LinkItem | undefined => {
  const allNavItems = [
    ...RootNavLinks,
    ...DocNavLinks,
    ...DocNavLinks.flatMap((item) => item.children || []),
  ];
  return allNavItems.find((item) => item.path === path);
};

// Helper function to check if a nav item has children
export const hasChildren = (item: LinkItem): boolean => {
  return item.children !== undefined && item.children.length > 0;
};

// Helper function to get breadcrumb items
export const getBreadcrumbs = (path: string): LinkItem[] => {
  const breadcrumbs: LinkItem[] = [];
  const currentItem = findNavItemByPath(path);

  if (currentItem) {
    if (currentItem.parentId) {
      const parent = DocNavLinks.find(
        (item) => item.id === currentItem.parentId
      );
      if (parent) {
        breadcrumbs.push(parent);
      }
    }
    breadcrumbs.push(currentItem);
  }

  return breadcrumbs;
};

//Cards
export const componentCards: CardPropps[] = [
  {
    title: "Buttons",
    image: {
      src: "/images/skeletons/button.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
  {
    title: "Navbar",
    image: {
      src: "/images/skeletons/button.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
  {
    title: "Cards",
    image: {
      src: "/images/skeletons/button.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
  {
    title: "Buttons",
    image: {
      src: "/images/skeletons/button.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
  {
    title: "Navbar",
    image: {
      src: "/images/skeletons/button.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
  {
    title: "Cards",
    image: {
      src: "/images/skeletons/button.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
];

export const blockCards: CardPropps[] = [
  {
    title: "Header",
    image: {
      src: "/images/skeletons/navbar.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
  {
    title: "Footer",
    image: {
      src: "/images/skeletons/navbar.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
  {
    title: "Hero",
    image: {
      src: "/images/skeletons/navbar.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
  {
    title: "Header",
    image: {
      src: "/images/skeletons/navbar.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
  {
    title: "Footer",
    image: {
      src: "/images/skeletons/navbar.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
  {
    title: "Hero",
    image: {
      src: "/images/skeletons/navbar.svg",
      alt: "Third Bracket UI Buttons",
    },
    href: "#",
  },
];
