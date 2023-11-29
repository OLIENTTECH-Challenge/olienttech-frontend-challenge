type StockItem = {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  stock: number;
  orderQuantity: number;
  postShipmentStock: number;
};

type Pharmacy = {
  pharmacyId: string;
  pharmacyName: string;
  stockItem: StockItem[];
};

type PharmaciesOption = {
  id: string;
  name: string;
};
