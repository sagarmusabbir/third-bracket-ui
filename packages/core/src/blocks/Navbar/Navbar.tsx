// packages/core/src/components/Navbar/Navbar.tsx
import React from "react";
import { ClientNavbar } from "./ClientNavbar";
import type { NavbarProps } from "./types";

export const Navbar: React.FC<NavbarProps> = (props) => {
  return <ClientNavbar {...props} />;
};
