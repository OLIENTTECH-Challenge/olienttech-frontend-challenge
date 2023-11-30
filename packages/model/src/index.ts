/**
 * 商品情報
 */
export type Product = {
  /** 商品ID */
  id: string;

  /** 商品名 */
  name: string;

  /** 商品説明 */
  description: string;

  /** 商品カテゴリ */
  categories: string[];

  /** 商品画像 */
  image: string;
};

/**
 * 製造会社
 */
export type Manufacturer = {
  /** メーカーID */
  id: string;

  /** メーカー名 */
  name: string;
};

/**
 * 販売会社
 */
export type Shop = {
  /** 店舗ID */
  id: string;

  /** 店舗名 */
  name: string;
};
