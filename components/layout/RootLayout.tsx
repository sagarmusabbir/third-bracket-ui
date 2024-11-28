// layouts/RootLayout.tsx
import { ReactNode } from "react";

import RootHeader from "@/app/ui/RootHeader";
import Footer from "@/app/ui/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <RootHeader />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
