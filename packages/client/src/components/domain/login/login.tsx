//todo: basic認証をかける

import { useState } from 'react';
import { Selectbox } from '@/components/base/selectbox/selectbox';
import styles from './login.module.css';
import { LinkButton } from '@/components/base/button/link-button/link-button';
import { HomeHeader } from '@/components/common/home-header/home-header';
import { manufacturers } from '@/mocks/manufactures';

export const LoginPage = () => {
  const [selectedManufacturerId, setSelectedManufacturerId] = useState<number | null>(manufacturers[0].id);

  const handleSelectManufacturer = (selectedName: string) => {
    const selectedManufacturer = manufacturers.find((manufacturer) => manufacturer.name === selectedName);
    if (selectedManufacturer) {
      setSelectedManufacturerId(selectedManufacturer.id);
    }
  };

  // Selectboxに渡すための変換
  const manufacturerOptions = manufacturers.map((manufacturer) => ({
    label: manufacturer.name,
    value: manufacturer.id.toString(),
  }));
  return (
    <>
      <HomeHeader />
      <div className={styles.main}>
        <h5 className={styles.title}>製造会社を選択</h5>
        <div className={styles.card}>
          <Selectbox label='製造会社' options={manufacturerOptions} onSelect={handleSelectManufacturer} />
          <div className={styles.spacer}></div>
          <LinkButton href={`/manufacturer/stocks?id=${selectedManufacturerId}`}>次へ進む</LinkButton>
        </div>
      </div>
    </>
  );
};
