// app/test/page.tsx

import { Button, Card } from "@/packages/core/src";

export default function TestPage() {
  return (
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
  );
}
