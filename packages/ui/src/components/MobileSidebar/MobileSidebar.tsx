import type { ReactNode } from "react";
import { Drawer } from "../Drawer";
import { Sidebar } from "../Sidebar";
import "./MobileSidebar.css";

export interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
  brand?: ReactNode;
  footer?: ReactNode;
  title?: ReactNode;
}

export function MobileSidebar({
  open,
  onClose,
  children,
  brand,
  footer,
  title = "Menú",
}: MobileSidebarProps) {
  return (
    <Drawer open={open} onClose={onClose} title={title} position="left">
      <Sidebar brand={brand} footer={footer} className="bb-mobile-sidebar">
        {children}
      </Sidebar>
    </Drawer>
  );
}
