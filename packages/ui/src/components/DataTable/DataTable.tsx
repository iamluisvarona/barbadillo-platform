import type { ReactNode } from "react";
import { Skeleton } from "../Skeleton";
import { EmptyState } from "../EmptyState";
import "./DataTable.css";

export interface DataTableColumn<T> {
  key: string;
  header: ReactNode;
  render: (item: T) => ReactNode;
  align?: "left" | "center" | "right";
  width?: string;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  getRowKey: (item: T, index: number) => string | number;

  loading?: boolean;
  emptyMessage?: ReactNode;

  actions?: (item: T) => ReactNode;
}

export function DataTable<T>({
  columns,
  data,
  getRowKey,
  loading = false,
  emptyMessage = "No hay datos disponibles.",
  actions,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div className="bb-data-table__loading">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} variant="rect" height={48} />
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return <EmptyState title="Sin datos" description={emptyMessage} />;
  }

  return (
    <div className="bb-data-table">
      <div className="bb-data-table__scroll">
        <table className="bb-data-table__table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  style={{ width: col.width }}
                  className={`bb-data-table__cell bb-data-table__cell--head bb-data-table__cell--${col.align ?? "left"}`}
                >
                  {col.header}
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
            {data.map((item, index) => (
              <tr key={getRowKey(item, index)} className="bb-data-table__row">
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
