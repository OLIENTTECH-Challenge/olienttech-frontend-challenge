import styles from './Table.module.css';

export type Column<T extends object> = {
  header: string;
  accessor: (item: T) => React.ReactNode;
};

type TableProps<T extends object> = {
  columns: Column<T>[];
  data: T[];
  onClick?: (item: T) => void;
};

export const Table = <T extends object>({ columns, data, onClick }: TableProps<T>) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          {columns.map((column) => (
            <th key={column.header} className={styles.th}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.map((item, i) => (
          <tr
            key={`row_${i}`}
            className={styles.tr}
            data-is-clickable={onClick ? 'true' : 'false'}
            onClick={() => onClick?.(item)}
          >
            {columns.map((column) => (
              <td key={column.header} className={styles.td}>
                {column.accessor(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
