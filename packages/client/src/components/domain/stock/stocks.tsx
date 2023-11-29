import { useEffect, useState } from 'react';
import SelectBox from '@/components/base/select-box/select-box';
import styles from './stocks.module.css';
import StockTable from './stock-table/stock-table';
import { stockItems } from '@/mocks/stocks-item';

//TODO: APIから取得、もしくは共通のファイルから取得
const pharmacies: PharmaciesOption[] = [
  { id: 'S1001', name: 'ココカラファイン' },
  { id: 'S1002', name: 'ツルハドラッグ' },
  { id: 'S1003', name: 'サンドラッグ' },
  { id: 'S1004', name: 'マツモトキヨシ' },
];

export const StocksPage = () => {
  //TODO: jotaiを導入して、選択した薬局をグローバルステートに保存する
  const [selectedPharmacyId, setSelectedPharmacyId] = useState<string | null>(pharmacies[0].id);
  const [filteredStockItems, setFilteredStockItems] = useState<StockItem[]>([]);

  const handleSelectPharmacy = (selectedName: string) => {
    const selectedPharmacy = pharmacies.find((pharmacy) => pharmacy.name === selectedName);
    if (selectedPharmacy) {
      setSelectedPharmacyId(selectedPharmacy.id);
    }
  };

  // 選択された薬局に基づいて在庫アイテムをフィルタリング
  useEffect(() => {
    const filteredItems = stockItems.find((item) => item.pharmacyId === selectedPharmacyId);
    setFilteredStockItems(filteredItems ? filteredItems.stockItem : []);
  }, [selectedPharmacyId]);

  return (
    <div className={styles.main}>
      <h3>在庫管理一覧ページ</h3>
      <div className={styles.form}>
        <SelectBox
          options={pharmacies.map((pharmacy) => pharmacy.name)}
          label={'薬局を選択'}
          onSelect={handleSelectPharmacy}
        />
      </div>
      <StockTable data={filteredStockItems} />
    </div>
  );
};
