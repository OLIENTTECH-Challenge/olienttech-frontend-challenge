//todo: basic認証をかける

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectBox from '@/components/base/select-box/select-box';
import { Manufacturer } from '@olienttech/model';

//TODO: APIから取得、もしくは共通のファイルから取得
const manufacturers: Manufacturer[] = [
  { id: 1, name: 'オリエント製薬', description: 'オリエント製薬は、東京都港区に本社を置く製薬会社である。' },
  { id: 2, name: 'アレジオン製薬', description: 'アレジオン製薬は、東京都港区に本社を置く製薬会社である。' },
  { id: 3, name: 'ハイハイ製薬', description: 'ハイハイ製薬は、東京都港区に本社を置く製薬会社である。' },
  { id: 4, name: 'ハイハイ製薬', description: 'ハイハイ製薬は、東京都港区に本社を置く製薬会社である。' },
];

export const LoginPage = () => {
  const [selectedManufacturerId, setSelectedManufacturerId] = useState<number | null>(manufacturers[0].id);
  const navigate = useNavigate();

  const handleSelectManufacturer = (selectedName: string) => {
    const selectedManufacturer = manufacturers.find((manufacturer) => manufacturer.name === selectedName);
    if (selectedManufacturer) {
      setSelectedManufacturerId(selectedManufacturer.id);
    }
  };
  // 選択した製造者IDのページに遷移
  const handleClick = () => {
    navigate(`/manufacturer/stocks/${selectedManufacturerId}`);
  };

  return (
    <main>
      <h1>Login</h1>
      <SelectBox
        label='製造会社を選択'
        options={manufacturers.map((manufacturer) => manufacturer.name)}
        onSelect={handleSelectManufacturer}
      />
      <button onClick={handleClick}>ログイン</button>
    </main>
  );
};
