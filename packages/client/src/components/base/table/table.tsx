import { useState } from 'react';
import styles from './table.module.css';
import Pagination from './pagination';

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
  const rowsPerPage = 10;
  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const pageCount = Math.ceil(data.length / rowsPerPage);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{column.accessor(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} pageCount={pageCount} onPageChange={goToPage} />
    </div>
  );
};

export default Table;
