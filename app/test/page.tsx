// app/test/page.tsx
import { Button, Card, Header, Navbar } from "@/packages/core/src";

export default function TestPage() {
  const brandLogo = {
    src: "/LOGO.svg",
    alt: "Your Brand",
    href: "/",
  };

  const links = [
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
  ];

  return (
    <>
      <Header brandLogo={brandLogo} navbar={<Navbar links={links} />}>
        {/* Optional: Add anything you want in the middle */}
        <div className="">
          <input
            type="search"
            placeholder="Search..."
            className="rounded-full px-4 py-1.5 bg-white/50 dark:bg-gray-800/50 border-dashed border border-slate-200/50 dark:border-gray-700/50"
          />
        </div>
      </Header>
      <main>
        {/* Your page content */}
        <div className="p-8">
          <Card
            title="Example Card"
            image={{
              src: "/images/skeletons/button.svg",
              alt: "Example image",
            }}
            href="./"
          />
          <div className="p-8 mx-auto">
            <div className="flex flex-wrap gap-4">
              <Button>Base</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="glow">Glow</Button>
              <Button variant="framed">Framed</Button>
              <Button variant="dim">Dim</Button>
              <Button variant="link">Link</Button>

              <Button size="sm">Small</Button>
              <Button size="base">Base</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

{
  /* <main>
      <Navbar
        links={links}

        // optional - for active link highlighting
      />
      <div className="p-8">
        <Card
          title="Example Card"
          image={{
            src: "/images/skeletons/button.svg",
            alt: "Example image",
          }}
          href="./"
        />
        <div className="p-8 mx-auto">
          <div className="flex flex-wrap gap-4">
            <Button>Base</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="glow">Glow</Button>
            <Button variant="framed">Framed</Button>
            <Button variant="dim">Dim</Button>
            <Button variant="link">Link</Button>

            <Button size="sm">Small</Button>
            <Button size="base">Base</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>
      </div>
    </main> */
}
