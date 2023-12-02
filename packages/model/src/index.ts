export * from './result';

/**
 * 商品情報
 */
export type Product = {
  /** 商品ID */
  id: number;

  /** 商品名 */
  name: string;

  /** 商品説明 */
  description: string;

  /** 商品カテゴリ */
  categories: ProductCategory[];

  /** 商品画像 */
  image: string;
};

/**
 * 商品カテゴリ
 */
export type ProductCategory = {
  /** 商品カテゴリID */
  id: number;

  /** カテゴリ名 */
  name: string;
};

/**
 * 製造会社
 */
export type Manufacturer = {
  /** メーカーID */
  id: number;

  /** メーカー名 */
  name: string;

  /** メーカーの情報 */
  description: string;
};

/**
 * 製造会社の取り扱い商品
 */
export type ManufacturerHandlingProduct = {
  /** ID */
  id: number;

  /** 在庫数 */
  stock: number;

  /** 商品情報 */
  product: Product;
};

/**
 * 販売会社
 */
export type Shop = {
  /** 店舗ID */
  id: number;

  /** 店舗名 */
  name: string;

  /** 店舗の情報 */
  description: string;
};
