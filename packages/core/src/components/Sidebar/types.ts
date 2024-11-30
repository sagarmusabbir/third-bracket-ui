// packages/core/src/components/Sidebar/types.ts

export interface SidebarItem {
  id: number;
  label: string;
  path: string;

  parentId?: number;
  children?: SidebarItem[];
}

export interface SidebarProps {
  items: SidebarItem[];
  className?: string;
  onClose?: () => void;
}
