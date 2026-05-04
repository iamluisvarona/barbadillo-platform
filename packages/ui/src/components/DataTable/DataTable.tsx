import { useState } from "react";
import type { ReactNode } from "react";
import { Checkbox } from "../Checkbox";
import { EmptyState } from "../EmptyState";
import { Skeleton } from "../Skeleton";
import "./DataTable.css";

export interface DataTableColumn<T> {
  key: string;
  header: ReactNode;
  render: (item: T) => ReactNode;
  align?: "left" | "center" | "right";
  width?: string;
  sortable?: boolean;
  sortFn?: (a: T, b: T) => number;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  getRowKey: (item: T, index: number) => string | number;
  loading?: boolean;
  emptyMessage?: ReactNode;
  actions?: (item: T) => ReactNode;
  selectable?: boolean;
  onSelectionChange?: (selectedKeys: (string | number)[]) => void;
}

type SortDirection = "asc" | "desc" | null;

export function DataTable<T>({
  columns,
  data,
  getRowKey,
  loading = false,
  emptyMessage = "No hay datos disponibles.",
  actions,
  selectable = false,
  onSelectionChange,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>(null);
  const [selected, setSelected] = useState<(string | number)[]>([]);

  let sortedData = [...data];

  if (sortKey && sortDir) {
    const column = columns.find((col) => col.key === sortKey);

    if (column?.sortFn) {
      sortedData.sort((a, b) =>
        sortDir === "asc" ? column.sortFn!(a, b) : column.sortFn!(b, a),
      );
    }
  }

  const toggleSort = (key: string) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
      return;
    }

    if (sortDir === "asc") {
      setSortDir("desc");
      return;
    }

    setSortKey(null);
    setSortDir(null);
  };

  const updateSelection = (next: (string | number)[]) => {
    setSelected(next);
    onSelectionChange?.(next);
  };

  const toggleRow = (key: string | number) => {
    const next = selected.includes(key)
      ? selected.filter((selectedKey) => selectedKey !== key)
      : [...selected, key];

    updateSelection(next);
  };

  const toggleAll = () => {
    const allKeys = sortedData.map((item, index) => getRowKey(item, index));
    const allSelected =
      allKeys.length > 0 && allKeys.every((key) => selected.includes(key));

    updateSelection(allSelected ? [] : allKeys);
  };

  if (loading) {
    return (
      <div className="bb-data-table__loading">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} variant="rect" height={48} />
        ))}
      </div>
    );
  }

  if (sortedData.length === 0) {
    return <EmptyState title="Sin datos" description={emptyMessage} />;
  }

  const allKeys = sortedData.map((item, index) => getRowKey(item, index));
  const allSelected =
    allKeys.length > 0 && allKeys.every((key) => selected.includes(key));

  return (
    <div className="bb-data-table">
      <div className="bb-data-table__scroll">
        <table className="bb-data-table__table">
          <thead>
            <tr>
              {selectable ? (
                <th className="bb-data-table__cell bb-data-table__cell--selection bb-data-table__cell--head">
                  <Checkbox
                    checked={allSelected}
                    onChange={toggleAll}
                    aria-label="Seleccionar todo"
                  />
                </th>
              ) : null}

              {columns.map((col) => (
                <th
                  key={col.key}
                  style={{ width: col.width }}
                  className={`bb-data-table__cell bb-data-table__cell--head bb-data-table__cell--${col.align ?? "left"} ${
                    col.sortable ? "bb-data-table__cell--sortable" : ""
                  }`}
                  onClick={() => {
                    if (col.sortable) {
                      toggleSort(col.key);
                    }
                  }}
                >
                  <div className="bb-data-table__header">
                    {col.header}
                    {col.sortable ? (
                      <span className="bb-data-table__sort" aria-hidden="true">
                        {sortKey === col.key
                          ? sortDir === "asc"
                            ? "▲"
                            : "▼"
                          : "↕"}
                      </span>
                    ) : null}
                  </div>
                </th>
              ))}

              {actions ? (
                <th className="bb-data-table__cell bb-data-table__cell--head bb-data-table__cell--right">
                  Acciones
                </th>
              ) : null}
            </tr>
          </thead>

          <tbody>
            {sortedData.map((item, index) => {
              const key = getRowKey(item, index);

              return (
                <tr key={key} className="bb-data-table__row">
                  {selectable ? (
                    <td className="bb-data-table__cell bb-data-table__cell--selection">
                      <Checkbox
                        checked={selected.includes(key)}
                        onChange={() => toggleRow(key)}
                        aria-label="Seleccionar fila"
                      />
                    </td>
                  ) : null}

                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`bb-data-table__cell bb-data-table__cell--${col.align ?? "left"}`}
                    >
                      {col.render(item)}
                    </td>
                  ))}

                  {actions ? (
                    <td className="bb-data-table__cell bb-data-table__cell--right">
                      {actions(item)}
                    </td>
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
