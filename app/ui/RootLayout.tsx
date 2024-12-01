// layouts/RootLayout.tsx
import { ReactNode } from "react";

import RootHeader from "./RootHeader";
import MainFooter from "@/app/ui/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <RootHeader />
      <main className="flex-grow pt-16">{children}</main>
      <MainFooter />
    </div>
  );
}
