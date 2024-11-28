// layouts/DefaultLayout.tsx
import { ReactNode } from "react";
import Hero from "@/components/sections/hero";
import { HeroProps } from "@/lib/types";

interface DefaultLayoutProps {
  hero?: HeroProps;
  children: ReactNode;
}

export default function DefaultLayout({ hero, children }: DefaultLayoutProps) {
  return (
    <div className="flex flex-col ">
      {hero && <Hero {...hero} />}
      <div className="container mx-auto px-4 py-4 lg:py-8 lg:px-8">
        {children}
      </div>
    </div>
  );
}
