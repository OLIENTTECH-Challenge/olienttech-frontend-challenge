import { useState } from 'react';
import { Pagination } from '@/components/base/pagination/pagination';
import { OutlinedButton } from '@/components/base/button/outlined-button/outlined-button';
import { ManufacturerHandlingProduct } from '@olienttech/model';
import styles from './stock-table.module.css';

type StockTableProps = {
  data: ManufacturerHandlingProduct[];
};

export const StockTable = ({ data }: StockTableProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 10;
  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const pageCount = Math.ceil(data.length / rowsPerPage);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    alert('入庫しました');
  };

  const columns = [
    {
      header: '',
      accessor: () => (
        <div>
          <OutlinedButton color={'#4CAF50'} label='＋入庫' loadingLabel='入庫中...' onClick={handleClick} />
          <OutlinedButton color={'#FF9130'} label='− 出庫' loadingLabel='出庫中...' onClick={handleClick} />
        </div>
      ),
    },
    {
      header: '商品ID',
      accessor: (item: ManufacturerHandlingProduct) => item.product.id,
    },
    {
      header: '商品名',
      accessor: (item: ManufacturerHandlingProduct) => item.product.name,
    },
    {
      header: 'カテゴリ',
      accessor: (item: ManufacturerHandlingProduct) =>
        item.product.categories.map((category) => category.name).join('、'),
    },
    {
      header: '在庫数',
      accessor: (item: ManufacturerHandlingProduct) => item.stock,
    },
  ];

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
