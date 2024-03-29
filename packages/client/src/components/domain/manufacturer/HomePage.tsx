import * as manufacturerApi from '@/api/manufacturer';
import { Button } from '@/components/base/Button';
import { LinkCard } from '@/components/base/LinkCard';
import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';

type Response = Awaited<ReturnType<typeof manufacturerApi.fetchManufacture>>;

const useManufacture = () => {
  const lodaerData = useAuthLoaderData();
  const id = lodaerData.id;
  const token = lodaerData.token;

  const [manufacturer, setManufacturer] = useState<Response | null>(null);

  useEffect(() => {
    void manufacturerApi.fetchManufacture({ manufacturerId: id, token }).then((res) => {
      setManufacturer(res);
    });
  }, [id, token]);

  return { manufacturer };
};

export const ManufacturerHomePage = () => {
  const { manufacturer } = useManufacture();

  const logout = () => {
    document.cookie = 'token=; max-age=0';
    location.reload();
  };

  return (
    <>
      <div className={styles.container}>
        {manufacturer && (
          <div>
            <h3>{manufacturer.name}</h3>
            <p>{manufacturer.description}</p>
            <div className={styles.logoutButton}>
              <Button variant='outlined' onClick={logout}>
                ログアウト
              </Button>
            </div>
          </div>
        )}
        <div className={styles.linkList}>
          <LinkCard
            title='取り扱い商品一覧'
            description='取り扱いしている商品の在庫を管理します'
            href='/manufacturer/products'
            className={styles.linkCard}
          />
          <LinkCard
            title='発注書一覧'
            description='販売会社からの発注書を管理します'
            href='/manufacturer/orders'
            className={styles.linkCard}
          />
        </div>
      </div>
    </>
  );
};
