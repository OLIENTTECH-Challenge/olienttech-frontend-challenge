import styles from './stocks.module.css';
import StockTable from './stock-table';
import { useParams } from 'react-router-dom';
import { ManufacturerHandlingProduct } from '@olienttech/model';

export const StocksPage = () => {
  const { manufacturerId } = useParams();
  // manufactureIdをクエリパラメータとしてAPIを叩く
  console.log(manufacturerId);

  return (
    <div className={styles.main}>
      <h3>在庫管理一覧ページ</h3>
      <div className={styles.form}></div>
      <StockTable data={mockData} />
    </div>
  );
};

const mockData: ManufacturerHandlingProduct[] = [
  {
    id: 1,
    stock: 8,
    product: {
      id: 1,
      name: 'アレジオン',
      description: '強力な抗ヒスタミン作用で鼻炎症状を和らげる薬',
      categories: [
        { id: 1, name: '薬' },
        { id: 2, name: '花粉症対策' },
      ],
      image: 'https://github.com/Alesion30',
    },
  },
  {
    id: 2,
    stock: 5,
    product: {
      id: 2,
      name: 'マジックエナジーパッチ',
      description: '肌に優しい素材で作られており、敏感肌の方にも安心してお使いいただけます。',
      categories: [
        { id: 1, name: '薬' },
        { id: 3, name: '皮膚用薬' },
        { id: 4, name: 'エネルギードリンク' },
        { id: 5, name: '痛み止め' },
        { id: 6, name: 'スポーツ用品' },
      ],
      image: 'https://github.com/Alesion30',
    },
  },
  {
    id: 3,
    stock: 3,
    product: {
      id: 3,
      name: 'スーパーブライトクリーム',
      description: '高い効果と安全性を兼ね備えた、信頼できる商品です。',
      categories: [{ id: 7, name: 'お菓子' }],
      image: 'https://github.com/Alesion30',
    },
  },
  {
    id: 4,
    stock: 10,
    product: {
      id: 4,
      name: 'クイックスマイルソープ',
      description: '肌に優しい素材で作られており、敏感肌の方にも安心してお使いいただけます。',
      categories: [
        { id: 3, name: '皮膚用薬' },
        { id: 5, name: '痛み止め' },
        { id: 8, name: '風邪薬' },
        { id: 9, name: '食品' },
      ],
      image: 'https://github.com/Alesion30',
    },
  },
];
