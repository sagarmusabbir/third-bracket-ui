// packages/core/src/components/Sidebar/Sidebar.tsx
import React from "react";
import { ClientSidebar } from "./ClientSidebar";
import type { SidebarProps } from "./types";

// export const Sidebar: React.FC<SidebarProps> = (props) => {
//   return <ClientSidebar {...props} />;
// };

const Sidebar: React.FC<SidebarProps> = (props) => {
  return <ClientSidebar {...props} />;
};

export default Sidebar;
