import { useState } from 'react';
import styles from './table.module.css';

type TableColumn = {
  header: string;
  accessor: (data: any) => React.ReactNode;
};

type TableProps = {
  columns: TableColumn[];
  data: any[];
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 10; // 1ページあたりの行数

  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const pageCount = Math.ceil(data.length / rowsPerPage);

  // ページ切り替え関数
  const goToNextPage = () => { setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1)); };
  const goToPreviousPage = () => { setCurrentPage((prev) => Math.max(prev - 1, 0)); };

  return (
    <div>
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
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>{column.accessor(row)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <button onClick={goToPreviousPage} disabled={currentPage === 0}>
          前へ
        </button>
        <span>
          ページ {currentPage + 1} / {pageCount}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === pageCount - 1}>
          次へ
        </button>
      </div>
    </div>
  );
};

export default Table;
