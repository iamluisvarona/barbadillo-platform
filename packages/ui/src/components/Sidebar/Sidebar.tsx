import type { HTMLAttributes, ReactNode } from "react";
import "./Sidebar.css";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  brand?: ReactNode;
  footer?: ReactNode;
}

export function Sidebar({
  children,
  brand,
  footer,
  className = "",
  ...props
}: SidebarProps) {
  return (
    <aside className={`bb-sidebar ${className}`} {...props}>
      {brand ? <div className="bb-sidebar__brand">{brand}</div> : null}

      <nav className="bb-sidebar__nav" aria-label="Navegación principal">
        {children}
      </nav>

      {footer ? <div className="bb-sidebar__footer">{footer}</div> : null}
    </aside>
  );
}

export interface SidebarItemProps
  extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}

export function SidebarItem({
  active = false,
  icon,
  children,
  className = "",
  ...props
}: SidebarItemProps) {
  return (
    <button
      type="button"
      className={`bb-sidebar-item ${
        active ? "bb-sidebar-item--active" : ""
      } ${className}`}
      {...props}
    >
      {icon ? <span className="bb-sidebar-item__icon">{icon}</span> : null}
      <span className="bb-sidebar-item__label">{children}</span>
    </button>
  );
}