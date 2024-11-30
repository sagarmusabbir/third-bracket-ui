import { Header } from "@/packages/core/src";

const brandLogo = {
  src: "/logo.svg",
  alt: "Third Bracket Solution",
  href: "/",
};

const navigation = {
  links: [
    {
      path: "/components",
      label: "Components",
    },
    {
      path: "/blocks",
      label: "Blocks",
    },
    {
      path: "/pages",
      label: "Pages",
    },
    {
      path: "/docs",
      label: "Documentation",
    },
    {
      path: "/about",
      label: "About",
    },
  ],
};

export default function RootHeader() {
  return <Header brandLogo={brandLogo} navigation={navigation}></Header>;
}
