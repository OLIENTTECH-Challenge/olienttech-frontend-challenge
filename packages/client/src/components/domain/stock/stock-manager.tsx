import { useState } from 'react';
import { Pagination } from '@/components/base/pagination/pagination';
import { ActionButton } from '@/components/base/button/action-button/action-button';
import { ManufacturerHandlingProduct } from '@olienttech/model';
import { Popup, PopupHeader, PopupContent, PopupFooter } from '@/components/base/popup';
import styles from './stock-manager.module.css';
import { StockTable } from './stock-table';

type StockManagerProps = {
  data: ManufacturerHandlingProduct[];
};

export const StockManager = ({ data }: StockManagerProps) => {
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

  return (
    <>
      <StockTable data={currentData} openPopup={openPopup} />
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
            <ActionButton variant='filled' onClick={saveStock}>
              保存
            </ActionButton>
          </PopupFooter>
        </Popup>
      )}
      <Pagination currentPage={currentPage} pageCount={pageCount} onPageChange={goToPage} />
    </>
  );
};
