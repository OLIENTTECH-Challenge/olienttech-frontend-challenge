import { CiEdit } from 'react-icons/ci';
import { ManufacturerHandlingProduct } from '@olienttech/model';
import styles from './stock-table.module.css';

type StockManagerProps = {
  data: ManufacturerHandlingProduct[];
  openPopup: (product: ManufacturerHandlingProduct) => void;
};

export const StockTable = ({ data, openPopup }: StockManagerProps) => {
  const columns = [
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
    {
      header: '',
      accessor: (item: ManufacturerHandlingProduct) => (
        <div className={styles.icon}>
          <CiEdit
            size={30}
            onClick={() => {
              openPopup(item);
            }}
          />
        </div>
      ),
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
