import styles from './table.module.css';

type TableColumn = {
  header: string;
  accessor: (data: any) => React.ReactNode;
};

type TableProps = {
  columns: TableColumn[];
  //TODO: 型を決める
  data: any[];
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{column.accessor(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
