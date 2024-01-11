import { LinkCard } from '@/components/base/card/link-card';
import styles from './HomePage.module.css';
import { HomeHeader } from '../../common/home-header/home-header';
import { FlexibleContainer } from '@/components/case/container/flexible-container';

export const ManufacturerHomePage = () => {
  return (
    <>
      <HomeHeader />
      <FlexibleContainer>
        <div className={styles.container}>
          <div>
            <h3>製造会社用ページ</h3>
            <p>ホーム</p>
          </div>
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
      </FlexibleContainer>
    </>
  );
};
