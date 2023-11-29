import SelectBox from '@/components/base/select-box/select-box';
import styles from './stocks.module.css';

const pharmacies = ['マツモトキヨシ', 'スギ薬局', 'ココカラファイン', 'ドラッグストアコスモス'];
export const StocksPage = () => {
  //TODO: jotaiを導入して、選択した薬局をグローバルステートに保存する
  return (
    <div className={styles.main}>
      <h3>在庫管理一覧ページ</h3>
      <div className={styles.form}>
        <SelectBox options={pharmacies} label={'薬局を選択'} onSelect={(selectedValue) => { console.log(selectedValue); }} />
      </div>
    </div>
  );
};
