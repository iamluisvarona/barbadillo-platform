import type { HTMLAttributes } from "react";
import { Button } from "../Button";
import "./Pagination.css";

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  previousLabel?: string;
  nextLabel?: string;
}

export function Pagination({
  page,
  pageCount,
  onPageChange,
  disabled = false,
  previousLabel = "Anterior",
  nextLabel = "Siguiente",
  className = "",
  ...props
}: PaginationProps) {
  const canGoPrevious = page > 1 && !disabled;
  const canGoNext = page < pageCount && !disabled;

  if (pageCount <= 1) return null;

  return (
    <div className={`bb-pagination ${className}`} {...props}>
      <Button
        size="sm"
        variant="secondary"
        disabled={!canGoPrevious}
        onClick={() => onPageChange(page - 1)}
      >
        {previousLabel}
      </Button>

      <div className="bb-pagination__status">
        Página <strong>{page}</strong> de <strong>{pageCount}</strong>
      </div>

      <Button
        size="sm"
        variant="secondary"
        disabled={!canGoNext}
        onClick={() => onPageChange(page + 1)}
      >
        {nextLabel}
      </Button>
    </div>
  );
}