import type { HTMLAttributes, ReactNode } from "react";
import { SearchInput } from "../SearchInput";
import "./FilterBar.css";

export interface FilterBarProps extends HTMLAttributes<HTMLDivElement> {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  filters?: ReactNode;
  actions?: ReactNode;
}

export function FilterBar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Buscar...",
  filters,
  actions,
  className = "",
  ...props
}: FilterBarProps) {
  const showSearch = searchValue !== undefined && onSearchChange;

  return (
    <div className={`bb-filter-bar ${className}`} {...props}>
      {showSearch ? (
        <div className="bb-filter-bar__search">
          <SearchInput
            value={searchValue}
            onChange={onSearchChange}
            placeholder={searchPlaceholder}
          />
        </div>
      ) : null}

      {filters ? <div className="bb-filter-bar__filters">{filters}</div> : null}

      {actions ? <div className="bb-filter-bar__actions">{actions}</div> : null}
    </div>
  );
}
