import SelectBox from '@/components/base/select-box/select-box';
import styles from './stocks.module.css';
import StockTable from './stock-table/stock-table';

const pharmacies = ['マツモトキヨシ', 'スギ薬局', 'ココカラファイン', 'ドラッグストアコスモス'];

export const StocksPage = () => {
  //TODO: jotaiを導入して、選択した薬局をグローバルステートに保存する
  return (
    <div className={styles.main}>
      <h3>在庫管理一覧ページ</h3>
      <div className={styles.form}>
        <SelectBox
          options={pharmacies}
          label={'薬局を選択'}
          onSelect={(selectedValue) => {
            console.log(selectedValue);
          }}
        />
      </div>
      <StockTable data={stockItems} />
    </div>
  );
};

const stockItems = [
  {
    id: '1',
    name: 'アレグラFX',
    category: '抗アレルギー薬',
    manufacturer: '中外製薬',
    stock: 100,
    orderQuantity: 0,
    postShipmentStock: 100,
  },
  {
    id: '2',
    name: 'アレグラFX',
    category: '抗アレルギー薬',
    manufacturer: '中外製薬',
    stock: 100,
    orderQuantity: 0,
    postShipmentStock: 100,
  },
  {
    id: '3',
    name: 'アレグラFX',
    category: '抗アレルギー薬',
    manufacturer: '中外製薬',
    stock: 100,
    orderQuantity: 0,
    postShipmentStock: 100,
  },
  {
    id: '4',
    name: 'アレグラFX',
    category: '抗アレルギー薬',
    manufacturer: '中外製薬',
    stock: 100,
    orderQuantity: 0,
    postShipmentStock: 100,
  },
  {
    id: '5',
    name: 'アレグラFX',
    category: '抗アレルギー薬',
    manufacturer: '中外製薬',
    stock: 100,
    orderQuantity: 0,
    postShipmentStock: 100,
  },
  {
    id: '6',
    name: 'アレグラFX',
    category: '抗アレルギー薬',
    manufacturer: '中外製薬',
    stock: 100,
    orderQuantity: 0,
    postShipmentStock: 100,
  },
  {
    id: '7',
    name: 'アレグラFX',
    category: '抗アレルギー薬',
    manufacturer: '中外製薬',
    stock: 100,
    orderQuantity: 0,
    postShipmentStock: 100,
  },
  {
    id: '8',
    name: 'アレグラFX',
    category: '抗アレルギー薬',
    manufacturer: '中外製薬',
    stock: 100,
    orderQuantity: 0,
    postShipmentStock: 100,
  },
];
