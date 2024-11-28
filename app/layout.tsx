import type { Metadata } from "next";

import "./globals.css";

import RootLayout from "@/components/layout/RootLayout";
import { geistSans } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Third Bracket UI",
  description:
    "This is a UI Component Library built with Next.js and Tailwind CSS, showcasing reusable components for Next.js applications.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en" className={geistSans.className}>
    //   <body
    //     className={`${geistSans.variable} font-sans antialiased bg-white dark:bg-gray-950 `}
    //   >
    //     <RootHeader />

    //     {children}
    //     <Footer />
    //   </body>
    // </html>
    <html lang="en" className={geistSans.className}>
      <body className="font-sans antialiased bg-white dark:bg-black">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
