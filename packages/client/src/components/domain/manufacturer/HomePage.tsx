import { LinkCard } from '@/components/base/card/link-card';
import styles from './HomePage.module.css';

export const ManufacturerHomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.linkList}>
          <LinkCard
            title='取り扱い商品一覧'
            description='取り扱いしている商品の在庫を管理します'
            href='/manufacturer/products'
            className={styles.linkCard}
          />
          <LinkCard
            title='取り扱い商品一覧'
            description='取り扱いしている商品の在庫を管理します'
            href='/manufacturer/products'
            className={styles.linkCard}
          />
        </div>
      </div>
    </>
  );
};
