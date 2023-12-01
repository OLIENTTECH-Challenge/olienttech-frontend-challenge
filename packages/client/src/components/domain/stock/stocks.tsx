import { useEffect, useState } from 'react';
import SelectBox from '@/components/base/select-box/select-box';
import styles from './stocks.module.css';
import StockTable from './stock-table';
import { stockItem } from '@/mocks/stock-item';
import { ManufacturersOption, StockItem } from '@/interfaces/stores';

//TODO: APIから取得、もしくは共通のファイルから取得
const manufacturers: ManufacturersOption[] = [
  { id: 'S1001', name: 'ココカラファイン' },
  { id: 'S1002', name: 'ツルハドラッグ' },
  { id: 'S1003', name: 'サンドラッグ' },
  { id: 'S1004', name: 'マツモトキヨシ' },
];

export const StocksPage = () => {
  //TODO: jotaiを導入して、選択した薬局をグローバルステートに保存する
  const [selectedPharmacyId, setSelectedPharmacyId] = useState<string | null>(manufacturers[0].id);
  const [filteredStockItems, setFilteredStockItems] = useState<StockItem[]>([]);

  const handleSelectPharmacy = (selectedName: string) => {
    const selectedPharmacy = manufacturers.find((manufacturer) => manufacturer.name === selectedName);
    if (selectedPharmacy) {
      setSelectedPharmacyId(selectedPharmacy.id);
    }
  };

  // 選択された薬局に基づいて在庫アイテムをフィルタリング
  useEffect(() => {
    const filteredItems = stockItem.find((item) => item.id === selectedPharmacyId);
    setFilteredStockItems(filteredItems ? filteredItems.stockItem : []);
  }, [selectedPharmacyId]);

  return (
    <div className={styles.main}>
      <h3>在庫管理一覧ページ</h3>
      <div className={styles.form}>
        <SelectBox
          options={manufacturers.map((manufacturer) => manufacturer.name)}
          label={'薬局を選択'}
          onSelect={handleSelectPharmacy}
        />
      </div>
      <StockTable data={filteredStockItems} />
    </div>
  );
};
