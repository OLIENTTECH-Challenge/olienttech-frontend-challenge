export type HandleProduct = {
  id: string;
  name: string;
  description: string;
  categories: { id: string; name: string }[];
  image: string;
  price: number;
  stock: number;
};

export type Manufacturer = {
  id: string;
  name: string;
  description: string;
};

export type Shop = {
  id: string;
  name: string;
  description: string;
};

export type Order = {
  id: string;
  shop: Shop;
  orderAt: string;
  approved: boolean;
  totalPrice: number;
  items: {
    product: {
      id: string;
      name: string;
      description: string;
    };
    price: number;
    stock: number;
    quantity: number;
  }[];
};
