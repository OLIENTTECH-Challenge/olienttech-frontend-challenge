import { LinkCard } from '@/components/base/LinkCard';
import styles from './HomePage.module.css';
import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { useEffect, useState } from 'react';
import * as manufacturerApi from '@/api/manufacturer';
import { Manufacturer } from '@/api/model';

const useManufacture = () => {
  const lodaerData = useAuthLoaderData();
  const id = lodaerData.id;
  const token = lodaerData.token;

  const [manufacturer, setManufacturer] = useState<Manufacturer | null>(null);

  useEffect(() => {
    void manufacturerApi.fetchManufacture({ manufacturerId: id, token }).then((res) => {
      setManufacturer(res);
    });
  }, [id, token]);

  return { manufacturer };
};

export const ManufacturerHomePage = () => {
  const { manufacturer } = useManufacture();

  return (
    <>
      <div className={styles.container}>
        {manufacturer && (
          <div>
            <h3>{manufacturer.name}</h3>
            <p>{manufacturer.description}</p>
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
            href='/manufacturer/products'
            className={styles.linkCard}
          />
        </div>
      </div>
    </>
  );
};
