import styles from './stocks.module.css';
import { StockManager } from './stock-manager';
import { useSearchParams } from 'react-router-dom';
import { Manufacturer } from '@olienttech/model';
import { HomeHeader } from '@/components/common/home-header/home-header';
import { manufacturers, mockData } from '@/mocks/manufactures';

export const StocksPage = () => {
  const [searchParams] = useSearchParams();
  const manufacturerId: string | null = searchParams.get('id');
  //TODO manufactureIdをクエリパラメータとしてAPIを叩く
  const manufacturer: Manufacturer | undefined = manufacturers.find(
    (manufacturer) => manufacturer.id === Number(manufacturerId),
  );

  return (
    <>
      <HomeHeader />
      <div className={styles.main}>
        <h5>{manufacturer ? manufacturer.name : ''}</h5>
        <div className={styles.spacer}></div>
        <StockManager data={mockData} />
      </div>
    </>
  );
};
