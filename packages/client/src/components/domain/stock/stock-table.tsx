import { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { Pagination } from '@/components/base/pagination/pagination';
import { ActionButton } from '@/components/base/button/action-button/action-button';
import { ManufacturerHandlingProduct } from '@olienttech/model';
import { Popup, PopupHeader, PopupContent, PopupFooter } from '@/components/base/popup';
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

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ManufacturerHandlingProduct | null>(null);
  const [newStock, setNewStock] = useState(0);
  const openPopup = (product: ManufacturerHandlingProduct) => {
    setSelectedProduct(product);
    console.log(product);
    setNewStock(product.stock);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };

  const saveStock = () => {
    //TODO: 在庫数の更新処理をここに追加
    alert('在庫数を更新しました');
    closePopup();
  };

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
      {isPopupOpen && selectedProduct && (
        <Popup onClose={closePopup}>
          <PopupHeader onClose={closePopup} />
          <PopupContent>
            <p className={styles.name}>{selectedProduct.product.name}</p>
            <div className={styles.inputContainer}>
              <p>在庫数</p>
              <input
                className={styles.input}
                type='number'
                value={newStock}
                onChange={(e) => {
                  setNewStock(parseInt(e.target.value, 10));
                }}
              />
            </div>
          </PopupContent>
          <PopupFooter>
            <ActionButton variant={'filled'} onClick={saveStock}>
              保存
            </ActionButton>
          </PopupFooter>
        </Popup>
      )}
    </div>
  );
};
