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
  return (
    <Header brandLogo={brandLogo} navigation={navigation}>
      {/* Optional: Add anything you want in the middle */}
      {/* <div className="hidden sm:block w-full max-w-[200px] lg:max-w-sm">
        <input
          type="search"
          placeholder="Search..."
          autoFocus
          className="w-full rounded-full px-4 py-1.5 bg-slate-200/30 dark:bg-gray-800/50 border-dashed border border-slate-300/40 dark:border-gray-700/50 text-gray-900 dark:text-white"
        />
      </div> */}
    </Header>
  );
}
