//todo: 型定義は、上位のmodelsフォルダを参照

// 在庫情報
export type StockItem = {
  id: string; // 商品ID
  name: string; // 商品名
  category: string; // 商品カテゴリ
  stock: number; // 在庫数
  imageURL: string; // 画像
};

// メーカー情報
export type Manufacturer = {
  id: string; // メーカーID
  name: string; // メーカー名
  stockItem: StockItem[]; // 在庫情報
};
export type ManufacturersOption = {
  id: string;
  name: string;
};
