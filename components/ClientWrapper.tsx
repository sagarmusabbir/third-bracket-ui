// components/ClientWrapper.tsx
"use client";

import { useState, useEffect } from "react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("ClientWrapper mounted");
  }, []);

  if (!mounted) {
    console.log("Showing loading state");
    return <div className="animate-pulse">Loading...</div>; // or a loading placeholder
  }
  console.log("Rendering children");
  return <>{children}</>;
}
