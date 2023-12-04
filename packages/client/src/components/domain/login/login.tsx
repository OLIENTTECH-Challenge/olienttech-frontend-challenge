//todo: basic認証をかける

import { useState } from 'react';
import SelectBox from '@/components/base/select-box/select-box';
import { Manufacturer } from '@olienttech/model';
import styles from './login.module.css';
import { LinkButton } from '@/components/base/button/link-button/link-button';
import { HomeHeader } from '@/components/common/home-header/home-header';

//TODO: APIから取得、もしくは共通のファイルから取得
export const manufacturers: Manufacturer[] = [
  { id: 1, name: 'オリエント製薬', description: 'オリエント製薬は、東京都港区に本社を置く製薬会社である。' },
  { id: 2, name: 'アレジオン製薬', description: 'アレジオン製薬は、東京都港区に本社を置く製薬会社である。' },
  { id: 3, name: 'ハイハイ製薬', description: 'ハイハイ製薬は、東京都港区に本社を置く製薬会社である。' },
  { id: 4, name: 'テクノ製薬', description: 'テクノ製薬は、東京都港区に本社を置く製薬会社である。' },
];

export const LoginPage = () => {
  const [selectedManufacturerId, setSelectedManufacturerId] = useState<number | null>(manufacturers[0].id);

  const handleSelectManufacturer = (selectedName: string) => {
    const selectedManufacturer = manufacturers.find((manufacturer) => manufacturer.name === selectedName);
    if (selectedManufacturer) {
      setSelectedManufacturerId(selectedManufacturer.id);
    }
  };

  return (
    <>
      <HomeHeader />
      <div className={styles.main}>
        <h5 className={styles.title}>製造会社を選択</h5>
        <div className={styles.card}>
          <SelectBox
            label='製造会社'
            options={manufacturers.map((manufacturer) => manufacturer.name)}
            onSelect={handleSelectManufacturer}
          />
          <div className={styles.spacer}></div>
          <LinkButton href={`/manufacturer/stocks?id=${selectedManufacturerId}`}>次へ進む</LinkButton>
        </div>
      </div>
    </>
  );
};
